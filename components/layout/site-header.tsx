"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { ThemeToggle } from "@/components/layout/theme-toggle"
import { CommandPalette } from "@/components/layout/command-palette"
import { MobileNav } from "@/components/layout/mobile-nav"
import { isNavLinkActive } from "@/components/layout/nav-icons"
import { navLinks } from "@/data/nav"
import { site } from "@/data/site"
import { cn } from "@/lib/utils"

export function SiteHeader() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-40 print:hidden sm:top-4 sm:px-4">
      <div className="container-page">
        <div className="-mx-4 grid h-16 grid-cols-[1fr_auto_1fr] items-center gap-4 rounded-none border-b bg-background/85 px-4 shadow-sm backdrop-blur supports-backdrop-filter:bg-background/70 sm:mx-0 sm:rounded-full sm:border">
          <div className="col-start-1 flex items-center">
            <Tooltip>
              <TooltipTrigger asChild>
                <Link href="/" className="relative flex items-center gap-2" aria-label={`${site.name} — home`}>
                  <span className="relative flex size-10 items-center justify-center overflow-hidden rounded-full border border-primary/40">
                    <Image src="/images/portrait-about.jpg" alt={site.name} fill sizes="40px" className="object-cover" />
                  </span>
                  <span className="absolute -bottom-0.5 -right-0.5 flex size-3.5" aria-hidden="true">
                    <span className="absolute inset-0 animate-ping rounded-full bg-primary opacity-75" />
                    <span className="relative size-3.5 rounded-full bg-primary ring-2 ring-background" />
                  </span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="bottom" className="hidden sm:block">
                {site.availability}
              </TooltipContent>
            </Tooltip>
          </div>
          <nav aria-label="Primary" className="col-start-2 hidden items-center gap-1 justify-self-center xl:flex">
            {navLinks.map((link) => {
              const isActive = isNavLinkActive(pathname, link.href)

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "relative rounded-full px-4 py-2.5 text-[17px] font-medium transition-colors",
                    isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="active-nav-pill"
                      className="absolute inset-0 rounded-full bg-accent"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative">{link.label}</span>
                </Link>
              )
            })}
          </nav>
          <div className="col-start-3 flex items-center justify-end gap-3">
            <div className="hidden sm:block">
              <CommandPalette />
            </div>
            <Button asChild variant="secondary" size="lg" className="hidden rounded-full sm:inline-flex">
              <Link href="/resume">Resume</Link>
            </Button>
            <ThemeToggle />
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  )
}
