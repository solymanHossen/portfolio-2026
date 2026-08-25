import { impactMetrics } from "@/data/site"

export function ImpactMetrics() {
  return (
    <section className="border-b py-16 sm:py-20">
      <div className="container-page">
        <dl className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5">
          {impactMetrics.map((metric) => (
            <div key={metric.label} className="border-l-2 border-primary/40 pl-4">
              <dt className="text-sm text-muted-foreground">{metric.label}</dt>
              <dd className="mt-1 font-mono text-2xl font-semibold text-foreground">{metric.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
