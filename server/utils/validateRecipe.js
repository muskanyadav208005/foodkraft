function validateRecipe(recipe) {
  if (!recipe) return false;

  if (typeof recipe.title !== "string") return false;

  if (typeof recipe.servings !== "number") return false;

  if (!Array.isArray(recipe.ingredients)) return false;

  if (!Array.isArray(recipe.steps)) return false;

  if (!Array.isArray(recipe.ingredientSwaps)) return false;

  return true;
}

module.exports = validateRecipe;