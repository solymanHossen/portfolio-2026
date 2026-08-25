import { getProjectBySlug } from "@/data/projects"
import type { CaseStudy } from "@/types/project"

const summary = getProjectBySlug("performance-typescript-modernisation")!

export const performanceTypescriptModernisation: CaseStudy = {
  ...summary,
  context: "An engineering-optimisation initiative at Mediusware focused on production reliability and performance.",
  myRole: "Helped migrate systems to TypeScript and improved query and rendering performance.",
  constraints: { kind: "todo" },
  architecture: {
    kind: "todo",
    note: "This was a modernisation initiative across existing systems rather than a new architecture.",
  },
  technologyDecisions: [
    "Migrating incrementally to TypeScript rather than a single rewrite, so type coverage grew without stopping feature delivery.",
  ],
  frontendImplementation:
    "Rendering performance was improved incrementally as parts of the frontend were migrated to TypeScript, catching a class of bugs at compile time instead of in production.",
  backendAndApi:
    "Query performance was addressed alongside the TypeScript migration, targeting the paths most exposed to production bugs.",
  databaseConsiderations: {
    kind: "value",
    value: "Query optimisation was a core part of this initiative, targeting the queries most implicated in production issues.",
  },
  authAndRbac: { kind: "todo" },
  performanceWork: {
    kind: "value",
    value: [{ metric: "Production bugs", value: "40% reduction" }],
  },
  keyChallenges: [
    "Migrating to TypeScript without pausing feature delivery.",
    "Finding the query and rendering bottlenecks worth fixing first.",
  ],
  solution:
    "Measuring before optimising — profiling actual query and rendering bottlenecks rather than guessing — combined with an incremental TypeScript migration, brought production bugs down by 40%.",
  outcomes: ["40% reduction in production bugs through TypeScript migration and performance optimisation."],
  lessonsLearned: { kind: "todo" },
  futureImprovements: { kind: "todo" },
  screenshots: { kind: "todo" },
  relatedProjectSlugs: ["housebrands-dashboard"],
}
