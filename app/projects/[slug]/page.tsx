import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { CaseStudyHero } from "@/components/projects/case-study/case-study-hero"
import { CaseStudyBody } from "@/components/projects/case-study/case-study-block-renderer"
import { RelatedProjects } from "@/components/projects/related-projects"
import { ReadingProgress } from "@/components/projects/reading-progress"
import { caseStudies, getCaseStudyBySlug } from "@/content/case-studies"
import { buildMetadata } from "@/lib/metadata"
import { breadcrumbJsonLd } from "@/lib/structured-data"

interface PageProps {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return Object.keys(caseStudies).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const caseStudy = getCaseStudyBySlug(slug)
  if (!caseStudy) return {}

  return buildMetadata({
    title: caseStudy.title,
    description: caseStudy.tagline,
    path: `/projects/${caseStudy.slug}`,
  })
}

export default async function ProjectCaseStudyPage({ params }: PageProps) {
  const { slug } = await params
  const caseStudy = getCaseStudyBySlug(slug)

  if (!caseStudy) {
    notFound()
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", path: "/" },
              { name: "Projects", path: "/projects" },
              { name: caseStudy.title, path: `/projects/${caseStudy.slug}` },
            ]),
          ),
        }}
      />
      <ReadingProgress />
      <CaseStudyHero caseStudy={caseStudy} />
      <div className="container-page py-12 sm:py-16">
        <CaseStudyBody caseStudy={caseStudy} />
      </div>
      <RelatedProjects slugs={caseStudy.relatedProjectSlugs} />
    </>
  )
}
