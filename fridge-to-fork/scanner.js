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
  [/mushroom/i, "Mushroom"],
];
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
  for (const [x, y, w, h] of [
    [0, 0, 1, 1],
    [0, 0, 0.55, 0.6],
    [0.45, 0, 0.55, 0.6],
    [0, 0.4, 0.55, 0.6],
    [0.45, 0.4, 0.55, 0.6],
    [0.25, 0.2, 0.5, 0.6],
  ]) {
    if (token !== scanToken) return [];
    ctx.drawImage(
      img,
      x * img.naturalWidth,
      y * img.naturalHeight,
      w * img.naturalWidth,
      h * img.naturalHeight,
      0,
      0,
      224,
      224,
    );
    const predictions = await model.classify(canvas, 3);
    const best = predictions.find(
      (p) =>
        p.probability >= 0.18 && names.some(([re]) => re.test(p.className)),
    );
    if (best) found.add(names.find(([re]) => re.test(best.className))[1]);
  }
  return [...found];
}
function resetScan() {
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
      '<h3 style="font-size:26px;margin:8px">Fridge or pantry photo</h3><p class="hint">Works best with clearly visible fresh produce.</p><div class="actions" style="justify-content:center">' +
      btn("Take photo", "camera", "primary") +
      btn("Upload photo", "upload") +
      '</div></div><div class="actions">' +
      btn("Try sample scan", "sample", "quiet") +
      btn("Enter manually", "add", "quiet") +
      "</div>",
  );
}
function pickPhoto(camera) {
  const file = document.createElement("input");
  file.type = "file";
  file.accept = "image/*";
  if (camera) file.setAttribute("capture", "environment");
  file.onchange = async () => {
    const chosen = file.files[0];
    if (!chosen) return;
    startRecognition(URL.createObjectURL(chosen));
  };
  file.click();
}
async function startRecognition(url) {
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
      result.length
        ? "Check each ingredient and its current total."
        : "No confident matches. Add the ingredients you can see.",
    );
  } catch {
    if (token === scanToken)
      review("Automatic scan unavailable. Add the ingredients you can see.");
  } finally {
    clearTimeout(timeout);
  }
}
function review(message) {
  const options = Object.keys(foods)
    .sort()
    .map((n) => "<option>" + esc(n) + "</option>")
    .join("");
  function row(s) {
    return (
      '<div class="line scanrow"><select aria-label="Ingredient">' +
      options +
      '</select><input type="number" aria-label="Current total quantity" placeholder="Amount" required min=".01" max="100000" step=".01" value="' +
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
      ' Saving sets the current totals.</p><form id="reviewForm"><div id="rows"></div><div class="actions">' +
      btn("Add item", "addrow") +
      '<button class="primary" id="confirmScan">Save to pantry</button></div></form>',
  );
  function append(s) {
    $("#rows").insertAdjacentHTML("beforeend", row(s));
    const el = $("#rows").lastElementChild;
    el.querySelector("select").value = s.n;
    function unit() {
      el.querySelector("small").textContent =
        foods[el.querySelector("select").value];
    }
    el.querySelector("select").onchange = unit;
    unit();
    $("#confirmScan").disabled = false;
  }
  suggestions.forEach(append);
  $("#confirmScan").disabled = !suggestions.length;
  $("#reviewForm").onclick = (e) => {
    const b = e.target.closest("[data-do]");
    if (!b) return;
    if (b.dataset.do === "addrow") append({ n: "Egg", q: 1 });
    if (b.dataset.do === "drop") {
      b.closest(".line").remove();
      $("#confirmScan").disabled = !$("#rows").children.length;
    }
  };
  $("#reviewForm").onsubmit = (e) => {
    e.preventDefault();
    let items = {};
    for (const el of $("#rows").children) {
      const n = el.querySelector("select").value;
      if (n in items) {
        toast("Combine duplicate ingredients into one total.");
        return;
      }
      items[n] = +el.querySelector("input").value;
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
