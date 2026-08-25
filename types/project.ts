export type ProjectTag =
  | "full-stack"
  | "ai-automation"
  | "nextjs"
  | "laravel"
  | "mern"
  | "performance"
  | "api-integration"

/**
 * Forces every "maybe unverified" field through one explicit, renderable
 * shape instead of a bare optional, so components can render a TODO chip
 * instead of silently leaving blank space.
 */
export type TodoOr<T> = { kind: "value"; value: T } | { kind: "todo"; note?: string }

export const DEFAULT_TODO_NOTE = "TODO: Replace with verified project information"

export interface ProjectSummary {
  slug: string
  title: string
  category: string
  tagline: string
  tags: ProjectTag[]
  problem: string
  contribution: string
  techStack: string[]
  outcome: string
  featured: boolean
  order: number
}

export interface CaseStudySection {
  title: string
  body: string[]
}

export interface CaseStudy extends ProjectSummary {
  context: string
  myRole: string
  constraints: TodoOr<string>
  architecture: TodoOr<{ description: string; diagram?: { src: string; alt: string } }>
  technologyDecisions: string[]
  frontendImplementation: string
  backendAndApi: string
  databaseConsiderations: TodoOr<string>
  authAndRbac: TodoOr<string>
  performanceWork: TodoOr<{ metric: string; value: string }[]>
  keyChallenges: string[]
  solution: string
  outcomes: string[]
  lessonsLearned: TodoOr<string>
  futureImprovements: TodoOr<string>
  screenshots: TodoOr<{ src: string; alt: string }[]>
  relatedProjectSlugs: string[]
}
