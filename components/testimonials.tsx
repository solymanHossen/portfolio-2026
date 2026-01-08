"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"

const TESTIMONIALS = [
  {
    name: "Ahmed Khan",
    role: "CTO at Mediusware",
    text: "Solyman led our microservices migration with exceptional technical depth. His architecture decisions reduced our infrastructure costs by 35% while improving performance.",
    rating: 5,
  },
  {
    name: "Sarah Chen",
    role: "Product Manager at Creative IT",
    text: "Working with Solyman was transformative. He not only delivered code but improved our entire development culture with his systematic approach to problem-solving.",
    rating: 5,
  },
  {
    name: "Michael Rodriguez",
    role: "Founder at TechStart",
    text: "His ability to bridge technical complexity with clear communication made him invaluable. Solyman is the kind of engineer every startup needs.",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-32 bg-slate-950/50 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">What Others Say</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 via-cyan-400 to-indigo-500 mb-4" />
          <p className="text-slate-400 text-lg max-w-2xl font-light">
            Feedback from colleagues and clients I've had the privilege to work with.
          </p>
        </motion.div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((testimonial, i) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 bg-slate-900/40 border border-white/5 rounded-2xl hover:border-cyan-500/30 transition-all"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, j) => (
                  <Star key={j} size={16} className="fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-slate-300 mb-6 leading-relaxed italic">"{testimonial.text}"</p>

              {/* Author */}
              <div>
                <div className="font-bold text-white">{testimonial.name}</div>
                <div className="text-sm text-cyan-400">{testimonial.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
