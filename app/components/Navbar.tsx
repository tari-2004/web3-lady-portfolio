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
    // Reduced px-6 to px-3 on mobile to give the navbar more room to stretch
    <header className="fixed top-0 inset-x-0 z-[100] px-3 md:px-6 py-4 transition-all duration-500">
      <nav 
        className={`max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8 py-3 md:py-4 rounded-2xl md:rounded-full transition-all duration-500 border ${
          scrolled 
            ? "bg-[#050505]/90 backdrop-blur-xl border-white/10 shadow-2xl" 
            : "bg-transparent border-transparent"
        }`}
      >
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2 md:gap-3 group shrink-0">
          <div className="relative w-7 h-7 md:w-8 md:h-8 bg-indigo-600 rounded-lg flex items-center justify-center transition-transform duration-500 group-hover:rotate-[15deg]">
            <span className="text-white font-black text-xs md:text-sm italic">B</span>
          </div>
          <div className="flex flex-col">
            <span className="text-white font-black tracking-tighter text-xs md:text-base leading-none uppercase">
              BIO <span className="text-indigo-500">FRANCIS</span>
            </span>
          </div>
        </Link>

        {/* NAVIGATION: Hidden on mobile, keeps the center clear */}
        <div className="hidden md:flex items-center gap-8 lg:gap-12">
          {[
            { name: "Solutions", href: "#expertise" },
            { name: "Results", href: "#work" },
            { name: "Influence", href: "#influence" },
            { name: "Contact", href: "#contact" }
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

        {/* CTA: Scaled for Mobile */}
        <div className="flex items-center shrink-0">
          <a
            href="#contact"
            className="group relative px-4 py-2.5 md:px-7 md:py-3 bg-white rounded-sm overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(79,70,229,0.4)] block"
          >
            {/* Text is black by default, turns white on hover fill */}
            <span className="relative z-10 text-white group-hover:text-white text-[10px] md:text-[12px] font-black uppercase tracking-widest transition-colors duration-500">
              Let's Talk
            </span>

            {/* Indigo Fill */}
            <div className="absolute inset-0 bg-indigo-600 scale-x-0 origin-right transition-transform duration-500 ease-out group-hover:scale-x-100 group-hover:origin-left" />
          </a>
        </div>

      </nav>
    </header>
  );
}