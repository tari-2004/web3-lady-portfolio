"use client";
import { motion } from "framer-motion";

export default function AuraBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#050505]">
      {/* Top Left Glow - Optimized */}
      <motion.div 
        animate={{
          scale: [1, 1.1, 1], // Reduced scale range to prevent layout thrashing
          opacity: [0.15, 0.25, 0.15], // Lower opacity = faster alpha-blending
        }}
        transition={{ 
          duration: 10, // Slower duration = fewer calculations per second
          repeat: Infinity, 
          ease: "linear" // Linear is easier for the GPU to interpolate than Keyframes
        }}
        // transform-gpu: Forces the browser to use hardware acceleration
        // will-change-transform: Pre-allocates layers in the GPU memory
        className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] rounded-full bg-[#6366F1] blur-[100px] transform-gpu will-change-transform"
      />
      
      {/* Bottom Right Glow - Optimized */}
      <motion.div 
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-[10%] -right-[10%] w-[50%] h-[50%] rounded-full bg-[#1e293b] blur-[100px] transform-gpu will-change-transform"
      />

      {/* Static Noise: This covers any "banding" (pixel lines) in the blur without using CPU */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </div>
  );
}