function RecipeCard({ recipe }) {
  return (
    <div style={{ marginTop: "30px" }}>
      <h2>{recipe.title}</h2>

      <h3>Ingredients</h3>
      <ul>
        {recipe.ingredients.map((item, index) => (
          <li key={index}>{item.trim()}</li>
        ))}
      </ul>

      <h3>Instructions</h3>
      <ol>
        {recipe.instructions.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>
    </div>
  );
}

export default RecipeCard;