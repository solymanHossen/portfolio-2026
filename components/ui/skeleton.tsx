import { cn } from '@/lib/utils'

function Skeleton({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="skeleton"
      className={cn(
        'relative isolate overflow-hidden rounded-md bg-accent',
        'after:absolute after:inset-0 after:-translate-x-full after:animate-skeleton-shimmer after:bg-linear-to-r after:from-transparent after:via-foreground/10 after:to-transparent',
        className,
      )}
      {...props}
    />
  )
}

export { Skeleton }
