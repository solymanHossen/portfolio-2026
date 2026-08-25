import type { Metadata } from "next"
import { Linkedin, Mail, MapPin, Phone } from "lucide-react"

import { ContactForm } from "@/components/contact/contact-form"
import { site } from "@/data/site"
import { buildMetadata } from "@/lib/metadata"

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  description: "Get in touch with MD Solyman Hossen about engineering opportunities, collaborations or projects.",
  path: "/contact",
})

export default function ContactPage() {
  return (
    <div className="container-page py-16 sm:py-24">
      <p className="font-mono text-xs uppercase tracking-wider text-primary">Contact</p>
      <h1 className="mt-3 max-w-2xl text-5xl font-bold tracking-tight text-balance sm:text-6xl">
        Let&rsquo;s build a system that is designed to scale.
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
        I&rsquo;m open to meaningful engineering opportunities, international collaborations and projects involving
        scalable platforms, performance optimisation and intelligent automation.
      </p>

      <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
        <div className="space-y-4">
          <a
            href={`mailto:${site.email}`}
            className="group flex items-center gap-4 rounded-2xl border border-border/40 bg-background p-5 shadow-sm transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-md"
          >
            <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-chart-1/10 text-chart-1">
              <Mail className="size-5" aria-hidden="true" />
            </div>
            <div>
              <p className="text-base font-semibold text-foreground">Email</p>
              <p className="text-base text-muted-foreground group-hover:text-foreground">{site.email}</p>
            </div>
          </a>

          <a
            href={`tel:${site.phoneHref}`}
            className="group flex items-center gap-4 rounded-2xl border border-border/40 bg-background p-5 shadow-sm transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-md"
          >
            <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-chart-2/10 text-chart-2">
              <Phone className="size-5" aria-hidden="true" />
            </div>
            <div>
              <p className="text-base font-semibold text-foreground">Phone</p>
              <p className="text-base text-muted-foreground group-hover:text-foreground">{site.phone}</p>
            </div>
          </a>

          <div className="flex items-center gap-4 rounded-2xl border border-border/40 bg-background p-5 shadow-sm">
            <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-chart-3/10 text-chart-3">
              <MapPin className="size-5" aria-hidden="true" />
            </div>
            <div>
              <p className="text-base font-semibold text-foreground">Location</p>
              <p className="text-base text-muted-foreground">{site.location}</p>
            </div>
          </div>

          <a
            href={site.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 rounded-2xl border border-border/40 bg-background p-5 shadow-sm transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-md"
          >
            <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-chart-5/10 text-chart-5">
              <Linkedin className="size-5" aria-hidden="true" />
            </div>
            <div>
              <p className="text-base font-semibold text-foreground">LinkedIn</p>
              <p className="text-base text-muted-foreground group-hover:text-foreground">
                {site.linkedIn.replace("https://www.", "")}
              </p>
            </div>
          </a>
        </div>

        <div className="rounded-3xl border border-border/40 bg-background p-6 shadow-sm sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">Send a message</p>
          <div className="mt-5">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  )
}
