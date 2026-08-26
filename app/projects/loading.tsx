import { Skeleton } from "@/components/ui/skeleton"
import { HeaderSkeleton } from "@/components/ui/header-skeleton"

export default function Loading() {
  return (
    <div className="container-page py-16 sm:py-24">
      <HeaderSkeleton labelWidth="w-20" headingLines={2} paragraphLines={1} />

      <div className="mt-12">
        <div className="flex flex-wrap gap-2">
          {Array.from({ length: 5 }).map((_, index) => (
            <Skeleton key={index} className="h-9 w-24 rounded-md" />
          ))}
        </div>

        <div className="mt-10 space-y-6">
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={index} className="rounded-3xl border border-border/40 p-6 shadow-sm sm:p-8">
              <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)]">
                <div>
                  <Skeleton className="h-3.5 w-40" />
                  <Skeleton className="mt-3 h-8 w-full max-w-xs sm:h-9" />
                  <Skeleton className="mt-3 h-5 w-full max-w-sm" />
                  <div className="mt-5 flex flex-wrap gap-2">
                    {Array.from({ length: 3 }).map((__, tagIndex) => (
                      <Skeleton key={tagIndex} className="h-6 w-20 rounded-full" />
                    ))}
                  </div>
                </div>
                <div className="space-y-5">
                  {Array.from({ length: 3 }).map((__, rowIndex) => (
                    <div key={rowIndex} className="flex gap-3.5">
                      <Skeleton className="size-9 shrink-0 rounded-full" />
                      <div className="flex-1 space-y-1.5">
                        <Skeleton className="h-3.5 w-32" />
                        <Skeleton className="h-5 w-full max-w-sm" />
                      </div>
                    </div>
                  ))}
                  <Skeleton className="h-5 w-32" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
