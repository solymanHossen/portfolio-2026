import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { SkillGrid } from "@/components/expertise/skill-grid"
import { skillCategories } from "@/data/skills"

export function ExpertiseMap() {
  return (
    <section className="border-b py-20 sm:py-28">
      <div className="container-page">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-mono text-xs uppercase tracking-wider text-primary">Technical Expertise</p>
            <h2 className="mt-3 max-w-2xl text-4xl font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl">
              A capability map, not a percentage guess.
            </h2>
          </div>
          <Link
            href="/expertise"
            className="inline-flex items-center gap-1.5 text-base font-medium text-primary hover:underline"
          >
            View full expertise
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-12">
          <SkillGrid categories={skillCategories} variant="preview" />
        </div>
      </div>
    </section>
  )
}
