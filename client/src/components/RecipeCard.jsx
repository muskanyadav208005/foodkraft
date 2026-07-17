import { useState } from "react";

function RecipeCard({ recipe }) {
    const [servings, setServings] = useState(recipe.servings);
    const [completedSteps, setCompletedSteps] = useState([]);
    const toggleStep = (index) => {
    if (completedSteps.includes(index)) {
        setCompletedSteps(
        completedSteps.filter((i) => i !== index)
        );
    } else {
        setCompletedSteps([...completedSteps, index]);
    }
};
  return (
    <div style={{ marginTop: "30px" }}>
      <h2>{recipe.title}</h2>

        <h3>
        Servings

        <button
        onClick={() => setServings(Math.max(1, servings - 1))}
        >
        -
        </button>

        <span style={{ margin: "0 10px" }}>
        {servings}
        </span>

        <button
        onClick={() => setServings(servings + 1)}
        >
        +
        </button>

        </h3>

      <h3>Ingredients</h3>
                <ul>
            {recipe.ingredients.map((item, index) => (
                <li key={index}>
                    {((item.quantity / recipe.servings) * servings).toFixed(1)}
                    {" "}
                    {item.unit}
                    {" "}
                    {item.name}
                </li>
            ))}
            </ul>

      <h3>Instructions</h3>

<p>
  Progress: {completedSteps.length}/{recipe.steps.length}
</p>

{recipe.steps.map((step, index) => (
  <div key={index} style={{ marginBottom: "8px" }}>
    <label>
      <input
        type="checkbox"
        checked={completedSteps.includes(index)}
        onChange={() => toggleStep(index)}
      />

      <span
        style={{
          marginLeft: "8px",
          textDecoration: completedSteps.includes(index)
            ? "line-through"
            : "none",
        }}
      >
        {step}
      </span>
    </label>
  </div>

    ))};
</div>
  );
}

export default RecipeCard;