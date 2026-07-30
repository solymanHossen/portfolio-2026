import type { Metadata } from "next"
import { env } from "./env"

export const siteUrl = env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"

export const siteName = "MD Solyman Hossen"

interface RouteMetadataInput {
  title: string
  description: string
  path: string
  ogImage?: string
}

export function buildMetadata({ title, description, path, ogImage }: RouteMetadataInput): Metadata {
  const url = new URL(path, siteUrl).toString()
  const images = [ogImage ?? "/og-default.png"]

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
      images,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images,
    },
  }
}
