import type { Metadata } from "next"

import { SkillGrid } from "@/components/expertise/skill-grid"
import { skillCategories } from "@/data/skills"
import { buildMetadata } from "@/lib/metadata"
import { breadcrumbJsonLd } from "@/lib/structured-data"

export const metadata: Metadata = buildMetadata({
  title: "Expertise",
  description:
    "A capability map of MD Solyman Hossen's technical expertise across frontend, backend, data, AI automation and architecture.",
  path: "/expertise",
})

export default function ExpertisePage() {
  return (
    <div className="container-page py-16 sm:py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", path: "/" },
              { name: "Expertise", path: "/expertise" },
            ]),
          ),
        }}
      />

      <p className="font-mono text-xs uppercase tracking-wider text-primary">Technical Expertise</p>
      <h1 className="mt-3 max-w-2xl text-4xl font-bold tracking-tight text-balance sm:text-5xl">
        A capability map, not a percentage guess.
      </h1>
      <p className="mt-4 max-w-2xl text-base text-muted-foreground">
        Five areas of practice, built from four years of shipping production systems rather than self-rated skill
        bars.
      </p>

      <div className="mt-14">
        <SkillGrid categories={skillCategories} variant="full" />
      </div>
    </div>
  )
}
