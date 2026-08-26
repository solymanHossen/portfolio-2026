import { Badge } from "@/components/ui/badge"
import { education } from "@/data/education"
import { interdisciplinaryStory } from "@/data/site"

export function Education() {
  return (
    <section className="border-b py-20 sm:py-28">
      <div className="container-page">
        <p className="font-mono text-xs uppercase tracking-wider text-primary">Education & Certification</p>
        <h2 className="mt-3 max-w-2xl text-4xl font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl">
          An interdisciplinary path into engineering.
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">{interdisciplinaryStory}</p>

        <ul className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {education.map((item) => (
            <li key={item.id} className="rounded-lg border bg-card p-6 sm:p-7">
              <Badge variant={item.kind === "certification" ? "secondary" : "outline"} className="mb-3 text-sm">
                {item.kind === "certification" ? "Certification" : "Degree"}
              </Badge>
              <h3 className="text-xl font-semibold text-foreground text-balance">{item.title}</h3>
              <p className="mt-1.5 text-base text-muted-foreground">{item.institution}</p>
              <p className="mt-1.5 font-mono text-sm text-muted-foreground">{item.period}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
