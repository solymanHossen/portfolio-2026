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
      <div className="container-page relative  pb-20 sm:py-28">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-12">
          {/* Left: headline, copy, CTAs */}
          <div className="relative order-2 -mt-10 flex flex-col justify-center sm:rounded-t-[2rem] bg-background pt-8 sm:shadow-[0_-16px_40px_-24px_rgba(0,0,0,0.25)] sm:order-none sm:mt-0 sm:rounded-none sm:bg-transparent sm:pt-0 sm:shadow-none">
            <div aria-hidden="true" className="mb-6 h-1 w-12 rounded-full bg-primary" />
            <p className="font-mono text-sm uppercase tracking-wider text-primary">{hero.label}</p>
            <h1 className="mt-5 text-5xl font-semibold tracking-tight text-balance sm:text-6xl lg:text-7xl">
              {hero.headline}
            </h1>
            <p className="mt-6 text-xl text-muted-foreground sm:text-2xl">{hero.supportingHeadline}</p>

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

          {/* Right: floating cutout portrait over the grid pattern */}
          <div className="relative order-1 flex min-h-110 items-end justify-center sm:min-h-130 lg:min-h-150">
            <div
              aria-hidden="true"
              className="absolute left-1/2 top-1/3 size-88 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl"
            />
            <div className="relative h-full w-full max-w-sm sm:max-w-md lg:max-w-lg">
              <Image
                src="/images/hero-cutout.png"
                alt={`${site.name}, ${site.title}, on location in Bangladesh`}
                fill
                priority
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-contain object-bottom"
                style={{
                  maskImage: "linear-gradient(to bottom, black 92%, transparent 100%)",
                  WebkitMaskImage: "linear-gradient(to bottom, black 92%, transparent 100%)",
                }}
              />
            </div>
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
