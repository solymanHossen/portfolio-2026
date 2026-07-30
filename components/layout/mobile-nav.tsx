"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { navLinks } from "@/data/nav"

export function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <Button variant="ghost" size="icon" aria-label="Open menu" onClick={() => setOpen(true)} className="md:hidden">
        <Menu className="size-5" />
      </Button>
      <SheetContent side="right" className="w-full sm:max-w-xs">
        <SheetHeader>
          <SheetTitle>Navigation</SheetTitle>
        </SheetHeader>
        <nav aria-label="Mobile" className="flex flex-col gap-1 px-4">
          {navLinks.map((link) => (
            <SheetClose key={link.href} asChild>
              <Link
                href={link.href}
                className="rounded-md px-3 py-3 text-base font-medium text-foreground hover:bg-accent hover:text-accent-foreground"
              >
                {link.label}
              </Link>
            </SheetClose>
          ))}
          <SheetClose asChild>
            <Link
              href="/resume"
              className="mt-2 rounded-md border px-3 py-3 text-center text-base font-medium text-foreground hover:bg-accent"
            >
              Resume
            </Link>
          </SheetClose>
        </nav>
      </SheetContent>
    </Sheet>
  )
}
