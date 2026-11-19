"use strict";

function preferencesForm() {
  const profile = state.preferences || {};
  const cuisines = [...new Set(dishes.map(d => d.cuisine))].sort();
  pop("Your recipe preferences", '<form id="preferences">' +
    '<label class="field">Favourite cuisines<input name="cuisines" list="cuisineExamples" placeholder="e.g. Italian, Korean" maxlength="180" value="' + esc(profile.cuisines || "") + '"></label>' +
    '<datalist id="cuisineExamples">' + cuisines.map(c => '<option value="' + esc(c) + '">').join("") + '</datalist>' +
    '<label class="field">Favourite meals<input name="meals" placeholder="e.g. fried rice, pasta" maxlength="240" value="' + esc(profile.meals || "") + '"></label>' +
    '<fieldset class="goal-fields"><legend>Optional goals per serving</legend>' +
    '<label class="field">Protein (g)<input type="number" name="protein" min="0.1" step="any" inputmode="decimal" value="' + esc(profile.protein || "") + '"></label>' +
    '<label class="field">Calories (kcal)<input type="number" name="calories" min="1" step="any" inputmode="decimal" value="' + esc(profile.calories || "") + '"></label></fieldset>' +
    '<div class="actions"><button class="primary">Save preferences</button>' +
    btn(profile === state.preferences ? "Cancel" : "Skip for now", "close", "quiet") + '</div></form>');
  $("#preferences").onsubmit = event => {
    event.preventDefault();
    const fields = new FormData(event.currentTarget);
    state.preferences = {
      cuisines: fields.get("cuisines").trim(), meals: fields.get("meals").trim(),
      protein: Number(fields.get("protein")) || null, calories: Number(fields.get("calories")) || null
    };
    save();
    modal.close();
    render();
  };
  if (!state.preferences) modal.addEventListener("close", () => {
    if (!state.preferences) { state.preferences = {}; save(); }
  }, { once: true });
}

function normaliseFood(text) {
  return text.normalize("NFKD").replace(/\p{M}/gu, "").toLowerCase().replace(/[^\p{L}\p{N}]+/gu, " ").trim();
}
function featuredRecipes() {
  const p = state.preferences || {};
  const favourites = (p.meals || "").split(/[,;\n]/).map(normaliseFood).filter(Boolean);
  return dishes.map((d, i) => {
    const title = normaliseFood(d.name);
    const ingredients = normaliseFood(Object.keys(d.needs).join(" "));
    const cuisine = normaliseFood(p.cuisines || "");
    let score = cuisine && (" " + cuisine + " ").includes(" " + normaliseFood(d.cuisine) + " ") ? 4 : 0;
    for (const meal of favourites) {
      if (title.includes(meal)) score += 6;
      else if (ingredients.includes(meal)) score += 3;
      else if (meal.split(" ").some(word => word.length > 2 && title.split(" ").includes(word))) score += 1;
    }
    if (p.protein) score += 3 * Math.min(1, d.protein / p.protein);
    if (p.calories) score += 3 * Math.max(0, 1 - Math.abs(d.kcal - p.calories) / p.calories);
    score += 0.5 * (1 - missing(d).length / Object.keys(d.needs).length);
    return { d, i, score };
  }).sort((a, b) => b.score - a.score || a.i - b.i);
}
function nutrition(d) {
  return 'Approx. ' + d.kcal + ' kcal · ' + d.protein + ' g protein per serving';
}
function recipes() {
  const [lead, ...others] = featuredRecipes().slice(0, 6);
  const { d, i } = lead;
  main.innerHTML = '<div class="sectiontop discovery-head"><h1>Featured for you</h1>' +
    btn("Edit preferences", "preferences", "quiet") + '</div>' +
    '<section class="hero' + (i < 6 ? '' : ' text-feature') + '"><div class="herotext"><p class="kicker">' +
    esc(d.cuisine) + '</p><h2>' + esc(d.name) + '</h2><p class="desc">' + esc(d.note) + '</p>' +
    meta(d) + '<p class="nutrition">' + nutrition(d) + '</p>' + btn("View recipe", "recipe:" + i, "primary") +
    '</div>' + (i < 6 ? '<div class="herophoto"><img src="' + pic(i) + '" alt=""></div>' : '') + '</section>' +
    '<div class="featured-pair">' + others.map(({ d, i }) =>
      '<button class="feature-link" data-do="recipe:' + i + '"><strong>' + esc(d.name) + '</strong><small>' +
      esc(d.cuisine) + ' · ' + d.time + ' min</small><small>' + nutrition(d) + '</small></button>').join("") + '</div>' +
    '<form id="cookbookSearch" class="web-search" role="search"><label for="recipeQuery">Search the cookbook</label>' +
    '<div><input id="recipeQuery" type="search" placeholder="Search ' + dishes.length + ' recipes by dish, cuisine or ingredient">' +
    '<button class="primary">Search</button></div></form><p id="resultCount" role="status"></p><div id="localMatches"></div>';
  const field = $("#recipeQuery");
  function showResults() {
    const query = field.value.trim();
    const matches = query ? matchingRecipes(query) : [];
    $("#resultCount").textContent = !query ? "" : matches.length
      ? matches.length + (matches.length === 1 ? " recipe found" : " recipes found")
      : "No recipes found. Try another dish or ingredient.";
    $("#localMatches").innerHTML = matches.map(({ d, i }) =>
      '<button class="feature-link" data-do="recipe:' + i + '"><strong>' + esc(d.name) + '</strong><small>' +
      esc(d.cuisine) + ' · ' + d.time + ' min · ' + esc(stock(d)) + '</small></button>').join("");
  }
  field.oninput = showResults;
  $("#cookbookSearch").onsubmit = event => { event.preventDefault(); showResults(); };
  // Keep search within reach before the longer recommendation section.
  const form = $("#cookbookSearch");
  main.prepend(form, $("#resultCount"), $("#localMatches"));
}
function matchingRecipes(query) {
  function terms(text) {
    return normaliseFood(text).split(" ").filter(Boolean).map(word => {
      if (word.endsWith("oes")) return word.slice(0, -2);
      if (word.endsWith("ies")) return word.slice(0, -3) + "y";
      return word.length > 3 && /[^s]s$/.test(word) ? word.slice(0, -1) : word;
    });
  }
  const words = terms(query);
  if (!words.length) return [];
  return featuredRecipes().map(entry => {
    const title = terms(entry.d.name);
    const searchable = [...title, ...terms(entry.d.cuisine), ...terms(Object.keys(entry.d.needs).join(" "))];
    const matches = words.every(word => searchable.some(term => term.startsWith(word)));
    const titleHits = words.filter(word => title.some(term => term.startsWith(word))).length;
    return { ...entry, matches, titleHits };
  }).filter(entry => entry.matches).sort((a, b) => b.titleHits - a.titleHits || b.score - a.score);
}
function chooseDinner(day) {
  pop("Choose dinner", '<label class="field">Search your cookbook<input id="planSearch" type="search" placeholder="Dish or ingredient"></label><div id="planMatches"></div>');
  function update() {
    const query = $("#planSearch").value;
    const matches = query.trim() ? matchingRecipes(query) : featuredRecipes().slice(0, 6);
    $("#planMatches").innerHTML = matches.map(({ d, i }) => '<div class="line"><span>' + esc(d.name) +
      '</span>' + ib("Plan " + d.name, "assign:" + day + "," + i, "plus") + '</div>').join("") || '<p>No matching recipes.</p>';
  }
  $("#planSearch").oninput = update;
  update();
}
