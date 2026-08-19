"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { ThemeToggle } from "@/components/layout/theme-toggle"
import { CommandPalette } from "@/components/layout/command-palette"
import { MobileNav } from "@/components/layout/mobile-nav"
import { NAV_ICONS, isNavLinkActive } from "@/components/layout/nav-icons"
import { navLinks } from "@/data/nav"
import { site } from "@/data/site"
import { cn } from "@/lib/utils"

export function SiteHeader() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-40 border-b bg-background/85 backdrop-blur supports-backdrop-filter:bg-background/70 print:hidden">
      <div className="container-page flex h-20 items-center justify-between gap-4">
        <div className="flex items-center gap-8">
          <Tooltip>
            <TooltipTrigger asChild>
              <Link href="/" className="relative flex items-center gap-2" aria-label={`${site.name} — home`}>
                <span className="flex size-10 items-center justify-center rounded-full border border-primary/40 bg-primary/10 font-mono text-base font-semibold text-primary">
                  {site.monogram}
                </span>
                <span className="absolute -bottom-0.5 -right-0.5 flex size-3.5" aria-hidden="true">
                  <span className="absolute inset-0 animate-ping rounded-full bg-primary opacity-75" />
                  <span className="relative size-3.5 rounded-full bg-primary ring-2 ring-background" />
                </span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="bottom">{site.availability}</TooltipContent>
          </Tooltip>
          <nav aria-label="Primary" className="hidden xl:flex items-center gap-1">
            {navLinks.map((link) => {
              const Icon = NAV_ICONS[link.href]
              const isActive = isNavLinkActive(pathname, link.href)

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "flex items-center gap-2 rounded-full px-4 py-2.5 text-[15px] font-medium transition-colors hover:bg-accent",
                    isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {Icon ? <Icon className="size-4.5" aria-hidden="true" /> : null}
                  {link.label}
                </Link>
              )
            })}
          </nav>
        </div>

        <div className="flex items-center gap-3">
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
    </header>
  )
}
