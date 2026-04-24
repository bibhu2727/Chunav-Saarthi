"use client";

import Image from "next/image";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Volume2, VolumeX, Languages } from "lucide-react";
import { askSaarthi } from "@/lib/gemini";
import { LANGUAGES } from "@/lib/data";

interface Message {
  role: "user" | "model";
  text: string;
}

const QUICK_PROMPTS = [
  "How do I register to vote?",
  "What documents do I need?",
  "Explain EVM and VVPAT",
  "What is NOTA?",
  "Election 2024 phases",
];

export default function ChatAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [lang, setLang] = useState("en");
  const [showLangPicker, setShowLangPicker] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "model", text: LANGUAGES.en.greeting + "\n\nAsk me about voter registration, election timelines, voting process, or anything about Indian democracy! 🇮🇳" },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleLangChange = useCallback((code: string) => {
    setLang(code);
    setShowLangPicker(false);
    const langData = LANGUAGES[code];
    if (langData) {
      setMessages(prev => [...prev, { role: "model", text: langData.greeting }]);
    }
  }, []);

  const handleSend = useCallback(async (text?: string) => {
    const msg = (text || input).trim();
    if (!msg || isLoading) return;

    setMessages(prev => [...prev, { role: "user", text: msg }]);
    setInput("");
    setIsLoading(true);

    const rawHistory = messages.map(m => ({
      role: m.role as "user" | "model",
      parts: [{ text: m.text }],
    }));

    // Gemini API strict rule: History must start with 'user' and strictly alternate
    const history: { role: "user" | "model"; parts: { text: string }[] }[] = [];
    let expectedRole: "user" | "model" = "user";

    for (const msg of rawHistory) {
      if (msg.role === expectedRole) {
        history.push(msg);
        expectedRole = expectedRole === "user" ? "model" : "user";
      }
    }

    const response = await askSaarthi(msg, history, lang);
    setMessages(prev => [...prev, { role: "model", text: response }]);
    setIsLoading(false);
  }, [input, isLoading, messages, lang]);

  const handleSpeak = useCallback((text: string) => {
    if (typeof window === "undefined" || !window.speechSynthesis) return;
    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }
    const clean = text.replace(/[*#_~`]/g, "").replace(/\[.*?\]\(.*?\)/g, "");
    const utterance = new SpeechSynthesisUtterance(clean);
    const langMap: Record<string, string> = { hi: "hi-IN", en: "en-IN", bn: "bn-IN", te: "te-IN", ta: "ta-IN", mr: "mr-IN", kn: "kn-IN", gu: "gu-IN", ml: "ml-IN", pa: "pa-IN", or: "or-IN", as: "as-IN" };
    utterance.lang = langMap[lang] || "en-IN";
    utterance.onend = () => setIsSpeaking(false);
    setIsSpeaking(true);
    window.speechSynthesis.speak(utterance);
  }, [isSpeaking, lang]);

  const formatMessage = (text: string) => {
    return text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/^- (.*)/gm, '<li>$1</li>')
      .replace(/(<li>[\s\S]*?<\/li>)/g, '<ul class="list-disc pl-4 my-1">$1</ul>')
      .replace(/\n/g, '<br/>');
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[100] flex flex-col items-end gap-3 max-w-[calc(100vw-32px)]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 30 }}
            transition={{ type: "spring", damping: 20 }}
            className="w-[calc(100vw-32px)] sm:w-[390px] md:w-[460px] h-[70vh] sm:h-[640px] max-h-[80vh] rounded-[24px] sm:rounded-[32px] overflow-hidden flex flex-col shadow-2xl border border-white/30"
            style={{ background: "rgba(255,252,247,0.95)", backdropFilter: "blur(20px)" }}
          >
            {/* Header */}
            <div className="indigo-gradient px-5 py-4 text-white flex items-center justify-between relative overflow-hidden">
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60'%3E%3Ccircle cx='30' cy='30' r='20' fill='none' stroke='white' stroke-width='0.5'/%3E%3Ccircle cx='30' cy='30' r='10' fill='none' stroke='white' stroke-width='0.5'/%3E%3Cline x1='30' y1='10' x2='30' y2='50' stroke='white' stroke-width='0.3'/%3E%3Cline x1='10' y1='30' x2='50' y2='30' stroke='white' stroke-width='0.3'/%3E%3C/svg%3E\")" }} />
              <div className="flex items-center gap-3 z-10">
                <Image src="/chat-bot-logo.png" alt="Chat Bot Logo" width={64} height={64} className="rounded-2xl shadow-md bg-white border border-white/30" />
                <div>
                  <h3 className="font-bold text-base leading-tight">Chunav Saarthi</h3>
                  <span className="text-[11px] text-white/70">Your Election Guide • चुनाव सारथी</span>
                </div>
              </div>
              <div className="flex items-center gap-1 z-10">
                <button onClick={() => setShowLangPicker(!showLangPicker)} className="p-2 hover:bg-white/10 rounded-full transition-colors" title="Change Language">
                  <Languages className="w-4 h-4" />
                </button>
                <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-white/10 rounded-full transition-colors">
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Language Picker */}
            <AnimatePresence>
              {showLangPicker && (
                <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} className="overflow-hidden bg-indigo/5 border-b border-indigo/10">
                  <div className="p-3 grid grid-cols-3 gap-1.5 max-h-[140px] overflow-y-auto">
                    {Object.entries(LANGUAGES).map(([code, l]) => (
                      <button key={code} onClick={() => handleLangChange(code)} className={`text-[11px] px-2 py-1.5 rounded-lg transition-all font-medium ${lang === code ? "desi-gradient text-white" : "hover:bg-saffron/10 text-foreground/70"}`}>
                        {l.nativeName}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-3 space-y-3">
              {messages.map((msg, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[85%] relative group ${msg.role === "user" ? "" : ""}`}>
                    <div className={`px-4 py-2.5 rounded-2xl text-[13px] leading-relaxed ${msg.role === "user" ? "indigo-gradient text-white rounded-br-md" : "bg-white border border-indigo/8 text-foreground rounded-bl-md shadow-sm"}`}
                      dangerouslySetInnerHTML={{ __html: formatMessage(msg.text) }} />
                    {msg.role === "model" && (
                      <button onClick={() => handleSpeak(msg.text)} className="absolute -right-8 top-1 p-1 rounded-full text-foreground/20 hover:text-saffron opacity-0 group-hover:opacity-100 transition-all" title="Listen">
                        {isSpeaking ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
                      </button>
                    )}
                  </div>
                </motion.div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white border border-indigo/8 px-4 py-3 rounded-2xl rounded-bl-md shadow-sm flex items-center gap-2">
                    <div className="chakra-spin !w-4 !h-4 !border-2" />
                    <span className="text-[12px] text-foreground/40">Saarthi soch raha hai...</span>
                  </div>
                </div>
              )}
            </div>

            {/* Quick Prompts */}
            {messages.length <= 2 && (
              <div className="px-4 pb-2 flex gap-1.5 overflow-x-auto no-scrollbar">
                {QUICK_PROMPTS.map((p, i) => (
                  <button key={i} onClick={() => handleSend(p)} className="whitespace-nowrap text-[11px] px-3 py-1.5 rounded-full border border-saffron/20 text-saffron-deep hover:bg-saffron/10 transition-colors font-medium flex-shrink-0">
                    {p}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <div className="p-3 border-t border-indigo/5 bg-white/50">
              <div className="flex items-center gap-2">
                <input type="text" value={input} onChange={e => setInput(e.target.value)} onKeyDown={e => e.key === "Enter" && handleSend()} placeholder="Type your question..." className="flex-1 bg-cream/50 border border-indigo/8 rounded-xl px-4 py-2.5 text-[13px] focus:outline-none focus:ring-2 focus:ring-saffron/30 placeholder:text-foreground/30 transition-all" />
                <button onClick={() => handleSend()} disabled={!input.trim() || isLoading} className="p-2.5 rounded-xl desi-gradient text-white disabled:opacity-40 transition-opacity shadow-md shadow-saffron/20">
                  <Send className="w-4 h-4" />
                </button>
              </div>
              <p className="text-[10px] text-foreground/30 mt-1.5 text-center">Powered by Gemini AI • Official data from ECI</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FAB Button Wrapper with Glow */}
      <div className="relative">
        {!isOpen && (
          <div className="absolute inset-0 bg-saffron rounded-full animate-ping opacity-30" />
        )}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`relative w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(255,153,51,0.5)] transition-all duration-300 border-4 overflow-hidden ${isOpen ? "bg-white text-indigo border-indigo/20" : "bg-white border-saffron/30 hover:shadow-[0_0_40px_rgba(255,153,51,0.8)]"}`}
        >
          {isOpen ? (
            <X className="w-8 h-8 text-indigo" />
          ) : (
            <Image src="/chat-bot-logo.png" alt="Tap to chat" fill className="object-cover" />
          )}
        </motion.button>
      </div>
    </div>
  );
}
