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
const amount = (n, q) => q == null ? "" : Number(q.toFixed(2)) + " " + (foods[n] || "each");
const missing = (d) =>
  Object.entries(d.needs).filter(([n, q]) => (state.pantry[n] || 0) < q);
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
function detail(i, plannedDay = "") {
  const d = dishes[i];
  pop(
    d.name,
    meta(d) + (fitsPreferences(d, state.preferences || {}) ? "" : '<p class="hint">This planned recipe falls outside your current dietary preferences.</p>') +
      "<p>" +
      d.note +
      '</p><h4>Ingredients · serves 2</h4><div class="ingredients">' +
      Object.entries(d.needs)
        .map(
          ([n, q]) =>
            '<div class="line"><span>' +
            n +
            "</span><span>" +
            amount(n, q) +
            ((state.pantry[n] || 0) < q
              ? '<br><small class="missing">Need ' +
                amount(n, q - (state.pantry[n] || 0)) +
                "</small>"
              : "") +
            "</span></div>",
        )
        .join("") +
      '</div>' + (d.swaps ? '<p class="hint">' + esc(d.swaps) + '</p>' : '') + '<h4>Method</h4><ol>' +
      d.steps.map((s) => "<li>" + s + "</li>").join("") +
      '</ol><div class="actions">' +
      btn("Add to planner", "schedule:" + i, "primary") +
      (!missing(d).length
        ? btn("Cook now", "cook:" + i + (plannedDay ? "," + plannedDay : ""))
        : "") +
      "</div>",
  );
}
function pantry() {
  main.innerHTML =
    '<div class="pagehead"><div><h1>My pantry</h1></div>' +
    btn(icon("plus") + " Add ingredient", "add", "primary") +
    '</div><div class="list">' +
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
      "Unit: " + (foods[canonical($("#food").value)] || "each"));
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
    state.pantry[name] = Number($("#qty").value);
    save();
    modal.close();
    render();
  };
}
function ingredientKey(s) {
  return s.toLowerCase().replace(/[’‘]/g, "'").replace(/[‐‑–]/g, "-");
}
function canonical(s) {
  s = s.normalize("NFC").trim().replace(/\s+/g, " ");
  if (!s || s.length > 100 || /[<>\p{Cc}]/u.test(s) || !/\p{L}/u.test(s) ||
      s.toLowerCase() === "prototype" || Object.hasOwn(Object.prototype, s)) return "";
  return (
    [...Object.keys(foods), ...Object.keys(state.pantry)].find(
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
      for (const [n, q] of Object.entries(meal.needs))
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
