function extractJson(text) {
  try {
    const match = text.match(/\{[\s\S]*\}/);

    if (!match) {
      throw new Error("No JSON");
    }

    return JSON.parse(match[0]);
  } catch (err) {
    if (err.message === "No JSON") {
      throw err;
    }

    throw new Error("Malformed JSON");
  }
}

module.exports = extractJson;