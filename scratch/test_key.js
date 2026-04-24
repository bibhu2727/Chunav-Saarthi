const API_KEY = "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";

async function testKey() {
  console.log("Testing OpenRouter Key...");
  try {
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${API_KEY}`,
      },
      body: JSON.stringify({
        model: "google/gemini-2.0-flash-exp:free",
        messages: [{ role: "user", content: "Hi" }]
      })
    });
    const data = await response.json();
    console.log("Response Status:", response.status);
    console.log("Response Data:", JSON.stringify(data, null, 2));
  } catch (err) {
    console.error("Fetch Error:", err);
  }
}

testKey();
