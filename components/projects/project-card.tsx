import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import type { ProjectSummary } from "@/types/project"

export function ProjectCard({ project }: { project: ProjectSummary }) {
  return (
    <article className="group rounded-2xl bg-card p-6 shadow-md transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-xl sm:p-8">
      <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">{project.category}</p>
          <h3 className="mt-3 text-4xl font-semibold text-foreground text-balance">{project.title}</h3>
          <p className="mt-3 text-lg text-muted-foreground">{project.tagline}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <Badge key={tech} variant="outline" className="text-sm">
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">Problem</h4>
            <p className="mt-2 text-lg text-foreground">{project.problem}</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              Engineering contribution
            </h4>
            <p className="mt-2 text-lg text-foreground">{project.contribution}</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">Key outcome</h4>
            <p className="mt-2 text-lg text-foreground">{project.outcome}</p>
          </div>
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-1.5 text-base font-medium text-primary hover:underline"
          >
            View case study
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  )
}
