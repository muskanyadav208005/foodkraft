function extractJson(text) {
  const match = text.match(/\{[\s\S]*\}/);

  if (!match) {
    throw new Error("No JSON found in AI response");
  }

  return JSON.parse(match[0]);
}

module.exports = extractJson;