const API_URL = "http://localhost:5000";

export async function generateRecipe(ingredients) {
  const response = await fetch(`${API_URL}/generate-recipe`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ ingredients }),
  });

  if (!response.ok) {
    throw new Error("Failed to generate recipe");
  }

  return response.json();
}