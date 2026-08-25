import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div>
      <div className="border-b py-16 sm:py-20">
        <div className="container-page">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="mt-6 h-4 w-32" />
          <Skeleton className="mt-3 h-12 w-2/3" />
          <Skeleton className="mt-4 h-6 w-1/2" />
        </div>
      </div>
      <div className="container-page py-12 sm:py-16">
        <div className="container-prose space-y-4">
          {Array.from({ length: 6 }).map((_, index) => (
            <Skeleton key={index} className="h-24 w-full" />
          ))}
        </div>
      </div>
    </div>
  )
}
