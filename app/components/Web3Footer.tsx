"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FiLinkedin, FiTwitter, FiArrowUp, FiGlobe } from "react-icons/fi";
import { SiMedium } from "react-icons/si"; 
import { FaFacebookF } from "react-icons/fa6"; 

export default function Web3Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socials = [
    { icon: <FiLinkedin />, href: "https://linkedin.com/in/bio-francis", label: "LinkedIn" },
    { icon: <SiMedium />, href: "https://medium.com/@bio-francis", label: "Medium" },
    { icon: <FaFacebookF />, href: "https://facebook.com/your-profile", label: "Facebook" },
    { icon: <FiTwitter />, href: "https://twitter.com/biofrancis", label: "X / Twitter" },
  ];

  return (
    <footer className="bg-[#050505] border-t border-white/5 pt-32 pb-12 px-6 relative overflow-hidden">
      
      {/* Background Ornament: Subtle Indigo Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-32">
          
          {/* BRAND COLUMN: Enhanced with a "Live" status */}
          <div className="md:col-span-5">
            <Link href="/" className="flex items-center gap-4 mb-8 group">
              <div className="w-10 h-10 bg-white text-black rounded-xl flex items-center justify-center transition-all duration-500 group-hover:bg-indigo-500 group-hover:text-white group-hover:rotate-[360deg]">
                <span className="font-black text-sm italic">B</span>
              </div>
              <span className="text-white font-black tracking-tighter text-2xl uppercase group-hover:text-indigo-400 transition-colors duration-500">
                Bio <span className="text-slate-600 italic font-light">Francis.</span>
              </span>
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed max-w-sm mb-8">
              Strategic content marketing and ecosystem building for Web3 protocols. 
              Bridging complexity with human-centric narratives.
            </p>
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/[0.02] border border-white/5 rounded-full">
               <FiGlobe className="text-indigo-500 animate-pulse" />
               <span className="text-[9px] font-mono text-slate-400 uppercase tracking-widest font-bold">Nigeria // Remote Worldwide</span>
            </div>
          </div>

          {/* QUICK LINKS: Interactive Hover */}
          <div className="md:col-span-3">
            <h4 className="text-white font-bold text-[10px] uppercase tracking-[0.4em] mb-10 text-indigo-500">Navigation</h4>
            <ul className="space-y-5">
              {["Expertise", "Work", "Insights", "Contact"].map((item) => (
                <li key={item} className="group overflow-hidden">
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="flex items-center gap-7 text-slate-500 text-xs hover:text-white transition-all uppercase tracking-[0.2em] font-bold"
                  >
                    <span className="h-[1px] w-0 bg-indigo-500 group-hover:w-4 transition-all duration-300" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* SOCIALS: Beautified Halo Morph */}
          <div className="md:col-span-4 flex flex-col md:items-end">
            <h4 className="text-white font-bold text-[10px] uppercase tracking-[0.4em] mb-10 text-indigo-500">
              Connect
            </h4>
            <div className="flex flex-wrap md:justify-end gap-6">
              {socials.map((social, i) => (
                <motion.a 
                  key={i} 
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial="rest"
                  whileHover="hover"
                  whileTap="tap"
                  className="group relative w-14 h-14 flex items-center justify-center"
                >
                  {/* BEAUTIFIED HALO: Using Glass instead of just blur */}
                  <motion.div 
                    variants={{
                      rest: { scale: 0.8, opacity: 0 },
                      hover: { scale: 1.2, opacity: 1 }
                    }}
                    className="absolute inset-0 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 backdrop-blur-sm pointer-events-none" 
                  />
                  
                  {/* MAIN BUTTON: High Contrast */}
                  <motion.div
                    variants={{
                      rest: { y: 0 },
                      hover: { y: -5 }
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    className="relative z-10 w-full h-full rounded-2xl border border-white/5 bg-white/[0.03] flex items-center justify-center text-slate-400 group-hover:border-indigo-500/50 group-hover:text-white transition-all duration-300"
                  >
                    <span className="text-2xl">{social.icon}</span>
                  </motion.div>

                  {/* FLOATING LABEL: Refined */}
                  <motion.span 
                    variants={{
                      rest: { opacity: 0, y: 10 },
                      hover: { opacity: 1, y: 18 }
                    }}
                    className="absolute -bottom-10 whitespace-nowrap text-[8px] font-mono font-black text-indigo-400 uppercase tracking-[0.4em] pointer-events-none"
                  >
                    {social.label}
                  </motion.span>
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* BOTTOM BAR: Minimalist & Clean */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-6">
            <p className="text-slate-600 text-[9px] uppercase tracking-[0.3em] font-bold">
              © {new Date().getFullYear()} Bio Francis
            </p>
            <div className="h-4 w-[1px] bg-white/5 hidden md:block" />
            <p className="text-slate-700 text-[9px] uppercase tracking-[0.3em] italic">
              Narrative Architecture
            </p>
          </div>
          
          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-4 text-slate-500 hover:text-white transition-all text-[9px] uppercase tracking-[0.4em] font-black"
          >
            Top <FiArrowUp className="group-hover:-translate-y-2 transition-transform duration-500 p-1 rounded-full border border-white/10 group-hover:border-indigo-500 text-xl" />
          </button>
        </div>
      </div>
    </footer>
  );
}