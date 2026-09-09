import Image from "next/image"
import Link from "next/link"
import { CalendarClock, Sparkles } from "lucide-react"

import { Button } from "@/components/ui/button"
import { GridBackground } from "@/components/visuals/grid-background"
import { ArchitectureMap } from "@/components/visuals/architecture-map"
import { hero, impactMetrics, site } from "@/data/site"

const heroStats = impactMetrics.slice(0, 3)

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b">
      <GridBackground variant="dots" className="opacity-70" />

      <div className="container-page relative py-16 sm:py-20 lg:py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-8">
          {/* Left: badge, headline, copy, CTA */}
          <div className="relative z-10 order-2 lg:order-1">
            <div className="mb-8 inline-flex items-center gap-3 rounded-full border bg-card/60 py-1.5 pl-1.5 pr-5 backdrop-blur sm:mb-10">
              <span className="flex size-10 items-center justify-center rounded-full bg-primary/15 text-primary">
                <Sparkles className="size-4" aria-hidden="true" />
              </span>
              <span className="leading-tight">
                <span className="block text-sm font-semibold text-foreground">{site.title}</span>
                <span className="block text-sm text-muted-foreground">{site.availability}</span>
              </span>
            </div>

            <p className="font-mono text-sm uppercase tracking-[0.3em] text-primary">{hero.label}</p>
            <h1 className="mt-4 text-4xl leading-[1.05] font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl">
              Engineering scalable systems for an{" "}
              <span className="italic text-primary">AI-driven world.</span>
            </h1>
            <p className="mt-6 max-w-md text-lg text-muted-foreground sm:text-xl">{hero.supportingHeadline}</p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                className="h-14 rounded-full px-8 text-base transition-transform hover:-translate-y-0.5"
              >
                <Link href={hero.primaryCta.href}>{hero.primaryCta.label}</Link>
              </Button>
            </div>

            {/* Stats row */}
            <dl className="mt-14 grid max-w-md grid-cols-3 gap-6 border-t pt-8">
              {heroStats.map((metric) => (
                <div key={metric.label}>
                  <dd className="font-mono text-2xl font-bold text-foreground sm:text-3xl">{metric.value}</dd>
                  <dt className="mt-1 text-sm text-muted-foreground">{metric.label}</dt>
                </div>
              ))}
            </dl>
          </div>

          {/* Right: portrait with ambient glow and floating CTA */}
          <div className="relative order-1 flex min-h-110 items-end justify-center sm:min-h-130 lg:min-h-150 lg:order-2">
            <div
              aria-hidden="true"
              className="absolute left-1/2 top-1/3 size-88 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl dark:bg-primary/25"
            />
            <div
              aria-hidden="true"
              className="absolute left-1/2 top-[18%] size-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/0 blur-2xl dark:bg-white/10"
            />

            <div className="relative h-110 w-full max-w-sm sm:h-130 sm:max-w-md lg:h-150 lg:max-w-lg">
              <Image
                src="/images/hero-cutout.png"
                alt={`${site.name}, ${site.title}, on location in Bangladesh`}
                fill
                priority
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-contain object-bottom"
              />
              {/* grounding shadow so the figure doesn't look like it's floating */}
              <div
                aria-hidden="true"
                className="absolute inset-x-10 bottom-2 h-6 rounded-full bg-foreground/10 blur-xl dark:bg-black/50"
              />

              {/* status pill, top of the portrait */}
              <div className="absolute left-0 top-2 inline-flex items-center gap-2 rounded-full border bg-background/90 px-3.5 py-2 backdrop-blur">
                <span className="relative flex size-2" aria-hidden="true">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex size-2 rounded-full bg-primary" />
                </span>
                <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                  {site.location}
                </span>
              </div>

              {/* floating CTA, bottom-right over the portrait */}
              <Button
                asChild
                size="lg"
                className="absolute bottom-4 right-0 h-auto gap-3 rounded-full py-2.5 pl-3 pr-5 shadow-xl transition-transform hover:-translate-y-0.5 sm:right-2"
              >
                <Link href={hero.secondaryCta.href}>
                  <span className="flex size-8 items-center justify-center rounded-full bg-primary-foreground/20">
                    <CalendarClock className="size-4" aria-hidden="true" />
                  </span>
                  {hero.secondaryCta.label}
                </Link>
              </Button>
            </div>
          </div>
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
