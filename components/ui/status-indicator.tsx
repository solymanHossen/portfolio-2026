import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const statusIndicatorVariants = cva("inline-flex items-center gap-2 text-xs font-medium", {
  variants: {
    variant: {
      available: "text-foreground",
      todo: "text-muted-foreground",
      neutral: "text-muted-foreground",
    },
  },
  defaultVariants: {
    variant: "neutral",
  },
})

const dotVariants = cva("size-2 rounded-full shrink-0", {
  variants: {
    variant: {
      available: "bg-primary",
      todo: "bg-muted-foreground/50",
      neutral: "bg-muted-foreground",
    },
    pulse: {
      true: "animate-pulse",
      false: "",
    },
  },
  defaultVariants: {
    variant: "neutral",
    pulse: false,
  },
})

interface StatusIndicatorProps extends VariantProps<typeof statusIndicatorVariants> {
  label: string
  pulse?: boolean
  className?: string
}

export function StatusIndicator({ label, variant, pulse = false, className }: StatusIndicatorProps) {
  return (
    <span className={cn(statusIndicatorVariants({ variant }), className)}>
      <span aria-hidden="true" className={cn(dotVariants({ variant, pulse }))} />
      {label}
    </span>
  )
}
