import type { Metadata } from "next"

import { ProjectFilter } from "@/components/projects/project-filter"
import { projects } from "@/data/projects"
import { buildMetadata } from "@/lib/metadata"

export const metadata: Metadata = buildMetadata({
  title: "Projects",
  description:
    "Full Stack Software Engineering case studies covering scalable dashboards, multi-vendor commerce, AI-assisted automation and performance engineering.",
  path: "/projects",
})

export default function ProjectsPage() {
  const sorted = [...projects].sort((a, b) => a.order - b.order)

  return (
    <div className="container-page py-16 sm:py-24">
      <p className="font-mono text-xs uppercase tracking-wider text-primary">Projects</p>
      <h1 className="mt-3 max-w-2xl text-4xl font-bold tracking-tight text-balance sm:text-5xl">
        Systems I&rsquo;ve helped design, optimise and scale.
      </h1>
      <p className="mt-4 max-w-2xl text-base text-muted-foreground">
        A complete archive of the engineering work behind each project — filter by the kind of problem it solved.
      </p>

      <div className="mt-12">
        <ProjectFilter projects={sorted} />
      </div>
    </div>
  )
}
