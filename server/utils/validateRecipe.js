function validateRecipe(recipe) {
  return (
    recipe &&
    typeof recipe.title === "string" &&
    typeof recipe.servings === "number" &&
    Array.isArray(recipe.ingredients) &&
    recipe.ingredients.every(item =>
    typeof item.name === "string" &&
    typeof item.quantity === "number" &&
    typeof item.unit === "string"
    ) &&
    Array.isArray(recipe.steps) &&
    Array.isArray(recipe.ingredientSwaps)
  );
}

module.exports = validateRecipe;