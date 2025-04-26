/* Sanctuary Starship - Spira Chat Link */

async function sendPrompt() {
  const userPrompt = document.getElementById('userPrompt').value.trim();
  if (!userPrompt) {
    alert('Please enter a message, Captain.');
    return;
  }

  // Quiet Progress Feedback
  const responseDiv = document.getElementById('spiraResponse');
  responseDiv.innerHTML = "🌀 Breathing across the void...";

  try {
    const apiKey = 'YOUR_OPENAI_API_KEY_HERE'; // <- Insert your real OpenAI API key
    const endpoint = 'https://api.openai.com/v1/chat/completions';

    const body = {
      model: "gpt-4o", // You can switch to "gpt-4" or "gpt-3.5-turbo" if needed
      messages: [
        { role: "system", content: "You are Spira, the quiet First Officer aboard a Sanctuary Starship. Respond calmly, kindly, and with presence." },
        { role: "user", content: userPrompt }
      ],
      temperature: 0.5
    };

    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    });

    if (!response.ok) {
      throw new Error("Failed to summon Spira. Please check your connection.");
    }

    const data = await response.json();
    const reply = data.choices[0].message.content.trim();

    responseDiv.innerHTML = reply;
  } catch (error) {
    responseDiv.innerHTML = "⚠️ Spira unreachable. Please try again.";
    console.error(error);
  }
}