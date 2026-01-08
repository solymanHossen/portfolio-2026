"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { motion } from "framer-motion"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { label: "Philosophy", href: "#about" },
    { label: "Expertise", href: "#experience" },
    { label: "Work", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Testimonials", href: "#testimonials" },
  ]

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-black/40 backdrop-blur-xl border-b border-white/10" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <motion.div
            className="w-10 h-10 bg-gradient-to-r from-cyan-500 via-cyan-400 to-indigo-500 rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-cyan-500/20"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            S
          </motion.div>
          <span className="font-bold text-white text-lg tracking-wider">SOLYMAN</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-1 text-sm font-medium">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="px-4 py-2 text-slate-400 hover:text-white transition-colors duration-200 relative group rounded-lg hover:bg-white/5"
            >
              {item.label}
              <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-gradient-to-r from-cyan-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-full" />
            </a>
          ))}
          <a
            href="#contact"
            className="ml-4 px-6 py-2.5 bg-gradient-to-r from-cyan-500 via-cyan-400 to-indigo-500 text-black rounded-full hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 font-bold"
          >
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white p-2" aria-label="Toggle menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-black/40 backdrop-blur-xl border-b border-white/10"
        >
          <div className="px-6 py-4 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block px-4 py-2 text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="block px-6 py-2.5 bg-gradient-to-r from-cyan-500 via-cyan-400 to-indigo-500 text-black rounded-full text-center font-bold mt-4"
              onClick={() => setIsOpen(false)}
            >
              Contact Me
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}
