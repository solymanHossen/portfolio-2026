import type { Metadata } from "next"

import { Hero } from "@/components/sections/hero"
import { SelectedWork } from "@/components/sections/selected-work"
import { ImpactMetrics } from "@/components/sections/impact-metrics"
import { ExperiencePreview } from "@/components/sections/experience-preview"
import { ExpertiseMap } from "@/components/sections/expertise-map"
import { Philosophy } from "@/components/sections/philosophy"
import { AboutPreview } from "@/components/sections/about-preview"
import { Education } from "@/components/sections/education"
import { ContactCta } from "@/components/sections/contact-cta"
import { buildMetadata } from "@/lib/metadata"

export const metadata: Metadata = buildMetadata({
  title: "MD Solyman Hossen | Full Stack Software Engineer",
  description:
    "Full Stack Software Engineer specialising in scalable web platforms, Next.js, MERN, Laravel, performance optimisation and AI-assisted automation.",
  path: "/",
})

export default function Home() {
  return (
    <>
      <Hero />
      <SelectedWork />
      <ImpactMetrics />
      <ExperiencePreview />
      <ExpertiseMap />
      <Philosophy />
      <AboutPreview />
      <Education />
      <ContactCta />
    </>
  )
}
