import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

import { getProjectBySlug } from "@/data/projects"

export function RelatedProjects({ slugs }: { slugs: string[] }) {
  const related = slugs.map((slug) => getProjectBySlug(slug)).filter((project) => project !== undefined)

  if (related.length === 0) return null

  return (
    <section className="border-t py-12">
      <div className="container-prose">
        <h2 className="font-mono text-xs font-semibold uppercase tracking-wider text-primary">Related Projects</h2>
        <ul className="mt-4 space-y-3">
          {related.map((project) => (
            <li key={project.slug}>
              <Link
                href={`/projects/${project.slug}`}
                className="inline-flex items-center gap-1.5 text-base font-medium text-foreground hover:text-primary"
              >
                {project.title}
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
