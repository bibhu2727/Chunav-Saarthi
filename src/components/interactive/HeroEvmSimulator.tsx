"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ShieldCheck, Printer } from "lucide-react";

const candidates = [
  { id: 1, name: "Arjun Singh", party: "Vikas Party", symbol: "🌸", color: "bg-orange-500" },
  { id: 2, name: "Priya Sharma", party: "Janata Dal", symbol: "✋", color: "bg-blue-600" },
  { id: 3, name: "Mohammed Ali", party: "Kisan Morcha", symbol: "🌾", color: "bg-green-600" },
  { id: 4, name: "None of the Above", party: "NOTA", symbol: "✖️", color: "bg-gray-800" },
];

export default function HeroEvmSimulator() {
  const [votedId, setVotedId] = useState<number | null>(null);
  const [isCasting, setIsCasting] = useState(false);
  const [vvpatState, setVvpatState] = useState<"idle" | "printing" | "showing" | "dropping">("idle");
  const [beep, setBeep] = useState<HTMLAudioElement | null>(null);

  useEffect(() => {
    // We create a beep sound programmatically for the EVM sound effect
    const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioContext) return;
    
    try {
      const ctx = new AudioContext();
      const createBeep = () => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(800, ctx.currentTime);
        gain.gain.setValueAtTime(0.1, ctx.currentTime);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 1.5); // long flat beep like a real EVM
      };
      (window as any).playEvmBeep = createBeep;
    } catch(e) {}
  }, []);

  const handleVote = (id: number) => {
    if (votedId || isCasting) return;
    
    setIsCasting(true);
    setVotedId(id);
    
    // Play EVM Beep
    if (typeof (window as any).playEvmBeep === "function") {
      (window as any).playEvmBeep();
    }

    // Sequence for VVPAT
    setVvpatState("printing");
    setTimeout(() => {
      setVvpatState("showing");
      setTimeout(() => {
        setVvpatState("dropping");
        setTimeout(() => {
          setVvpatState("idle");
          setIsCasting(false);
        }, 1000); // dropping animation time
      }, 7000); // shows for exactly 7 seconds as per ECI rules
    }, 1500); // mechanical printing time
  };

  const selectedCandidate = candidates.find(c => c.id === votedId);

  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8 py-10 perspective-1000">
      
      {/* ===== Electronic Voting Machine (Ballot Unit) ===== */}
      <motion.div 
        initial={{ rotateY: -15, opacity: 0, x: -50 }}
        animate={{ rotateY: 0, opacity: 1, x: 0 }}
        transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
        className="w-full md:w-[60%] bg-[#E8EAE6] rounded-3xl p-6 shadow-2xl border-4 border-[#cfd2cd] relative z-10"
        style={{ boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.4), inset 0 0 20px rgba(0,0,0,0.05)" }}
      >
        <div className="absolute top-0 left-0 right-0 h-3 bg-[#cfd2cd] rounded-t-3xl" />
        <div className="flex justify-between items-center mb-6 pt-2">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.7)]" />
            <span className="text-xs font-bold text-gray-500 tracking-widest uppercase">Ready</span>
          </div>
          <span className="text-xl font-bold font-serif px-4 border border-gray-400 bg-white rounded shadow-inner text-black">
            BALLOT UNIT
          </span>
          <ShieldCheck className="text-gray-400 w-6 h-6" />
        </div>

        <div className="space-y-3 bg-white p-4 rounded-xl border-2 border-gray-300 shadow-inner">
          {candidates.map((cand, idx) => (
            <div key={cand.id} className="flex items-stretch justify-between h-16 border rounded bg-[#f8f9fa] overflow-hidden group">
              <div className="w-12 bg-gray-200 border-r flex items-center justify-center font-bold text-gray-500">
                {idx + 1}
              </div>
              <div className="flex-1 px-4 flex items-center justify-between border-r text-black">
                <div className="flex flex-col">
                  <span className="font-bold text-lg">{cand.name}</span>
                  <span className="text-xs text-gray-500 font-medium uppercase">{cand.party}</span>
                </div>
                <div className="text-3xl filter drop-shadow-md">{cand.symbol}</div>
              </div>
              <div className="w-24 bg-gray-200 flex items-center justify-center border-l rounded-r relative overflow-hidden">
                {/* Status LED */}
                <div className={`absolute left-3 w-5 h-2 rounded-sm transition-all duration-300 ${votedId === cand.id ? "bg-red-600 shadow-[0_0_12px_rgba(220,38,38,1)]" : "bg-red-900/20"}`} />
                {/* The Blue Button */}
                <button 
                  onClick={() => handleVote(cand.id)}
                  disabled={votedId !== null}
                  className={`w-12 h-8 rounded-md shadow-[0_4px_0_rgba(17,24,39,1)] transition-all active:shadow-[0_0px_0_rgba(17,24,39,1)] active:translate-y-1 relative
                    ${votedId !== null ? "bg-blue-800 opacity-50 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-500"}`}
                >
                  <div className="absolute inset-0 rounded-md bg-white/20 h-1/3" />
                </button>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-[10px] text-gray-400 mt-4 font-medium uppercase tracking-widest">
          Election Commission of India - Demo
        </p>
      </motion.div>

      {/* ===== VVPAT Machine ===== */}
      <motion.div 
        initial={{ rotateY: 15, opacity: 0, x: 50 }}
        animate={{ rotateY: 0, opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2, type: "spring", bounce: 0.4 }}
        className="w-full md:w-[35%] bg-zinc-800 rounded-t-3xl rounded-b-xl p-5 shadow-2xl border-4 border-zinc-700 relative flex flex-col items-center"
      >
        <div className="w-full text-center border-b border-zinc-600 pb-2 mb-4">
          <span className="text-zinc-400 font-bold tracking-widest text-sm">VVPAT</span>
        </div>
        
        {/* VVPAT Window Screen */}
        <div className="w-full h-48 bg-black/60 rounded-lg border-[6px] border-zinc-900 relative shadow-inner overflow-hidden mb-4 flex items-center justify-center">
          
          {vvpatState === "idle" && (
            <div className="text-zinc-600 flex flex-col items-center opacity-50">
              <Printer className="w-10 h-10 mb-2" />
              <span className="text-xs uppercase tracking-widest font-bold">Awaiting Vote</span>
            </div>
          )}

          <AnimatePresence>
            {(vvpatState === "showing" || vvpatState === "dropping") && selectedCandidate && (
              <motion.div 
                initial={{ y: -150, opacity: 0 }}
                animate={{ y: vvpatState === "dropping" ? 150 : 0, opacity: vvpatState === "dropping" ? 0 : 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: vvpatState === "dropping" ? 0.8 : 0.4 }}
                className="w-3/4 bg-[#f4f4f0] shadow-md border-x border-b border-dashed border-gray-400 p-3 h-32 flex flex-col justify-between"
              >
                <div className="text-xs font-mono font-bold text-center border-b border-dashed border-gray-400 pb-1 text-black">
                  SLIP #{Math.floor(Math.random() * 90000) + 10000}
                </div>
                <div className="flex-1 flex flex-col items-center justify-center py-2 text-black">
                  <span className="text-3xl mb-1 filter drop-shadow-sm">{selectedCandidate.symbol}</span>
                  <span className="font-bold text-lg leading-none truncate max-w-full">{selectedCandidate.name}</span>
                </div>
                <div className="text-[10px] text-center font-mono font-bold text-gray-500">
                  VERIFIED - CONFIDENTIAL
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Glare effect */}
          <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/0 pointer-events-none transform -skew-x-12" />
        </div>

        <div className="w-full bg-zinc-900 rounded-md p-3 text-center border border-zinc-700">
          <div className="flex items-center justify-center gap-2 mb-1">
            <div className={`w-3 h-3 rounded-full shadow-[0_0_8px_rgba(255,255,255,0.8)] ${vvpatState !== "idle" ? "bg-white" : "bg-white/20"}`} />
            <span className="text-xs text-white/70 font-semibold tracking-wider">PRINTING</span>
          </div>
          <p className="text-[9px] text-zinc-500">Verifies your vote for exactly 7 seconds</p>
        </div>

        <div className="absolute bottom-[-15px] w-3/4 h-8 bg-zinc-900 rounded-b-xl border-x-4 border-b-4 border-zinc-700" />
      </motion.div>

    </div>
  );
}
