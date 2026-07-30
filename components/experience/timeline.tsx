import { Badge } from "@/components/ui/badge"
import { formatDateRange } from "@/lib/format"
import type { ExperienceEntry } from "@/types/content"

interface TimelineProps {
  entries: ExperienceEntry[]
  variant?: "preview" | "full"
}

export function Timeline({ entries, variant = "full" }: TimelineProps) {
  return (
    <ol className="ml-3 space-y-10 border-l border-border pl-8">
      {entries.map((entry) => {
        const highlights = variant === "preview" ? entry.highlights.slice(0, 3) : entry.highlights

        return (
          <li key={entry.id} className="relative">
            <span
              aria-hidden="true"
              className="absolute -left-[41px] top-1 size-4 rounded-full border-4 border-background bg-primary"
            />
            <p className="font-mono text-xs text-primary">{formatDateRange(entry.startDate, entry.endDate)}</p>
            <h3 className="mt-1 text-lg font-semibold text-foreground">{entry.role}</h3>
            <p className="text-sm text-muted-foreground">
              {entry.company} · {entry.location}
            </p>
            <p className="mt-3 text-sm text-muted-foreground">{entry.summary}</p>
            <ul className="mt-4 space-y-2">
              {highlights.map((highlight) => (
                <li key={highlight} className="flex gap-2 text-sm text-foreground">
                  <span aria-hidden="true" className="mt-2 size-1 shrink-0 rounded-full bg-muted-foreground" />
                  {highlight}
                </li>
              ))}
            </ul>
            {entry.tags && entry.tags.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-1.5">
                {entry.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="font-mono text-[10px]">
                    {tag}
                  </Badge>
                ))}
              </div>
            )}
          </li>
        )
      })}
    </ol>
  )
}
