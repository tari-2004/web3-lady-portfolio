"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";

const solutions = [
  {
    title: "Organic Lead Generation",
    result: "+150% Growth",
    image: "/images/blue2.jpg", // Use a high-end abstract or UI render
    description: "Architecting content funnels that convert passive scrolling into active engagement."
  },
  {
    title: "Web3 Education",
    result: "Global Reach",
    image: "/images/books.jpg",
    description: "Simplifying complex blockchain protocols into high-impact learning experiences."
  },
  {
    title: "Community Architecture",
    result: "High Retention",
    image: "/images/wb.jpg",
    description: "Building resilient digital ecosystems through strategic cross-platform positioning."
  }
];

export default function ExpertiseCards() {
  return (
    <section className="py-32 px-6 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        
        <div className="mb-20">
          <span className="text-indigo-500 font-mono text-[10px] tracking-[0.5em] uppercase block mb-4">// Capabilities</span>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase">
            Solutions that <span className="text-slate-500 italic font-light">Scale.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative flex flex-col h-full"
            >
              {/* THE IMAGE CARD */}
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl mb-8 border border-white/10">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                />
                
                {/* Glass Tag Overlay */}
                <div className="absolute top-4 right-4 px-3 py-1 bg-black/50 backdrop-blur-md border border-white/10 rounded-full">
                  <span className="text-[10px] font-black text-white uppercase tracking-widest">{item.result}</span>
                </div>

                {/* Bottom Gradient for Text Legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* CONTENT BELOW CARD */}
              <div className="px-2">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-white tracking-tight group-hover:text-indigo-400 transition-colors">
                    {item.title}
                  </h3>
                  <FiArrowUpRight className="text-indigo-500 text-xl group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
                <p className="text-slate-400 text-sm leading-relaxed font-light">
                  {item.description}
                </p>
              </div>

              {/* Hover Line */}
              <div className="mt-8 h-[1px] w-full bg-white/5 relative overflow-hidden">
                <div className="absolute inset-0 bg-indigo-500 -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}