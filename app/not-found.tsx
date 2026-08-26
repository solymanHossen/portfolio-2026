import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { GridBackground } from "@/components/visuals/grid-background"

export default function NotFound() {
  return (
    <div className="relative flex min-h-[70vh] items-center overflow-hidden">
      <GridBackground variant="grid" className="opacity-60" />
      <div className="container-page relative">
        <p className="font-mono text-xs uppercase tracking-wider text-primary">System Error</p>
        <h1 className="mt-4 flex flex-wrap items-baseline gap-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
          <span className="font-mono text-primary">404</span>
          <span className="text-xl font-medium text-muted-foreground sm:text-2xl lg:text-3xl">Route not found</span>
        </h1>
        <p className="mt-4 max-w-xl font-mono text-sm text-muted-foreground">
          ERR_ROUTE_UNRESOLVED — the path you requested doesn&rsquo;t map to anything in this system.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild size="lg">
            <Link href="/">
              <ArrowLeft className="size-4" aria-hidden="true" />
              Back to Home
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/projects">View Projects</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
