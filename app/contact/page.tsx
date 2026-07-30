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
      <h1 className="mt-3 max-w-2xl text-4xl font-bold tracking-tight text-balance sm:text-5xl">
        Let&rsquo;s build a system that is designed to scale.
      </h1>
      <p className="mt-4 max-w-2xl text-base text-muted-foreground">
        I&rsquo;m open to meaningful engineering opportunities, international collaborations and projects involving
        scalable platforms, performance optimisation and intelligent automation.
      </p>

      <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-2">
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="flex size-11 shrink-0 items-center justify-center rounded-lg border bg-card text-primary">
              <Mail className="size-5" aria-hidden="true" />
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">Email</p>
              <a href={`mailto:${site.email}`} className="text-sm text-muted-foreground hover:text-foreground">
                {site.email}
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex size-11 shrink-0 items-center justify-center rounded-lg border bg-card text-primary">
              <Phone className="size-5" aria-hidden="true" />
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">Phone</p>
              <a href={`tel:${site.phoneHref}`} className="text-sm text-muted-foreground hover:text-foreground">
                {site.phone}
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex size-11 shrink-0 items-center justify-center rounded-lg border bg-card text-primary">
              <MapPin className="size-5" aria-hidden="true" />
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">Location</p>
              <p className="text-sm text-muted-foreground">{site.location}</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex size-11 shrink-0 items-center justify-center rounded-lg border bg-card text-primary">
              <Linkedin className="size-5" aria-hidden="true" />
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">LinkedIn</p>
              <a
                href={site.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                {site.linkedIn.replace("https://www.", "")}
              </a>
            </div>
          </div>
        </div>

        <div className="rounded-lg border bg-card p-6 sm:p-8">
          <ContactForm />
        </div>
      </div>
    </div>
  )
}
