"use client";
import { motion } from "framer-motion";
import { FiExternalLink, FiAward } from "react-icons/fi";

const publications = [
  { name: "Coinmonks", role: "Contributor", tag: "DeFi Analysis" },
  { name: "Xend Finance", role: "Ecosystem Growth", tag: "L1/L2 Narrative" },
  { name: "Medium Elite", role: "Top Writer", tag: "Bitcoin & Tech" },
  { name: "Cubed", role: "Technical Writer", tag: "Web3 Infrastructure" }
];

export default function FeaturedInfluence() {
  return (
    <section className="py-24 bg-[#050505] px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left: The "X-Factor" Content */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-6">
              <FiAward className="text-indigo-500 text-xs" />
              <span className="text-[10px] font-mono text-indigo-400 uppercase tracking-widest">Global Influence</span>
            </div>
            <h2 className="text-4xl font-bold text-white tracking-tighter mb-6">
              Bridging the gap for the <br />
              <span className="text-slate-500 italic">Next Billion Users.</span>
            </h2>
            <p className="text-slate-400 leading-relaxed mb-8">
              Based in Nigeria, I specialize in localizing global Web3 narratives for emerging markets. 
              My work ensures that complex decentralized protocols resonate with the culture and 
              economic realities of the African continent and beyond.
            </p>
          </div>

          {/* Right: Publication Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4">
            {publications.map((pub, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-indigo-500/30 transition-all group"
              >
                <div className="flex justify-between items-start mb-4">
                  <span className="text-[10px] font-mono text-indigo-500 uppercase tracking-widest">{pub.tag}</span>
                  <FiExternalLink className="text-slate-600 group-hover:text-white transition-colors" />
                </div>
                <h4 className="text-xl font-bold text-white mb-1">{pub.name}</h4>
                <p className="text-slate-500 text-xs uppercase tracking-tighter font-medium">{pub.role}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}