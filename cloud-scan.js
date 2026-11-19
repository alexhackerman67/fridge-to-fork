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
  const groups = new Map();
  views.forEach((view, index) => {
    for (const [name, item] of view || []) {
      const key = scanKey(name);
      if (!groups.has(key)) groups.set(key, { n: name, observations: [], views: new Set() });
      const group = groups.get(key);
      group.observations.push(item);
      group.views.add(index);
      if (index === 0) group.whole = item;
    }
  });
  return [...groups.values()].filter(group => group.whole || group.views.size >= 2).map(({ n, observations, whole }) => {
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
  const { items } = await response.json();
  return observationsFrom(items ?? []);
}
const scanAliases = { "rice vermicelli noodles": "Rice vermicelli", "rice vermicelli": "Rice vermicelli", "bell pepper": "Capsicum", "bell peppers": "Capsicum", "eggs": "Egg", "chicken eggs": "Egg", "scallions": "Spring onion", "spring onions": "Spring onion", "green onions": "Spring onion", "green onion": "Spring onion", "tomatoes": "Tomato", "yogurt": "Yoghurt", "canned tomatoes": "Tinned tomatoes" };
// Keep preparation and ingredient words. Only ignore packaging, word order and common plurals.
function scanKey(value) {
  const words = ingredientKey(value.normalize("NFKC")).replace(/^(?:an? )?(?:packet|pack|bag|box|carton|bottle|jar|tin) of /, "")
    .replace(/ (?:packet|pack|bag|box|carton|bottle|jar)$/, "").match(/[\p{L}\p{N}]+/gu) || [];
  const singular = { tomatoes: "tomato", potatoes: "potato", leaves: "leaf", berries: "berry" };
  return words.map(word => Object.hasOwn(singular, word) ? singular[word] : (/s$/.test(word) && !/(ss|us|is|ous)$/.test(word) ? word.slice(0,-1) : word)).sort().join(" ");
}
function scanName(value) {
  const clean = canonical(value);
  if (!clean) return "";
  const lookup = clean.toLowerCase();
  const key = scanKey(clean);
  if (Object.hasOwn(scanAliases, lookup)) return canonical(scanAliases[lookup]);
  if (["rice vermicelli", "noodle rice vermicelli"].includes(key)) return "Rice vermicelli";
  return [...Object.keys(state.pantry), ...Object.keys(foods)].find(name => scanKey(name) === key) ||
    clean.charAt(0).toUpperCase() + clean.slice(1);
}
function observationsFrom(items) {
  const found = new Map();
  for (const item of items) {
    if (typeof item?.name !== "string") continue;
    const title = item.evidence === "product_title" && typeof item.label === "string" ? item.label.trim() : "";
    const name = (title || item.name).trim().toLowerCase();
    const plain = /^(?:(?:closed |sealed )?egg (?:carton|box)|carton of eggs)$/.test(name) ? "egg" : name.replace(/^(?:red|yellow|green|orange) (?:bell peppers?|capsicums?)$/, "capsicum");
    const ingredient = scanName(plain);
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
