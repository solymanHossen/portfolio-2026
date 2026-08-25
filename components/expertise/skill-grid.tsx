import { Badge } from "@/components/ui/badge"
import { SKILL_CATEGORY_ICONS } from "@/components/expertise/skill-icons"
import type { SkillCategory } from "@/types/content"

const PREVIEW_SKILL_LIMIT = 5

interface SkillGridProps {
  categories: SkillCategory[]
  variant?: "preview" | "full"
}

export function SkillGrid({ categories, variant = "full" }: SkillGridProps) {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {categories.map((category) => {
        const Icon = SKILL_CATEGORY_ICONS[category.id]
        const skills = variant === "preview" ? category.skills.slice(0, PREVIEW_SKILL_LIMIT) : category.skills
        const hiddenCount = category.skills.length - skills.length

        return (
          <div key={category.id} className="rounded-lg border bg-card p-6 sm:p-7">
            <div className="flex size-12 items-center justify-center rounded-full border border-primary/40 bg-primary/10 text-primary">
              <Icon className="size-6" aria-hidden="true" />
            </div>
            <h3 className="mt-4 text-xl font-semibold text-foreground">{category.label}</h3>
            <p className="mt-2 text-base leading-relaxed text-muted-foreground">{category.description}</p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {skills.map((skill) => (
                <Badge key={skill} variant="outline" className="text-sm font-normal">
                  {skill}
                </Badge>
              ))}
              {hiddenCount > 0 && (
                <Badge variant="secondary" className="text-sm font-normal text-muted-foreground">
                  +{hiddenCount} more
                </Badge>
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
}
