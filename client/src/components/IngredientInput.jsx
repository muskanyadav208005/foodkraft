import { useState } from "react";

function IngredientInput() {

  const [ingredients, setIngredients] = useState("");

  const handleSubmit = () => {
    console.log("Ingredients:", ingredients);
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