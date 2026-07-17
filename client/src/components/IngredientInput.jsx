
import { generateRecipe } from "../services/api";
import RecipeCard from "./RecipeCard";
import { useRef, useState } from "react";


function IngredientInput() {
  const [ingredients, setIngredients] = useState("");
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const requestId = useRef(0);
  

  const handleSubmit = async () => {
    const currentRequest = ++requestId.current;
  if (!ingredients.trim()) {
    setError("Please enter some ingredients.");
    return;
  }

  setLoading(true);
  setError("");

  try {
    const data = await generateRecipe(ingredients);
    if (currentRequest === requestId.current) {
    setRecipe(data.recipe);
}
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
            <div>
        <p style={{ color: "red" ,marginTop: "10px"}}>
            
            {error}
        </p>
        <button onClick={handleSubmit}>
      Retry
    </button>
        </div>
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