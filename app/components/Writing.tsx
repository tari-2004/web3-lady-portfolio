"use client";

import { motion } from "framer-motion";
import { FiArrowUpRight, FiBookOpen } from "react-icons/fi";

const articles = [
  {
    title: "The Zero-Knowledge Revolution",
    date: "Feb 2026",
    readTime: "8 min",
    tag: "Technical",
  },
  {
    title: "Liquid Staking & The Future of PoS",
    date: "Jan 2026",
    readTime: "12 min",
    tag: "Protocol",
  },
  {
    title: "Designing for the Next Billion Users",
    date: "Dec 2025",
    readTime: "5 min",
    tag: "UX/UI",
  },
];

export default function Writing() {
  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="text-[#00F0FF] font-mono text-xs tracking-[0.3em] uppercase block mb-4">
            // Thought Leadership
          </span>
          <h2 className="text-5xl md:text-6xl font-black text-white tracking-tighter uppercase">
            SIGNAL <span className="text-white/20">VS</span> NOISE.
          </h2>
        </div>

        <div className="space-y-4">
          {articles.map((article, i) => (
            <motion.div
              key={i}
              whileHover={{ x: 10 }}
              className="group flex flex-col md:flex-row md:items-center justify-between p-8 rounded-3xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-[#BD00FF]/30 transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-center gap-6 mb-4 md:mb-0">
                <div className="w-12 h-12 rounded-2xl bg-[#BD00FF]/10 flex items-center justify-center text-[#BD00FF] group-hover:bg-[#BD00FF] group-hover:text-white transition-all">
                  <FiBookOpen className="text-xl" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-[#00F0FF] transition-colors">
                    {article.title}
                  </h3>
                  <div className="flex gap-4 mt-1 text-[10px] font-black uppercase tracking-widest text-white/30">
                    <span>{article.date}</span>
                    <span className="text-[#BD00FF]">// {article.tag}</span>
                    <span>{article.readTime}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <span className="hidden md:block text-[10px] font-black uppercase tracking-widest text-white/20 group-hover:text-white transition-colors">
                  Read Article
                </span>
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white group-hover:border-[#00F0FF] group-hover:text-[#00F0FF] transition-all">
                  <FiArrowUpRight />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Ecosystem Marquee */}
        <div className="mt-24 pt-12 border-t border-white/5">
          <p className="text-center text-[10px] font-black uppercase tracking-[0.4em] text-white/20 mb-10">
            Contributing to the Ecosystem
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
            {/* Replace with real Web3 logos later */}
            <span className="text-2xl font-black text-white italic">AAVE</span>
            <span className="text-2xl font-black text-white italic">UNISWAP</span>
            <span className="text-2xl font-black text-white italic">POLYGON</span>
            <span className="text-2xl font-black text-white italic">OPTIMISM</span>
          </div>
        </div>
      </div>
    </section>
  );
}