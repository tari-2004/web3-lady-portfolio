"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image"; 

export default function BioFrancisHero() {
  const [showMainImage, setShowMainImage] = useState(false);

  useEffect(() => {
    // Timer to swap image after 2 seconds
    const timer = setTimeout(() => {
      setShowMainImage(true);
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
        
        {/* LEFT: THE IMAGE (Dynamic Swap Logic) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 relative group transform-gpu order-2 lg:order-1"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-2xl">
            <AnimatePresence mode="wait">
              {!showMainImage ? (
                // INITIAL IMAGE (Shows for first 2 seconds)
                <motion.div
                  key="intro"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0, filter: "blur(20px)" }}
                  transition={{ duration: 1 }}
                  className="absolute inset-0"
                >
                  <Image 
                    src="/images/bio-francis-book.jpg" // Ensure this exists or use a placeholder
                    alt="Bio Francis Intro"
                    fill 
                    priority 
                    unoptimized
                    className="object-cover grayscale brightness-50"
                  />
                </motion.div>
              ) : (
                // MAIN IMAGE (Fades in after 2 seconds)
                <motion.div
                  key="main"
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  className="absolute inset-0"
                >
                  <Image 
                    src="/images/bio-francis5.jpg" 
                    alt="Bio Francis - Web3 Strategist"
                    fill 
                    priority 
                    quality={100} 
                    unoptimized={true} 
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-cover transition-transform duration-1000 group-hover:scale-110 hover:grayscale-0"
                  />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Dark gradient for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80 pointer-events-none z-10" />
          </div>
          
          {/* Status Badge */}
          <div className="absolute -bottom-4 -right-4 md:right-6 px-5 py-3 bg-indigo-600 backdrop-blur-md shadow-xl rounded-xl z-20 border border-white/20">
            <div className="flex items-center gap-3">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
              </span>
              <span className="text-[10px] text-white font-black uppercase tracking-[0.2em]">Available for Strategy Q1 2026</span>
            </div>
          </div>
        </motion.div>

        {/* RIGHT: THE CONTENT */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="lg:col-span-7 transform-gpu order-1 lg:order-2"
        >
          <span className="text-indigo-500 font-mono text-xs tracking-[0.5em] uppercase block mb-6">
            // Mission: Empowering the Next Billion
          </span>
          
          <h1 className="text-5xl md:text-[85px] font-bold text-white leading-[0.9] tracking-tighter mb-8">
            {"Scaling Value".split(" ").map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="inline-block mr-4"
              >
                {word}
              </motion.span>
            ))}
            <br /> 
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-slate-400"
            >
              in Web3 Ecosystems.
            </motion.span>
          </h1>

          <p className="text-slate-400 text-lg md:text-xl max-w-xl leading-relaxed mb-10 font-light">
            Strategist, Technical Writer, and Lead Gen Architect. Helping global protocols bridge the gap to 
            <span className="text-white"> emerging markets</span> through human-centric narratives.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 mb-12">
            <button className="px-8 py-4 bg-white text-black hover:bg-indigo-500 hover:text-white font-bold rounded-full transition-all duration-300 transform hover:-translate-y-1 shadow-lg">
              Book a Strategy Call
            </button>
            <button className="px-8 py-4 bg-transparent hover:bg-white/5 text-white font-bold border border-white/20 rounded-full transition-all">
              View Case Studies
            </button>
          </div>
        </motion.div>
      </div>

      {/* TRUSTED BY LOGO CLOUD */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="max-w-7xl mx-auto w-full px-6 pt-12 border-t border-white/5"
      >
        <p className="text-[9px] font-mono text-slate-200 uppercase tracking-[0.5em] mb-10">
          Featured Contributions & Strategic Partnerships
        </p>
        <div className="flex flex-wrap items-center gap-12 md:gap-20 pb-12 opacity-90 grayscale contrast-125">
          <span className="text-2xl font-black tracking-tighter text-white uppercase italic">Coinmonks</span>
          <span className="text-2xl font-black tracking-tighter text-white uppercase italic">Cubed</span>
          <span className="text-2xl font-black tracking-tighter text-white uppercase italic">Xend Finance</span>
          <span className="text-2xl font-black tracking-tighter text-white uppercase italic">Medium Elite</span>
        </div>
      </motion.div>
    </section>
  );
}