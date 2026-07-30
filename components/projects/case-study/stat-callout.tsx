export function StatCallout({ metric, value }: { metric: string; value: string }) {
  return (
    <div className="rounded-lg border bg-card p-4">
      <p className="font-mono text-2xl font-bold text-primary">{value}</p>
      <p className="mt-1 text-xs text-muted-foreground">{metric}</p>
    </div>
  )
}
