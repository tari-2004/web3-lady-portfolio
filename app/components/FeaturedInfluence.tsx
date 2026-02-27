"use client";
import { motion } from "framer-motion";
import { FiExternalLink, FiAward, FiGlobe } from "react-icons/fi";

const publications = [
  { name: "Coinmonks", role: "Contributor", tag: "DeFi Analysis" },
  { name: "Xend Finance", role: "Ecosystem Growth", tag: "L1/L2 Narrative" },
  { name: "Medium Elite", role: "Top Writer", tag: "Bitcoin & Tech" },
  { name: "Cubed", role: "Technical Writer", tag: "Web3 Infrastructure" }
];

export default function FeaturedInfluence() {
  return (
    <section className="py-32 bg-[#050505] px-6 relative overflow-hidden">
      
      {/* Subtle Background Ornament: Represents the "Bridge" */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-1/2 left-[10%] w-[500px] h-[1px] bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent -rotate-45" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* Left: The "X-Factor" Content */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-8">
                <FiGlobe className="text-indigo-500 animate-pulse text-xs" />
                <span className="text-[10px] font-mono text-indigo-400 uppercase tracking-[0.3em]">Emerging Market Specialist</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter leading-none mb-8 uppercase">
                Bridging the <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-slate-400 italic font-light">Gap for the Billion.</span>
              </h2>
              
              <div className="space-y-6">
                <p className="text-slate-400 text-lg leading-relaxed font-light">
                  Based in Nigeria, I specialize in localizing global Web3 narratives for emerging markets. 
                </p>
                <p className="text-slate-500 text-sm leading-relaxed border-l-2 border-indigo-500/30 pl-6 italic">
                  "My work ensures that complex decentralized protocols resonate with the culture and 
                  economic realities of the African continent and beyond."
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right: Publication Grid - Beautified with Glass & Hover Effects */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-5">
            {publications.map((pub, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="p-8 rounded-3xl bg-white/[0.01] border border-white/5 hover:border-indigo-500/40 hover:bg-white/[0.03] transition-all group relative overflow-hidden"
              >
                {/* Visual Accent for Hover */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-600/5 blur-2xl group-hover:bg-indigo-600/20 transition-all" />

                <div className="flex justify-between items-start mb-10 relative z-10">
                  <div className="p-2 rounded-lg bg-indigo-500/5 text-indigo-500 border border-indigo-500/10">
                    <FiAward size={18} />
                  </div>
                  <FiExternalLink size={18} className="text-slate-600 group-hover:text-white group-hover:rotate-12 transition-all duration-300" />
                </div>

                <div className="relative z-10">
                  <span className="text-[9px] font-mono text-slate-500 uppercase tracking-[0.2em] mb-2 block font-bold group-hover:text-indigo-400 transition-colors">
                    {pub.tag}
                  </span>
                  <h4 className="text-2xl font-bold text-white mb-1 tracking-tight group-hover:text-white transition-colors">{pub.name}</h4>
                  <p className="text-slate-500 text-[10px] uppercase tracking-widest font-black">{pub.role}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}