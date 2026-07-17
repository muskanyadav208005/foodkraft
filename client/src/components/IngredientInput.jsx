import { useState } from "react";
import { generateRecipe } from "../services/api";
import RecipeCard from "./RecipeCard";


function IngredientInput() {
  const [ingredients, setIngredients] = useState("");
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  

  const handleSubmit = async () => {
  if (!ingredients.trim()) {
    setError("Please enter some ingredients.");
    return;
  }

  setLoading(true);
  setError("");

  try {
    const data = await generateRecipe(ingredients);
    setRecipe(data.recipe);
  } catch (err) {
    setError(err.message || "Failed to generate recipe.");
  } finally {
    setLoading(false);
  }
};

  return (
    <div>
      <textarea
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
        placeholder="Enter ingredients like tomato, onion, rice..."
      />

      <br />

      <button onClick={handleSubmit} disabled={loading}>
        {loading ? "Generating..." : "Generate Recipe"}
        </button>
        {error && (
        <p style={{ color: "red" ,marginTop: "10px"}}>
            {error}
        </p>
        )}
        {!recipe && !loading && (
        <p style={{ marginTop: "20px" }}>
            No recipe generated yet. Enter ingredients and click "Generate Recipe".
        </p>
        )}
      {recipe && <RecipeCard recipe={recipe} />}
    </div>
  );
}

export default IngredientInput;