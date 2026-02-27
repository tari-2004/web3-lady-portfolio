"use client";
import { motion } from "framer-motion";
import { FiArrowRight, FiLinkedin, FiMail } from "react-icons/fi";

export default function CallToAction() {
  return (
    <section id="contact" className="py-40 px-6 bg-[#050505] border-t border-white/5 relative overflow-hidden">
      
      {/* BEAUTY TOUCH: Ambient background glow */}
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-indigo-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start gap-20 relative z-10">
        
        {/* Left Side: Bold Statement */}
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-6xl md:text-[100px] font-bold text-white tracking-tighter leading-[0.85] uppercase mb-8">
              Let's build <br />
              <span className="text-indigo-500 italic">the narrative.</span>
            </h2>
            <p className="text-slate-500 text-lg md:text-xl font-light max-w-md leading-relaxed">
              Available for strategic partnerships and high-impact content architecture for Web3 protocols.
            </p>
          </motion.div>
        </div>

        {/* Right Side: Re-designed High-Color Links */}
        <div className="flex flex-col gap-8 w-full lg:w-auto">
          
          {/* Main Action - Indigo Solid Button */}
          <a 
            href="mailto:your-email@example.com"
            className="group flex flex-col gap-2 p-8 bg-indigo-600 rounded-3xl shadow-[0_20px_40px_-15px_rgba(79,70,229,0.3)] hover:shadow-[0_20px_50px_-10px_rgba(79,70,229,0.5)] hover:-translate-y-1 transition-all duration-300 lg:min-w-[400px]"
          >
            <div className="flex justify-between items-center w-full">
              <span className="text-indigo-100 font-mono text-[10px] uppercase tracking-[0.3em] font-bold">Direct Inquiry</span>
              <FiMail className="text-indigo-100 text-xl group-hover:rotate-12 transition-transform" />
            </div>
            <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-white">Book Strategy Call</span>
                <FiArrowRight className="text-white group-hover:translate-x-2 group-hover:-rotate-45 transition-transform duration-300" />
            </div>
          </a>

          {/* Social Action - LinkedIn Blue Button */}
          <a 
            href="https://linkedin.com/in/bio-francis"
            target="_blank"
            className="group flex flex-col gap-2 p-8 border border-white/10 bg-white/[0.02] rounded-3xl hover:border-blue-500/50 hover:bg-blue-600/10 hover:-translate-y-1 transition-all duration-300 lg:min-w-[400px]"
          >
            <div className="flex justify-between items-center w-full">
              <span className="text-slate-400 font-mono text-[10px] uppercase tracking-[0.3em]">Professional Network</span>
              <FiLinkedin className="text-white group-hover:text-blue-400 transition-colors" />
            </div>
            <span className="text-2xl font-bold text-white">Connect on LinkedIn</span>
          </a>

          {/* Location / Availability Footer */}
          <div className="mt-4 flex items-center justify-between px-4">
            <div className="flex items-center gap-3">
              <div className="relative">
                <span className="w-2 h-2 bg-green-500 rounded-full block" />
                <span className="absolute inset-0 w-2 h-2 bg-green-500 rounded-full animate-ping opacity-75" />
              </div>
              <span className="text-slate-600 font-mono text-[9px] uppercase tracking-widest font-bold">Active Status</span>
            </div>
            <span className="text-slate-600 font-mono text-[9px] uppercase tracking-widest">Yenagoa, NG [GMT+1]</span>
          </div>
        </div>

      </div>
    </section>
  );
}