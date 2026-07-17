import { useState } from "react";
import { generateRecipe } from "../services/api";

function IngredientInput() {
  const [ingredients, setIngredients] = useState("");

  const handleSubmit = async () => {
    try {
      const data = await generateRecipe(ingredients);
      console.log(data);
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
    </div>
  );
}

export default IngredientInput;