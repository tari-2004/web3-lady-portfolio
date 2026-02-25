"use client";
import { motion } from "framer-motion";

const stats = [
  { label: "Articles Published", value: "150+" },
  { label: "Medium Top Writer", value: "3x" },
  { label: "Project Reach", value: "50k+" },
  { label: "Web3 Experience", value: "4+ Yrs" },
];

export default function AuthorityStrip() {
  return (
    <div className="w-full bg-[#050505] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-12">
        
        {/* Mobile: 2x2 Grid | Desktop: Balanced Flex Row */}
        <div className="flex flex-wrap justify-between items-center gap-y-12">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="w-1/2 md:w-auto flex flex-col items-center md:items-start md:px-8 first:pl-0 last:pr-0"
            >
              <div className="flex flex-col items-center md:items-start group">
                <span className="text-3xl md:text-5xl font-bold text-white tracking-tight group-hover:text-indigo-400 transition-colors duration-500">
                  {stat.value}
                </span>
                <span className="text-[9px] md:text-[10px] font-mono uppercase tracking-[0.4em] text-slate-500 mt-2">
                  {stat.label}
                </span>
              </div>
              
              {/* Subtle accent line below the value on mobile */}
              <div className="w-4 h-[1px] bg-indigo-500/30 mt-4 md:hidden" />
            </motion.div>
          ))}
        </div>
        
      </div>
    </div>
  );
}