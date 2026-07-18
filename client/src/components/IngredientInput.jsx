
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
  setRecipe(null);

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

{/* Loading */}

{loading && (
  <div className="loading">
    🤖 AI Chef is preparing your recipe...
  </div>
)}

{/* Error */}

{error && (
  <div style={{ marginTop: "15px" }}>
    <p style={{ color: "red" }}>{error}</p>

    <button onClick={handleSubmit}>
      Retry
    </button>
  </div>
)}

{/* Recipe */}

{recipe ? (
  <RecipeCard recipe={recipe} />
) : (
  !loading && (
    <div
      style={{
        marginTop: "40px",
        padding: "30px",
        background: "white",
        borderRadius: "15px",
        textAlign: "center",
        boxShadow: "0 5px 20px rgba(0,0,0,.08)",
      }}
    >
      <h2>🥗 Ready to Cook?</h2>

      <p>
        Enter a few ingredients and let AI create a recipe for you.
      </p>
    </div>
  )
)}
    </div>
  );
}

export default IngredientInput;