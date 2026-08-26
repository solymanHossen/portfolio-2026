import type { Metadata } from "next"

import { Timeline } from "@/components/experience/timeline"
import { experience } from "@/data/experience"
import { buildMetadata } from "@/lib/metadata"
import { breadcrumbJsonLd } from "@/lib/structured-data"

export const metadata: Metadata = buildMetadata({
  title: "Experience",
  description:
    "The professional journey behind MD Solyman Hossen's engineering work — Mediusware Ltd and international freelance delivery.",
  path: "/experience",
})

export default function ExperiencePage() {
  return (
    <div className="container-page py-16 sm:py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", path: "/" },
              { name: "Experience", path: "/experience" },
            ]),
          ),
        }}
      />

      <p className="font-mono text-xs uppercase tracking-wider text-primary">Professional Experience</p>
      <h1 className="mt-3 max-w-2xl text-4xl font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl">
        A track record of shipping and leading.
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
        Four years across two roles at Mediusware Ltd and remote freelance delivery for international clients.
      </p>

      <div className="mt-10 max-w-3xl">
        <Timeline entries={experience} variant="full" />
      </div>
    </div>
  )
}
