import { Clock, FolderKanban, Layers, Mail, User, type LucideIcon } from "lucide-react"

// Keyed by href so both the desktop header and mobile sheet render the same
// icon for a given nav.ts entry without duplicating the mapping.
export const NAV_ICONS: Record<string, LucideIcon> = {
  "/projects": FolderKanban,
  "/experience": Clock,
  "/#expertise": Layers,
  "/about": User,
  "/contact": Mail,
}

export function isNavLinkActive(pathname: string, href: string) {
  if (href.includes("#")) return false
  return pathname === href || pathname.startsWith(`${href}/`)
}
