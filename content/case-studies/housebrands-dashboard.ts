import { getProjectBySlug } from "@/data/projects"
import type { CaseStudy } from "@/types/project"

const summary = getProjectBySlug("housebrands-dashboard")!

export const housebrandsDashboard: CaseStudy = {
  ...summary,
  context:
    "Built while leading engineering work at Mediusware Ltd, as part of ongoing platform development for a business dashboard product.",
  myRole: "Led development end to end — architecture, backend APIs and frontend implementation.",
  constraints: { kind: "todo" },
  architecture: {
    kind: "value",
    value: {
      description:
        "An API-first architecture: a Laravel backend exposing REST APIs consumed by a Next.js frontend, keeping frontend and backend independently deployable and testable.",
    },
  },
  technologyDecisions: [
    "Laravel for the backend to move fast within an existing team convention.",
    "Next.js for the frontend to get server rendering and API-route flexibility together.",
    "A REST API boundary between the two so the frontend and backend can evolve independently.",
  ],
  frontendImplementation:
    "The Next.js frontend consumes the REST API, with the UI built as typed, reusable components rather than one large page-level component.",
  backendAndApi:
    "The Laravel backend exposes REST endpoints designed API-first, so the same API surface could support additional frontends without backend changes.",
  databaseConsiderations: { kind: "todo" },
  authAndRbac: { kind: "todo" },
  performanceWork: { kind: "todo" },
  keyChallenges: [
    "Keeping the dashboard maintainable as both frontend and backend grew.",
    "Designing an API contract that stayed stable as new dashboard features were added.",
  ],
  solution:
    "Structuring the system around a clean API-first contract meant frontend and backend work could proceed independently, with the API surface as the single source of truth for what the dashboard could do.",
  outcomes: ["Delivered a scalable, maintainable API-first dashboard architecture."],
  lessonsLearned: { kind: "todo" },
  futureImprovements: { kind: "todo" },
  screenshots: { kind: "todo" },
  relatedProjectSlugs: ["multi-vendor-ecommerce-platform", "performance-typescript-modernisation"],
}
