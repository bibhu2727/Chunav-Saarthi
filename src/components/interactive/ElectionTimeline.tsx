"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ELECTION_DATA } from "@/lib/data";

const phaseColors = [
  "bg-saffron", "bg-indigo", "bg-india-green", "bg-terracotta",
  "bg-peacock", "bg-marigold", "bg-lotus-pink"
];

export default function ElectionTimeline() {
  const [activeMode, setActiveMode] = useState<"2024" | "2026">("2024");
  const is2024 = activeMode === "2024";
  
  const currentPhases = is2024 ? ELECTION_DATA.phases : ELECTION_DATA.stateElections2026.phases;
  const currentResults = is2024 ? ELECTION_DATA.results : ELECTION_DATA.stateElections2026.results;

  return (
    <section id="timeline" className="py-20 px-4 max-w-5xl mx-auto w-full">
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-10">
        <span className="text-saffron font-bold text-sm tracking-widest uppercase">Timeline</span>
        
        <h2 className="text-4xl md:text-5xl font-bold text-indigo-deep mt-2">
          {is2024 ? "7 Phases of Lok Sabha 2024" : "State Assembly Elections 2026"}
        </h2>
        
        <p className="text-foreground/50 mt-3 max-w-xl mx-auto min-h-[48px]">
          {is2024 
            ? `The world's largest democratic exercise, conducted across ${ELECTION_DATA.overview.totalConstituencies} constituencies with ${ELECTION_DATA.overview.totalVoters} registered voters.` 
            : ELECTION_DATA.stateElections2026.overview
          }
        </p>

        {/* Toggle Buttons */}
        <div className="flex justify-center items-center mt-8 gap-4">
          <button 
            onClick={() => setActiveMode("2024")}
            className={`px-6 py-2 rounded-full font-bold transition-all ${activeMode === "2024" ? "bg-indigo text-white shadow-lg shadow-indigo/30" : "bg-white text-indigo-deep border border-indigo/20 hover:bg-slate-50"}`}
          >
            2024 Lok Sabha
          </button>
          <button 
            onClick={() => setActiveMode("2026")}
            className={`px-6 py-2 rounded-full font-bold transition-all ${activeMode === "2026" ? "bg-saffron text-white shadow-lg shadow-saffron/30" : "bg-white text-saffron border border-saffron/20 hover:bg-orange-50"}`}
          >
            Upcoming 2026
          </button>
        </div>
      </motion.div>

      <div className="relative">
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-saffron via-indigo to-india-green -translate-x-1/2 hidden md:block" />

        <AnimatePresence mode="wait">
          <motion.div 
            key={activeMode}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4 }}
            className="space-y-8 md:space-y-12"
          >
            {currentPhases.map((phase, i) => (
              <motion.div
                key={`${activeMode}-${phase.phase}`}
                initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className={`flex flex-col md:flex-row items-center gap-4 md:gap-0 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                {/* Card */}
                <div className="w-full md:w-[44%]">
                  <motion.div whileHover={{ y: -4, boxShadow: "0 20px 40px rgba(26,35,126,0.1)" }} className="glass p-6 rounded-2xl border-indigo/5 cursor-default">
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-10 h-10 rounded-xl ${phaseColors[i % phaseColors.length]} text-white flex items-center justify-center font-bold text-sm shadow-md`}>
                        P{phase.phase}
                      </div>
                      <div>
                        <h3 className="font-bold text-indigo-deep text-lg">Phase {phase.phase}</h3>
                        <p className="text-saffron-deep font-semibold text-sm">{phase.date}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 mb-3">
                      <div className="text-center">
                        <span className="text-2xl font-bold text-indigo">{phase.constituencies}</span>
                        <p className="text-[10px] text-foreground/40 uppercase tracking-wide">Seats</p>
                      </div>
                      <div className="h-8 w-px bg-indigo/10" />
                      <p className="text-xs text-foreground/50 leading-relaxed flex-1">
                        {phase.states.split(",").slice(0, 4).join(", ")}
                        {phase.states.split(",").length > 4 ? ` +${phase.states.split(",").length - 4} more` : ""}
                      </p>
                    </div>
                  </motion.div>
                </div>

                {/* Center Dot */}
                <div className="hidden md:flex w-[12%] justify-center">
                  <motion.div whileHover={{ scale: 1.3 }} className={`w-5 h-5 rounded-full ${phaseColors[i % phaseColors.length]} border-4 border-background shadow-lg z-10`} />
                </div>

                {/* Spacer */}
                <div className="hidden md:block w-[44%]" />
              </motion.div>
            ))}

            {/* Results Day */}
            <motion.div 
              key={`results-${activeMode}`}
              initial={{ opacity: 0, scale: 0.8 }} 
              whileInView={{ opacity: 1, scale: 1 }} 
              viewport={{ once: true }} 
              className="flex justify-center pt-4"
            >
              <div className="rangoli-card rounded-2xl p-[3px]">
                <div className="bg-background rounded-2xl px-8 py-6 text-center">
                  <span className="text-3xl">🏆</span>
                  <h3 className="font-bold text-indigo-deep text-xl mt-2">Results Day</h3>
                  <p className="text-saffron-deep font-bold text-lg">{currentResults.date}</p>
                  <p className="text-foreground/40 text-sm">{currentResults.time}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
