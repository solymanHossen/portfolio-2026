export const site = {
  name: "MD Solyman Hossen",
  shortName: "Solyman Hossen",
  monogram: "SH",
  title: "Full Stack Software Engineer",
  brandPositioning: "Scalable & AI-Driven Systems",
  location: "Dhaka, Bangladesh",
  email: "solyman100200@gmail.com",
  phone: "+880 1780-409811",
  phoneHref: "+8801780409811",
  linkedIn: "https://www.linkedin.com/in/solyman-hossen",
  availability: "Available for select opportunities",
} as const

export const hero = {
  label: "Full Stack Software Engineer · Scalable & AI-Driven Systems",
  headline: "Engineering scalable systems for an AI-driven world.",
  supportingHeadline:
    "I build intelligent, high-performance digital products that transform complex requirements into reliable systems.",
  copy: "Full Stack Software Engineer specialising in AI-assisted workflows, performance-driven engineering and scalable web applications across the MERN stack, Next.js, Laravel and PostgreSQL.",
  primaryCta: { label: "Explore My Work", href: "/projects" },
  secondaryCta: { label: "Start a Conversation", href: "/contact" },
  resumeCta: { label: "View Resume", href: "/resume" },
  credibility: [
    "4+ years of professional experience",
    "40% reduction in production bugs",
    "AI-assisted automation workflows",
    "Multi-vendor and RBAC platforms",
    "API-first system architecture",
  ],
} as const

export const impactMetrics = [
  { label: "Years of Experience", value: "4+" },
  { label: "Reduction in Production Bugs", value: "40%" },
  { label: "Full-Stack Platforms Delivered", value: "Multiple" },
  { label: "AI-Assisted Workflow Experience", value: "Yes" },
  { label: "Developer Mentoring & Code Reviews", value: "Ongoing" },
] as const

export const aboutBio =
  "Full Stack Software Engineer specialising in AI-assisted, agentic development workflows and performance-driven engineering. With 4+ years of experience, I architect scalable, high-performance web applications using the MERN stack, Laravel and PostgreSQL—from automation pipelines and RBAC-secured multi-vendor platforms to API-first systems. I focus on clean architecture, database and rendering optimisation, and turning complex requirements into reliable systems that scale."

export const languages = [
  { name: "Bangla", proficiency: "Native" },
  { name: "English", proficiency: "Professional working proficiency" },
  { name: "Hindi", proficiency: "Basic" },
] as const

export const interests = ["Travelling", "Table tennis"] as const

export const interdisciplinaryStory =
  "An interdisciplinary journey from civil engineering and Bangla studies to software engineering, systems architecture and AI-driven development."

export const aboutStory = [
  "My path into software engineering didn't start with a computer science degree. It started with a Diploma in Civil Engineering, followed by a B.A. (Honours) in Bangla, and later a postgraduate degree in Computer & Information Sciences at Jahangirnagar University.",
  "Each step taught me something the others didn't. Civil engineering gave me a structural, systems-first way of thinking. Studying Bangla sharpened how I read, structure and communicate ideas. Formal study in computer science gave me the language to turn that thinking into software.",
  "That combination shows up directly in how I work today: translating ambiguous business requirements into clear technical systems, and explaining engineering decisions to people who aren't engineers.",
]

export const contactCta = {
  headline: "Let's build a system that is designed to scale.",
  supportingText:
    "I'm open to meaningful engineering opportunities, international collaborations and projects involving scalable platforms, performance optimisation and intelligent automation.",
  buttons: [
    { label: "Start a Conversation", href: "/contact" },
    { label: "Send an Email", href: `mailto:${site.email}` },
    { label: "View LinkedIn", href: "https://www.linkedin.com/in/solyman-hossen" },
  ],
} as const
