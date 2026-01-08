"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

const PROJECTS = [
  {
    id: 1,
    title: "Enterprise ERP System",
    category: "System Architecture",
    gradient: "from-cyan-600/20 to-blue-600/20",
    desc: "Comprehensive resource planning system for manufacturing with real-time inventory tracking, payroll automation, and multi-tenant support.",
    stack: "Laravel • Vue.js • PostgreSQL • Docker • AWS",
    highlights: ["60% faster processing", "10K+ concurrent users", "Custom reporting"],
    link: "#",
  },
  {
    id: 2,
    title: "Headless E-Commerce",
    category: "Full Stack Platform",
    gradient: "from-indigo-600/20 to-purple-600/20",
    desc: "Next-gen shopping platform completely decoupled from backend for maximum speed, SEO performance, and flexible integrations.",
    stack: "Next.js • Node.js • MongoDB • Redis • Stripe",
    highlights: ["98 Lighthouse", "0.8s load time", "Real-time inventory"],
    link: "#",
  },
  {
    id: 3,
    title: "Secure Health API",
    category: "Backend Security",
    gradient: "from-emerald-600/20 to-teal-600/20",
    desc: "HIPAA-compliant REST API handling sensitive patient data with end-to-end encryption, audit logs, and comprehensive security protocols.",
    stack: "Node.js • Redis • Docker • PostgreSQL • Auth0",
    highlights: ["Zero breaches", "HIPAA certified", "Real-time monitoring"],
    link: "#",
  },
  {
    id: 4,
    title: "Analytics Dashboard",
    category: "Data Visualization",
    gradient: "from-orange-600/20 to-red-600/20",
    desc: "Live analytics platform processing 1M+ events daily with custom visualization framework, real-time updates, and predictive analytics.",
    stack: "React • WebSocket • TimescaleDB • Grafana",
    highlights: ["1M events/day", "<100ms latency", "ML insights"],
    link: "#",
  },
]

export function Projects() {
  return (
    <section
      id="projects"
      className="relative py-32 bg-gradient-to-b from-background via-slate-950/30 to-background border-t border-white/5"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-black/40 backdrop-blur-xl border border-white/10 rounded-full mb-6">
            <span className="text-xs font-semibold text-cyan-300 uppercase tracking-wider">Featured Work</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">Case Studies</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-cyan-500 via-cyan-400 to-indigo-500 rounded-full mb-6" />
          <p className="text-slate-300 text-lg max-w-3xl font-light">
            Selected works demonstrating full-stack proficiency, architectural depth, and measurable business impact
            across industries.
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="group relative h-full bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:bg-black/60 transition-all duration-300">
                {/* Background gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />

                <div className="relative p-8 flex flex-col h-full">
                  {/* Header */}
                  <div className="mb-6">
                    <span className="text-xs font-mono text-cyan-300 uppercase tracking-widest">
                      {project.category}
                    </span>
                    <h3 className="text-2xl font-bold text-white mt-3 group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:via-blue-400 group-hover:to-indigo-500 transition-all">
                      {project.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-slate-300 text-sm mb-6 flex-grow leading-relaxed">{project.desc}</p>

                  {/* Highlights */}
                  <div className="mb-8 flex flex-wrap gap-2">
                    {project.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="text-xs px-3 py-1.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 font-medium"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>

                  {/* Stack */}
                  <div className="mb-6 pb-6 border-t border-white/10">
                    <p className="text-xs text-slate-400 mt-6 font-mono leading-relaxed">{project.stack}</p>
                  </div>

                  {/* CTA */}
                  <a
                    href={project.link}
                    className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold text-sm group/link"
                  >
                    View Case Study
                    <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
