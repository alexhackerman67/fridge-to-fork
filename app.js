"use strict";
const $ = (s) => document.querySelector(s);
const main = $("#main"),
  modal = $("#modal"),
  inside = $("#inside");
const paths = {
  scan: "M7 3H3v4m14-4h4v4M3 17v4h4m14-4v4h-4M5 12h14",
  clock: "M12 7v5l3 2 M21 12a9 9 0 1 1-18 0 9 9 0 1 1 18 0",
  arrow: "M4 12h15m-6-6 6 6-6 6",
  search: "M16 16l5 5 M18 10a8 8 0 1 1-16 0 8 8 0 1 1 16 0",
  close: "M6 6l12 12M18 6 6 18",
  plus: "M12 5v14M5 12h14",
  edit: "m4 16 12-12 4 4L8 20l-5 1z",
  back: "m15 5-7 7 7 7",
  next: "m9 5 7 7-7 7",
  check: "m4 12 5 5L20 6",
};
const icon = (n) =>
  '<svg aria-hidden="true" class="ico" viewBox="0 0 24 24"><path d="' +
  paths[n] +
  '"/></svg>';
const esc = (s) =>
  String(s).replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ],
  );
const btn = (label, action, cls = "light") =>
  '<button type="button" class="' +
  cls +
  '" data-do="' +
  esc(action) +
  '">' +
  label +
  "</button>";
const ib = (label, action, symbol) =>
  '<button type="button" class="circle" aria-label="' +
  esc(label) +
  '" data-do="' +
  esc(action) +
  '">' +
  icon(symbol) +
  "</button>";
const key = "fridge-to-fork.v1";
let state = { pantry: { ...starter }, plan: {}, checked: {} },
  weekShift = 0;
try {
  const old = JSON.parse(localStorage.getItem(key));
  if (old && old.pantry && old.plan && old.checked) state = old;
} catch {}
// Older pantries mix sample quantities with the user's entries.
state.confirmedFoods ??= Object.keys(state.pantry).filter(n => state.pantry[n] !== starter[n]);
state.pantryUnits ??= {};
// Pantry quantities are current totals. Prefer a confirmed canonical entry over an old alias.
for (const old of Object.keys(state.pantry)) {
  const name = pantryProduct(old);
  if (!name || old === name) continue;
  if (!Object.hasOwn(state.pantry, name) || !state.confirmedFoods.includes(name)) state.pantry[name] = state.pantry[old];
  if (state.confirmedFoods.includes(old)) state.confirmedFoods.push(name);
  delete state.pantry[old];
}
state.confirmedFoods = [...new Set(state.confirmedFoods.filter(n => Object.hasOwn(state.pantry, n)))];
function setPantryAmounts(items) {
  Object.assign(state.pantry, items);
  state.confirmedFoods = [...new Set([...state.confirmedFoods, ...Object.keys(items)])];
}
function save() {
  try {
    localStorage.setItem(key, JSON.stringify(state));
  } catch {
    toast("Storage unavailable. Changes last for this visit.");
  }
}
let timer;
function toast(msg) {
  $("#notice").textContent = msg;
  clearTimeout(timer);
  timer = setTimeout(() => ($("#notice").textContent = ""), 2600);
}
function pantryUnit(name, suggested = "each") {
  return foods[name] || state.pantryUnits[name] || suggested;
}
function displayUnit(unit) {
  return unit === "ml" ? "mL" : unit;
}
const amount = (n, q) => q == null ? "" : Number(q.toFixed(2)) + " " + displayUnit(pantryUnit(n));
function servings() {
  const count = state.preferences?.servings;
  return Number.isSafeInteger(count) && count > 0 ? count : 2;
}
function servingLabel() {
  return servings() + (servings() === 1 ? " serving" : " servings");
}
// The cookbook stores ingredient quantities and measured method liquids for two.
function portion(quantity) {
  return quantity * servings() / 2;
}
function ingredientsFor(dish) {
  return Object.entries(dish.needs).map(([name, quantity]) => [name, portion(quantity)]);
}
function methodFor(dish) {
  return dish.steps.map(step => step.replace(/(\d+) ml water/g,
    (_, ml) => portion(Number(ml)) + " ml water"));
}
const missing = (d, pantry = state.pantry) =>
  ingredientsFor(d).filter(([n, q]) => (pantry[n] || 0) + 1e-9 < q);
const stock = (d) =>
  missing(d).length ? missing(d).length + " to buy" : "Ready to cook";
