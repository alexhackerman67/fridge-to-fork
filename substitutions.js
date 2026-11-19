"use strict";
function swapForm(dish) {
  const options = Object.keys(dish.needs).map(name => '<option>' + esc(name) + '</option>').join("");
  return '<details class="swap"><summary>Ask about an ingredient swap</summary><form id="swapForm" data-recipe="' +
    dishes.indexOf(dish) + '"><label class="field">Recipe ingredient<select name="original">' + options +
    '</select></label><label class="field">Replace it with<input name="replacement" required maxlength="100" placeholder="e.g. plain yoghurt"></label>' +
    '<p class="hint">Sends this recipe and your swap to the AI cookery assistant.</p>' +
    '<button class="light" type="submit">Check swap</button><div role="status"></div></form></details>';
}
document.addEventListener("input", event => {
  const form = event.target.closest("#swapForm");
  if (form) {
    form.querySelector('[role="status"]').textContent = "";
    form.querySelector("button").disabled = false;
    delete form.dataset.pending;
  }
});
let swapRequest = 0;
document.addEventListener("submit", async event => {
  const form = event.target;
  if (form.id !== "swapForm") return;
  event.preventDefault();
  const dish = dishes[Number(form.dataset.recipe)];
  const original = form.elements.original.value;
  const replacement = canonical(form.elements.replacement.value);
  const output = form.querySelector('[role="status"]');
  if (!replacement || ingredientKey(original) === ingredientKey(replacement)) {
    output.textContent = "Enter a different ingredient to compare.";
    return;
  }
  const profile = state.preferences || {};
  if (!fitsPreferences({ needs: { [replacement]: 1 } }, profile)) {
    output.textContent = "This replacement conflicts with your saved dietary or allergy preferences.";
    return;
  }
  const requestId = String(++swapRequest);
  form.dataset.pending = requestId;
  const button = form.querySelector("button");
  button.disabled = true;
  output.textContent = "Checking how the swap works in this recipe…";
  try {
    const origin = connectedScanner() || "https://fridge-to-fork.axiang28.workers.dev";
    const response = await fetch(origin + "/substitute", {
      method: "POST", headers: { "Content-Type": "application/json" }, signal: AbortSignal.timeout(45000),
      body: JSON.stringify({ dish: dish.name, method: dish.steps.join(" "), original,
        amount: amount(original, dish.needs[original]), replacement })
    });
    if (!response.ok) throw new Error();
    const { verdict, reason, tip } = await response.json();
    if (![verdict, reason, tip].every(value => typeof value === "string" && value.trim())) throw new Error();
    if (form.dataset.pending !== requestId) return;
    output.innerHTML = '<p><strong>' + esc(verdict) + '</strong></p><p>' + esc(reason) + '</p><p>' + esc(tip) + '</p>';
    if (profile.allergies?.length) output.insertAdjacentHTML("beforeend", '<p class="hint">Check the replacement’s label against your saved allergies.</p>');
  } catch {
    if (form.dataset.pending === requestId) output.textContent = "The AI could not check this swap. Try again when connected.";
  } finally {
    if (form.dataset.pending === requestId) button.disabled = false;
  }
});
