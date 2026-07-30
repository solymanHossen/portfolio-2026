import { getProjectBySlug } from "@/data/projects"
import type { CaseStudy } from "@/types/project"

const summary = getProjectBySlug("multi-vendor-ecommerce-platform")!

export const multiVendorEcommercePlatform: CaseStudy = {
  ...summary,
  context: "Built as part of the Mediusware engineering team's work on multi-vendor commerce infrastructure.",
  myRole: "Built the multi-vendor functionality and role-based access control, and designed the backend workflows behind them.",
  constraints: { kind: "todo" },
  architecture: {
    kind: "value",
    value: {
      description:
        "A backend designed around vendor-scoped resources, with role-based access control gating what each vendor, staff or admin account could see and do.",
    },
  },
  technologyDecisions: [
    "Role-based access control modelled at the data layer, not just in the UI, so permission rules stay enforced regardless of which client calls the API.",
  ],
  frontendImplementation:
    "Frontend integration was built to respect the same role boundaries as the backend, so vendors and admins see only what their role permits.",
  backendAndApi:
    "Backend workflows were designed to keep vendor data scoped and isolated while still sharing common commerce logic across vendors.",
  databaseConsiderations: { kind: "todo" },
  authAndRbac: {
    kind: "value",
    value: "Granular role-based access control governs vendor, staff and admin permissions across the platform.",
  },
  performanceWork: { kind: "todo" },
  keyChallenges: [
    "Keeping vendor data properly isolated without duplicating core commerce logic per vendor.",
    "Modelling permissions granular enough for real vendor and admin workflows without becoming unmanageable.",
  ],
  solution:
    "Centralising RBAC rules at the backend and scoping vendor data consistently across every workflow kept the permission model enforceable and the codebase from fragmenting per vendor.",
  outcomes: ["Delivered a multi-vendor commerce platform with granular role-based access control."],
  lessonsLearned: { kind: "todo" },
  futureImprovements: { kind: "todo" },
  screenshots: { kind: "todo" },
  relatedProjectSlugs: ["housebrands-dashboard"],
}
