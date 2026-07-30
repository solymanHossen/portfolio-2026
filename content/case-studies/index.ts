import type { CaseStudy } from "@/types/project"
import { housebrandsDashboard } from "./housebrands-dashboard"
import { multiVendorEcommercePlatform } from "./multi-vendor-ecommerce-platform"
import { aiAgenticAutomationWorkflows } from "./ai-agentic-automation-workflows"
import { performanceTypescriptModernisation } from "./performance-typescript-modernisation"
import { customWordpressApiIntegrations } from "./custom-wordpress-api-integrations"

export const caseStudies: Record<string, CaseStudy> = {
  [housebrandsDashboard.slug]: housebrandsDashboard,
  [multiVendorEcommercePlatform.slug]: multiVendorEcommercePlatform,
  [aiAgenticAutomationWorkflows.slug]: aiAgenticAutomationWorkflows,
  [performanceTypescriptModernisation.slug]: performanceTypescriptModernisation,
  [customWordpressApiIntegrations.slug]: customWordpressApiIntegrations,
}

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies[slug]
}
