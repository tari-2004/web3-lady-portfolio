"use client";

import { motion } from "framer-motion";
import { SiEthereum, SiSolidity, SiNextdotjs, SiTailwindcss, SiRust, SiTypescript } from "react-icons/si";

const skills = [
  { name: "Solidity", icon: <SiSolidity />, color: "#AAADB3", level: "90%" },
  { name: "Ethereum", icon: <SiEthereum />, color: "#627EEA", level: "95%" },
  { name: "Rust", icon: <SiRust />, color: "#CE412B", level: "75%" },
  { name: "Next.js", icon: <SiNextdotjs />, color: "#FFFFFF", level: "90%" },
  { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6", level: "85%" },
  { name: "Tailwind", icon: <SiTailwindcss />, color: "#06B6D4", level: "95%" },
];

export default function TechStack() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          
          {/* LEFT: TEXT CONTENT */}
          <div>
            <span className="text-[#BD00FF] font-mono text-xs tracking-[0.3em] uppercase block mb-4">
              // Tech Stack
            </span>
            <h2 className="text-5xl md:text-6xl font-black text-white tracking-tighter uppercase mb-6">
              THE <span className="text-white/20">ENGINE</span> <br /> 
              BEHIND THE <span className="italic">CODE.</span>
            </h2>
            <p className="text-white/50 text-lg leading-relaxed mb-8 max-w-md">
              Specializing in gas-optimized smart contracts and high-performance 
              decentralized applications that don't sacrifice user experience.
            </p>
            
            <div className="flex flex-col gap-6">
              {skills.slice(0, 3).map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-white/70">
                    <span>{skill.name}</span>
                    <span className="text-[#00F0FF]">{skill.level}</span>
                  </div>
                  <div className="h-[2px] w-full bg-white/5 overflow-hidden">
                    <motion.div 
                      initial={{ x: "-100%" }}
                      whileInView={{ x: "0%" }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-[#BD00FF] to-[#00F0FF]"
                      style={{ width: skill.level }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: ICON GRID */}
          <div className="relative">
            {/* Background Decorative Circles */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-white/5 rounded-full animate-pulse" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] border border-white/5 rounded-full" />

            <div className="grid grid-cols-3 gap-4 relative z-10">
              {skills.map((skill, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="aspect-square rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center text-4xl backdrop-blur-md transition-all hover:border-[#BD00FF]/50 hover:shadow-[0_0_30px_rgba(189,0,255,0.2)]"
                  style={{ color: skill.color }}
                >
                  {skill.icon}
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}