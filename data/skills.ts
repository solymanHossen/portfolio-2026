import type { SkillCategory } from "@/types/content"

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    label: "Frontend Engineering",
    description: "Building responsive, performant interfaces with typed, maintainable component architecture.",
    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Responsive UI engineering",
      "Rendering optimisation",
      "Component architecture",
    ],
  },
  {
    id: "backend",
    label: "Backend Engineering",
    description: "Designing APIs and services that stay reliable and maintainable as they scale.",
    skills: [
      "Node.js",
      "Express.js",
      "NestJS",
      "Laravel",
      "REST API design",
      "Authentication and authorisation",
      "API-first architecture",
      "WordPress plugin development",
    ],
  },
  {
    id: "data-persistence",
    label: "Data & Persistence",
    description: "Modelling and optimising data layers across relational and document stores.",
    skills: [
      "MongoDB",
      "PostgreSQL",
      "SQL",
      "Database modelling",
      "Query optimisation",
      "Relational-to-document data modelling",
    ],
  },
  {
    id: "ai-automation",
    label: "AI & Automation",
    description: "Applying AI-assisted and agentic workflows to remove repetitive manual work.",
    skills: [
      "AI-assisted development",
      "Agentic workflows",
      "n8n automation",
      "External API integrations",
      "Business-process automation",
    ],
  },
  {
    id: "infrastructure",
    label: "Infrastructure & DevOps",
    description: "Deploying and running services on infrastructure I own end to end.",
    skills: ["Deployment", "Docker", "Networking", "Tailscale", "Self-hosted infrastructure", "AWS S3"],
  },
  {
    id: "architecture-quality",
    label: "Architecture & Quality",
    description: "Keeping systems scalable, secure and maintainable as teams and requirements grow.",
    skills: [
      "Scalable application architecture",
      "Role-based access control",
      "Multi-vendor system architecture",
      "Performance optimisation",
      "Code review",
      "Developer mentoring",
      "Maintainable codebase design",
    ],
  },
]
