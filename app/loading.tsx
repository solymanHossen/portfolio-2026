import { Skeleton } from "@/components/ui/skeleton"
import { HeaderSkeleton } from "@/components/ui/header-skeleton"

export default function Loading() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden border-b">
        <div className="container-page py-20 sm:py-28">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-12">
            <div className="flex flex-col justify-center">
              <Skeleton className="mb-6 h-1 w-12 rounded-full" />
              <Skeleton className="h-4 w-64" />
              <div className="mt-5 space-y-3">
                <Skeleton className="h-10 w-full max-w-md sm:h-12 lg:h-14" />
                <Skeleton className="h-10 w-3/4 max-w-sm sm:h-12 lg:h-14" />
              </div>
              <div className="mt-6 space-y-2">
                <Skeleton className="h-6 w-full max-w-lg" />
                <Skeleton className="h-6 w-2/3 max-w-md" />
              </div>
              <div className="mt-10 flex flex-wrap gap-4">
                <Skeleton className="h-14 w-44 rounded-full" />
                <Skeleton className="h-14 w-52 rounded-full" />
              </div>
            </div>
            <Skeleton className="aspect-4/5 min-h-95 rounded-2xl sm:min-h-105 lg:aspect-auto lg:min-h-125" />
          </div>
        </div>
      </section>

      {/* Selected work */}
      <section className="border-b py-20 sm:py-28">
        <div className="container-page">
          <HeaderSkeleton labelWidth="w-52" headingLines={2} withLink />
          <div className="mt-12 space-y-6">
            {Array.from({ length: 2 }).map((_, index) => (
              <Skeleton key={index} className="h-80 w-full rounded-3xl sm:h-64" />
            ))}
          </div>
        </div>
      </section>

      {/* Impact metrics */}
      <section className="border-b py-16 sm:py-20">
        <div className="container-page">
          <dl className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5">
            {Array.from({ length: 5 }).map((_, index) => (
              <div key={index} className="border-l-2 border-primary/20 pl-4">
                <Skeleton className="h-4 w-24" />
                <Skeleton className="mt-2 h-7 w-14" />
              </div>
            ))}
          </dl>
        </div>
      </section>
    </div>
  )
}
