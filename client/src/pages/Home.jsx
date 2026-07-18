import IngredientInput from "../components/IngredientInput";

function Home() {
  return (
    <div className="container">

      <h1>🍳 Fridge To Recipe</h1>

<p className="subtitle">
Turn whatever is in your fridge into a delicious AI-powered recipe.
</p>

      <IngredientInput />
      <footer
  style={{
    marginTop: "60px",
    textAlign: "center",
    color: "#666",
    fontSize: "14px",
  }}
>
  Built with React + Express + AI
</footer>

    </div>
  );
}

export default Home;