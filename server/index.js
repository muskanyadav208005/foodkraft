const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running");
});

app.post("/generate-recipe", (req, res) => {
  const { ingredients } = req.body;

  console.log("Received:", ingredients);

  res.json({
    success: true,
    recipe: {
      title: "Demo Recipe",
      ingredients: ingredients.split(","),
      instructions: [
        "Mix everything.",
        "Cook for 15 minutes.",
        "Serve hot."
      ]
    }
  });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});