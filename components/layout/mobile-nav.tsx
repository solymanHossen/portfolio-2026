"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { NAV_ICONS, isNavLinkActive } from "@/components/layout/nav-icons"
import { navLinks } from "@/data/nav"
import { cn } from "@/lib/utils"

export function MobileNav() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <Button variant="ghost" size="icon" aria-label="Open menu" onClick={() => setOpen(true)} className="xl:hidden">
        <Menu className="size-5" />
      </Button>
      <SheetContent side="right" className="w-full sm:max-w-xs">
        <SheetHeader>
          <SheetTitle>Navigation</SheetTitle>
        </SheetHeader>
        <nav aria-label="Mobile" className="flex flex-col gap-1 px-4">
          {navLinks.map((link) => {
            const Icon = NAV_ICONS[link.href]
            const isActive = isNavLinkActive(pathname, link.href)

            return (
              <SheetClose key={link.href} asChild>
                <Link
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "flex items-center gap-3 rounded-full px-4 py-3.5 text-[17px] font-medium hover:bg-accent hover:text-accent-foreground",
                    isActive ? "text-foreground" : "text-muted-foreground",
                  )}
                >
                  {Icon ? <Icon className="size-5" aria-hidden="true" /> : null}
                  {link.label}
                </Link>
              </SheetClose>
            )
          })}
          <SheetClose asChild>
            <Link
              href="/resume"
              className="mt-3 rounded-full bg-secondary px-4 py-3.5 text-center text-[17px] font-medium text-secondary-foreground hover:bg-secondary/90"
            >
              Resume
            </Link>
          </SheetClose>
        </nav>
      </SheetContent>
    </Sheet>
  )
}
