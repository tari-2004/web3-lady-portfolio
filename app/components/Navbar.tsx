"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Web3Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-[100] px-6 py-4 transition-all duration-500">
      <nav 
        className={`max-w-7xl mx-auto flex items-center justify-between px-8 py-4 rounded-full transition-all duration-500 border ${
          scrolled 
            ? "bg-[#050505]/80 backdrop-blur-xl border-white/10 shadow-2xl" 
            : "bg-transparent border-transparent"
        }`}
      >
        {/* LOGO: Clean & Bold */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center transition-transform duration-500 group-hover:rotate-[15deg]">
            <span className="text-white font-black text-sm italic">B</span>
            <div className="absolute inset-0 bg-indigo-400 blur-md opacity-0 group-hover:opacity-40 transition-opacity" />
          </div>
          <div className="flex flex-col">
            <span className="text-white font-black tracking-tighter text-base leading-none">
              BIO <span className="text-indigo-500">FRANCIS</span>
            </span>
            <span className="text-[7px] text-slate-500 font-mono tracking-[0.3em] uppercase">
              Growth Architect
            </span>
          </div>
        </Link>

        {/* NAVIGATION: Minimalist & Spaced */}
        <div className="hidden md:flex items-center gap-12">
          {[
            { name: "Solutions", href: "#expertise" },
            { name: "Results", href: "#work" },
            { name: "Insights", href: "#writing" }
          ].map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="group relative text-[9px] font-bold text-slate-400 hover:text-white transition-colors duration-300 uppercase tracking-[0.4em]"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-indigo-500 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* CTA: High Contrast */}
        <div className="flex items-center">
          <button
            className="group relative px-7 py-3 bg-white text-black text-[9px] font-black uppercase tracking-widest rounded-full overflow-hidden transition-all duration-300 hover:text-white"
          >
            <span className="relative z-10">Start a Project</span>
            <div className="absolute inset-0 bg-indigo-600 scale-x-0 origin-right transition-transform duration-500 group-hover:scale-x-100 group-hover:origin-left" />
          </button>
        </div>

      </nav>
    </header>
  );
}