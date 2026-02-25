"use client";

import { motion, useSpring, useMotionValue } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import Image from "next/image";

const projects = [
  {
    client: "Coinmonks Publication",
    role: "Technical Writer",
    title: "On-chain Education for the Next Billion",
    result: "Top Writer Status",
    desc: "Strategized and authored educational content focused on simplifying DeFi protocols for retail investors.",
    // You'll replace these with your actual 3D renders/abstract photos
    image: "/images/bio-francis-book.jpg" 
  },
  {
    client: "Ecosystem Growth",
    role: "Lead Generation",
    title: "Organic Community Funnel Design",
    result: "Lead Gen Optimization",
    desc: "Implemented a content-first strategy that converted passive Twitter engagement into a high-retention Discord community.",
    image: "/case-study-02.jpg"
  },
  {
    client: "Strategic Consulting",
    role: "Marketing Strategist",
    title: "Emotional Marketing Architecture",
    result: "High-Intent Engagement",
    desc: "Developed a brand voice focused on human-centric blockchain solutions, moving away from 'hype' into 'utility'.",
    image: "/case-study-03.jpg"
  },
];

export default function CaseStudies() {
  return (
    <section id="work" className="py-32 px-6 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        
        <div className="mb-24">
          <span className="text-indigo-500 font-mono text-xs tracking-[0.4em] uppercase block mb-4">
            // Selected Case Studies
          </span>
          <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tight uppercase">
            Proof of <br />
            <span className="italic text-slate-700 font-light">Conversion.</span>
          </h2>
        </div>

        <div className="flex flex-col border-t border-white/5">
          {projects.map((project, i) => (
            <ProjectRow key={i} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectRow({ project }: { project: any }) {
  // Parallax mouse tracking
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth out the movement
  const springX = useSpring(x, { stiffness: 100, damping: 20 });
  const springY = useSpring(y, { stiffness: 100, damping: 20 });

  function handleMouseMove(event: React.MouseEvent) {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set(event.clientX - rect.left - 150); // Offset to center image
    y.set(event.clientY - rect.top - 150);
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="group relative grid grid-cols-1 lg:grid-cols-12 py-16 px-4 border-b border-white/5 cursor-pointer transform-gpu overflow-visible"
    >
      {/* FLOATING IMAGE PORTAL */}
      <motion.div
        style={{ x: springX, y: springY }}
        className="fixed lg:absolute z-[50] pointer-events-none opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all duration-500 ease-out"
      >
        <div className="relative w-[300px] h-[350px] overflow-hidden rounded-xl border border-white/10 shadow-2xl">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
          />
          {/* Vignette Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/60 to-transparent" />
        </div>
      </motion.div>

      {/* TEXT CONTENT (STAYS VISIBLE) */}
      <div className="lg:col-span-3 mb-6 lg:mb-0 relative z-10">
        <p className="text-indigo-500 font-bold text-xs uppercase tracking-widest mb-2">
          {project.client}
        </p>
        <p className="text-slate-500 text-[10px] font-mono uppercase tracking-widest">
          {project.role}
        </p>
      </div>

      <div className="lg:col-span-6 mb-8 lg:mb-0 relative z-10">
        <h3 className="text-2xl md:text-4xl font-bold text-white mb-4 group-hover:text-indigo-400 transition-colors duration-500 leading-tight">
          {project.title}
        </h3>
        <p className="text-slate-400 font-light leading-relaxed max-w-md text-sm md:text-base opacity-60 group-hover:opacity-100 transition-opacity">
          {project.desc}
        </p>
      </div>

      <div className="lg:col-span-3 flex flex-col justify-between items-start lg:items-end relative z-10">
        <div className="px-4 py-1 border border-indigo-500/30 rounded-full bg-indigo-500/5 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-300">
          <span className="text-indigo-400 group-hover:text-white text-[10px] font-black uppercase tracking-widest">
            {project.result}
          </span>
        </div>
        
        <div className="flex items-center gap-2 text-white text-[10px] font-black uppercase tracking-[0.3em] mt-8 lg:mt-0 group-hover:translate-x-1 transition-transform duration-300">
          View Case <FiArrowUpRight className="text-indigo-500 text-lg" />
        </div>
      </div>
    </motion.div>
  );
}