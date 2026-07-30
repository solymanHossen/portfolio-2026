import { getProjectBySlug } from "@/data/projects"
import type { CaseStudy } from "@/types/project"

const summary = getProjectBySlug("ai-agentic-automation-workflows")!

export const aiAgenticAutomationWorkflows: CaseStudy = {
  ...summary,
  context: "Built to remove repetitive manual business operations at Mediusware using agentic automation.",
  myRole: "Designed the AI-assisted, agentic automation workflows end to end.",
  constraints: { kind: "todo" },
  architecture: {
    kind: "value",
    value: {
      description:
        "Agentic workflows built in n8n, orchestrating calls to external APIs to carry out multi-step business processes without manual intervention.",
    },
  },
  technologyDecisions: [
    "n8n as the workflow orchestration layer, chosen for visually composing multi-step automations against external APIs.",
  ],
  frontendImplementation:
    "This project is workflow-first — there is no end-user frontend; automations run directly against external systems.",
  backendAndApi:
    "Workflows call external APIs directly, with n8n acting as the orchestration and business-logic layer between them.",
  databaseConsiderations: { kind: "todo" },
  authAndRbac: { kind: "todo" },
  performanceWork: { kind: "todo" },
  keyChallenges: [
    "Sequencing multi-step automations reliably against third-party APIs.",
    "Replacing manual steps with automation without losing the judgment calls the manual process relied on.",
  ],
  solution:
    "Modelling each manual process as an explicit agentic workflow made the automation's logic auditable and easy to extend as new steps were needed.",
  outcomes: ["Reduced repetitive manual business operations and improved delivery efficiency."],
  lessonsLearned: { kind: "todo" },
  futureImprovements: { kind: "todo" },
  screenshots: { kind: "todo" },
  relatedProjectSlugs: ["custom-wordpress-api-integrations"],
}
