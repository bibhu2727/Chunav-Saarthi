"use server";

import OpenAI from "openai";
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
    if (!process.env.OPENROUTER_API_KEY) {
      console.error("OPENROUTER_API_KEY is not defined");
      return "Config Error: API Key missing in Vercel.";
    }

    const openai = new OpenAI({
      apiKey: process.env.OPENROUTER_API_KEY,
      baseURL: "https://openrouter.ai/api/v1",
      defaultHeaders: {
        "HTTP-Referer": "https://chunav-saarthi.vercel.app",
        "X-Title": "Chunav Saarthi",
      }
    });

    // Prepare messages: Combine system prompt with user's first message or as a separate system message
    const apiMessages: any[] = [
      { 
        role: "system", 
        content: `${SAARTHI_SYSTEM_PROMPT}\n\nIMPORTANT: User preferred language is ${language}. Respond in this language.` 
      },
      ...history.map(m => ({
        role: m.role === "model" ? "assistant" : "user",
        content: m.parts[0].text
      })),
      { role: "user", content: userMessage }
    ];

    const completion = await openai.chat.completions.create({
      model: "openrouter/free", // Using the auto-router which avoids 404s when specific models drop
      messages: apiMessages,
    });

    return completion.choices[0]?.message?.content || "No response content.";

  } catch (error: any) {
    console.error("AI Error:", error);
    return `AI Error: ${error.message || "Failed to get response"}`;
  }
}
