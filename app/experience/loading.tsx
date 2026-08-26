import { Skeleton } from "@/components/ui/skeleton"
import { HeaderSkeleton } from "@/components/ui/header-skeleton"

export default function Loading() {
  return (
    <div className="container-page py-16 sm:py-24">
      <HeaderSkeleton labelWidth="w-52" headingLines={2} paragraphLines={1} />

      <ol className="mt-10 ml-3 max-w-3xl space-y-12 border-l border-border pl-8">
        {Array.from({ length: 3 }).map((_, index) => (
          <li key={index} className="relative">
            <span
              aria-hidden="true"
              className="absolute -left-[41px] top-1 size-4 rounded-full border-4 border-background bg-accent"
            />
            <Skeleton className="h-4 w-32" />
            <Skeleton className="mt-2 h-6 w-56" />
            <Skeleton className="mt-2 h-5 w-48" />
            <div className="mt-3 space-y-2">
              <Skeleton className="h-5 w-full max-w-lg" />
              <Skeleton className="h-5 w-2/3 max-w-sm" />
            </div>
            <div className="mt-4 space-y-2.5">
              {Array.from({ length: 4 }).map((__, lineIndex) => (
                <Skeleton key={lineIndex} className={`h-4 ${lineIndex === 3 ? "w-1/2" : "w-full max-w-md"}`} />
              ))}
            </div>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {Array.from({ length: 4 }).map((__, tagIndex) => (
                <Skeleton key={tagIndex} className="h-5 w-16 rounded-full" />
              ))}
            </div>
          </li>
        ))}
      </ol>
    </div>
  )
}
