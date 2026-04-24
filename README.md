<div align="center">
  <img src="public/logo.png" width="120" alt="Chunav Saarthi Logo" style="border-radius:24px; box-shadow: 0 10px 25px rgba(0,0,0,0.1); margin-bottom: 20px;" />
  <h1 style="color: #ff9933">Chunav Saarthi (चुनाव सारथी)</h1>
  <p><strong>An Intelligent, High-Fidelity Ecosystem for Democratic Engagement</strong></p>
  <p><i>Developed for the Google PromptWars Challenge</i></p>
</div>

<br />

## 🌟 Executive Summary
**Chunav Saarthi** is a comprehensive, interactive electoral platform designed to bridge the gap between citizens and the democratic process. By merging rigorous civic data with advanced web technologies and artificial intelligence, the platform delivers a highly accessible, inclusive, and culturally resonant educational experience for Indian voters.

---

## 🏆 Key Innovations & Technical Highlights

### 1. High-Fidelity EVM & VVPAT Simulation
To address voter apprehension and educate first-time voters, the platform features a heavily engineered, high-fidelity Electronic Voting Machine (EVM) simulation.
- **Hardware-Accurate Feedback:** Integrates the Web Audio API to reproduce the precise mechanical audio frequencies of authentic polling hardware.
- **Protocol Adherence:** Programmatically enforces the Election Commission's strict 7-second VVPAT (Voter Verifiable Paper Audit Trail) printing delay via complex state management and LED timings.
- **Tactile UX:** Implements interconnected state dependencies between the simulated Control Unit (CU) and Ballot Unit (BU).

### 2. Polyglot AI Conversational Agent
An embedded, context-aware AI assistant engineered to disseminate critical electoral information inclusively.
- **Agile Model Routing:** Leverages the OpenAI SDK via OpenRouter to dynamically interface with the latest, most performant Gemini LLMs.
- **Multilingual Web Speech Synthesis:** Achieves native browser text-to-speech capabilities across 12+ regional dialects, prioritizing accessibility for visually impaired and low-literacy demographics.
- **Determined Contextual Boundaries:** The system prompt securely restricts the model's domain expertise exclusively to official ECI guidelines, mitigating hallucination and preventing political bias.

### 3. Culturally Resonant "Desi-Glassmorphism" UI Architecture
The application rejects generic component libraries in favor of a bespoke, scalable design system tailored to Indian aesthetics.
- **Visual Identity:** Built on a strict `Saffron (#ff9933)`, `Indigo (#000080)`, and `India-Green (#138808)` palette, enhanced by modern CSS backdrop-filters and blur layers.
- **Kinematic Interactions:** Every layout shift, modal entrance, and scroll event is governed by `framer-motion` spring physics, ensuring a frictionless, application-like user feel.
- **Mobile-First Paradigms:** The interface, particularly the floating AI widget and voting simulator, mathematically clamps to viewport dimensions to guarantee 100% responsiveness on mobile devices.

### 4. Dynamic Electoral Data Integration
- Engineered a robust JSON-based schema to fluidly toggle between the historic **2024 Lok Sabha Elections** and upcoming **2026 State Assembly Elections**, ensuring the architecture is horizontally scalable for future election cycles.

---

## 🛠️ Technology Stack
- **Core Framework:** Next.js 16 (React 19)
- **Styling Architecture:** Tailwind CSS v4 & PostCSS
- **Animation Engine:** Framer Motion
- **AI Infrastructure:** OpenAI Runtime via OpenRouter (Gemini 2.0 Flash)
- **Edge Deployment:** Vercel 
- **Language:** Strict TypeScript

---

## ⚙️ Local Environment & Deployment

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/bibhu2727/Chunav-Saarthi.git
   cd Chunav-Saarthi
   ```
2. **Install Dependencies:**
   ```bash
   npm install
   ```
3. **Configure Environment Variables:**
   Create a `.env.local` file in the root directory:
   ```env
   OPENROUTER_API_KEY=your_authentication_key_here
   ```
4. **Initialize Development Server:**
   ```bash
   npm run dev
   ```

---
<div align="center">
  <p><i>Conceptualized and Engineered by Bibhu Kumar</i></p>
  <p><b>Jai Hind 🇮🇳</b></p>
</div>
