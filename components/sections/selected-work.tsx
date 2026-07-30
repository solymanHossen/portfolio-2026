import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { ProjectCard } from "@/components/projects/project-card"
import { projects } from "@/data/projects"

export function SelectedWork() {
  const featured = [...projects].filter((project) => project.featured).sort((a, b) => a.order - b.order)

  return (
    <section className="border-b py-20 sm:py-28">
      <div className="container-page">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-mono text-xs uppercase tracking-wider text-primary">Selected Engineering Work</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
              Systems I&rsquo;ve helped design, optimise and scale.
            </h2>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
          >
            View all projects
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-12">
          {featured.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
