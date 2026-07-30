import { Badge } from "@/components/ui/badge"
import { education } from "@/data/education"
import { interdisciplinaryStory } from "@/data/site"

export function Education() {
  return (
    <section className="border-b py-20 sm:py-28">
      <div className="container-page">
        <p className="font-mono text-xs uppercase tracking-wider text-primary">Education & Certification</p>
        <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
          An interdisciplinary path into engineering.
        </h2>
        <p className="mt-4 max-w-2xl text-base text-muted-foreground">{interdisciplinaryStory}</p>

        <ul className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {education.map((item) => (
            <li key={item.id} className="rounded-lg border bg-card p-6">
              <Badge variant={item.kind === "certification" ? "secondary" : "outline"} className="mb-3">
                {item.kind === "certification" ? "Certification" : "Degree"}
              </Badge>
              <h3 className="text-base font-semibold text-foreground text-balance">{item.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{item.institution}</p>
              <p className="mt-1 font-mono text-xs text-muted-foreground">{item.period}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
