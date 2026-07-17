function validateRecipe(recipe) {
  return (
    recipe &&
    typeof recipe.title === "string" &&
    typeof recipe.servings === "number" &&
    Array.isArray(recipe.ingredients) &&
    Array.isArray(recipe.steps) &&
    Array.isArray(recipe.ingredientSwaps)
  );
}

module.exports = validateRecipe;