import { Skeleton } from "@/components/ui/skeleton"

interface HeaderSkeletonProps {
  labelWidth?: string
  headingLines?: number
  paragraphLines?: number
  withLink?: boolean
}

/**
 * Mirrors the "label + heading (+ intro paragraph) (+ trailing link)" block
 * repeated across every section and page header in the site.
 */
export function HeaderSkeleton({
  labelWidth = "w-40",
  headingLines = 2,
  paragraphLines = 0,
  withLink = false,
}: HeaderSkeletonProps) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-4">
      <div>
        <Skeleton className={`h-4 ${labelWidth}`} />
        <div className="mt-4 space-y-2.5">
          {Array.from({ length: headingLines }).map((_, index) => (
            <Skeleton
              key={index}
              className={`h-9 sm:h-11 lg:h-13 ${index === headingLines - 1 ? "w-2/3 max-w-sm" : "w-full max-w-xl"}`}
            />
          ))}
        </div>
        {paragraphLines > 0 && (
          <div className="mt-5 space-y-2">
            {Array.from({ length: paragraphLines }).map((_, index) => (
              <Skeleton
                key={index}
                className={`h-5 ${index === paragraphLines - 1 ? "w-2/3 max-w-md" : "w-full max-w-lg"}`}
              />
            ))}
          </div>
        )}
      </div>
      {withLink && <Skeleton className="h-5 w-36 shrink-0" />}
    </div>
  )
}
