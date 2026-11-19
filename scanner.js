"use strict";
// Load the classifier only when someone chooses a real photo.
const libraries = new Map();
function loadScript(url) {
  if (!libraries.has(url))
    libraries.set(
      url,
      new Promise((resolve, reject) => {
        const s = document.createElement("script");
        s.src = url;
        const timeout = setTimeout(() => fail(), 20000);
        function fail() {
          clearTimeout(timeout);
          s.remove();
          libraries.delete(url);
          reject(new Error("Download unavailable"));
        }
        s.onload = () => {
          clearTimeout(timeout);
          resolve();
        };
        s.onerror = fail;
        document.head.append(s);
      }),
    );
  return libraries.get(url);
}
let cloudRequest;
let modelPromise,
  scanToken = 0,
  imageUrl = "",
  suggestions = [];
const names = [
  [/bell pepper/i, "Capsicum"],
  [/broccoli/i, "Broccoli"],
  [/banana/i, "Banana"],
  [/cucumber/i, "Cucumber"],
  [/orange/i, "Orange"],
  [/granny smith/i, "Apple"],
  [/lemon/i, "Lemon"],
  [/cauliflower/i, "Cauliflower"],
  [/zucchini|courgette/i, "Zucchini"],
  [/^mushroom$/i, "Mushroom"],
  [/^head cabbage/i, "Cabbage"],
  [/^butternut squash/i, "Butternut pumpkin"],
  [/^strawberry/i, "Strawberry"],
  [/^pineapple/i, "Pineapple"],
  [/^artichoke/i, "Artichoke"],
  [/^pomegranate/i, "Pomegranate"],
  [/^fig$/i, "Fig"],
  [/^ear, spike|^corn$/i, "Corn"],
  [/^French loaf|^baguette/i, "Bread"],
];
// Square, overlapping crops preserve shape and cover narrow shelf rows in either orientation.
function scanRegions(width, height) {
  const regions = [[0, 0, width, height]];
  for (const fraction of [0.64, 0.36]) {
    const side = Math.min(width, height) * fraction;
    const columns = Math.min(7, 1 + Math.ceil((width - side) / (side * 0.85)));
    const rows = Math.min(7, 1 + Math.ceil((height - side) / (side * 0.85)));
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < columns; x++) {
        regions.push([x * (width - side) / (columns - 1), y * (height - side) / (rows - 1), side, side]);
      }
    }
  }
  return regions;
}
async function recognise(img, token) {
  await loadScript("assets/scanner/tf.js");
  await loadScript("assets/scanner/mobilenet.js");
  modelPromise ||= mobilenet
    .load({
      version: 2,
      alpha: 1,
      modelUrl: "assets/scanner/model.json",
      inputRange: [0, 1],
    })
    .catch((e) => {
      modelPromise = null;
      throw e;
    });
  const model = await modelPromise;
  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = 224;
  const ctx = canvas.getContext("2d"),
    found = new Set();
  const votes = new Map();
  const regions = scanRegions(img.naturalWidth, img.naturalHeight);
  for (const [index, region] of regions.entries()) {
    if (token !== scanToken) return [];
    ctx.drawImage(img, ...region, 0, 0, 224, 224);
    for (const prediction of await model.classify(canvas, 5)) {
      if (prediction.probability < 0.18) continue;
      const match = names.find(([pattern]) => pattern.test(prediction.className));
      if (!match) continue;
      const name = match[1];
      const count = (votes.get(name) || 0) + 1;
      votes.set(name, count);
      // Require repeated sightings for weaker matches across overlapping crops.
      if (prediction.probability >= 0.65 || (count >= 2 && name !== "Bread")) found.add(name);
    }
    if (token !== scanToken) return [];
    suggestions = [...found].map(n => ({ n, q: state.pantry[n] ?? "" }));
    inside.querySelector('[role="status"]').textContent =
      "Checking shelf regions " + (index + 1) + " of " + regions.length + " · " + found.size + " ingredients found";
    await tf.nextFrame();
  }
  return [...found];
}
function resetScan() {
  cloudRequest?.abort();
  scanToken++;
  if (imageUrl.startsWith("blob:")) URL.revokeObjectURL(imageUrl);
  imageUrl = "";
  suggestions = [];
}
modal.addEventListener("close", resetScan);
function scan() {
  resetScan();
  pop(
    "Scan pantry",
    '<div class="scanbox">' +
      icon("scan") +
      '<h3 style="font-size:26px;margin:8px">Fridge or pantry photo</h3><p class="hint">Include the front of packets and tins so their labels are visible.</p>' +
      '<p>Cloud AI can identify foods by appearance or label. Choosing a cloud scan sends the photo to Cloudflare.</p><div class="actions" style="justify-content:center">' +
      btn("Take cloud photo", "cloudCamera", "primary") +
      btn("Upload to cloud AI", "cloudUpload", "primary") +
      '</div><details><summary>Scan on this device only</summary><div class="actions">' +
      btn("Take photo", "camera") + btn("Upload photo", "upload") +
      '</div></details></div><div class="actions">' +
      btn("Try sample scan", "sample", "quiet") +
      btn("Enter manually", "add", "quiet") +
      "</div>",
  );
}
function pickPhoto(camera, cloud = false) {
  const origin = cloud ? connectedScanner() || "https://fridge-to-fork.axiang28.workers.dev" : "";
  const file = document.createElement("input");
  file.type = "file";
  file.accept = "image/*";
  if (camera) file.setAttribute("capture", "environment");
  file.onchange = async () => {
    const chosen = file.files[0];
    if (!chosen) return;
    startRecognition(URL.createObjectURL(chosen), origin);
  };
  file.click();
}
async function startRecognition(url, origin = "") {
  if (url === imageUrl) imageUrl = ""; // Reuse the selected photo when retrying.
  resetScan();
  const token = scanToken;
  imageUrl = url;
  pop(
    "Scanning photo",
    '<div class="scanbox"><img alt="Your pantry photo" src="' +
      imageUrl +
      '"><p role="status">Looking for produce…</p></div><div class="actions">' +
      btn("Review manually", "manualReview") +
      "</div>",
  );
  let timeout;
  try {
    const img = new Image();
    img.src = imageUrl;
    await img.decode();
    if (token !== scanToken) return;
    if (origin) {
      inside.querySelector('[role="status"]').textContent = "Checking ingredients with Cloudflare…";
      const controller = new AbortController();
      cloudRequest = controller;
      const deadline = setTimeout(() => controller.abort(), 95000);
      try {
        const result = await cloudIngredients(img, origin, controller.signal, (names, done, total) => {
          if (token !== scanToken) return;
          suggestions = names.map(n => ({ n, q: state.pantry[n] ?? "" }));
          inside.querySelector('[role="status"]').textContent =
            "Checked " + done + " of " + total + " views · " + names.length + " ingredients found";
        });
        if (token !== scanToken) return;
        const summary = result.failed === result.total ? "Cloud AI could not check this photo." :
          "Cloud AI found " + result.names.length + " ingredients across " +
          (result.total - result.failed) + " of " + result.total + " views.";
        review(summary);
        if (result.failed || !result.names.length) {
          const actions = $("#reviewForm .actions");
          actions.insertAdjacentHTML("beforebegin", '<div class="actions"><button type="button" id="retryPhoto">Retry cloud scan</button><button type="button" id="localPhoto">Try on-device scan</button></div>');
          $("#retryPhoto").onclick = () => startRecognition(url, origin);
          $("#localPhoto").onclick = () => startRecognition(url);
        }
        if (result.names.length) $("#reviewForm [data-do=labels]").click();
        return;
      } finally {
        clearTimeout(deadline);
      }
    }
    const result = await Promise.race([
      recognise(img, token),
      new Promise(
        (_, reject) =>
          (timeout = setTimeout(() => reject(new Error("timeout")), 55000)),
      ),
    ]);
    if (token !== scanToken) return;
    suggestions = result.map((n) => ({ n, q: state.pantry[n] ?? "" }));
    review(
      "On-device scan. " + (result.length
        ? "Check each ingredient and its current total."
        : "No confident matches. Add the ingredients you can see."),
    );
    if (url.startsWith("blob:")) $("#reviewForm [data-do=labels]").click();
  } catch {
    if (token === scanToken) {
      scanToken++;
      review("Scan stopped. Review any matches or add what you can see.");
    }
  } finally {
    clearTimeout(timeout);
  }
}
function review(message) {
  const options = [...new Set([...Object.keys(foods), ...Object.keys(state.pantry), ...suggestions.map(s => s.n)])]
    .sort()
    .map((n) => "<option>" + esc(n) + "</option>")
    .join("");
  function row(s) {
    return (
      '<div class="line scanrow"><input class="ingredient-name" aria-label="Ingredient" placeholder="Ingredient" required maxlength="100" list="scanNames" value="' + esc(s.n) +
      '"><input type="number" aria-label="Current total quantity" placeholder="Amount" required min=".01" max="100000" step=".01" value="' +
      s.q +
      '"><small></small>' +
      ib("Remove suggestion", "drop", "close") +
      "</div>"
    );
  }
  pop(
    "Review pantry",
    '<img class="modalphoto" alt="Pantry to review" src="' +
      imageUrl +
      '"><p class="hint">' +
      message +
      ' Saving sets the current totals.</p><form id="reviewForm"><datalist id="scanNames">' + options + '</datalist><div id="rows"></div><div class="actions">' +
      btn("Add item", "addrow") +
      btn("Read packet labels", "labels") +
      '<span role="status" id="labelStatus"></span>' +
      '<button class="primary" id="confirmScan">Save to pantry</button></div></form>',
  );
  function append(s) {
    $("#rows").insertAdjacentHTML("beforeend", row(s));
    const el = $("#rows").lastElementChild;
    const nameInput = el.querySelector(".ingredient-name");
    function unit() {
      el.querySelector("small").textContent =
        foods[canonical(nameInput.value)] || "each";
    }
    nameInput.oninput = unit;
    unit();
    $("#confirmScan").disabled = false;
  }
  suggestions.forEach(append);
  $("#confirmScan").disabled = !suggestions.length;
  $("#reviewForm").onclick = (e) => {
    const b = e.target.closest("[data-do]");
    if (!b) return;
    if (b.dataset.do === "labels") readPacketLabels(b, append);
    if (b.dataset.do === "addrow") append({ n: "", q: 1 });
    if (b.dataset.do === "drop") {
      b.closest(".line").remove();
      $("#confirmScan").disabled = !$("#rows").children.length;
    }
  };
  $("#reviewForm").onsubmit = (e) => {
    e.preventDefault();
    let items = {};
    for (const el of $("#rows").children) {
      const n = canonical(el.querySelector(".ingredient-name").value);
      if (!n) { toast("Enter an ingredient name."); return; }
      if (n in items) {
        toast("Combine duplicate ingredients into one total.");
        return;
      }
      items[n] = +el.querySelector('input[type="number"]').value;
    }
    Object.assign(state.pantry, items);
    save();
    modal.close();
    location.hash = "pantry";
    render();
    toast("Pantry updated");
  };
}
function demoScan() {
  startRecognition("assets/sample.jpg");
}

