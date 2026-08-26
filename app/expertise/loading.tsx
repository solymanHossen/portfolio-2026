import { Skeleton } from "@/components/ui/skeleton"
import { HeaderSkeleton } from "@/components/ui/header-skeleton"

export default function Loading() {
  return (
    <div className="container-page py-16 sm:py-24">
      <HeaderSkeleton labelWidth="w-44" headingLines={2} paragraphLines={2} />

      <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="rounded-lg border bg-card p-6 sm:p-7">
            <Skeleton className="size-12 rounded-full" />
            <Skeleton className="mt-4 h-6 w-40" />
            <div className="mt-2 space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-2/3" />
            </div>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {Array.from({ length: 5 }).map((__, tagIndex) => (
                <Skeleton key={tagIndex} className="h-6 w-16 rounded-full" />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
