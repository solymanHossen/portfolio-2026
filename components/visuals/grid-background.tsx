import { cn } from "@/lib/utils"

interface GridBackgroundProps {
  variant?: "grid" | "dots"
  className?: string
}

export function GridBackground({ variant = "grid", className }: GridBackgroundProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0",
        variant === "grid" ? "bg-blueprint-grid" : "bg-blueprint-dots",
        className,
      )}
      style={{
        maskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)",
        WebkitMaskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)",
      }}
    />
  )
}