const packetAliases = {
  "Tinned tomatoes": ["chopped tomatoes", "diced tomatoes", "crushed tomatoes"],
  "White beans": ["cannellini", "butter beans"],
  Oats: ["oatmeal"], Flour: ["plain flour", "self raising flour"],
  Pasta: ["penne", "fusilli", "rigatoni", "macaroni"],
  Cereal: ["corn flakes", "weet bix", "rice bubbles"],
  Rice: ["basmati", "jasmine rice", "arborio"],
  Noodles: ["ramen", "vermicelli"],
  Chickpeas: ["garbanzo beans"], Capsicum: ["bell peppers"],
};
function ingredientsOnLabels(text) {
  const words = " " + text.toLowerCase().replace(/[^a-z0-9]+/g, " ") + " ";
  // Match longer product names first so "peanut butter" does not also add butter.
  const terms = Object.keys(foods).flatMap(name =>
    [name, ...(packetAliases[name] || [])].map(alias => [alias.toLowerCase(), name])
  ).sort((a, b) => b[0].length - a[0].length);
  let remaining = words;
  const found = new Set();
  for (const [alias, name] of terms) {
    const label = " " + alias + " ";
    if (remaining.includes(label)) {
      found.add(name);
      remaining = remaining.replaceAll(label, " ");
    }
  }
  return [...found];
}
async function readPacketLabels(button, append) {
  const token = scanToken;
  const status = $("#labelStatus");
  button.disabled = true;
  status.textContent = "Loading the on-device label reader…";
  let worker, stopped = false, timeout;
  async function read() {
    await loadScript("https://cdn.jsdelivr.net/npm/tesseract.js@5.1.1/dist/tesseract.min.js");
    if (stopped || token !== scanToken) return;
    worker = await Tesseract.createWorker("eng", 1, {
      workerPath: "https://cdn.jsdelivr.net/npm/tesseract.js@5.1.1/dist/worker.min.js",
      corePath: "https://cdn.jsdelivr.net/npm/tesseract.js-core@5.1.1",
    });
    if (stopped || token !== scanToken) { await worker.terminate(); worker = null; return; }
    status.textContent = "Reading packet labels…";
    await worker.setParameters({ tessedit_pageseg_mode: "11" });
    const { data } = await worker.recognize(imageUrl);
    if (stopped || token !== scanToken) return;
    const existing = new Set([...$("#rows").querySelectorAll(".ingredient-name")].map(el => canonical(el.value)));
    const added = ingredientsOnLabels(data.text).filter(n => !existing.has(n));
    added.forEach(n => append({ n, q: state.pantry[n] ?? "" }));
    status.textContent = added.length ? "Added " + added.length + " suggestions from labels." : "No additional labels matched.";
  }
  try {
    await Promise.race([read(), new Promise((_, reject) => {
      timeout = setTimeout(() => reject(new Error("timeout")), 60000);
    })]);
  } catch {
    if (token === scanToken) status.textContent = "Label reader unavailable. You can still add items.";
  } finally {
    stopped = true;
    clearTimeout(timeout);
    if (worker) await worker.terminate();
    button.disabled = false;
  }
}
