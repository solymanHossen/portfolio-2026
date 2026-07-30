import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { aboutBio, interests, languages, site } from "@/data/site"

export function AboutPreview() {
  return (
    <section className="border-b py-20 sm:py-28">
      <div className="container-page grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]">
        <div>
          <p className="font-mono text-xs uppercase tracking-wider text-primary">About</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            The engineer behind the systems.
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">{aboutBio}</p>
          <Link
            href="/about"
            className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
          >
            Read the full story
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="space-y-6 rounded-lg border bg-card p-6">
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Location</h3>
            <p className="mt-1 text-sm text-foreground">{site.location}</p>
          </div>
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Languages</h3>
            <ul className="mt-1 space-y-1 text-sm text-foreground">
              {languages.map((language) => (
                <li key={language.name}>
                  {language.name} <span className="text-muted-foreground">— {language.proficiency}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Interests</h3>
            <p className="mt-1 text-sm text-foreground">{interests.join(" · ")}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
