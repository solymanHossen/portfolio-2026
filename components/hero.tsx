"use client"

import { motion } from "framer-motion"
import { ArrowRight, Github, Linkedin, Mail, Sparkles } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute top-20 right-0 w-96 h-96 bg-cyan-600/20 rounded-full blur-[140px] pointer-events-none animate-pulse" />
      <div
        className="absolute bottom-40 left-0 w-96 h-96 bg-indigo-600/15 rounded-full blur-[140px] pointer-events-none animate-pulse"
        style={{ animationDelay: "1s" }}
      />
      <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10 w-full">
        {/* Left content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-black/40 backdrop-blur-xl border border-white/10 rounded-full group"
          >
            <Sparkles size={16} className="text-cyan-400 group-hover:animate-spin" />
            <span className="text-sm font-semibold text-cyan-300">Available for Senior Roles</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.1] mb-6"
          >
            <span className="text-white">Building</span>{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-500">
              Logic
            </span>
            <br />
            <span className="text-white">from</span>{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-500">
              Narrative
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg md:text-xl text-slate-300 max-w-xl leading-relaxed mb-10 font-light"
          >
            Senior Full Stack Engineer with literature background. I craft scalable systems, semantic architectures, and
            enterprise solutions across MERN, Laravel, and modern cloud platforms.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <a
              href="#projects"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 via-cyan-400 to-indigo-500 text-black font-bold rounded-full hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              View Architecture <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="px-8 py-4 bg-black/40 backdrop-blur-xl border border-white/10 text-white font-bold rounded-full hover:bg-white/10 transition-all duration-300"
            >
              Download Resume
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex gap-4"
          >
            {[
              { icon: Github, label: "GitHub", href: "https://github.com" },
              { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
              { icon: Mail, label: "Email", href: "mailto:solyman@mediusware.com" },
            ].map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="w-12 h-12 bg-black/40 backdrop-blur-xl border border-white/10 rounded-full flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-500/50 transition-all duration-300 group"
                aria-label={label}
              >
                <Icon size={20} className="group-hover:scale-110 transition-transform" />
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right - Premium Profile Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="hidden lg:block"
        >
          <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-black/60 transition-all duration-300 group">
            {/* Header */}
            <div className="flex items-center gap-4 mb-8 pb-8 border-b border-white/10">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-cyan-400 to-indigo-500 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition-opacity" />
                <div className="relative w-16 h-16 bg-gradient-to-r from-cyan-500 via-cyan-400 to-indigo-500 rounded-2xl flex items-center justify-center text-white font-bold text-xl">
                  SH
                </div>
              </div>
              <div>
                <div className="font-bold text-white text-lg">Md. Solyman</div>
                <div className="text-cyan-400 text-sm font-semibold">Senior Software Engineer</div>
              </div>
            </div>

            {/* Stats */}
            <div className="space-y-4 mb-8">
              {[
                { label: "Experience", value: "3+ Years", icon: "📊" },
                { label: "Stack", value: "MERN, Laravel", icon: "⚙️" },
                { label: "Location", value: "Dhaka, BD", icon: "📍" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="flex justify-between items-center p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span>{stat.icon}</span>
                    <span className="text-slate-400 text-sm">{stat.label}</span>
                  </div>
                  <span className="font-semibold text-cyan-300">{stat.value}</span>
                </div>
              ))}
            </div>

            {/* Skills */}
            <div className="pt-8 border-t border-white/10 space-y-4">
              {[
                { name: "Architecture", value: 92 },
                { name: "Performance", value: 88 },
                { name: "Leadership", value: 85 },
              ].map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-slate-400">{skill.name}</span>
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-500 font-semibold">
                      {skill.value}%
                    </span>
                  </div>
                  <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-cyan-500 via-cyan-400 to-indigo-500 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.value}%` }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
