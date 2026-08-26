import Image from "next/image"
import type { Metadata } from "next"

import { Philosophy } from "@/components/sections/philosophy"
import { Education } from "@/components/sections/education"
import { aboutBio, aboutStory, interests, languages, site } from "@/data/site"
import { buildMetadata } from "@/lib/metadata"
import { profilePageJsonLd } from "@/lib/structured-data"

export const metadata: Metadata = buildMetadata({
  title: "About",
  description:
    "The story, values and interdisciplinary background behind MD Solyman Hossen's approach to software engineering.",
  path: "/about",
})

const STRIP_PHOTOS = [
  { src: "/images/portrait-strip-1.jpg", alt: "Solyman on the coast, part of his travelling interest" },
  { src: "/images/portrait-strip-2.jpg", alt: "Solyman on the coast, part of his travelling interest" },
  { src: "/images/portrait-strip-3.jpg", alt: "Solyman on the coast, part of his travelling interest" },
]

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageJsonLd()) }}
      />

      <div className="container-page py-16 sm:py-24">
        <p className="font-mono text-xs uppercase tracking-wider text-primary">About</p>
        <h1 className="mt-3 max-w-2xl text-4xl font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl">
          From civil engineering and Bangla studies to AI-driven systems.
        </h1>

        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-[0.8fr_1.5fr_1fr]">
          <div className="relative aspect-4/5 overflow-hidden rounded-2xl border lg:aspect-auto">
            <Image
              src="/images/portrait-hero.jpg"
              alt={`${site.name} outdoors`}
              fill
              sizes="(min-width: 1024px) 20vw, 100vw"
              className="object-cover object-top"
            />
          </div>

          <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
            <p>{aboutBio}</p>
            {aboutStory.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="space-y-6 rounded-lg border bg-card p-6 sm:p-7">
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">Location</h2>
              <p className="mt-1.5 text-base text-foreground">{site.location}</p>
            </div>
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">Languages</h2>
              <ul className="mt-1.5 space-y-1 text-base text-foreground">
                {languages.map((language) => (
                  <li key={language.name}>
                    {language.name} <span className="text-muted-foreground">— {language.proficiency}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">Interests</h2>
              <p className="mt-1.5 text-base text-foreground">{interests.join(" · ")}</p>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <p className="mb-3 font-mono text-xs uppercase tracking-wider text-muted-foreground">
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

      <Philosophy />
      <Education />
    </>
  )
}
