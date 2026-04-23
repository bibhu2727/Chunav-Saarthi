"use client";

import { motion } from "framer-motion";
import { ELECTION_DATA } from "@/lib/data";
import { ClipboardCheck, Globe, Edit3, Upload, Search, CreditCard } from "lucide-react";

const icons = [ClipboardCheck, Globe, Edit3, Upload, Search, CreditCard];

export default function VoterRegistrationGuide() {
  return (
    <section id="register" className="py-20 px-4 max-w-6xl mx-auto">
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-16">
        <span className="text-india-green font-bold text-sm tracking-widest uppercase">Step-by-Step</span>
        <h2 className="text-4xl md:text-5xl font-bold text-indigo-deep mt-2">Voter Registration Guide</h2>
        <p className="text-foreground/50 mt-3 max-w-xl mx-auto">Register to vote in 6 simple steps. Get your EPIC (Voter ID) and become part of the world&apos;s largest democracy.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ELECTION_DATA.voterRegistration.steps.map((step, i) => {
          const Icon = icons[i];
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="glass rounded-2xl p-6 relative overflow-hidden group cursor-default"
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-saffron/5 rounded-bl-[60px] group-hover:bg-saffron/10 transition-colors" />
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-xl desi-gradient text-white flex items-center justify-center shadow-md shadow-saffron/20">
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-bold text-saffron bg-saffron/10 px-2 py-0.5 rounded-full">STEP {i + 1}</span>
              </div>
              <h3 className="font-bold text-indigo-deep text-lg mb-2">{step.title}</h3>
              <p className="text-foreground/55 text-sm leading-relaxed">{step.description}</p>
            </motion.div>
          );
        })}
      </div>

      {/* CTA */}
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mt-12">
        <a href={ELECTION_DATA.overview.nvspPortal} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 desi-gradient text-white font-bold rounded-2xl shadow-lg shadow-saffron/20 hover:shadow-xl hover:shadow-saffron/30 transition-all text-lg">
          Register Now on NVSP Portal
          <Globe className="w-5 h-5" />
        </a>
        <p className="text-foreground/40 text-sm mt-3">Or call the ECI Helpline: <strong className="text-indigo">1950</strong></p>
      </motion.div>
    </section>
  );
}
