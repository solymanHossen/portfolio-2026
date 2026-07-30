import Link from "next/link"
import { Linkedin, Mail, Phone } from "lucide-react"

import { navLinks } from "@/data/nav"
import { site } from "@/data/site"

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t">
      <div className="container-page grid grid-cols-1 gap-10 py-16 md:grid-cols-3">
        <div>
          <span className="flex size-8 items-center justify-center rounded-md border border-primary/40 bg-primary/10 font-mono text-sm font-semibold text-primary">
            {site.monogram}
          </span>
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            {site.title} building scalable, AI-driven systems from {site.location}.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-foreground">Navigation</h2>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-foreground">
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/resume" className="hover:text-foreground">
                Resume
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-foreground">Contact</h2>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <Mail className="size-4 shrink-0" aria-hidden="true" />
              <a href={`mailto:${site.email}`} className="hover:text-foreground">
                {site.email}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="size-4 shrink-0" aria-hidden="true" />
              <a href={`tel:${site.phoneHref}`} className="hover:text-foreground">
                {site.phone}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Linkedin className="size-4 shrink-0" aria-hidden="true" />
              <a
                href={site.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t">
        <div className="container-page flex flex-col gap-2 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {year} {site.name}. All rights reserved.
          </p>
          <p>{site.location}</p>
        </div>
      </div>
    </footer>
  )
}