const meta = (d) =>
  '<div class="meta">' + icon("clock") + d.time + " min" + (d.gear ? " · " + d.gear : "") + " · " + forkRating(d) + "</div>";
function pop(title, body) {
  inside.innerHTML =
    '<div class="modalhead"><h2>' +
    esc(title) +
    "</h2>" +
    ib("Close", "close", "close") +
    "</div>" +
    body;
  if (!modal.open) modal.showModal();
  modal.scrollTop = 0;
}
modal.addEventListener("click", (e) => {
  if (e.target === modal) modal.close();
});
function route() {
  const tab = location.hash.slice(1);
  return ["pantry", "planner"].includes(tab) ? tab : "recipes";
}
function render() {
  document.querySelectorAll("nav a").forEach((a) => {
    let active = a.hash === "#" + route();
    a.classList.toggle("active", active);
    if (active) a.setAttribute("aria-current", "page");
    else a.removeAttribute("aria-current");
  });
  if (route() === "recipes") recipes();
  else if (route() === "pantry") pantry();
  else planner();
}
window.addEventListener("hashchange", () => {
  modal.close();
  render();
  window.scrollTo(0, 0);
});
$("#scan").innerHTML = icon("scan") + "Scan pantry";
function detail(i, plannedDay = "", inventory = state.pantry) {
  const d = dishes[i];
  pop(
    d.name,
    meta(d) + (fitsPreferences(d, state.preferences || {}) ? "" : '<p class="hint">This planned recipe falls outside your current dietary preferences.</p>') +
      "<p>" +
      d.note +
      '</p><h4>Ingredients · ' + servingLabel() + '</h4><div class="ingredients">' +
      ingredientsFor(d)
        .map(
          ([n, q]) =>
            '<div class="line"><span>' +
            n +
            "</span><span>" +
            amount(n, q) +
            ((inventory[n] || 0) < q
              ? '<br><small class="missing">Need ' +
                amount(n, q - (inventory[n] || 0)) +
                "</small>"
              : "") +
            "</span></div>",
        )
        .join("") +
      '</div>' + (inventory !== state.pantry && pantryMatch(d, inventory).swaps.length ?
        '<h4>Possible pantry swaps</h4><ul>' + swapList(pantryMatch(d, inventory).swaps) + '</ul>' : '') + swapForm(d) + (d.swaps ? '<p class="hint">' + esc(d.swaps) + '</p>' : '') + '<h4>Method</h4><ol>' +
      methodFor(d).map((s) => "<li>" + s + "</li>").join("") +
      '</ol><div class="actions">' +
      btn("Add to planner", "schedule:" + i, "primary") +
      (!missing(d, inventory).length
        ? btn("Cook now", "cook:" + i + (plannedDay ? "," + plannedDay : ""))
        : "") +
      "</div>",
  );
}
function confirmedPantry() {
  return Object.fromEntries(state.confirmedFoods.map(n => [n, state.pantry[n]]));
}
// Use like-for-like units and keep culinary alternatives separate from exact matches.
const pantrySwaps = {
  "Noodles": ["Rice noodles", "Soba noodles"], "Soy sauce": ["Light soy sauce"],
  "Lime": ["Lemon"], "Lemon": ["Lime"], "Spaghetti": ["Pasta"], "Pasta": ["Spaghetti"]
};
function pantryMatch(d, inventory) {
  const available = { ...inventory }, gaps = [], swaps = [];
  let overlap = false;
  // Allocate exact ingredients first so a substitute cannot be spent twice.
  for (const [name, needed] of ingredientsFor(d)) {
    const used = Math.min(available[name] || 0, needed);
    available[name] = (available[name] || 0) - used;
    if (used > 0) overlap = true;
    if (needed > used) gaps.push({ name, needed, short: needed - used });
  }
  for (const gap of gaps) {
    for (const alt of pantrySwaps[gap.name] || []) {
      if (!available[alt] || pantryUnit(alt) !== pantryUnit(gap.name) ||
          !fitsPreferences({ needs: { [alt]: 1 } }, state.preferences || {})) continue;
      const used = Math.min(available[alt], gap.short);
      swaps.push({ name: gap.name, alt, used });
      available[alt] -= used;
      gap.short -= used;
      overlap = true;
      if (!gap.short) break;
    }
  }
  return { overlap, swaps, gaps: gaps.filter(gap => gap.short > 0) };
}
function swapList(swaps) {
  return swaps.map(({ name, alt, used }) => '<li>Use ' + esc(amount(alt, used)) + ' ' + esc(alt.toLowerCase()) +
    ' in place of ' + esc(name.toLowerCase()) + '.</li>').join("");
}
function readyRecipesMenu() {
  const inventory = confirmedPantry();
  const matches = featuredRecipes().map(({ d, i }) => ({ d, i, ...pantryMatch(d, inventory) }));
  const ready = matches.filter(m => !m.gaps.length && !m.swaps.length);
  const close = matches.filter(m => m.overlap && (m.gaps.length || m.swaps.length));
  const distance = m => m.gaps.reduce((sum, g) => sum + g.short / g.needed, 0);
  close.sort((a,b) => a.gaps.length - b.gaps.length || distance(a) - distance(b) || a.swaps.length - b.swaps.length);
  const link = m => btn(esc(m.d.name), "pantryRecipe:" + m.i, "light");
  let body = ready.length ? '<p>Enough for ' + servingLabel() + '.</p>' + ready.map(link).join("") : "";
  if (close.length) body += '<h4>Closest recipes for ' + servingLabel() + '</h4>' + close.slice(0,3).map(m =>
    link(m) + '<ul>' + swapList(m.swaps) + m.gaps.map(g => '<li>Still needed: ' + esc(g.name) + ' · ' +
      esc(amount(g.name, g.short)) + '</li>').join("") + '</ul>').join("");
  return '<details class="pantry-ready"><summary>Recipes you can make (' + ready.length + ')</summary>' +
    (body || '<p>No matching recipe yet. Scan or enter more ingredients and their quantities.</p>') + '</details>';
}
function pantry() {
  main.innerHTML =
    '<div class="pagehead"><div><h1>My pantry</h1></div>' +
    btn(icon("plus") + " Add ingredient", "add", "primary") +
    '</div>' + readyRecipesMenu() + '<div class="list">' +
    (Object.keys(state.pantry)
      .sort()
      .map(
        (n) =>
          '<div class="panrow"><strong>' +
          esc(n) +
          '</strong><div class="actions" style="margin:0;align-items:center"><span class="quantity">' +
          esc(amount(n, state.pantry[n])) +
          "</span>" +
          ib("Edit " + n, "edit:" + n, "edit") +
          "</div></div>",
      )
      .join("") || '<p class="empty">Your pantry is empty.</p>') +
    "</div>";
}
function foodForm(n = "") {
  pop(
    n ? "Edit ingredient" : "Add ingredient",
    '<form id="foodForm"><label class="field">Ingredient<input required maxlength="100" list="foodNames" id="food" ' +
      (n ? "readonly" : "") +
      ' value="' +
      esc(n) +
      '"></label><datalist id="foodNames">' +
      Object.keys(foods)
        .map((k) => '<option value="' + k + '">')
        .join("") +
      '</datalist><label class="field">Quantity <span id="unit"></span><input required type="number" min="0.01" max="100000" step="0.01" id="qty" value="' +
      (n ? state.pantry[n] ?? "" : 1) +
      '"></label><div class="actions"><button class="primary">Save ingredient</button>' +
      (n ? btn("Remove", "delete:" + n) : "") +
      "</div></form>",
  );
  const update = () =>
    ($("#unit").textContent =
      "Unit: " + displayUnit(pantryUnit(canonical($("#food").value))));
  $("#food").oninput = update;
  update();
  $("#foodForm").onsubmit = (e) => {
    e.preventDefault();
    const name = canonical($("#food").value);
    if (
      !name ||
      ["__proto__", "constructor", "prototype"].includes(name.toLowerCase())
    )
      return;
    setPantryAmounts({ [name]: Number($("#qty").value) });
    save();
    modal.close();
    render();
  };
}
function ingredientKey(s) {
  return s.toLowerCase().replace(/[’‘]/g, "'").replace(/[‐‑–]/g, "-");
}
function pantryProduct(s) {
  const words = ingredientKey(s).replace(/[^\p{L}\p{N}]+/gu, " ").trim();
  if (/\brice\b/.test(words) && /\b(?:vermicelli|noodles?)\b/.test(words) &&
      !/\b(?:soup|kit|meal|cooked|instant|sauce)\b/.test(words)) return "Rice noodles";
  if (/\b(?:kecap|ketjap) manis\b/.test(words)) return "Sweet soy sauce";
  if (/\bsoy(?:a)? sauce$/.test(words)) {
    for (const type of ["sweet", "dark", "light"]) {
      if (words.split(" ").includes(type)) return type[0].toUpperCase() + type.slice(1) + " soy sauce";
    }
    if (words === "soy sauce" || words === "soya sauce" || words === "all purpose soy sauce") return "Soy sauce";
  }
  return "";
}
function canonical(s) {
  s = s.normalize("NFC").trim().replace(/\s+/g, " ");
  if (!s || s.length > 100 || /[<>\p{Cc}]/u.test(s) || !/\p{L}/u.test(s) ||
      s.toLowerCase() === "prototype" || Object.hasOwn(Object.prototype, s)) return "";
  return (
    pantryProduct(s) || [...Object.keys(foods), ...Object.keys(state.pantry)].find(
      (k) => ingredientKey(k) === ingredientKey(s),
    ) || s
  );
}
const dateKey = (d) =>
  [
    d.getFullYear(),
    String(d.getMonth() + 1).padStart(2, "0"),
    String(d.getDate()).padStart(2, "0"),
  ].join("-");
