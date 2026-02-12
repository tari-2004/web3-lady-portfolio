"use client";
import { motion } from "framer-motion";

export default function AuraBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#050505]">
      {/* Top Left Glow */}
      <motion.div 
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] rounded-full bg-[#BD00FF] blur-[120px] opacity-30"
      />
      
      {/* Bottom Right Glow */}
      <motion.div 
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute -bottom-[10%] -right-[10%] w-[50%] h-[50%] rounded-full bg-[#00F0FF] blur-[120px] opacity-20"
      />
    </div>
  );
}