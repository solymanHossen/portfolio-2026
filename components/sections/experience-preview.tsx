import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Timeline } from "@/components/experience/timeline"
import { experience } from "@/data/experience"

export function ExperiencePreview() {
  return (
    <section className="border-b py-20 sm:py-28">
      <div className="container-page">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-mono text-xs uppercase tracking-wider text-primary">Professional Experience</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
              A track record of shipping and leading.
            </h2>
          </div>
          <Link
            href="/experience"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
          >
            View full experience
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-12">
          <Timeline entries={experience} variant="preview" />
        </div>
      </div>
    </section>
  )
}
