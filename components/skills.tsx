"use client"

import { motion } from "framer-motion"

const SKILLS_MATRIX = [
  {
    category: "Frontend",
    items: [
      { name: "React", level: 95 },
      { name: "Next.js", level: 92 },
      { name: "TypeScript", level: 88 },
      { name: "Tailwind CSS", level: 90 },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", level: 93 },
      { name: "Laravel", level: 91 },
      { name: "Microservices", level: 89 },
      { name: "REST APIs", level: 94 },
    ],
  },
  {
    category: "Database & DevOps",
    items: [
      { name: "PostgreSQL", level: 92 },
      { name: "MongoDB", level: 85 },
      { name: "Docker", level: 88 },
      { name: "AWS", level: 86 },
    ],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Technical Proficiency Matrix
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 via-cyan-400 to-indigo-500 mb-4" />
          <p className="text-slate-400 text-lg max-w-2xl font-light">
            Comprehensive skill matrix across modern development stack.
          </p>
        </motion.div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SKILLS_MATRIX.map((category, catIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.1 }}
            >
              <h3 className="text-xl font-bold text-white mb-6">{category.category}</h3>
              <div className="space-y-6">
                {category.items.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-slate-400">{skill.name}</span>
                      <span className="text-xs font-mono text-cyan-400">{skill.level}%</span>
                    </div>
                    <div className="w-full h-2 bg-slate-900 rounded-full overflow-hidden border border-white/5">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: skillIndex * 0.1, duration: 0.8 }}
                        className="h-full bg-gradient-to-r from-cyan-400 to-indigo-500 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
