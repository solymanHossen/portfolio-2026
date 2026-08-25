const BOLD_PATTERN = /\*\*(.+?)\*\*/g

/**
 * Renders "**phrase**" markers in experience copy as bold, accent-coloured
 * emphasis — used by both the timeline cards and the print-style resume so
 * the same source string looks intentional in either rendering.
 */
export function HighlightedText({ text }: { text: string }) {
  const parts = text.split(BOLD_PATTERN)

  return (
    <>
      {parts.map((part, index) =>
        index % 2 === 1 ? (
          <strong key={index} className="font-semibold text-primary">
            {part}
          </strong>
        ) : (
          part
        ),
      )}
    </>
  )
}
