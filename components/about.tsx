"use client"

import { motion } from "framer-motion"
import { BookOpen, Terminal, CheckCircle, PenTool, Cpu } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-32 bg-slate-950/50 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">The Dual Architecture</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 via-cyan-400 to-indigo-500 mb-4" />
          <p className="text-slate-400 text-lg max-w-2xl font-light">
            My unique background bridges abstract creativity and concrete engineering. A literature background taught me
            semantics; formal training gave me rigorous systems thinking.
          </p>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Literature */}
          <motion.div
            whileHover={{ y: -5 }}
            className="p-10 rounded-2xl bg-slate-900/40 border border-white/5 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <BookOpen size={120} />
            </div>
            <div className="relative z-10">
              <div className="w-12 h-12 bg-amber-900/30 rounded-xl flex items-center justify-center text-amber-500 mb-6">
                <PenTool size={24} />
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">The Narrative</h3>
              <p className="text-slate-400 leading-relaxed mb-6">
                Honours in Bengali Literature taught me semantics and structure. I treat code as narrative—readable,
                structured, and clear for the next engineer.
              </p>
              <ul className="space-y-3 text-sm text-slate-500">
                <li className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-amber-500" /> Semantic Code Architecture
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-amber-500" /> Human-Centric Design
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-amber-500" /> Documentation Excellence
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Logic */}
          <motion.div
            whileHover={{ y: -5 }}
            className="p-10 rounded-2xl bg-slate-900/40 border border-white/5 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <Cpu size={120} />
            </div>
            <div className="relative z-10">
              <div className="w-12 h-12 bg-cyan-900/30 rounded-xl flex items-center justify-center text-cyan-500 mb-6">
                <Terminal size={24} />
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">The Logic</h3>
              <p className="text-slate-400 leading-relaxed mb-6">
                PGDIT from JU grounded me in rigorous engineering. Database Management, Security, and System
                Architecture form my technical foundation.
              </p>
              <ul className="space-y-3 text-sm text-slate-500">
                <li className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-cyan-500" /> Scalable Microservices
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-cyan-500" /> Secure API Design
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-cyan-500" /> Database Optimization
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
