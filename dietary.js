"use strict";

// Match the cookbook's ingredient names, including common components of packaged foods.
const allergyIngredients = {
  "Milk": ["Milk", "Butter", "Cheese", "Feta", "Ricotta", "Yoghurt", "Cream", "Labneh", "Halloumi", "Pesto"],
  "Egg": ["Egg", "Noodles", "Pasta", "Spaghetti", "Gnocchi"],
  "Peanut": ["Peanut butter"],
  "Tree nuts": ["Pesto"],
  "Sesame": ["Sesame seeds", "Tahini", "Za’atar"],
  "Soy": ["Soy sauce", "Miso", "Tofu", "Edamame", "Gochujang"],
  "Wheat": ["Bread", "Bread roll", "Pita", "Flatbread", "Tortilla", "Pasta", "Spaghetti", "Noodles", "Udon noodles", "Soba noodles", "Couscous", "Bulgur", "Flour", "Self-raising flour", "Soy sauce", "Gochujang", "Gnocchi", "Cornflour"],
  "Fish": ["Salmon", "White fish", "Tuna", "Kimchi"],
  "Crustaceans": ["Prawns", "Kimchi"],
  "Mustard": ["Mustard", "Curry powder"]
};
const dietChoices = ["Vegetarian", "Vegan", "Pescatarian", "Gluten-free"];
const difficultyLabels = ["", "Easy", "Moderate", "Challenging"];

function fitsPreferences(dish, profile) {
  const has = names => names.some(name => Object.hasOwn(dish.needs, name));
  if ((profile.allergies || []).some(name => has(allergyIngredients[name] || []))) return false;
  if (profile.diet === "Gluten-free") return !has([...allergyIngredients.Wheat, "Oats", "Pearl barley", "Miso"]);
  if (!["Vegetarian", "Vegan", "Pescatarian"].includes(profile.diet)) return true;
  if (has(["Chicken", "Bacon", "Ham"])) return false;
  if (profile.diet === "Pescatarian") return true;
  if (has([...allergyIngredients.Fish, ...allergyIngredients.Crustaceans])) return false;
  return profile.diet !== "Vegan" || !has([...allergyIngredients.Milk, ...allergyIngredients.Egg, "Honey"]);
}
function forkRating(dish) {
  const level = dish.difficulty;
  const fork = '<svg viewBox="0 0 12 22" aria-hidden="true"><path d="M2 1v5a4 4 0 0 0 8 0V1M6 1v6m0 3v11"/></svg>';
  return '<span class="fork-rating" aria-label="' + difficultyLabels[level] + ', ' + level + ' of 3 forks">' +
    [1,2,3].map(i => '<span class="' + (i <= level ? "filled-fork" : "empty-fork") + '">' + fork + '</span>').join("") +
    '<small aria-hidden="true">' + difficultyLabels[level] + '</small></span>';
}
