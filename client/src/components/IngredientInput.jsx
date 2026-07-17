import { useState } from "react";
import { generateRecipe } from "../services/api";
import RecipeCard from "./RecipeCard";


function IngredientInput() {
  const [ingredients, setIngredients] = useState("");
  const [recipe, setRecipe] = useState(null);

  const handleSubmit = async () => {
    try {
      const data = await generateRecipe(ingredients);
      console.log(data);
      setRecipe(data.recipe);
    } catch (error) {
      console.error(error);
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

      <button onClick={handleSubmit}>
        Generate Recipe
      </button>
      {recipe && <RecipeCard recipe={recipe} />}
    </div>
  );
}

export default IngredientInput;