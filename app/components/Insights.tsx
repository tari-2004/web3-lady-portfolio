"use client";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

const articles = [
  {
    date: "Oct 24, 2025",
    title: "The Psychology of Organic Lead Gen in DeFi",
    readTime: "6 min read",
    tag: "Growth Strategy",
    link: "#"
  },
  {
    date: "Sep 12, 2025",
    title: "Why African Web3 Projects Need Emotional Marketing",
    readTime: "8 min read",
    tag: "Ecosystems",
    link: "#"
  },
  {
    date: "Aug 05, 2025",
    title: "Simplifying ZK-Proofs for the Non-Technical Investor",
    readTime: "5 min read",
    tag: "Technical Writing",
    link: "#"
  }
];

export default function Insights() {
  return (
    <section id="writing" className="relative py-32 overflow-hidden">
      
      {/* FIXED BACKGROUND IMAGE */}
      <div 
        className="absolute inset-0 z-0 bg-fixed bg-cover bg-center grayscale opacity-20 brightness-[0.3]"
        style={{ 
          backgroundImage: 'url("/images/bio-francis-book.jpg")', // Or an abstract Web3 visual
        }} 
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="mb-20 flex justify-between items-end border-b border-white/10 pb-12">
          <div className="max-w-xl">
            <span className="text-indigo-500 font-mono text-[10px] tracking-[0.5em] uppercase block mb-6">
              // Thought Leadership
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase leading-[0.9]">
              Strategic <span className="text-slate-500 italic">Insights.</span>
            </h2>
          </div>
          <a href="#" className="hidden md:flex items-center gap-3 text-white text-[9px] font-black uppercase tracking-widest group">
            <span className="border-b border-white/20 pb-1 group-hover:border-indigo-500 transition-all">View All Articles</span>
            <FiArrowRight className="text-indigo-500 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Article Feed: Clean & Glass-based */}
        <div className="flex flex-col gap-4">
          {articles.map((article, i) => (
            <motion.a
              key={i}
              href={article.link}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative p-8 md:p-12 rounded-2xl border border-white/5 bg-white/[0.01] backdrop-blur-sm hover:bg-white/[0.05] hover:border-white/10 transition-all duration-500 overflow-hidden"
            >
              {/* Internal Accent Line */}
              <div className="absolute top-0 left-0 w-[2px] h-0 bg-indigo-500 group-hover:h-full transition-all duration-500" />

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <span className="text-slate-500 font-mono text-[9px] uppercase tracking-widest">
                      {article.date}
                    </span>
                    <span className="text-indigo-500 font-mono text-[9px] uppercase tracking-widest border border-indigo-500/20 px-2 py-0.5 rounded">
                      {article.tag}
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-indigo-400 transition-colors leading-tight max-w-2xl">
                    {article.title}
                  </h3>
                </div>

                <div className="flex items-center gap-8 self-end md:self-center">
                  <span className="text-slate-500 text-[10px] uppercase font-bold tracking-widest">
                    {article.readTime}
                  </span>
                  <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:border-white transition-all duration-500">
                    <FiArrowRight className="text-white text-xl group-hover:text-black group-hover:-rotate-45 transition-all" />
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}