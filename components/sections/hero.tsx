import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Linkedin, Mail } from "lucide-react"

import { Button } from "@/components/ui/button"
import { GridBackground } from "@/components/visuals/grid-background"
import { ArchitectureMap } from "@/components/visuals/architecture-map"
import { hero, site } from "@/data/site"
import { projects, getTagCounts } from "@/data/projects"

export function Hero() {
  const [firstName, lastName] = site.shortName.split(" ")
  const tagCounts = getTagCounts().slice(0, 5)
  const highlightTag = tagCounts[0]?.tag
  const stack = Array.from(new Set(projects.flatMap((project) => project.techStack))).filter(
    (item) => !item.startsWith("TODO"),
  )
  const marqueeText = stack.join("  ·  ")

  return (
    <section className="relative overflow-hidden border-b">
      <GridBackground variant="dots" className="opacity-70" />
      <div className="container-page relative py-20 sm:py-28">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-wider text-primary">{hero.label}</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl">
            {hero.headline}
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">{hero.supportingHeadline}</p>
          <p className="mt-4 text-base text-muted-foreground">{hero.copy}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link href={hero.primaryCta.href}>{hero.primaryCta.label}</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href={hero.secondaryCta.href}>{hero.secondaryCta.label}</Link>
            </Button>
            <Button asChild size="lg" variant="ghost">
              <Link href={hero.resumeCta.href}>{hero.resumeCta.label}</Link>
            </Button>
          </div>

          <ul className="mt-10 grid max-w-xl grid-cols-1 gap-x-6 gap-y-2 text-sm text-muted-foreground sm:grid-cols-2">
            {hero.credibility.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span aria-hidden="true" className="size-1 shrink-0 rounded-full bg-primary" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Photo + systems composition */}
        <div className="mt-16 grid grid-cols-1 gap-5 lg:grid-cols-[1.05fr_1fr]">
          <div className="relative min-h-105 overflow-hidden rounded-2xl border sm:min-h-120">
            <Image
              src="/images/portrait-hero.jpg"
              alt={`${site.name}, ${site.title}, on location in Bangladesh`}
              fill
              priority
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover object-top grayscale contrast-110"
            />
            <div aria-hidden="true" className="absolute inset-0 bg-linear-to-t from-background via-background/10 to-transparent" />

            <Link
              href="/about"
              className="absolute left-4 top-4 inline-flex items-center gap-1 rounded-full border bg-background/90 px-3 py-1.5 text-xs font-medium text-foreground backdrop-blur transition-colors hover:bg-background"
            >
              About Me
              <ArrowUpRight className="size-3" aria-hidden="true" />
            </Link>

            <div className="absolute inset-x-4 bottom-4">
              <p className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-primary">
                <span aria-hidden="true" className="size-1.5 rounded-full bg-primary motion-safe:animate-pulse" />
                {site.availability}
              </p>
              <h2 className="mt-2 text-4xl font-bold leading-[0.95] tracking-tight text-foreground sm:text-5xl">
                {firstName}
                <br />
                {lastName}
              </h2>
              <p className="mt-2 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                {site.location}
              </p>
            </div>
          </div>

          <div className="relative flex min-h-105 flex-col overflow-hidden rounded-2xl border bg-card p-6 sm:min-h-120">
            <div className="flex items-baseline justify-between">
              <h3 className="text-base font-semibold text-foreground">Systems</h3>
              <span className="font-mono text-sm text-muted-foreground">({projects.length})</span>
            </div>

            <ul className="mt-2">
              {tagCounts.map(({ tag, label, count }) =>
                tag === highlightTag ? (
                  <li key={tag} className="relative -mx-6 my-1 overflow-hidden bg-primary py-3 text-primary-foreground">
                    <div className="flex items-center justify-between gap-4 px-6">
                      <div className="overflow-hidden whitespace-nowrap">
                        <span className="inline-block motion-safe:animate-marquee font-medium">
                          {marqueeText}
                          {"  ·  "}
                          {marqueeText}
                        </span>
                      </div>
                      <span className="shrink-0 font-mono text-xs">{count}</span>
                    </div>
                  </li>
                ) : (
                  <li key={tag} className="flex items-center justify-between border-b py-3 text-sm last:border-b-0">
                    <span className="text-foreground">{label}</span>
                    <span className="font-mono text-xs text-muted-foreground">{count}</span>
                  </li>
                ),
              )}
            </ul>

            <div className="relative mt-auto flex justify-end gap-3 pt-10">
              <div className="w-28 rounded-lg border bg-background p-3 shadow-md">
                <p className="font-mono text-lg font-bold text-primary">4+</p>
                <p className="text-[10px] text-muted-foreground">Years experience</p>
              </div>
              <div className="w-28 translate-y-3 rounded-lg border bg-background p-3 shadow-md">
                <p className="font-mono text-lg font-bold text-primary">40%</p>
                <p className="text-[10px] text-muted-foreground">Fewer production bugs</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-10 -mt-4 flex justify-end gap-2 pr-1">
          <a
            href={`mailto:${site.email}`}
            aria-label="Email"
            className="flex size-10 items-center justify-center rounded-full border bg-background shadow-md transition-colors hover:bg-accent"
          >
            <Mail className="size-4" aria-hidden="true" />
          </a>
          <a
            href={site.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex size-10 items-center justify-center rounded-full border bg-background shadow-md transition-colors hover:bg-accent"
          >
            <Linkedin className="size-4" aria-hidden="true" />
          </a>
          <Button asChild size="lg" className="shadow-md">
            <Link href="/contact">
              Start a Conversation
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </Link>
          </Button>
        </div>

        <div className="mt-16 border-t pt-12">
          <p className="mb-6 text-center font-mono text-xs uppercase tracking-wider text-muted-foreground">
            How the pieces fit together
          </p>
          <ArchitectureMap />
        </div>
      </div>
    </section>
  )
}
