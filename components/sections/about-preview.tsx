import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { aboutBio, interests, languages, site } from "@/data/site"

const STRIP_PHOTOS = [
  { src: "/images/portrait-strip-1.jpg", alt: "Solyman on the coast, part of his travelling interest" },
  { src: "/images/portrait-strip-2.jpg", alt: "Solyman on the coast, part of his travelling interest" },
  { src: "/images/portrait-strip-3.jpg", alt: "Solyman on the coast, part of his travelling interest" },
]

export function AboutPreview() {
  return (
    <section className="border-b py-20 sm:py-28">
      <div className="container-page">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.8fr_1.5fr_1fr]">
          <div className="relative aspect-4/5 overflow-hidden rounded-2xl border lg:aspect-auto">
            <Image
              src="/images/portrait-about.jpg"
              alt={`${site.name} outdoors`}
              fill
              sizes="(min-width: 1024px) 20vw, 100vw"
              className="object-cover"
            />
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-wider text-primary">About</p>
            <h2 className="mt-3 text-4xl font-bold tracking-tight text-balance sm:text-5xl">
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

        <div className="mt-10">
          <p className="mb-3 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
            Life outside the terminal — travelling
          </p>
          <div className="grid grid-cols-3 gap-3">
            {STRIP_PHOTOS.map((photo) => (
              <div key={photo.src} className="relative aspect-square overflow-hidden rounded-lg border">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(min-width: 1024px) 15vw, 33vw"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
