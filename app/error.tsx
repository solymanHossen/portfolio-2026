"use client"

import { useEffect } from "react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { GridBackground } from "@/components/visuals/grid-background"

export default function ErrorPage({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="relative flex min-h-[70vh] items-center overflow-hidden">
      <GridBackground variant="grid" className="opacity-60" />
      <div className="container-page relative">
        <p className="font-mono text-xs uppercase tracking-wider text-destructive">System Error</p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">Something broke on this route.</h1>
        <p className="mt-4 max-w-xl font-mono text-sm text-muted-foreground">
          ERR_UNHANDLED_EXCEPTION — the error has been logged. Try again, or head back to the homepage.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Button size="lg" onClick={() => reset()}>
            Try Again
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/">Back to Home</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
