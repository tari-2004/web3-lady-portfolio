"use client";

import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

const articles = [
  {
    date: "Oct 24, 2025",
    title: "The Psychology of Organic Lead Gen in DeFi",
    readTime: "6 min read",
    link: "#"
  },
  {
    date: "Sep 12, 2025",
    title: "Why African Web3 Projects Need Emotional Marketing",
    readTime: "8 min read",
    link: "#"
  },
  {
    date: "Aug 05, 2025",
    title: "Simplifying ZK-Proofs for the Non-Technical Investor",
    readTime: "5 min read",
    link: "#"
  }
];

export default function Insights() {
  return (
    <section id="writing" className="py-32 px-6 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="mb-20 flex justify-between items-end border-b border-white/5 pb-10">
          <div>
            <span className="text-indigo-500 font-mono text-[10px] tracking-[0.4em] uppercase block mb-4">
              // Thought Leadership
            </span>
            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight uppercase">
              Latest <span className="text-slate-500">Insights.</span>
            </h2>
          </div>
          <a href="#" className="hidden md:block text-white text-[10px] font-black uppercase tracking-widest border-b border-indigo-500 pb-1">
            View All Articles
          </a>
        </div>

        {/* Article Feed */}
        <div className="flex flex-col">
          {articles.map((article, i) => (
            <motion.a
              key={i}
              href={article.link}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group py-10 border-b border-white/5 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:px-4 transition-all duration-300 transform-gpu"
            >
              <div className="flex items-center gap-8">
                <span className="text-slate-500 font-mono text-[10px] uppercase tracking-widest min-w-[100px]">
                  {article.date}
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-indigo-400 transition-colors">
                  {article.title}
                </h3>
              </div>

              <div className="flex items-center gap-6">
                <span className="text-slate-600 text-[10px] uppercase font-bold tracking-tighter">
                  {article.readTime}
                </span>
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-indigo-500 group-hover:bg-indigo-500 transition-all duration-300">
                  <FiArrowRight className="text-white group-hover:-rotate-45 transition-transform" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}