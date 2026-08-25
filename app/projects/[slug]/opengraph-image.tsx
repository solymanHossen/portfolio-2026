import { ImageResponse } from "next/og"

import { getCaseStudyBySlug } from "@/content/case-studies"

export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const caseStudy = getCaseStudyBySlug(slug)
  const title = caseStudy?.title ?? "Project"
  const tagline = caseStudy?.tagline ?? ""
  const category = caseStudy?.category ?? ""

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0a0908",
          color: "#fafafa",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 28, color: "#e08a3e", textTransform: "uppercase", letterSpacing: 4 }}>
          {category}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 64, fontWeight: 700, lineHeight: 1.1 }}>{title}</div>
          <div style={{ display: "flex", marginTop: 24, fontSize: 30, color: "#a3a3a3" }}>{tagline}</div>
        </div>
        <div style={{ display: "flex", fontSize: 26, color: "#a3a3a3" }}>MD Solyman Hossen — Full Stack Software Engineer</div>
      </div>
    ),
    { ...size },
  )
}
