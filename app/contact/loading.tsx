import { Skeleton } from "@/components/ui/skeleton"
import { HeaderSkeleton } from "@/components/ui/header-skeleton"

export default function Loading() {
  return (
    <div className="container-page py-16 sm:py-24">
      <HeaderSkeleton labelWidth="w-24" headingLines={2} paragraphLines={2} />

      <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
        <div className="space-y-4">
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="flex items-center gap-4 rounded-2xl border border-border/40 p-5 shadow-sm">
              <Skeleton className="size-12 shrink-0 rounded-full" />
              <div className="flex-1 space-y-2">
                <Skeleton className="h-4 w-20" />
                <Skeleton className="h-4 w-40" />
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-3xl border border-border/40 p-6 shadow-sm sm:p-8">
          <Skeleton className="h-3.5 w-32" />
          <div className="mt-5 space-y-6">
            <div className="space-y-2">
              <Skeleton className="h-4 w-12" />
              <Skeleton className="h-10 w-full rounded-md" />
            </div>
            <div className="space-y-2">
              <Skeleton className="h-4 w-12" />
              <Skeleton className="h-10 w-full rounded-md" />
            </div>
            <div className="space-y-2">
              <Skeleton className="h-4 w-16" />
              <Skeleton className="h-32 w-full rounded-md" />
            </div>
            <Skeleton className="h-11 w-32 rounded-md" />
          </div>
        </div>
      </div>
    </div>
  )
}
