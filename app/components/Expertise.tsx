"use client";

import { motion } from "framer-motion";

const services = [
  {
    number: "01",
    title: "Organic Lead Generation",
    description: "Architecting content funnels that convert passive scrolling into active engagement without a single dollar in ad spend.",
  },
  {
    number: "02",
    title: "Web3 Education",
    description: "Simplifying complex blockchain protocols into digestible, high-impact learning experiences for emerging markets.",
  },
  {
    number: "03",
    title: "Community Architecture",
    description: "Building resilient digital ecosystems through emotional marketing and strategic cross-platform positioning.",
  },
];

export default function Expertise() {
  return (
    <section id="expertise" className="py-32 px-6 bg-[#050505] relative overflow-hidden">
      
      {/* BEAUTY TOUCH: Ghost Grid Background */}
      <div className="absolute inset-0 z-0 opacity-[0.03] [mask-image:radial-gradient(ellipse_at_center,black,transparent)] pointer-events-none">
        <div 
          className="absolute inset-0" 
          style={{ 
            backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', 
            backgroundSize: '60px 60px' 
          }} 
        />
      </div>

      {/* BEAUTY TOUCH: Vertical Design Accent (Guides the eye) */}
      <div className="absolute left-12 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-indigo-500/20 to-transparent hidden xl:block" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-8">
          <div className="max-w-2xl">
            <span className="text-indigo-500 font-mono text-[10px] tracking-[0.4em] uppercase block mb-6">
              // Core Expertise
            </span>
            <h2 className="text-4xl md:text-7xl font-bold text-white tracking-tighter leading-[0.9] uppercase">
              Strategies for <br />
              <span className="text-slate-600 italic">Unfiltered Growth.</span>
            </h2>
          </div>
          <div className="text-slate-500 font-mono text-[9px] uppercase tracking-[0.3em] leading-relaxed hidden md:block border-l border-white/10 pl-6">
            Data-Driven <br /> Impact Over <br /> Speculative Hype.
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-white/10 border border-white/10">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-[#050505] p-12 group relative overflow-hidden transform-gpu"
            >
              {/* Refined Glow: Now follows a subtle scale animation */}
              <div 
                className="absolute -right-4 -top-4 w-32 h-32 bg-indigo-600/10 blur-[50px] opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-700 rounded-full pointer-events-none" 
              />
              
              {/* Number: Now uses a thinner, more elegant weight that bolds on hover */}
              <span className="text-indigo-500/20 font-light font-mono text-5xl mb-12 block group-hover:text-indigo-500 group-hover:font-black transition-all duration-500">
                {service.number}
              </span>
              
              <h3 className="text-2xl font-bold text-white mb-6 tracking-tight group-hover:translate-x-1 transition-transform duration-300">
                {service.title}
              </h3>
              
              <p className="text-slate-400 leading-relaxed font-light text-sm md:text-base opacity-80 group-hover:opacity-100 transition-opacity">
                {service.description}
              </p>

              {/* Bottom accent line: Animated "Draw" effect */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-indigo-500 group-hover:w-full transition-all duration-700 ease-in-out" />
              
              {/* Corner accent: Small detail for that premium feel */}
              <div className="absolute top-4 right-4 w-2 h-2 border-t border-r border-white/0 group-hover:border-white/20 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}