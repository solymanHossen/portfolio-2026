"use client"

import { Fragment, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
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
      <div
        className="flex items-center gap-2 overflow-x-auto px-4 py-2 sm:justify-center sm:overflow-visible sm:px-0"
        role="list"
        aria-label="Engineering architecture flow"
      >
        {nodes.map((node, index) => {
          const Icon = node.icon
          const isActive = activeIndex === index
          const isConnectorActive = activeIndex === index || activeIndex === index + 1

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
                  "flex w-28 shrink-0 flex-col items-center gap-2.5 rounded-2xl border bg-card px-4 py-4 text-center transition-all duration-300 sm:w-32",
                  isActive
                    ? "-translate-y-1 border-primary/60 bg-primary/5 shadow-lg shadow-primary/10 ring-1 ring-primary/20"
                    : "border-border hover:-translate-y-0.5 hover:shadow-md",
                )}
              >
                <Icon
                  className={cn("size-6 transition-colors duration-300", isActive ? "text-primary" : "text-muted-foreground")}
                  aria-hidden="true"
                />
                <span className="text-sm font-semibold text-foreground">{node.label}</span>
              </button>

              {index < nodes.length - 1 && (
                <div className="flex shrink-0 items-center" aria-hidden="true">
                  <span
                    className={cn(
                      "h-px w-6 transition-colors duration-300 sm:w-8",
                      isConnectorActive ? "bg-primary/60" : "bg-border",
                    )}
                  />
                  <span
                    className={cn(
                      "size-1.5 shrink-0 rounded-full transition-colors duration-300",
                      isConnectorActive ? "bg-primary motion-safe:animate-pulse" : "bg-border",
                    )}
                  />
                  <span
                    className={cn(
                      "h-px w-6 transition-colors duration-300 sm:w-8",
                      isConnectorActive ? "bg-primary/60" : "bg-border",
                    )}
                  />
                </div>
              )}
            </Fragment>
          )
        })}
      </div>

      <div className="mt-6 flex min-h-6 items-center justify-center px-4 text-center">
        <AnimatePresence mode="wait">
          <motion.p
            key={active ? active.label : "default"}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.2 }}
            id="architecture-map-description"
            aria-live="polite"
            className="font-mono text-sm text-muted-foreground"
          >
            {active ? active.description : "Hover or focus a node to see how it fits the system."}
          </motion.p>
        </AnimatePresence>
      </div>
    </div>
  )
}
