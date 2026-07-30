const MONTH_FORMATTER = new Intl.DateTimeFormat("en-US", { month: "short", year: "numeric" })

function formatMonthYear(value: string) {
  const [year, month] = value.split("-").map(Number)
  return MONTH_FORMATTER.format(new Date(year, (month ?? 1) - 1))
}

export function formatDateRange(startDate: string, endDate: string | "present") {
  const start = formatMonthYear(startDate)
  const end = endDate === "present" ? "Present" : formatMonthYear(endDate)
  return `${start} — ${end}`
}
