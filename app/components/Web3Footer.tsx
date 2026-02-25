"use client";

import { motion } from "framer-motion";
import Link from "next/link";
// Separated imports to fix the Build Error
import { FiLinkedin, FiTwitter, FiArrowUp } from "react-icons/fi";
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
    <footer className="bg-[#050505] border-t border-white/5 pt-24 pb-12 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24">
          
          {/* BRAND COLUMN */}
          <div className="md:col-span-5">
            <Link href="/" className="flex items-center gap-3 mb-8 group">
              <div className="w-8 h-8 bg-indigo-600 rounded flex items-center justify-center transition-transform group-hover:rotate-12">
                <span className="text-white font-black text-xs italic">B</span>
              </div>
              <span className="text-white font-bold tracking-[0.2em] text-lg uppercase group-hover:text-indigo-400 transition-colors duration-500">
                Bio <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-500 to-slate-700">Francis</span>
              </span>
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed max-w-sm">
              Strategic content marketing and ecosystem building for Web3 protocols. 
              Bridging complexity with human-centric narratives.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div className="md:col-span-3">
            <h4 className="text-white font-bold text-[10px] uppercase tracking-[0.3em] mb-8">Navigation</h4>
            <ul className="space-y-4">
              {["Expertise", "Work", "Insights"].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="text-slate-400 text-xs hover:text-indigo-400 transition-colors uppercase tracking-widest"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* SOCIALS - Halo Morph Effect */}
          <div className="md:col-span-4 flex flex-col md:items-end">
            <h4 className="text-white font-bold text-[10px] uppercase tracking-[0.3em] mb-8">
              Connect
            </h4>
            <div className="flex flex-wrap md:justify-end gap-5">
              {socials.map((social, i) => (
                <motion.a 
                  key={i} 
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial="rest"
                  whileHover="hover"
                  whileTap="tap"
                  className="group relative w-12 h-12 flex items-center justify-center transform-gpu"
                >
                  {/* HALO Glow */}
                  <motion.div 
                    variants={{
                      rest: { scale: 0.8, opacity: 0 },
                      hover: { scale: 1.4, opacity: 0.4 }
                    }}
                    className="absolute inset-0 rounded-full bg-indigo-500 blur-xl pointer-events-none" 
                  />
                  
                  {/* MAIN BUTTON */}
                  <motion.div
                    variants={{
                      rest: { y: 0, scale: 1 },
                      hover: { y: -4, scale: 1.05 }
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    className="relative z-10 w-full h-full rounded-full border border-white/10 bg-[#050505] flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-all duration-300"
                  >
                    <span className="text-xl relative z-20">{social.icon}</span>
                  </motion.div>

                  {/* FLOATING LABEL */}
                  <motion.span 
                    variants={{
                      rest: { opacity: 0, y: 0 },
                      hover: { opacity: 1, y: 12 }
                    }}
                    className="absolute -bottom-8 whitespace-nowrap text-[8px] font-mono font-bold text-indigo-400 uppercase tracking-[0.3em] pointer-events-none"
                  >
                    {social.label}
                  </motion.span>
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-slate-600 text-[10px] uppercase tracking-widest">
            © {new Date().getFullYear()} Bio Francis. Narrative Architect.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-3 text-slate-500 hover:text-white transition-colors text-[10px] uppercase tracking-[0.3em]"
          >
            Back to top <FiArrowUp className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}