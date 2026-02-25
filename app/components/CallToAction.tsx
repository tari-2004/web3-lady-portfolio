"use client";
import { motion } from "framer-motion";
import { FiArrowRight, FiLinkedin } from "react-icons/fi";

export default function CallToAction() {
  return (
    <section id="contact" className="py-40 px-6 bg-[#050505] border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start gap-20">
        
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

        {/* Right Side: Clean Action Links */}
        <div className="flex flex-col gap-8 w-full lg:w-auto">
          {/* Main Action - Simple CSS transition for speed */}
          <a 
            href="mailto:your-email@example.com"
            className="group flex flex-col gap-2 p-8 border border-white/10 rounded-2xl hover:border-indigo-500/50 hover:bg-white/[0.02] transition-all duration-300"
          >
            <div className="flex justify-between items-center w-full lg:min-w-[400px]">
              <span className="text-slate-400 font-mono text-[10px] uppercase tracking-[0.3em]">Direct Inquiry</span>
              <FiArrowRight className="text-white group-hover:translate-x-2 group-hover:-rotate-45 transition-transform duration-300" />
            </div>
            <span className="text-2xl font-bold text-white">Book Strategy Call</span>
          </a>

          {/* Social Action */}
          <a 
            href="https://linkedin.com/in/bio-francis"
            target="_blank"
            className="group flex flex-col gap-2 p-8 border border-white/10 rounded-2xl hover:border-blue-500/50 hover:bg-white/[0.02] transition-all duration-300"
          >
            <div className="flex justify-between items-center w-full lg:min-w-[400px]">
              <span className="text-slate-400 font-mono text-[10px] uppercase tracking-[0.3em]">Professional Network</span>
              <FiLinkedin className="text-white" />
            </div>
            <span className="text-2xl font-bold text-white">Connect on LinkedIn</span>
          </a>

          {/* Location / Availability Footer Inside CTA */}
          <div className="mt-4 flex items-center gap-6 px-4">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
              <span className="text-slate-600 font-mono text-[9px] uppercase tracking-widest">Active Status</span>
            </div>
            <span className="text-slate-600 font-mono text-[9px] uppercase tracking-widest">Yenagoa, Nigeria [GMT+1]</span>
          </div>
        </div>

      </div>
    </section>
  );
}