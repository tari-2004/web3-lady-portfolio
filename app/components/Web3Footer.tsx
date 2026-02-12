"use client";

import { motion } from "framer-motion";
// Remove SiMirror, add FiEdit3
import { FiGithub, FiTwitter, FiArrowUpRight, FiGlobe, FiEdit3 } from "react-icons/fi";

export default function Web3Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative pt-24 pb-12 px-6 overflow-hidden bg-black text-white">
      {/* ... rest of the code ... */}

      {/* Update the icon mapping inside the Connect column: */}
      <div className="flex flex-wrap gap-4">
        {[FiGithub, FiTwitter, FiEdit3, FiGlobe].map((Icon, i) => (
          <motion.a
            key={i}
            href="#"
            whileHover={{ y: -5, scale: 1.1 }}
            className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-xl text-white/40 hover:text-white hover:border-[#00F0FF]/50 hover:shadow-[0_0_20px_rgba(0,240,255,0.2)] transition-all"
          >
            <Icon />
          </motion.a>
        ))}
      </div>
      
      {/* ... rest of the code ... */}
    </footer>
  );
}