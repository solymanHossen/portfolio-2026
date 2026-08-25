import Link from "next/link"
import { ArrowRight, Lightbulb, TrendingUp, Wrench } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import type { ProjectSummary } from "@/types/project"

const DETAIL_ROWS = [
  {
    key: "problem" as const,
    label: "Problem",
    icon: Lightbulb,
    iconClassName: "bg-chart-1/10 text-chart-1",
  },
  {
    key: "contribution" as const,
    label: "Engineering contribution",
    icon: Wrench,
    iconClassName: "bg-chart-3/10 text-chart-3",
  },
  {
    key: "outcome" as const,
    label: "Key outcome",
    icon: TrendingUp,
    iconClassName: "bg-chart-2/10 text-chart-2",
  },
]

export function ProjectCard({ project }: { project: ProjectSummary }) {
  return (
    <article className="group rounded-3xl border border-border/60 bg-gradient-to-b from-card to-card/70 p-6 shadow-sm transition-all duration-500 ease-out hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 sm:p-8">
      <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">{project.category}</p>
          <h3 className="mt-3 text-4xl font-semibold text-foreground text-balance">{project.title}</h3>
          <p className="mt-3 text-lg text-muted-foreground">{project.tagline}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <Badge
                key={tech}
                variant="outline"
                className="rounded-full border-primary/20 bg-primary/5 text-sm font-normal text-primary"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        <div className="space-y-5">
          {DETAIL_ROWS.map(({ key, label, icon: Icon, iconClassName }) => (
            <div key={key} className="flex gap-3.5">
              <span
                className={`flex size-9 shrink-0 items-center justify-center rounded-full ${iconClassName}`}
                aria-hidden="true"
              >
                <Icon className="size-4" />
              </span>
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">{label}</h4>
                <p className="mt-1.5 text-lg leading-relaxed text-foreground">{project[key]}</p>
              </div>
            </div>
          ))}
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-1.5 text-base font-medium text-primary transition-colors hover:underline"
          >
            View case study
            <ArrowRight
              className="size-4 transition-transform duration-300 ease-out group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        </div>
      </div>
    </article>
  )
}
