import Link from "next/link"

import { Button } from "@/components/ui/button"
import { GridBackground } from "@/components/visuals/grid-background"
import { ArchitectureMap } from "@/components/visuals/architecture-map"
import { hero } from "@/data/site"

export function Hero() {
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
