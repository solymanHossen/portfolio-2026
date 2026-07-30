import { Badge } from "@/components/ui/badge"
import { skillCategories } from "@/data/skills"

export function ExpertiseMap() {
  return (
    <section id="expertise" className="scroll-mt-16 border-b py-20 sm:py-28">
      <div className="container-page">
        <p className="font-mono text-xs uppercase tracking-wider text-primary">Technical Expertise</p>
        <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
          A capability map, not a percentage guess.
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <div key={category.id} className="rounded-lg border bg-card p-6">
              <h3 className="text-base font-semibold text-foreground">{category.label}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{category.description}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {category.skills.map((skill) => (
                  <Badge key={skill} variant="outline">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
