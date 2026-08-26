import { Skeleton } from "@/components/ui/skeleton"
import { HeaderSkeleton } from "@/components/ui/header-skeleton"

export default function Loading() {
  return (
    <div>
      <div className="container-page py-16 sm:py-24">
        <HeaderSkeleton labelWidth="w-20" headingLines={2} />

        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-[0.8fr_1.5fr_1fr]">
          <Skeleton className="aspect-4/5 rounded-2xl lg:aspect-auto" />

          <div className="space-y-3">
            {Array.from({ length: 6 }).map((_, index) => (
              <Skeleton key={index} className={`h-5 ${index % 3 === 2 ? "w-2/3" : "w-full"}`} />
            ))}
          </div>

          <div className="space-y-6 rounded-lg border bg-card p-6 sm:p-7">
            {Array.from({ length: 3 }).map((_, index) => (
              <div key={index}>
                <Skeleton className="h-3.5 w-24" />
                <Skeleton className="mt-2.5 h-5 w-32" />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10">
          <Skeleton className="mb-3 h-3.5 w-64" />
          <div className="grid grid-cols-3 gap-3">
            {Array.from({ length: 3 }).map((_, index) => (
              <Skeleton key={index} className="aspect-square rounded-lg" />
            ))}
          </div>
        </div>
      </div>

      {/* Philosophy */}
      <section className="border-b py-20 sm:py-28">
        <div className="container-page">
          <HeaderSkeleton labelWidth="w-48" headingLines={1} />
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2">
            {Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="border-l-2 border-primary/20 pl-5">
                <Skeleton className="h-3 w-6" />
                <Skeleton className="mt-2 h-5 w-40" />
                <Skeleton className="mt-2 h-4 w-full max-w-xs" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="border-b py-20 sm:py-28">
        <div className="container-page">
          <HeaderSkeleton labelWidth="w-56" headingLines={1} paragraphLines={2} />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="rounded-lg border bg-card p-6 sm:p-7">
                <Skeleton className="mb-3 h-5 w-24 rounded-full" />
                <Skeleton className="h-5 w-48" />
                <Skeleton className="mt-2 h-4 w-36" />
                <Skeleton className="mt-2 h-4 w-28" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
