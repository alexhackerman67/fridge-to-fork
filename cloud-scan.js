"use strict";
const scannerSetting = "fridge-to-fork.scanner";
function scannerOrigin(value) {
  try {
    const url = new URL(value);
    if (url.origin === value && url.protocol === "https:" && url.hostname.endsWith(".workers.dev")) return url.origin;
  } catch {}
  return "";
}
function connectedScanner() {
  try { return scannerOrigin(localStorage.getItem(scannerSetting)); }
  catch { return ""; }
}
document.addEventListener("DOMContentLoaded", () => {
  const url = new URL(location.href);
  if (!url.searchParams.has("scanner")) return;
  const origin = scannerOrigin(url.searchParams.get("scanner"));
  url.searchParams.delete("scanner");
  history.replaceState(null, "", url);
  if (!origin) return;
  pop("Connect cloud scanner", "<p>Use " + esc(new URL(origin).hostname) +
    ' for optional cloud scans on this device?</p><div class="actions"><button class="primary" id="connectScanner">Connect scanner</button>' +
    btn("Cancel", "close") + "</div>");
  $("#connectScanner").onclick = () => {
    try { localStorage.setItem(scannerSetting, origin); }
    catch { toast("Browser storage is unavailable."); return; }
    modal.close();
    toast("Scanner connected");
  };
});
function reviewedCounts(views) {
  const names = new Set(views.flatMap(view => view ? [...view.keys()] : []));
  return [...names].map(n => {
    const observations = views.filter(view => view?.has(n)).map(view => view.get(n));
    const whole = views[0]?.get(n);
    const manual = { n, q: "", hint: "Amount unclear. Enter it manually." };
    if (observations.some(item => item.visibility === "closed")) {
      return { ...manual, hint: "Closed container. Check inside and enter the amount." };
    }
    if (!whole || whole.visibility !== "visible" || (foods[n] || "each") !== "each") return manual;
    const visible = observations.filter(item => item.visibility === "visible");
    const low = Math.min(...visible.map(item => item.low));
    const high = Math.max(...visible.map(item => item.high));
    if (low === high) {
      if (views.length > 1 && (visible.length < 2 || visible.length !== observations.length)) return manual;
      return { n, q: low, hint: "Visible count: " + low };
    }
    return { n, q: "", hint: "Estimated count: " + low + "–" + high + ". Enter your total." };
  });
}
async function cloudIngredients(img, origin, signal, onProgress) {
  const w = img.naturalWidth, h = img.naturalHeight;
  const regions = [[0, 0, w, h]];
  if (Math.min(w, h) >= 360) {
    // Keep neighbouring shelves in context at the edges of each close-up.
    for (const start of [0, .30, .60]) {
      regions.push(w > 1.8 * h ? [start * w, 0, .4 * w, h] : [0, start * h, w, .4 * h]);
    }
  }
  const views = Array(regions.length).fill(null);
  let next = 0, finished = 0, failed = 0;
  async function inspect() {
    while (next < regions.length && !signal.aborted) {
      const index = next++;
      try {
        views[index] = await scanCrop(img, regions[index], origin, signal);
      } catch {
        failed++;
      }
      finished++;
      onProgress(reviewedCounts(views), finished, regions.length);
    }
  }
  await Promise.all([inspect(), inspect()]);
  return { suggestions: reviewedCounts(views), failed: failed + regions.length - finished, total: regions.length };
}
async function scanCrop(img, region, origin, signal) {
  const [, , width, height] = region;
  const scale = Math.min(1, 960 / Math.max(width, height));
  const canvas = document.createElement("canvas");
  canvas.width = Math.max(1, Math.round(width * scale));
  canvas.height = Math.max(1, Math.round(height * scale));
  canvas.getContext("2d").drawImage(img, ...region, 0, 0, canvas.width, canvas.height);
  const body = await new Promise(resolve => canvas.toBlob(resolve, "image/jpeg", 0.78));
  if (!body) throw new Error("Photo unavailable");
  const response = await fetch(origin + "/scan", {method: "POST", body, signal, credentials: "omit", referrerPolicy: "no-referrer"});
  if (!response.ok) throw new Error("Cloud scanner unavailable");
  const { ingredients, items } = await response.json();
  const aliases = { "bell pepper": "Capsicum", "bell peppers": "Capsicum", "eggs": "Egg", "chicken eggs": "Egg", "scallions": "Spring onion", "spring onions": "Spring onion", "green onions": "Spring onion", "green onion": "Spring onion", "tomatoes": "Tomato", "yogurt": "Yoghurt", "canned tomatoes": "Tinned tomatoes" };
  const found = new Map();
  for (const item of items ?? ingredients.map(name => ({ name, count: null }))) {
    if (typeof item?.name !== "string") continue;
    const name = item.name.trim().toLowerCase();
    const plain = /^(?:(?:closed |sealed )?egg (?:carton|box)|carton of eggs)$/.test(name) ? "egg" : name.replace(/^(?:red|yellow|green|orange) (?:bell peppers?|capsicums?)$/, "capsicum");
    const ingredient = canonical(Object.hasOwn(aliases, plain) ? aliases[plain] : plain.charAt(0).toUpperCase() + plain.slice(1));
    if (ingredient && !Object.hasOwn(Object.prototype, name)) {
      const previous = found.get(ingredient);
      if (item.visibility === "closed" || plain === "egg" && name !== plain || previous?.visibility === "closed") {
        found.set(ingredient, { visibility: "closed" });
      } else if (!previous && item.visibility === "visible" && Number.isSafeInteger(item.low) &&
                 Number.isSafeInteger(item.high) && item.low > 0 && item.high >= item.low && item.high <= 100000) {
        found.set(ingredient, item);
      } else {
        found.set(ingredient, { visibility: "unknown" });
      }
    }
  }
  return found;
}
