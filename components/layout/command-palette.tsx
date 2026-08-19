"use client"

import { useCallback, useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { useTheme } from "next-themes"
import { toast } from "sonner"
import { Command as CommandIcon } from "lucide-react"

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command"
import { Button } from "@/components/ui/button"
import { commands } from "@/data/commands"
import { site } from "@/data/site"
import type { CommandGroup as CommandGroupName, NavCommand } from "@/types/content"

const GROUP_ORDER: CommandGroupName[] = ["Navigate", "Actions", "Social"]

export function CommandPalette() {
  const [open, setOpen] = useState(false)
  const router = useRouter()
  const { resolvedTheme, setTheme } = useTheme()

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "k" && (event.metaKey || event.ctrlKey)) {
        event.preventDefault()
        setOpen((value) => !value)
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [])

  const runCommand = useCallback((command: NavCommand) => {
    setOpen(false)

    if (command.type === "link") {
      if (command.external) {
        window.open(command.href, "_blank", "noopener,noreferrer")
      } else {
        router.push(command.href)
      }
      return
    }

    switch (command.actionId) {
      case "copy-email":
        navigator.clipboard.writeText(site.email)
        toast.success("Email copied to clipboard")
        break
      case "toggle-theme":
        setTheme(resolvedTheme === "dark" ? "light" : "dark")
        break
      case "download-resume":
        router.push("/resume")
        break
    }
  }, [resolvedTheme, router, setTheme])

  return (
    <>
      <Button
        variant="outline"
        size="sm"
        className="h-10 gap-2 rounded-full px-4 text-muted-foreground font-normal"
        onClick={() => setOpen(true)}
      >
        <CommandIcon className="size-4" />
        <span className="hidden sm:inline text-sm">Search</span>
        <kbd className="hidden sm:inline-flex items-center gap-0.5 rounded border bg-muted px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground">
          &#8984;K
        </kbd>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen} title="Command Palette" description="Jump to a page or run an action">
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          {GROUP_ORDER.map((group, index) => {
            const groupCommands = commands.filter((command) => command.group === group)
            if (groupCommands.length === 0) return null

            return (
              <div key={group}>
                {index > 0 && <CommandSeparator />}
                <CommandGroup heading={group}>
                  {groupCommands.map((command) => {
                    const Icon = command.icon
                    return (
                      <CommandItem key={command.id} onSelect={() => runCommand(command)}>
                        <Icon />
                        <span>{command.label}</span>
                      </CommandItem>
                    )
                  })}
                </CommandGroup>
              </div>
            )
          })}
        </CommandList>
      </CommandDialog>
    </>
  )
}
