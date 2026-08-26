import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { TAG_LABELS } from "@/data/projects"
import type { CaseStudy } from "@/types/project"

export function CaseStudyHero({ caseStudy }: { caseStudy: CaseStudy }) {
  return (
    <header className="border-b py-16 sm:py-20">
      <div className="container-page">
        <Link
          href="/projects"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="size-4" aria-hidden="true" />
          All projects
        </Link>

        <p className="mt-6 font-mono text-xs uppercase tracking-wider text-primary">{caseStudy.category}</p>
        <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl">
          {caseStudy.title}
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">{caseStudy.tagline}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {caseStudy.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {TAG_LABELS[tag]}
            </Badge>
          ))}
        </div>
      </div>
    </header>
  )
}
