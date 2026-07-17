const API_URL = "http://localhost:5000";

export async function generateRecipe(ingredients) {
  const response = await fetch("http://localhost:5000/generate-recipe", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ ingredients }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error || "Failed to generate recipe");
  }

  return data;
}
