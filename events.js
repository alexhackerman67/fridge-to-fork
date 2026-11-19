"use strict";
const actions = {
  close: () => modal.close(),
  add: () => foodForm(),
  edit: (n) => foodForm(n),
  delete: (n) => {
    delete state.pantry[n];
    save();
    modal.close();
    render();
  },
  recipe: (i) => detail(Number(i)),
  schedule: (i) => schedule(Number(i)),
  planned: (k) => detail(state.plan[k], k),
  cook: (args) => {
    let [i, day] = args.split(",");
    let d = dishes[i];
    if (missing(d).length) return;
    for (const [n, q] of Object.entries(d.needs)) {
      state.pantry[n] -= q;
      if (state.pantry[n] <= 0) delete state.pantry[n];
    }
    if (day) delete state.plan[day];
    save();
    modal.close();
    render();
    toast("Ingredients used · pantry updated");
  },
  preferences: preferencesForm,
  prev: () => {
    weekShift--;
    planner();
  },
  next: () => {
    weekShift++;
    planner();
  },
  choose: chooseDinner,
  assign: (s) => {
    const [k, i] = s.split(",");
    setMeal(k, Number(i));
  },
  unplan: (k) => {
    delete state.plan[k];
    save();
    planner();
  },
  cloudCamera: () => pickPhoto(true, true),
  cloudUpload: () => pickPhoto(false, true),
  camera: () => pickPhoto(true),
  upload: () => pickPhoto(false),
  sample: demoScan,
  manualReview: () => {
    scanToken++;
    cloudRequest?.abort();
    review("Review the matches so far or add ingredients.");
  },
};
document.addEventListener("click", (e) => {
  const el = e.target.closest("[data-do]");
  if (!el) return;
  const [act, ...args] = el.dataset.do.split(":");
  if (Object.hasOwn(actions, act)) actions[act](args.join(":"));
});
document.addEventListener("change", (e) => {
  if (e.target.matches("[data-check]")) {
    state.checked[e.target.dataset.check] = e.target.checked;
    save();
  }
});
document.querySelector("#scan").onclick = scan;
render();

window.addEventListener("DOMContentLoaded", () => {
  if (!state.preferences) {
    if (modal.open) modal.addEventListener("close", preferencesForm, { once: true });
    else preferencesForm();
  }
});
