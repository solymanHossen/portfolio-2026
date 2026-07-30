"use client"

import { Fragment, useState } from "react"
import { Bot, Database, Gauge, Layout, Webhook, Workflow } from "lucide-react"

import { cn } from "@/lib/utils"

const nodes = [
  { label: "UI", icon: Layout, description: "React and Next.js interfaces, built as typed, reusable components." },
  { label: "API", icon: Webhook, description: "REST API contracts designed API-first for frontend integration." },
  { label: "Business Logic", icon: Workflow, description: "Domain rules and workflows that encode how the system behaves." },
  { label: "Automation", icon: Bot, description: "Agentic n8n workflows that remove repetitive manual operations." },
  { label: "Database", icon: Database, description: "PostgreSQL and MongoDB, modelled for the shape of the data." },
  { label: "Performance", icon: Gauge, description: "Query and rendering optimisation, measured before it's changed." },
] as const

export function ArchitectureMap() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const active = activeIndex !== null ? nodes[activeIndex] : null

  return (
    <div>
      <div className="flex flex-wrap items-center justify-center gap-x-1 gap-y-3" role="list" aria-label="Engineering architecture flow">
        {nodes.map((node, index) => {
          const Icon = node.icon
          return (
            <Fragment key={node.label}>
              <button
                type="button"
                role="listitem"
                onMouseEnter={() => setActiveIndex(index)}
                onFocus={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
                onBlur={() => setActiveIndex(null)}
                aria-describedby="architecture-map-description"
                className={cn(
                  "flex w-24 flex-col items-center gap-2 rounded-lg border bg-card px-3 py-3 text-center transition-colors sm:w-28",
                  activeIndex === index ? "border-primary/60 bg-primary/5" : "border-border",
                )}
              >
                <Icon className={cn("size-5", activeIndex === index ? "text-primary" : "text-muted-foreground")} aria-hidden="true" />
                <span className="text-xs font-medium text-foreground">{node.label}</span>
              </button>
              {index < nodes.length - 1 && (
                <div className="hidden items-center sm:flex" aria-hidden="true">
                  <span className="h-px w-5 bg-border" />
                  <span className="size-1.5 rounded-full bg-primary motion-safe:animate-pulse" />
                  <span className="h-px w-5 bg-border" />
                </div>
              )}
            </Fragment>
          )
        })}
      </div>
      <p
        id="architecture-map-description"
        aria-live="polite"
        className="mt-4 min-h-10 text-center font-mono text-xs text-muted-foreground"
      >
        {active ? active.description : "Hover or focus a node to see how it fits the system."}
      </p>
    </div>
  )
}
