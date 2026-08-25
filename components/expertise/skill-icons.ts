import { Blocks, Boxes, Database, ServerCog, Sparkles, type LucideIcon } from "lucide-react"

import type { SkillCategory } from "@/types/content"

// Keyed by category id so the homepage preview and the full /expertise page
// render the same icon per category without duplicating the mapping.
export const SKILL_CATEGORY_ICONS: Record<SkillCategory["id"], LucideIcon> = {
  frontend: Blocks,
  backend: ServerCog,
  "data-persistence": Database,
  "ai-automation": Sparkles,
  "architecture-quality": Boxes,
}
