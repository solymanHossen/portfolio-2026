# MD Solyman Hossen — Portfolio

Personal portfolio for MD Solyman Hossen, Full Stack Software Engineer. Built with Next.js App Router, TypeScript, Tailwind CSS v4 and shadcn/ui under a custom design identity — "Intelligent Systems Command Center."

## Tech stack

- **Framework:** Next.js 16 (App Router, React Server Components by default)
- **Language:** TypeScript (strict)
- **Styling:** Tailwind CSS v4 (CSS-first `@theme` tokens, no `tailwind.config`)
- **UI primitives:** shadcn/ui ("new-york" style) on Radix UI
- **Motion:** Framer Motion, plus CSS `motion-safe:`/`motion-reduce:` for decorative animation
- **Forms:** React Hook Form + Zod
- **Email:** Resend (optional — see [Environment variables](#environment-variables))
- **Command palette:** cmdk

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). If port 3000 is in use, Next.js will pick the next available port and print it in the terminal.

```bash
npm run build   # production build
npm run start   # run the production build
npm run lint    # ESLint (flat config)
```

## Environment variables

Copy `.env.example` to `.env.local` and fill in what you need:

| Variable | Required | Purpose |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Recommended | Base URL for canonical links, `sitemap.xml`, `robots.txt`, Open Graph and JSON-LD. Falls back to `http://localhost:3000` in dev if unset. |
| `RESEND_API_KEY` | Optional | Enables live email delivery from the `/contact` form via [Resend](https://resend.com). Without it, the form still validates and submits, but tells the visitor delivery isn't configured yet instead of silently failing. |
| `CONTACT_TO_EMAIL` | Optional | Inbox address the contact form delivers to. Required alongside `RESEND_API_KEY` for delivery to actually be enabled. |

`lib/env.ts` validates these with Zod at import time and is marked `server-only`, so it can never be accidentally pulled into a Client Component bundle.

## Content

All real content lives in typed data files, not hardcoded in components:

- `data/site.ts` — identity, hero copy, impact metrics, bio, languages, interests, contact CTA
- `data/experience.ts`, `data/education.ts`, `data/skills.ts`, `data/philosophy.ts` — experience timeline, education, capability map, engineering philosophy
- `data/projects.ts` — project summaries used for cards, filtering and the command palette
- `content/case-studies/*.ts` — full case-study bodies (one file per project), following the 18-section template in `types/project.ts`

Any project detail that isn't yet verified is wrapped in the `TodoOr<T>` type and rendered as a visible "TODO" chip instead of an invented fact — see `components/projects/case-study/todo-chip.tsx`.

### Adding the real resume PDF

Drop a file at `public/resume.pdf`. The `/resume` page checks for it at request time (`fs.existsSync`) and automatically switches from a disabled "coming soon" button to a working download link — no code changes needed.

### Personal photos

`public/images/portrait-*.jpg` are pre-optimised (resized + compressed) versions of the original camera files also present in `public/images/`, used on the homepage hero and the About page. The original, full-resolution camera files are kept alongside them but are not referenced anywhere and can be safely removed if you'd rather not ship them.

## Deployment

The project deploys cleanly to [Vercel](https://vercel.com) (or any Next.js-compatible host):

1. Push to a Git repository and import it in Vercel.
2. Set the environment variables above in the project settings (`NEXT_PUBLIC_SITE_URL` at minimum; `RESEND_API_KEY` + `CONTACT_TO_EMAIL` if you want the contact form to send real email).
3. Deploy — `next build` runs with strict TypeScript and no build-error escape hatches, so a successful deploy means the app actually type-checks.

No database or external services are required beyond the optional Resend integration.
