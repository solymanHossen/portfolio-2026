import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import type { ProjectSummary } from "@/types/project"

export function ProjectCard({ project }: { project: ProjectSummary }) {
  return (
    <article className="grid gap-6 border-b border-border py-10 first:pt-0 last:border-b-0 md:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] md:gap-10">
      <div>
        <p className="font-mono text-xs uppercase tracking-wider text-primary">{project.category}</p>
        <h3 className="mt-3 text-2xl font-semibold text-foreground text-balance">{project.title}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{project.tagline}</p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.techStack.map((tech) => (
            <Badge key={tech} variant="outline" className="font-mono">
              {tech}
            </Badge>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Problem</h4>
          <p className="mt-1 text-sm text-foreground">{project.problem}</p>
        </div>
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Engineering contribution
          </h4>
          <p className="mt-1 text-sm text-foreground">{project.contribution}</p>
        </div>
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Key outcome</h4>
          <p className="mt-1 text-sm text-foreground">{project.outcome}</p>
        </div>
        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
        >
          View case study
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </div>
    </article>
  )
}
