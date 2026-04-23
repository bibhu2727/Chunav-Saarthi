"use client";

import { motion } from "framer-motion";
import { ELECTION_DATA } from "@/lib/data";

export default function VotingProcess() {
  return (
    <section id="vote" className="py-20 px-4 relative overflow-hidden">
      {/* Indian Pattern Background */}
      <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80'%3E%3Cpath d='M40 0 L80 40 L40 80 L0 40Z' fill='none' stroke='%23FF9933' stroke-width='0.5'/%3E%3Ccircle cx='40' cy='40' r='15' fill='none' stroke='%23FF9933' stroke-width='0.5'/%3E%3C/svg%3E\")" }} />

      <div className="max-w-5xl mx-auto relative">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-16">
          <span className="text-peacock font-bold text-sm tracking-widest uppercase">On Election Day</span>
          <h2 className="text-4xl md:text-5xl font-bold text-indigo-deep mt-2">How to Cast Your Vote</h2>
          <p className="text-foreground/50 mt-3 max-w-xl mx-auto">Your 6-step journey from the polling booth entrance to casting a verified vote.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          {ELECTION_DATA.votingProcess.steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex gap-4 items-start group"
            >
              <div className="flex-shrink-0 relative">
                <motion.div whileHover={{ scale: 1.15, rotate: 10 }} className="w-14 h-14 rounded-2xl bg-white border-2 border-indigo/10 flex items-center justify-center text-2xl shadow-md group-hover:border-saffron/40 transition-colors">
                  {step.icon}
                </motion.div>
                <span className="absolute -top-2 -left-2 w-6 h-6 rounded-full indigo-gradient text-white text-[11px] font-bold flex items-center justify-center shadow-md">{i + 1}</span>
              </div>
              <div className="pt-1">
                <h3 className="font-bold text-indigo-deep text-lg mb-1">{step.title}</h3>
                <p className="text-foreground/55 text-sm leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
