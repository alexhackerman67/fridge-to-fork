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
async function cloudIngredients(img, origin, signal, onProgress) {
  const w = img.naturalWidth, h = img.naturalHeight;
  const regions = [[0, 0, w, h]];
  if (Math.min(w, h) >= 360) {
    // Keep neighbouring shelves in context at the edges of each close-up.
    for (const start of [0, .30, .60]) {
      regions.push(w > 1.8 * h ? [start * w, 0, .4 * w, h] : [0, start * h, w, .4 * h]);
    }
  }
  const names = new Set();
  let next = 0, finished = 0, failed = 0;
  async function inspect() {
    while (next < regions.length && !signal.aborted) {
      const region = regions[next++];
      try {
        const items = await scanCrop(img, region, origin, signal);
        for (const name of items) names.add(name);
      } catch {
        failed++;
      }
      finished++;
      onProgress([...names], finished, regions.length);
    }
  }
  await Promise.all([inspect(), inspect()]);
  return { names: [...names], failed: failed + regions.length - finished, total: regions.length };
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
  const { ingredients } = await response.json();
  const aliases = { "bell pepper": "Capsicum", "bell peppers": "Capsicum", "eggs": "Egg", "chicken eggs": "Egg", "scallions": "Spring onion", "spring onions": "Spring onion", "green onions": "Spring onion", "green onion": "Spring onion", "tomatoes": "Tomato", "yogurt": "Yoghurt", "canned tomatoes": "Tinned tomatoes" };
  const found = new Set();
  for (const item of ingredients) {
    if (typeof item !== "string") continue;
    const name = item.trim().toLowerCase();
    const plain = name.replace(/^(?:red|yellow|green|orange) (?:bell peppers?|capsicums?)$/, "capsicum");
    const ingredient = canonical(Object.hasOwn(aliases, plain) ? aliases[plain] : plain.charAt(0).toUpperCase() + plain.slice(1));
    if (ingredient && !Object.hasOwn(Object.prototype, name)) found.add(ingredient);
  }
  return [...found];
}
