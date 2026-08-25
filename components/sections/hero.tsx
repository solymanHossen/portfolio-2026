import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { GridBackground } from "@/components/visuals/grid-background"
import { ArchitectureMap } from "@/components/visuals/architecture-map"
import { hero, site } from "@/data/site"

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b">
      <GridBackground variant="dots" className="opacity-70" />
      <div className="container-page relative py-20 sm:py-28">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-12">
          {/* Left: headline, copy, CTAs */}
          <div className="flex flex-col justify-center">
            <div aria-hidden="true" className="mb-6 h-1 w-12 rounded-full bg-primary" />
            <p className="font-mono text-sm uppercase tracking-wider text-primary">{hero.label}</p>
            <h1 className="mt-5 text-5xl font-semibold tracking-tight text-balance sm:text-6xl">
              {hero.headline}
            </h1>
            <p className="mt-6 text-xl text-muted-foreground">{hero.supportingHeadline}</p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button asChild size="lg" className="h-14 rounded-full px-8 text-base transition-transform hover:-translate-y-0.5">
                <Link href={hero.primaryCta.href}>{hero.primaryCta.label}</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-14 rounded-full px-8 text-base transition-transform hover:-translate-y-0.5"
              >
                <Link href={hero.secondaryCta.href}>{hero.secondaryCta.label}</Link>
              </Button>
            </div>
          </div>

          {/* Right: full-bleed photo */}
          <div className="relative aspect-4/5 min-h-105 overflow-hidden rounded-2xl lg:aspect-auto lg:min-h-125">
            <Image
              src="/images/portrait-hero-2.jpg"
              alt={`${site.name}, ${site.title}, on location in Bangladesh`}
              fill
              priority
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover object-top"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-linear-to-t from-background via-transparent to-transparent"
            />
            <Link
              href="/about"
              className="absolute left-4 top-4 inline-flex items-center gap-1 rounded-full border bg-background/90 px-3 py-1.5 text-xs font-medium text-foreground backdrop-blur transition-colors hover:bg-background"
            >
              About Me
              <ArrowUpRight className="size-3" aria-hidden="true" />
            </Link>

            <div className="absolute inset-x-4 bottom-5 flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-2 rounded-full border bg-background/90 px-3.5 py-2 backdrop-blur">
                <span className="text-sm font-semibold text-foreground">{site.shortName}</span>
                <span aria-hidden="true" className="text-muted-foreground">
                  ·
                </span>
                <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                  {site.location}
                </span>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border bg-background/90 px-3.5 py-2 backdrop-blur">
                <span className="relative flex size-2" aria-hidden="true">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex size-2 rounded-full bg-primary" />
                </span>
                <span className="font-mono text-xs uppercase tracking-wider text-primary">
                  {site.availability}
                </span>
              </div>
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
