import type { MetadataRoute } from "next"

import { siteUrl } from "@/lib/metadata"
import { projects } from "@/data/projects"

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  const staticRoutes = ["", "/projects", "/experience", "/about", "/contact", "/resume"].map((path) => ({
    url: new URL(path, siteUrl).toString(),
    lastModified,
  }))

  const projectRoutes = projects.map((project) => ({
    url: new URL(`/projects/${project.slug}`, siteUrl).toString(),
    lastModified,
  }))

  return [...staticRoutes, ...projectRoutes]
}
