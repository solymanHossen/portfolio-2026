import type { Metadata } from "next"
import { env } from "./env"

export const siteUrl = env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"

export const siteName = "MD Solyman Hossen"

interface RouteMetadataInput {
  title: string
  description: string
  path: string
}

/**
 * Open Graph / Twitter images are intentionally omitted here — each route
 * segment's opengraph-image.tsx file convention supplies them automatically,
 * cascading from app/opengraph-image.tsx unless a segment defines its own.
 */
export function buildMetadata({ title, description, path }: RouteMetadataInput): Metadata {
  const url = new URL(path, siteUrl).toString()

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      title,
      description,
      siteName,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  }
}
