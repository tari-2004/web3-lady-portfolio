"use client";
import Link from "next/link";

export default function Web3Navbar() {
  return (
    // OPTIMIZATION: 
    // 1. Reduced backdrop-blur to 'sm' for better performance on scroll.
    // 2. transform-gpu and will-change-transform isolate the nav into its own GPU layer.
    <nav className="fixed top-0 inset-x-0 z-[100] bg-[#050505]/70 backdrop-blur-sm border-b border-white/5 px-6 py-5 transform-gpu will-change-transform">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-7 h-7 bg-indigo-600 rounded flex items-center justify-center transition-colors duration-300 group-hover:bg-indigo-500">
            <span className="text-white font-black text-xs italic">B</span>
          </div>
          <span className="text-white font-bold tracking-[0.2em] text-sm uppercase">
            Bio <span className="text-slate-500 font-light">Francis</span>
          </span>
        </Link>

        {/* NAVIGATION LINKS */}
        <div className="hidden md:flex items-center gap-10">
          {[
            { name: "Expertise", href: "#expertise" },
            { name: "Case Studies", href: "#work" },
            { name: "Insights", href: "#writing" }
          ].map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-[10px] font-bold text-slate-400 hover:text-indigo-400 transition-colors duration-200 uppercase tracking-[0.2em]"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* THE NEW STRATEGIC CTA */}
        <div className="flex items-center gap-6">
          {/* OPTIMIZATION: Switched motion.button to standard button with CSS hover. 
              JavaScript-based hover states in a fixed navbar can cause lag. */}
          <button
            className="px-6 py-2.5 bg-white text-black text-[10px] font-black uppercase tracking-widest rounded-sm transition-all duration-300 hover:bg-indigo-600 hover:text-white hover:-translate-y-0.5 active:translate-y-0"
          >
            Let's Talk
          </button>
        </div>

      </div>
    </nav>
  );
}