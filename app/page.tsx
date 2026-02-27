"use client";

import React, { Suspense } from "react";
import Web3Navbar from "./components/Navbar";
import AuraBackground from "./components/AuraBackground";
import BioFrancisHero from "./components/Hero";
import Expertise from "./components/Expertise";
import AuthorityStrip from "./components/AuthorityStrip";
import FeaturedInfluence from "./components/FeaturedInfluence";
import CaseStudies from "./components/CaseStudies";
// import Insights from "./components/Insights";
import CallToAction from "./components/CallToAction";
import Web3Footer from "./components/Web3Footer";
import { motion, useScroll, useSpring } from "framer-motion";

export default function Home() {
  // Performance-friendly scroll progress bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <main className="relative bg-[#050505] min-h-screen selection:bg-indigo-500/30 overflow-x-hidden">
      
      {/* 1. Global Beauty Touch: Film Grain Overlay */}
      {/* This creates a subtle texture over the entire site */}
      <div className="fixed inset-0 z-[9999] pointer-events-none opacity-[0.02] contrast-150 brightness-150">
        <svg className="w-full h-full">
          <filter id="noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.80" numOctaves="4" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)" />
        </svg>
      </div>

      {/* 2. Global Background Layers */}
      <AuraBackground />
      
      {/* 3. Scroll Progress (Top) */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-indigo-500 z-[110] origin-left transform-gpu"
        style={{ scaleX }}
      />

      {/* 4. Navigation */}
      <Web3Navbar />

      {/* 5. Page Content */}
      <Suspense fallback={<div className="min-h-screen bg-[#050505]" />}>
        <div className="flex flex-col">
          {/* Hero Section */}
          <BioFrancisHero />

          {/* Sub-Hero Divider: Minimal Branding */}
          <div className="py-10 border-y border-white/5 bg-black/20 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-6">
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="text-[10px] font-mono text-slate-500 uppercase tracking-[0.5em] text-center"
              >
                Growth Strategy • Web3 Education • Organic Marketing
              </motion.p>
            </div>
          </div>

          {/* Core Story Sections */}
          <Expertise />
          <AuthorityStrip />
          <FeaturedInfluence />
          <CaseStudies />
          {/* <Insights /> */}
          
          {/* Final Conversion Zone */}
          <CallToAction />
        </div>
      </Suspense>

      {/* 6. Footer */}
      <Web3Footer />
    </main>
  );
}