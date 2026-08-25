"use client"

import { useState } from "react"

import { Button } from "@/components/ui/button"
import { ProjectCard } from "./project-card"
import { TAG_LABELS } from "@/data/projects"
import type { ProjectSummary, ProjectTag } from "@/types/project"

const ALL_TAGS = Object.keys(TAG_LABELS) as ProjectTag[]

export function ProjectFilter({ projects }: { projects: ProjectSummary[] }) {
  const [active, setActive] = useState<ProjectTag | "all">("all")
  const filtered = active === "all" ? projects : projects.filter((project) => project.tags.includes(active))

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filter projects by category">
        <Button variant={active === "all" ? "default" : "outline"} size="sm" onClick={() => setActive("all")}>
          All
        </Button>
        {ALL_TAGS.map((tag) => (
          <Button
            key={tag}
            variant={active === tag ? "default" : "outline"}
            size="sm"
            onClick={() => setActive(tag)}
          >
            {TAG_LABELS[tag]}
          </Button>
        ))}
      </div>

      <div className="mt-10">
        {filtered.length === 0 ? (
          <div className="rounded-lg border border-dashed py-16 text-center">
            <p className="text-sm text-muted-foreground">
              No projects tagged &ldquo;{TAG_LABELS[active as ProjectTag]}&rdquo; yet.
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            {filtered.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
