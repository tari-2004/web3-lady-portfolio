"use client";

import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";

const projects = [
  {
    title: "Aura Exchange",
    type: "DEX Protocol",
    status: "Mainnet",
    desc: "A decentralized liquidity layer built on Arbitrum with zero-slippage routing.",
    tech: ["Solidity", "TypeScript", "Ethers.js"],
  },
  {
    title: "Nebula NFT",
    type: "Generative Art",
    status: "Audited",
    desc: "Dynamic metadata engine allowing NFTs to evolve based on on-chain activity.",
    tech: ["ERC-721", "Hardhat", "IPFS"],
  },
  {
    title: "Quantum Vaults",
    type: "Yield Aggregator",
    status: "Beta",
    desc: "AI-driven yield optimization strategy for multi-chain stablecoin farming.",
    tech: ["Vyper", "React", "Graph Protocol"],
  },
];

export default function ProjectGrid() {
  return (
    <section id="projects" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div>
            <span className="text-[#00F0FF] font-mono text-xs tracking-[0.3em] uppercase block mb-2">
              // Proof of Work
            </span>
            <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase">
              Project <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#BD00FF] to-[#00F0FF]">Archive.</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="relative group p-8 rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-xl overflow-hidden"
            >
              {/* Hover Gradient Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#BD00FF] to-[#00F0FF] opacity-0 group-hover:opacity-20 transition-opacity blur-xl" />

              <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <div className="px-3 py-1 rounded-full border border-[#00F0FF]/30 bg-[#00F0FF]/10">
                    <span className="text-[#00F0FF] text-[10px] font-bold uppercase tracking-widest">{project.status}</span>
                  </div>
                  <div className="flex gap-4 text-white/40">
                    <FiGithub className="hover:text-white cursor-pointer transition-colors" />
                    <FiExternalLink className="hover:text-[#00F0FF] cursor-pointer transition-colors" />
                  </div>
                </div>

                <h3 className="text-2xl font-black text-white uppercase mb-2 tracking-tight">
                  {project.title}
                </h3>
                <p className="text-white/20 text-[10px] font-black uppercase tracking-[0.2em] mb-4">
                  {project.type}
                </p>
                <p className="text-white/60 text-sm leading-relaxed mb-8">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="text-[9px] font-bold text-white/30 border border-white/5 px-2 py-1 rounded-md uppercase">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}