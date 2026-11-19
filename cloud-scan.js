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
async function cloudIngredients(img, origin, signal) {
  const w = img.naturalWidth, h = img.naturalHeight;
  const full = await scanCrop(img, [0, 0, w, h], origin, signal);
  if (full.length >= 6 || Math.max(w, h) < 600) return full;
  const crops = w >= h
    ? [[0, 0, w * .56, h], [w * .44, 0, w * .56, h]]
    : [[0, 0, w, h * .56], [0, h * .44, w, h * .56]];
  const parts = await Promise.allSettled(crops.map(region => scanCrop(img, region, origin, signal)));
  return [...new Set(full.concat(...parts.filter(p => p.status === "fulfilled").map(p => p.value)))];
}
async function scanCrop(img, region, origin, signal) {
  const [, , width, height] = region;
  const scale = Math.min(1, 1440 / Math.max(width, height));
  const canvas = document.createElement("canvas");
  canvas.width = Math.max(1, Math.round(width * scale));
  canvas.height = Math.max(1, Math.round(height * scale));
  canvas.getContext("2d").drawImage(img, ...region, 0, 0, canvas.width, canvas.height);
  const body = await new Promise(resolve => canvas.toBlob(resolve, "image/jpeg", 0.78));
  if (!body) throw new Error("Photo unavailable");
  const response = await fetch(origin + "/scan", {method: "POST", body, signal, credentials: "omit", referrerPolicy: "no-referrer"});
  if (!response.ok) throw new Error("Cloud scanner unavailable");
  const { ingredients } = await response.json();
  const aliases = { "bell pepper": "Capsicum", "bell peppers": "Capsicum", "eggs": "Egg", "tomatoes": "Tomato", "yogurt": "Yoghurt", "canned tomatoes": "Tinned tomatoes" };
  const found = new Set();
  for (const item of ingredients) {
    if (typeof item !== "string") continue;
    const name = item.trim().toLowerCase();
    if (!/^[a-z][a-z '-]{0,59}$/.test(name) || name in Object.prototype || name === "prototype") continue;
    found.add(canonical(aliases[name] || name[0].toUpperCase() + name.slice(1)));
  }
  return [...found];
}
