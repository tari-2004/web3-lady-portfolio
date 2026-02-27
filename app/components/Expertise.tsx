"use client";
import { motion } from "framer-motion";
import { FiTrendingUp, FiGlobe, FiCpu } from "react-icons/fi";

const services = [
  {
    icon: <FiTrendingUp />,
    title: "Organic Lead Generation",
    result: "High-intent community growth.",
    description: "Architecting content funnels that convert passive scrolling into active engagement without a single dollar in ad spend.",
  },
  {
    icon: <FiGlobe />,
    title: "Web3 Education",
    result: "Localizing global protocols.",
    description: "Simplifying complex blockchain protocols into digestible, high-impact learning experiences for emerging markets.",
  },
  {
    icon: <FiCpu />,
    title: "Community Architecture",
    result: "Resilient digital ecosystems.",
    description: "Building loyal ecosystems through emotional marketing and strategic cross-platform positioning.",
  },
];

export default function Expertise() {
  return (
    <section id="expertise" className="py-32 px-6 bg-[#050505] relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Header: More White Space & Bold Contrast */}
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4"
          >
            <span className="text-indigo-500 font-mono text-[10px] tracking-[0.5em] uppercase">
              // Solutions
            </span>
            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter leading-tight max-w-3xl">
              Driving impact for brands that <br />
              <span className="text-slate-500 italic">refuse to be ignored.</span>
            </h2>
          </motion.div>
        </div>

        {/* Services Grid: Outcome-Based Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative p-10 bg-white/[0.02] border border-white/5 rounded-3xl hover:bg-white/[0.04] hover:border-indigo-500/30 transition-all duration-500"
            >
              {/* Icon & Result Tag */}
              <div className="flex justify-between items-start mb-12">
                <div className="w-12 h-12 rounded-2xl bg-indigo-600/10 flex items-center justify-center text-indigo-500 text-xl group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-500">
                  {service.icon}
                </div>
                <span className="text-[8px] font-mono text-slate-500 uppercase tracking-widest border border-white/10 px-2 py-1 rounded-md">
                  {service.result}
                </span>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">
                {service.title}
              </h3>
              
              <p className="text-slate-400 leading-relaxed text-sm md:text-base font-light">
                {service.description}
              </p>

              {/* Minimalist Hover Accent */}
              <div className="mt-8 h-[1px] w-0 bg-indigo-500 group-hover:w-full transition-all duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}