"use client"

import Link from "next/link"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-950 border-t border-white/5 py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 via-cyan-400 to-indigo-500 rounded-lg flex items-center justify-center text-black font-bold">
                S
              </div>
              <span className="font-bold text-white">SOLYMAN</span>
            </Link>
            <p className="text-slate-400 text-sm">
              Senior Full Stack Engineer building scalable systems and semantic architectures.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm">Navigation</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a href="#about" className="hover:text-light transition-colors">
                  Philosophy
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-light transition-colors">
                  Expertise
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-light transition-colors">
                  Work
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-light transition-colors">
                  Skills
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm">Resources</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a href="#" className="hover:text-light transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-light transition-colors">
                  GitHub
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-light transition-colors">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-light transition-colors">
                  Resume
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm">Connect</h4>
            <div className="flex gap-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:bg-cyan-900/20 transition-all"
              >
                <Github size={18} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:bg-cyan-900/20 transition-all"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:bg-cyan-900/20 transition-all"
              >
                <Twitter size={18} />
              </a>
              <a
                href="mailto:solyman@mediusware.com"
                className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:bg-cyan-900/20 transition-all"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-400">
          <p>&copy; {currentYear} Md. Solyman Hossen. All rights reserved.</p>
          <p>Designed & built with passion for elegant systems.</p>
        </div>
      </div>
    </footer>
  )
}
