import { ImageResponse } from "next/og"

export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function Image() {
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
          Full Stack Software Engineer
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 68, fontWeight: 700, lineHeight: 1.1 }}>Md Solyman Hossen</div>
          <div style={{ display: "flex", marginTop: 24, fontSize: 30, color: "#a3a3a3" }}>
            Engineering scalable systems for an AI-driven world.
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 26, color: "#a3a3a3" }}>Dhaka, Bangladesh</div>
      </div>
    ),
    { ...size },
  )
}
