import fs from "node:fs"
import path from "node:path"
import type { Metadata } from "next"
import { Download } from "lucide-react"

import { Button } from "@/components/ui/button"
import { formatDateRange } from "@/lib/format"
import { buildMetadata } from "@/lib/metadata"
import { aboutBio, site } from "@/data/site"
import { experience } from "@/data/experience"
import { education } from "@/data/education"
import { skillCategories } from "@/data/skills"

export const metadata: Metadata = buildMetadata({
  title: "Resume",
  description: "Resume for MD Solyman Hossen, Full Stack Software Engineer specialising in scalable, AI-driven systems.",
  path: "/resume",
})

function resumeFileExists() {
  return fs.existsSync(path.join(process.cwd(), "public", "resume.pdf"))
}

export default function ResumePage() {
  const hasResumeFile = resumeFileExists()

  return (
    <div className="container-page py-16 sm:py-24 print:py-0">
      <div className="flex flex-wrap items-start justify-between gap-4 print:hidden">
        <div>
          <p className="font-mono text-xs uppercase tracking-wider text-primary">Resume</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-balance sm:text-5xl">
            {site.name}
          </h1>
        </div>
        {hasResumeFile ? (
          <Button asChild size="lg">
            <a href="/resume.pdf" download>
              Download PDF
              <Download className="size-4" aria-hidden="true" />
            </a>
          </Button>
        ) : (
          <div className="text-right">
            <Button size="lg" disabled>
              Download PDF
              <Download className="size-4" aria-hidden="true" />
            </Button>
            <p className="mt-2 max-w-64 text-xs text-muted-foreground">
              The PDF is being finalised — use Print (Ctrl/Cmd+P) for now, or reach out by email.
            </p>
          </div>
        )}
      </div>

      <article className="mx-auto mt-12 max-w-3xl border-t pt-10 print:mt-0 print:border-0 print:pt-0">
        <header>
          <h2 className="hidden text-3xl font-bold print:block">{site.name}</h2>
          <p className="text-lg font-medium text-foreground">{site.title}</p>
          <p className="mt-1 flex flex-wrap gap-x-3 gap-y-1 font-mono text-xs text-muted-foreground">
            <span>{site.email}</span>
            <span>{site.phone}</span>
            <span>{site.location}</span>
            <span>{site.linkedIn.replace("https://www.", "")}</span>
          </p>
        </header>

        <section className="mt-8">
          <h2 className="font-mono text-xs font-semibold uppercase tracking-wider text-primary">Summary</h2>
          <p className="mt-2 text-sm leading-relaxed text-foreground">{aboutBio}</p>
        </section>

        <section className="mt-8">
          <h2 className="font-mono text-xs font-semibold uppercase tracking-wider text-primary">Experience</h2>
          <div className="mt-3 space-y-6">
            {experience.map((entry) => (
              <div key={entry.id}>
                <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                  <h3 className="text-base font-semibold text-foreground">
                    {entry.role} · {entry.company}
                  </h3>
                  <span className="font-mono text-xs text-muted-foreground">
                    {formatDateRange(entry.startDate, entry.endDate)}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground">{entry.location}</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-foreground">
                  {entry.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-8">
          <h2 className="font-mono text-xs font-semibold uppercase tracking-wider text-primary">
            Technical Capabilities
          </h2>
          <div className="mt-3 space-y-2">
            {skillCategories.map((category) => (
              <p key={category.id} className="text-sm">
                <span className="font-semibold text-foreground">{category.label}: </span>
                <span className="text-muted-foreground">{category.skills.join(", ")}</span>
              </p>
            ))}
          </div>
        </section>

        <section className="mt-8">
          <h2 className="font-mono text-xs font-semibold uppercase tracking-wider text-primary">
            Education & Certification
          </h2>
          <div className="mt-3 space-y-2">
            {education.map((item) => (
              <div key={item.id} className="flex flex-wrap items-baseline justify-between gap-x-4">
                <p className="text-sm text-foreground">
                  {item.title} <span className="text-muted-foreground">— {item.institution}</span>
                </p>
                <span className="font-mono text-xs text-muted-foreground">{item.period}</span>
              </div>
            ))}
          </div>
        </section>
      </article>
    </div>
  )
}
