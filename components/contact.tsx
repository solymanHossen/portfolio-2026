"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, MapPin, Phone, Send } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    // Simulate submission
    await new Promise((resolve) => setTimeout(resolve, 1000))
    alert("Thank you for your message! I will get back to you soon.")
    setFormData({ name: "", email: "", message: "" })
    setLoading(false)
  }

  return (
    <section id="contact" className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">Let's Connect</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 via-cyan-400 to-indigo-500 mx-auto mb-4" />
          <p className="text-slate-400 text-lg max-w-2xl mx-auto font-light">
            Whether it's discussing a project, exploring opportunities, or just saying hello.
          </p>
        </motion.div>

        {/* Contact content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact info */}
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h3 className="text-2xl font-bold text-white mb-8">Get in Touch</h3>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-cyan-900/30 flex items-center justify-center text-cyan-400 flex-shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="font-semibold text-white">Email</div>
                  <a
                    href="mailto:solyman@mediusware.com"
                    className="text-slate-400 hover:text-cyan-400 transition-colors"
                  >
                    solyman@mediusware.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-cyan-900/30 flex items-center justify-center text-cyan-400 flex-shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <div className="font-semibold text-white">Phone</div>
                  <a href="tel:+8801234567890" className="text-slate-400 hover:text-cyan-400 transition-colors">
                    +880 1234 567 890
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-cyan-900/30 flex items-center justify-center text-cyan-400 flex-shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="font-semibold text-white">Location</div>
                  <p className="text-slate-400">Dhaka, Bangladesh</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <div>
              <label htmlFor="name" className="block text-sm text-slate-400 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-slate-950/50 border border-white/10 rounded-lg focus:border-cyan-500 focus:outline-none text-white transition-colors"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm text-slate-400 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-slate-950/50 border border-white/10 rounded-lg focus:border-cyan-500 focus:outline-none text-white transition-colors"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm text-slate-400 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 bg-slate-950/50 border border-white/10 rounded-lg focus:border-cyan-500 focus:outline-none text-white transition-colors resize-none"
                placeholder="Your message..."
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 via-cyan-400 to-indigo-500 text-black rounded-lg font-bold hover:shadow-lg hover:shadow-cyan-500/50 transition-all disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {loading ? "Sending..." : "Send Message"}
              {!loading && <Send size={16} />}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
