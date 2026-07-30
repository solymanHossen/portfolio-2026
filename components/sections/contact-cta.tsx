import Link from "next/link"

import { Button } from "@/components/ui/button"
import { GridBackground } from "@/components/visuals/grid-background"
import { contactCta, site } from "@/data/site"

export function ContactCta() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <GridBackground variant="grid" className="opacity-50" />
      <div className="container-page relative text-center">
        <h2 className="mx-auto max-w-2xl text-4xl font-bold tracking-tight text-balance sm:text-5xl">
          {contactCta.headline}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground">{contactCta.supportingText}</p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {contactCta.buttons.map((button, index) => (
            <Button key={button.label} asChild size="lg" variant={index === 0 ? "default" : "outline"}>
              <Link
                href={button.href}
                target={button.href.startsWith("http") ? "_blank" : undefined}
                rel={button.href.startsWith("http") ? "noopener noreferrer" : undefined}
              >
                {button.label}
              </Link>
            </Button>
          ))}
        </div>

        <dl className="mx-auto mt-10 flex max-w-xl flex-col items-center gap-2 text-sm text-muted-foreground sm:flex-row sm:justify-center sm:gap-6">
          <div>
            <dt className="sr-only">Email</dt>
            <dd>{site.email}</dd>
          </div>
          <div>
            <dt className="sr-only">Phone</dt>
            <dd>{site.phone}</dd>
          </div>
          <div>
            <dt className="sr-only">Location</dt>
            <dd>{site.location}</dd>
          </div>
        </dl>
      </div>
    </section>
  )
}
