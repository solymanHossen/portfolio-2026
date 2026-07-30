import type { ProjectSummary } from "@/types/project"

export const projects: ProjectSummary[] = [
  {
    slug: "housebrands-dashboard",
    title: "HouseBrands Dashboard",
    category: "Scalable business dashboard",
    tagline: "A maintainable, API-first dashboard spanning frontend and backend.",
    tags: ["full-stack", "laravel", "nextjs", "api-integration"],
    problem: "The business needed a scalable dashboard with a maintainable, API-first foundation across frontend and backend.",
    contribution:
      "Led development end to end, designed a scalable API-first architecture, and built maintainable frontend and backend systems.",
    techStack: ["Laravel", "Next.js"],
    outcome: "Delivered a scalable, maintainable API-first dashboard architecture.",
    featured: true,
    order: 1,
  },
  {
    slug: "multi-vendor-ecommerce-platform",
    title: "Multi-vendor eCommerce Platform",
    category: "Commerce platform",
    tagline: "Multi-vendor commerce with granular, role-based access control.",
    tags: ["full-stack", "api-integration"],
    problem: "The platform needed reliable multi-vendor support with granular, role-based access control at scale.",
    contribution:
      "Built multi-vendor functionality, implemented granular role-based access control, designed scalable backend workflows and developed reliable frontend integration.",
    techStack: ["TODO: confirm technology stack"],
    outcome: "Delivered a multi-vendor commerce platform with granular role-based access control.",
    featured: true,
    order: 2,
  },
  {
    slug: "ai-agentic-automation-workflows",
    title: "AI-Powered Agentic Automation Workflows",
    category: "Business-process automation",
    tagline: "Agentic n8n workflows that remove repetitive manual operations.",
    tags: ["ai-automation", "api-integration"],
    problem: "Repetitive manual business operations were slowing delivery and needed automation.",
    contribution:
      "Designed AI-assisted, agentic automation workflows using n8n and external APIs to reduce repetitive manual business operations and improve delivery efficiency.",
    techStack: ["n8n", "External APIs"],
    outcome: "Reduced repetitive manual business operations and improved delivery efficiency.",
    featured: true,
    order: 3,
  },
  {
    slug: "performance-typescript-modernisation",
    title: "Performance & TypeScript Modernisation",
    category: "Engineering optimisation initiative",
    tagline: "A systematic migration and performance initiative that cut production bugs by 40%.",
    tags: ["performance"],
    problem: "Production bugs and inconsistent performance needed a systematic, measurable fix.",
    contribution:
      "Helped migrate systems to TypeScript and improved query and rendering performance across the stack.",
    techStack: ["TypeScript"],
    outcome: "40% reduction in production bugs through TypeScript migration and performance optimisation.",
    featured: true,
    order: 4,
  },
  {
    slug: "custom-wordpress-api-integrations",
    title: "Custom WordPress API Integrations",
    category: "Extensible content platform",
    tagline: "Custom plugins connecting WordPress to external systems.",
    tags: ["api-integration"],
    problem: "The content platform needed extended functionality through custom integrations with external systems.",
    contribution: "Developed custom WordPress plugins, connected external APIs and extended platform functionality.",
    techStack: ["WordPress", "External APIs"],
    outcome: "Extended platform functionality through custom plugins and external API integrations.",
    featured: true,
    order: 5,
  },
]

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug)
}
