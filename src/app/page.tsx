"use client";

import Image from "next/image";

import { motion } from "framer-motion";
import { ArrowRight, Vote, Users, Shield, BookOpen, Phone, ExternalLink } from "lucide-react";
import { ELECTION_DATA } from "@/lib/data";
import ChatAssistant from "@/components/assistant/ChatInterface";
import ElectionTimeline from "@/components/interactive/ElectionTimeline";
import VoterRegistrationGuide from "@/components/interactive/VoterRegistrationGuide";
import VotingProcess from "@/components/interactive/VotingProcess";
import FAQSection from "@/components/interactive/FAQSection";
import HeroEvmSimulator from "@/components/interactive/HeroEvmSimulator";

const stats = [
  { value: "96.88 Cr", label: "Registered Voters", icon: Users },
  { value: "543", label: "Constituencies", icon: Vote },
  { value: "7", label: "Phases", icon: Shield },
  { value: "10.5 L+", label: "Polling Stations", icon: BookOpen },
];

export default function Home() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative min-h-screen flex flex-col">
      {/* ===== Header / Nav ===== */}
      <motion.header initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="sticky top-0 z-50 glass border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 py-5 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Image src="/logo.png" alt="Chunav Saarthi Logo" width={96} height={96} className="rounded-3xl shadow-lg border border-white/30" />
            <div>
              <h1 className="font-bold text-indigo-deep text-2xl md:text-3xl leading-none tracking-tight">Chunav Saarthi</h1>
              <span className="text-xs md:text-sm text-foreground/50 tracking-wider font-medium">चुनाव सारथी • Election Guide</span>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-foreground/60">
            <button onClick={() => scrollTo("evm-sim")} className="hover:text-saffron transition-colors font-bold text-saffron-deep bg-saffron/10 px-3 py-1 rounded-full">EVM Demo</button>
            <button onClick={() => scrollTo("timeline")} className="hover:text-saffron transition-colors">Timeline</button>
            <button onClick={() => scrollTo("register")} className="hover:text-saffron transition-colors">Register</button>
            <button onClick={() => scrollTo("vote")} className="hover:text-saffron transition-colors">Vote</button>
            <button onClick={() => scrollTo("faq")} className="hover:text-saffron transition-colors">FAQ</button>
            <a href={ELECTION_DATA.overview.eciWebsite} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 px-4 py-2 desi-gradient text-white rounded-xl text-xs font-bold shadow-md shadow-saffron/20 hover:shadow-lg transition-shadow">
              ECI Official <ExternalLink className="w-3 h-3" />
            </a>
          </nav>
        </div>
      </motion.header>

      {/* ===== Hero Section ===== */}
      <section className="relative flex flex-col items-center justify-center px-4 pt-20 pb-16 text-center overflow-hidden">
        {/* Decorative Chakra */}
        <div className="absolute top-10 right-10 w-40 h-40 border border-saffron/10 rounded-full animate-spin-slow opacity-20 hidden lg:block" />
        <div className="absolute bottom-10 left-10 w-60 h-60 border border-indigo/5 rounded-full animate-spin-slow opacity-10 hidden lg:block" style={{ animationDirection: "reverse" }} />

        {/* Floating Motifs */}
        <div className="absolute top-20 left-[15%] text-5xl opacity-10 animate-float hidden lg:block">🪷</div>
        <div className="absolute top-40 right-[10%] text-4xl opacity-10 animate-float hidden lg:block" style={{ animationDelay: "2s" }}>🏛️</div>
        <div className="absolute bottom-20 left-[20%] text-4xl opacity-10 animate-float hidden lg:block" style={{ animationDelay: "4s" }}>🇮🇳</div>

        <motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-4xl z-10">
          {/* Badge */}
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.3, type: "spring" }} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-saffron/10 border border-saffron/20 text-saffron-deep font-semibold text-sm mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-india-green opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-india-green" />
            </span>
            Lok Sabha 2024 • Powered by AI
          </motion.div>

          <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-indigo-deep mb-6 leading-[1.1]">
            Your Guide to <br />
            <span className="bg-gradient-to-r from-saffron via-saffron-deep to-terracotta bg-clip-text text-transparent">Indian Democracy</span>
          </h2>

          <p className="text-lg md:text-xl text-foreground/55 mb-10 max-w-2xl mx-auto leading-relaxed">
            Understand voter registration, election timelines, and the voting process — in your language. Ask our AI assistant anything about elections.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.button whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }} onClick={() => scrollTo("register")} className="desi-gradient text-white px-8 py-4 rounded-2xl font-bold text-lg flex items-center gap-3 shadow-xl shadow-saffron/25 hover:shadow-2xl hover:shadow-saffron/30 transition-all">
              Start Your Journey <ArrowRight className="w-5 h-5" />
            </motion.button>
            <a href="tel:1950" className="flex items-center gap-2 text-indigo border-2 border-indigo/15 px-8 py-4 rounded-2xl font-semibold hover:bg-indigo/5 transition-all">
              <Phone className="w-5 h-5" /> Helpline 1950
            </a>
          </div>
        </motion.div>

        {/* Stats Row */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20 max-w-4xl w-full">
          {stats.map((s, i) => (
            <motion.div key={i} whileHover={{ y: -4 }} className="glass p-5 rounded-2xl text-center group cursor-default shadow-lg">
              <s.icon className="w-6 h-6 mx-auto mb-2 text-saffron group-hover:text-saffron-deep transition-colors" />
              <div className="text-2xl md:text-3xl font-bold text-indigo-deep">{s.value}</div>
              <div className="text-xs text-foreground/40 mt-1">{s.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Hero EVM Simulator */}
        <motion.div id="evm-sim" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} className="mt-20 w-full max-w-5xl mx-auto z-20 px-4 md:px-0">
            <h3 className="text-3xl font-bold text-indigo-deep mb-8 flex items-center justify-center gap-3 drop-shadow-md">
              <span className="w-10 h-10 rounded-full bg-saffron text-white flex items-center justify-center text-lg shadow-lg">₹</span>
              Experience the Real EVM
            </h3>
            <div className="relative">
              {/* Floating glow behind EVM */}
              <div className="absolute inset-0 bg-saffron/20 blur-[100px] rounded-full pointer-events-none" />
              <HeroEvmSimulator />
            </div>
        </motion.div>

        {/* Gradient Blobs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-marigold/8 blur-[120px] rounded-full -translate-y-1/3 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo/5 blur-[100px] rounded-full translate-y-1/3 -translate-x-1/3 pointer-events-none" />
      </section>

      {/* Paisley Divider */}
      <div className="paisley-divider" />

      {/* ===== Election Timeline ===== */}
      <ElectionTimeline />

      {/* Paisley Divider */}
      <div className="paisley-divider" />

      {/* ===== Voter Registration ===== */}
      <VoterRegistrationGuide />

      {/* ===== Voting Process ===== */}
      <div className="bg-cream/50 rounded-t-[48px]">
        <VotingProcess />
      </div>

      {/* ===== FAQs ===== */}
      <FAQSection />

      {/* ===== Footer ===== */}
      <footer className="indigo-gradient text-white py-12 px-4 mt-auto">
        <div className="max-w-5xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Image src="/logo.png" alt="Chunav Saarthi Logo" width={56} height={56} className="rounded-xl shadow-sm" />
            <h3 className="text-2xl font-bold">Chunav Saarthi</h3>
          </div>
          <p className="text-white/50 text-sm max-w-md mx-auto mb-6">An educational platform to help Indian citizens understand and participate in the democratic process.</p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-white/60 mb-6">
            <a href={ELECTION_DATA.overview.eciWebsite} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">ECI Official Website</a>
            <a href={ELECTION_DATA.overview.nvspPortal} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">NVSP Portal</a>
            <span>Helpline: 1950</span>
          </div>
          {/* Tricolor Line */}
          <div className="flex h-1 rounded-full overflow-hidden max-w-xs mx-auto mb-6">
            <div className="flex-1 bg-saffron" />
            <div className="flex-1 bg-white" />
            <div className="flex-1 bg-india-green" />
          </div>
          <p className="text-white/30 text-xs">Built for PromptWars Challenge 2 • Data sourced from Election Commission of India</p>
        </div>
      </footer>

      {/* ===== Chat Assistant ===== */}
      <ChatAssistant />
    </div>
  );
}
