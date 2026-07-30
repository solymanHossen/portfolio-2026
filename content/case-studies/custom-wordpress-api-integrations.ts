import { getProjectBySlug } from "@/data/projects"
import type { CaseStudy } from "@/types/project"

const summary = getProjectBySlug("custom-wordpress-api-integrations")!

export const customWordpressApiIntegrations: CaseStudy = {
  ...summary,
  context: "Built to extend an existing WordPress-based content platform with custom functionality.",
  myRole: "Developed the custom WordPress plugins and the external API integrations behind them.",
  constraints: { kind: "todo" },
  architecture: {
    kind: "value",
    value: {
      description:
        "Custom WordPress plugins acting as the integration layer between the platform and external APIs, extending core functionality without modifying WordPress core.",
    },
  },
  technologyDecisions: ["Custom plugins rather than core modifications, so the platform stays upgradeable."],
  frontendImplementation:
    "Plugin-driven functionality surfaces through WordPress's existing admin and front-end templates rather than a separate frontend application.",
  backendAndApi: "Plugins handle the API calls to external systems and translate their data into WordPress's content model.",
  databaseConsiderations: { kind: "todo" },
  authAndRbac: { kind: "todo" },
  performanceWork: { kind: "todo" },
  keyChallenges: [
    "Integrating external APIs cleanly within WordPress's plugin architecture.",
    "Extending functionality without introducing upgrade or compatibility risk.",
  ],
  solution:
    "Keeping all custom logic inside plugins, rather than touching WordPress core, made the integrations safe to extend and safe to update alongside WordPress itself.",
  outcomes: ["Extended platform functionality through custom plugins and external API integrations."],
  lessonsLearned: { kind: "todo" },
  futureImprovements: { kind: "todo" },
  screenshots: { kind: "todo" },
  relatedProjectSlugs: ["ai-agentic-automation-workflows"],
}
