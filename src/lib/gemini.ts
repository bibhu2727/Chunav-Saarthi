"use server";

import { SAARTHI_SYSTEM_PROMPT } from "./data";

interface ChatMessage {
  role: "user" | "model";
  parts: { text: string }[];
}

export async function askSaarthi(
  userMessage: string,
  history: ChatMessage[] = [],
  language: string = "en"
): Promise<string> {
  try {
    const messages: any[] = [
      { 
        role: "system", 
        content: SAARTHI_SYSTEM_PROMPT + `\n\nCRITICAL: The user has selected the language code '${language}'. You MUST respond to them in this language if it's not English.` 
      }
    ];

    for (const msg of history) {
      messages.push({
        role: msg.role === "model" ? "assistant" : "user",
        content: msg.parts[0].text
      });
    }

    messages.push({ role: "user", content: userMessage });

    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: { 
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
        "HTTP-Referer": "https://chunav-saarthi.vercel.app", // Required for some free models on OpenRouter
        "X-Title": "Chunav Saarthi"
      },
      body: JSON.stringify({
        messages: messages,
        model: "google/gemini-2.0-flash-lite-preview-02-05:free" // Using a very stable specific free model
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`OpenRouter API Error: ${response.status} - ${errorText}`);
    }

    const data = await response.json();
    return data.choices?.[0]?.message?.content || "Error retrieving response.";

  } catch (error: unknown) {
    console.error("OpenRouter Error:", error);
    return "Maaf kijiye 🙏 I encountered a technical issue. Please try again or call the ECI Helpline: **1950**";
  }
}
