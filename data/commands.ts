import { Copy, Download, FolderKanban, Home, Linkedin, Mail, SunMoon, User, Clock } from "lucide-react"
import type { NavCommand } from "@/types/content"
import { site } from "./site"

export const commands: NavCommand[] = [
  { id: "nav-home", label: "Go to Home", group: "Navigate", icon: Home, type: "link", href: "/" },
  { id: "nav-projects", label: "View Projects", group: "Navigate", icon: FolderKanban, type: "link", href: "/projects" },
  { id: "nav-experience", label: "View Experience", group: "Navigate", icon: Clock, type: "link", href: "/experience" },
  { id: "nav-about", label: "View About", group: "Navigate", icon: User, type: "link", href: "/about" },
  { id: "nav-contact", label: "Navigate to Contact", group: "Navigate", icon: Mail, type: "link", href: "/contact" },
  {
    id: "action-download-resume",
    label: "Download Resume",
    group: "Actions",
    icon: Download,
    type: "action",
    actionId: "download-resume",
  },
  {
    id: "action-copy-email",
    label: `Copy Email (${site.email})`,
    group: "Actions",
    icon: Copy,
    type: "action",
    actionId: "copy-email",
  },
  {
    id: "action-toggle-theme",
    label: "Toggle Theme",
    group: "Actions",
    icon: SunMoon,
    type: "action",
    actionId: "toggle-theme",
  },
  {
    id: "social-linkedin",
    label: "Open LinkedIn",
    group: "Social",
    icon: Linkedin,
    type: "link",
    href: site.linkedIn,
    external: true,
  },
]
