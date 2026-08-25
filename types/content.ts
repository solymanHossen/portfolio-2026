import type { LucideIcon } from "lucide-react"
import type { ProjectTag } from "./project"

export interface ExperienceEntry {
  id: string
  role: string
  company: string
  location: string
  startDate: string
  endDate: string | "present"
  summary: string
  highlights: string[]
  tags?: ProjectTag[]
}

/**
 * Deliberately has no numeric proficiency field — a skill bar regression
 * is impossible here without a type change, not just a style-guide rule.
 */
export interface SkillCategory {
  id: "frontend" | "backend" | "data-persistence" | "ai-automation" | "infrastructure" | "architecture-quality"
  label: string
  description: string
  skills: string[]
}

export interface EducationItem {
  id: string
  kind: "degree" | "certification"
  title: string
  institution: string
  location?: string
  period: string
}

export interface PhilosophyPrinciple {
  id: string
  title: string
  quote: string
}

export interface NavLink {
  label: string
  href: string
}

export type CommandGroup = "Navigate" | "Actions" | "Social"

export type NavCommand =
  | {
      id: string
      label: string
      group: CommandGroup
      icon: LucideIcon
      type: "link"
      href: string
      external?: boolean
    }
  | {
      id: string
      label: string
      group: CommandGroup
      icon: LucideIcon
      type: "action"
      actionId: "copy-email" | "toggle-theme" | "download-resume"
    }

export interface MetricItem {
  label: string
  value: string
}

export interface ExploringItem {
  title: string
  description: string
}
