import IngredientInput from "../components/IngredientInput";

function Home() {
  return (
    <div>
      <h1>Fridge To Recipe</h1>
      <p>
        Enter your ingredients and get AI generated recipes.
      </p>

      <IngredientInput />
    </div>
  );
}

export default Home;