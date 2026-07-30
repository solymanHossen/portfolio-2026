import Link from "next/link"

import { Button } from "@/components/ui/button"
import { StatusIndicator } from "@/components/ui/status-indicator"
import { ThemeToggle } from "@/components/layout/theme-toggle"
import { CommandPalette } from "@/components/layout/command-palette"
import { MobileNav } from "@/components/layout/mobile-nav"
import { navLinks } from "@/data/nav"
import { site } from "@/data/site"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2" aria-label={`${site.name} — home`}>
            <span className="flex size-8 items-center justify-center rounded-md border border-primary/40 bg-primary/10 font-mono text-sm font-semibold text-primary">
              {site.monogram}
            </span>
          </Link>
          <nav aria-label="Primary" className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <StatusIndicator label={site.availability} variant="available" pulse className="hidden lg:inline-flex" />
          <div className="hidden sm:block">
            <CommandPalette />
          </div>
          <Button asChild variant="outline" size="sm" className="hidden sm:inline-flex">
            <Link href="/resume">Resume</Link>
          </Button>
          <ThemeToggle />
          <MobileNav />
        </div>
      </div>
    </header>
  )
}
