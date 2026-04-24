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
    // Debug logs for Vercel (check Vercel Logs)
    console.log("Starting AI request for language:", language);
    if (!process.env.OPENROUTER_API_KEY) {
      console.error("CRITICAL: OPENROUTER_API_KEY is missing in environment variables!");
      return "Technical Error: API Key not configured. Please check Vercel settings.";
    }

    const messages: any[] = [
      { 
        role: "user", 
        content: `System Instructions: ${SAARTHI_SYSTEM_PROMPT}\n\nUser Question: ${userMessage}` 
      }
    ];

    // Note: Removed 'system' role for better compatibility with free models
    
    console.log("Sending request to OpenRouter...");
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: { 
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
        "HTTP-Referer": "https://chunav-saarthi.vercel.app",
        "X-Title": "Chunav Saarthi",
      },
      body: JSON.stringify({
        messages: messages,
        model: "google/gemini-2.0-flash-exp:free" // Using the most common stable free model
      })
    });

    const data = await response.json();
    console.log("OpenRouter Response received:", response.status);

    if (!response.ok) {
      console.error("OpenRouter Error Details:", data);
      return "OpenRouter Error: " + (data.error?.message || "Unknown error");
    }

    return data.choices?.[0]?.message?.content || "Error retrieving response.";

  } catch (error: any) {
    console.error("Full Runtime Error:", error);
    return "Maaf kijiye 🙏 Technical issue: " + error.message;
  }
}
