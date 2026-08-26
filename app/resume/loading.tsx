import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="container-page py-16 sm:py-24">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <Skeleton className="h-3.5 w-16" />
          <Skeleton className="mt-3 h-10 w-64 sm:h-12" />
        </div>
        <Skeleton className="h-11 w-40 rounded-md" />
      </div>

      <article className="mx-auto mt-12 max-w-3xl border-t pt-10">
        <div>
          <Skeleton className="h-5 w-56" />
          <div className="mt-2 flex flex-wrap gap-3">
            {Array.from({ length: 4 }).map((_, index) => (
              <Skeleton key={index} className="h-3.5 w-28" />
            ))}
          </div>
        </div>

        <div className="mt-8">
          <Skeleton className="h-3.5 w-24" />
          <div className="mt-2 space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-2/3" />
          </div>
        </div>

        <div className="mt-8">
          <Skeleton className="h-3.5 w-24" />
          <div className="mt-3 space-y-6">
            {Array.from({ length: 3 }).map((_, index) => (
              <div key={index}>
                <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                  <Skeleton className="h-5 w-56" />
                  <Skeleton className="h-3.5 w-24" />
                </div>
                <Skeleton className="mt-1.5 h-3.5 w-40" />
                <div className="mt-2 space-y-1.5">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-3/4" />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8">
          <Skeleton className="h-3.5 w-44" />
          <div className="mt-3 space-y-2.5">
            {Array.from({ length: 5 }).map((_, index) => (
              <Skeleton key={index} className="h-4 w-full max-w-lg" />
            ))}
          </div>
        </div>

        <div className="mt-8">
          <Skeleton className="h-3.5 w-48" />
          <div className="mt-3 space-y-2.5">
            {Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="flex flex-wrap items-baseline justify-between gap-x-4">
                <Skeleton className="h-4 w-56" />
                <Skeleton className="h-3.5 w-20" />
              </div>
            ))}
          </div>
        </div>
      </article>
    </div>
  )
}
