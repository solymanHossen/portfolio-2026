"use client"

import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"

const EXPERIENCE = [
  {
    company: "Mediusware",
    role: "Senior Software Engineer",
    period: "2021 — Present",
    desc: "Leading backend architecture for enterprise ERP solutions. Architected migration of legacy monoliths to microservices, mentoring 5+ developers.",
    stack: ["Laravel", "Vue.js", "Docker", "AWS", "PostgreSQL"],
  },
  {
    company: "Creative IT",
    role: "Full Stack Developer",
    period: "2020 — 2021",
    desc: "Built high-performance e-commerce platforms. Optimized database queries reducing page load by 40% and improved conversion by 25%.",
    stack: ["PHP", "MySQL", "React", "JavaScript"],
  },
  {
    company: "TechStart Bangladesh",
    role: "Junior Developer",
    period: "2019 — 2020",
    desc: "Developed web applications using LAMP stack. Implemented real-time features using WebSockets and Redis caching.",
    stack: ["Laravel", "jQuery", "MySQL", "Redis"],
  },
]

const SKILLS = [
  "React",
  "Next.js",
  "Vue.js",
  "Node.js",
  "Laravel",
  "PostgreSQL",
  "MongoDB",
  "Docker",
  "AWS",
  "Redis",
  "TypeScript",
  "Tailwind CSS",
  "Git",
  "Microservices",
]

export function Experience() {
  return (
    <section id="experience" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Timeline */}
          <div className="lg:col-span-2">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-white mb-8"
            >
              Professional Journey
            </motion.h3>

            <div className="space-y-12 border-l border-white/10 pl-8 ml-3">
              {EXPERIENCE.map((job, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative group"
                >
                  <div className="absolute -left-[39px] top-1 h-5 w-5 rounded-full border-4 border-slate-900 bg-slate-700 group-hover:bg-cyan-500 transition-colors" />
                  <span className="text-sm font-mono text-cyan-400 mb-1 block">{job.period}</span>
                  <h4 className="text-xl font-bold text-white">{job.role}</h4>
                  <p className="text-slate-400 text-sm mb-4">{job.company}</p>
                  <p className="text-slate-400 leading-relaxed mb-4 text-sm">{job.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {job.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-white/5 rounded text-[10px] text-slate-300 border border-white/5 hover:border-cyan-500/30 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div className="lg:col-span-3">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-white mb-8"
            >
              Technical Arsenal
            </motion.h3>

            <div className="grid grid-cols-2 gap-4">
              {SKILLS.map((skill, i) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-center gap-2 px-4 py-3 bg-white/5 border border-white/10 rounded-lg hover:border-cyan-500/30 hover:bg-white/10 transition-all"
                >
                  <CheckCircle size={14} className="text-cyan-400 flex-shrink-0" />
                  <span className="text-sm text-slate-300">{skill}</span>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mt-12">
              {[
                { label: "Years Experience", value: "3+" },
                { label: "Projects Delivered", value: "25+" },
                { label: "Team Members Mentored", value: "8+" },
                { label: "Client Satisfaction", value: "98%" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-4 bg-slate-950/50 border border-white/5 rounded-lg"
                >
                  <div className="text-2xl font-bold text-cyan-400 mb-1">{stat.value}</div>
                  <div className="text-sm text-slate-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
