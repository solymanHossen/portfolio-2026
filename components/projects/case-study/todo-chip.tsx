import { Badge } from "@/components/ui/badge"
import { DEFAULT_TODO_NOTE, type TodoOr } from "@/types/project"

export function TodoChip({ note }: { note?: string }) {
  return (
    <Badge variant="outline" className="border-dashed font-normal text-muted-foreground">
      {note ?? DEFAULT_TODO_NOTE}
    </Badge>
  )
}

export function TodoOrText({ value }: { value: TodoOr<string> }) {
  if (value.kind === "todo") return <TodoChip note={value.note} />
  return <p className="leading-relaxed text-muted-foreground">{value.value}</p>
}
