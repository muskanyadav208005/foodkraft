require("dotenv").config();

const { generateRecipe } = require("./services/aiService");
const extractJson = require("./utils/extractJson");
const validateRecipe = require("./utils/validateRecipe");
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running");
});

app.post("/generate-recipe", async (req, res) => {
  try {
    const { ingredients } = req.body;

    if (!ingredients || ingredients.trim() === "") {
      return res.status(400).json({
        success: false,
        error: "Ingredients are required",
      });
    }

    const aiText = await generateRecipe(ingredients);

    const recipe = extractJson(aiText);

    if (!validateRecipe(recipe)) {
      return res.status(500).json({
        success: false,
        error: "AI returned invalid recipe format",
      });
    }

    res.json({
      success: true,
      recipe,
    });

  } catch (err) {
  console.error("===== ERROR =====");
  console.error(err);
  console.error("Message:", err.message);
  console.error("Stack:", err.stack);

  res.status(500).json({
    success: false,
    error: err.message,
  });
}
});



const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});