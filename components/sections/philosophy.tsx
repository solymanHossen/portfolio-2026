import { philosophy } from "@/data/philosophy"

export function Philosophy() {
  return (
    <section className="border-b py-20 sm:py-28">
      <div className="container-page">
        <p className="font-mono text-xs uppercase tracking-wider text-primary">Engineering Philosophy</p>
        <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
          How I approach engineering
        </h2>

        <ol className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2">
          {philosophy.map((principle, index) => (
            <li key={principle.id} className="border-l-2 border-primary/40 pl-5">
              <span className="font-mono text-xs text-muted-foreground">{String(index + 1).padStart(2, "0")}</span>
              <h3 className="mt-1 text-lg font-semibold text-foreground">{principle.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">&ldquo;{principle.quote}&rdquo;</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
