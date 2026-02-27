"use client";
import { motion } from "framer-motion";

const stats = [
  { label: "Community Growth", value: "+150%" },
  { label: "Web3 Brands Served", value: "10+" },
  { label: "Ecosystems Built", value: "3+" },
  { label: "Industry Experience", value: "4+ Yrs" },
];

export default function AuthorityStrip() {
  return (
    <div className="w-full relative px-6 -mt-8 z-20"> {/* Negative margin pulls it slightly over the hero for depth */}
      <div className="max-w-7xl mx-auto rounded-3xl bg-white/[0.03] backdrop-blur-md border border-white/10 shadow-2xl">
        <div className="px-8 py-12 md:py-16">
          
          {/* Mobile: 2x2 Grid | Desktop: Balanced Flex Row */}
          <div className="flex flex-wrap justify-between items-center gap-y-12">
            {stats.map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="w-1/2 md:w-auto flex flex-col items-center md:items-start md:px-10 first:pl-0 last:pr-0"
              >
                <div className="flex flex-col items-center md:items-start group">
                  <span className="text-4xl md:text-6xl font-black text-white tracking-tighter group-hover:text-indigo-400 transition-colors duration-500">
                    {stat.value}
                  </span>
                  <span className="text-[9px] md:text-[10px] font-mono uppercase tracking-[0.3em] text-slate-400 mt-3 font-bold">
                    {stat.label}
                  </span>
                </div>
                
                {/* Subtle accent line below the value on mobile */}
                <div className="w-4 h-[2px] bg-indigo-500 mt-4 md:hidden" />
              </motion.div>
            ))}
          </div>
          
        </div>
      </div>
    </div>
  );
}