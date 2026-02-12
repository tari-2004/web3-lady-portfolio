"use client";
import { motion } from "framer-motion";

export default function Web3Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-[#BD00FF]/30 bg-[#BD00FF]/10 backdrop-blur-md">
            <span className="text-[#BD00FF] text-[10px] font-bold uppercase tracking-[0.3em]">
              Available for Web3 Collaboration
            </span>
          </div>

          <h1 className="text-7xl md:text-[120px] font-extrabold text-white leading-none tracking-tighter mb-8">
            BUILDING THE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#BD00FF] via-[#00F0FF] to-[#BD00FF] bg-[length:200%_auto] animate-gradient">
              ON-CHAIN
            </span> FUTURE.
          </h1>

          <p className="text-white/50 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed mb-12">
            Independent Web3 Developer & UI Architect specializing in 
            <span className="text-white"> DeFi protocols</span> and <span className="text-white">NFT ecosystems</span>.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <button className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-[#00F0FF] transition-all duration-300">
              View DApps
            </button>
            <button className="px-8 py-4 border border-white/10 text-white font-bold rounded-full hover:bg-white/5 backdrop-blur-md transition-all">
              Read Mirror.xyz
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}