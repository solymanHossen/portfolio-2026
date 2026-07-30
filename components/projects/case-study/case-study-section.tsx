import type { ReactNode } from "react"

interface CaseStudySectionProps {
  title: string
  children: ReactNode
}

export function CaseStudySection({ title, children }: CaseStudySectionProps) {
  return (
    <section className="border-b py-8 last:border-b-0">
      <h2 className="font-mono text-xs font-semibold uppercase tracking-wider text-primary">{title}</h2>
      <div className="mt-3 space-y-3 text-base leading-relaxed text-foreground">{children}</div>
    </section>
  )
}
