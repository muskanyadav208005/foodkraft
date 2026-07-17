const Groq = require("groq-sdk");

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

async function generateRecipe(ingredients) {
  const completion = await groq.chat.completions.create({
    model: "llama-3.3-70b-versatile",
    temperature: 0.4,
    messages: [
      {
        role: "system",
        content: `
You are a recipe generation API.

Return ONLY valid JSON.

Do not return markdown.

Do not explain anything.

The JSON schema is:

{
  "title": "string",
  "servings": number,
  "ingredients": [
    {
      "name": "string",
      "quantity": "string"
    }
  ],
  "steps": [
    "string"
  ],
  "ingredientSwaps": [
    {
      "from": "string",
      "to": "string"
    }
  ]
}
`,
      },
      {
        role: "user",
        content: `Ingredients: ${ingredients}`,
      },
    ],
  });

  return completion.choices[0].message.content;
}

module.exports = {
  generateRecipe,
};