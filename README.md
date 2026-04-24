<div align="center">
  <img src="public/logo.png" width="120" alt="Chunav Saarthi Logo" style="border-radius:24px; box-shadow: 0 10px 25px rgba(0,0,0,0.1); margin-bottom: 20px;" />
  <h1 style="color: #ff9933">Chunav Saarthi (चुनाव सारथी)</h1>
  <p><strong>An Intelligent, High-Fidelity Ecosystem for Democratic Engagement</strong></p>
  <p><i>Official Submission for Google PromptWars Challenge</i></p>
</div>

<br />

## 🏛️ Project Overview
- **Chosen Vertical:** Electoral Awareness & Civic Engagement
- **Core Google Service:** Google Gemini (via OpenRouter API)
- **Deployment:** [https://chunav-saarthi.vercel.app](https://chunav-saarthi.vercel.app)

---

## 💡 Approach and Logic
Our approach focuses on **Immersive Education**. Instead of static text, we believe citizens learn best by "doing." 

**The Logic flow:**
1. **Contextual Awareness:** The application detects the current election cycle (2024 vs 2026) and updates the entire UI state accordingly.
2. **Mental Model Building:** By simulating the physical EVM, we build a mental map for first-time voters, reducing "booth anxiety."
3. **Conversational Scaffolding:** The AI "Saarthi" doesn't just answer; it guides. It uses a strictly bounded system prompt to act as an official-like guide, ensuring users receive verified, non-partisan information.

---

## ⚙️ How the Solution Works
1. **Interactive Simulation:** Users can interact with a digital Ballot Unit. Clicking a candidate button triggers a synchronous audio beep (Web Audio API) and starts the VVPAT verification sequence.
2. **VVPAT Validation:** A 7-second timer simulates the physical printing and display of the vote receipt, mirroring the actual legal requirements of Indian elections.
3. **Multilingual AI Support:** Users can switch between 12+ Indian languages. The AI responds in the selected tongue and can read responses aloud using Browser-native Text-to-Speech (TTS), ensuring accessibility for all users.
4. **Dynamic Timelines:** Intersection-observer-based animations reveal the election roadmap, helping citizens plan their participation.

---

## 📑 Assumptions Made
- **Data Source:** It is assumed that the user wants current (2024) and near-future (2026) election data based on the most recent ECI announcements.
- **Connectivity:** The AI features assume an active internet connection to communicate with the Gemini API.
- **Device Support:** High-fidelity animations assume a modern browser environment (Framer Motion & Tailwind v4 requirements).

---

## 🏆 Key Innovations
- **Hardware-Accurate Feedback:** Precise audio/visual reproduction of ECI hardware.
- **Polyglot Reach:** Deep integration of regional languages with voice synthesis.
- **Desi-Glassmorphism:** A custom design language blending Indian heritage with peak modern web design.

---

## 🛠️ Technology Stack
- **Framework:** Next.js 16 (React 19)
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **AI Engine:** Google Gemini (OpenAI SDK Runtime)
- **Voice:** Web Speech API

---

## ⚙️ Quick Start
1. `git clone https://github.com/bibhu2727/Chunav-Saarthi.git`
2. `npm install`
3. Add `OPENROUTER_API_KEY` to `.env.local`
4. `npm run dev`

---
<div align="center">
  <p><i>Engineered by Bibhu Kumar</i></p>
  <p><b>Jai Hind 🇮🇳</b></p>
</div>