function week() {
  let first = new Date();
  first.setHours(12, 0, 0, 0);
  first.setDate(first.getDate() - ((first.getDay() + 6) % 7) + weekShift * 7);
  return Array.from({ length: 7 }, (_, i) => {
    let d = new Date(first);
    d.setDate(d.getDate() + i);
    return d;
  });
}
const short = (d) =>
  d.toLocaleDateString("en-AU", { day: "numeric", month: "short" });
function groceries(days) {
  const sums = {};
  for (const d of days) {
    const meal = dishes[state.plan[dateKey(d)]];
    if (meal)
      for (const [n, q] of ingredientsFor(meal))
        sums[n] = (sums[n] || 0) + q;
  }
  return Object.entries(sums)
    .map(([n, q]) => [n, q - (state.pantry[n] || 0)])
    .filter(([, q]) => q > 0);
}
function planner() {
  let days = week(),
    shop = groceries(days);
  main.innerHTML =
    '<div class="pagehead"><div><h1>Meal planner</h1></div></div><div class="week">' +
    ib("Previous week", "prev", "back") +
    "<strong>" +
    short(days[0]) +
    " – " +
    short(days[6]) +
    " " +
    days[6].getFullYear() +
    "</strong>" +
    ib("Next week", "next", "next") +
    '</div><div class="pagegrid"><div class="list">' +
    days
      .map((d) => {
        const k = dateKey(d),
          id = state.plan[k];
        return (
          '<div class="day"><span><strong>' +
          d.toLocaleDateString("en-AU", { weekday: "short" }) +
          "</strong><small>" +
          short(d) +
          "</small></span>" +
          (dishes[id]
            ? btn(dishes[id].name, "planned:" + k, "quiet mealname") +
              ib("Remove meal", "unplan:" + k, "close")
            : ib("Choose meal for " + short(d), "choose:" + k, "plus")) +
          "</div>"
        );
      })
      .join("") +
    '</div><aside class="aside"><h2>Shopping list</h2>' +
    (shop.length
      ? shop
          .map(([n, q]) => {
            const k = dateKey(days[0]) + "|" + n + "|" + q;
            return (
              '<label class="shopping"><input type="checkbox" data-check="' +
              esc(k) +
              '" ' +
              (state.checked[k] ? "checked" : "") +
              ">" +
              n +
              " · " +
              amount(n, q) +
              "</label>"
            );
          })
          .join("")
      : '<p class="hint">' +
        (days.some((d) => dishes[state.plan[dateKey(d)]])
          ? "Your pantry covers this week’s meals."
          : "Add a meal to see what to buy.") +
        "</p>") +
    "</aside></div>";
}
function schedule(i) {
  pop(
    "Add to planner",
    '<form id="scheduleForm"><label class="field">Dinner date<input id="date" type="date" required value="' +
      dateKey(new Date()) +
      '"></label><p class="hint" id="occupied"></p><button class="primary">Save dinner</button></form>',
  );
  const change = () => {
    let existing = dishes[state.plan[$("#date").value]];
    $("#occupied").textContent = existing
      ? "Replaces " + existing.name + "."
      : "";
  };
  $("#date").oninput = change;
  change();
  $("#scheduleForm").onsubmit = (e) => {
    e.preventDefault();
    setMeal($("#date").value, i);
  };
}
function setMeal(k, i) {
  state.plan[k] = i;
  save();
  modal.close();
  render();
  toast("Dinner saved");
}
