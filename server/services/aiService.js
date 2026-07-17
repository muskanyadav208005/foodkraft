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

Quantity MUST be a number.

Unit MUST be a separate field.

The JSON schema is:

{
"title":"string",
"servings":2,
"ingredients":[
{
"name":"string",
"quantity":2,
"unit":"cups"
}
],
"steps":[
"string"
],
"ingredientSwaps":[
{
"from":"string",
"to":"string"
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