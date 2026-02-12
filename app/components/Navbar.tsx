"use client";
import { motion } from "framer-motion";

export default function Web3Navbar() {
  return (
    <nav className="fixed top-0 inset-x-0 z-[100] bg-black/20 backdrop-blur-xl border-b border-white/5 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* LOGO: Clean & Techy */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-[#BD00FF] to-[#00F0FF] rounded-lg rotate-12" />
          <span className="text-white font-bold tracking-widest text-lg">WEB3.LADY</span>
        </div>

        {/* LINKS */}
        <div className="hidden md:flex items-center gap-8">
          {["Ecosystem", "Projects", "Governance"].map((link) => (
            <a key={link} href="#" className="text-xs font-medium text-white/50 hover:text-white transition-colors uppercase tracking-widest">
              {link}
            </a>
          ))}
        </div>

        {/* THE "CONNECT" BUTTON */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-2 bg-gradient-to-r from-[#BD00FF] to-[#00F0FF] rounded-full text-white text-[10px] font-black uppercase tracking-widest shadow-[0_0_20px_rgba(189,0,255,0.3)]"
        >
          Connect Wallet
        </motion.button>
      </div>
    </nav>
  );
}