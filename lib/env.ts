import "server-only"
import { z } from "zod"

// Blank keys in .env (e.g. `RESEND_API_KEY=`) arrive as "", not undefined —
// normalize those to undefined so `.optional()` treats them as unset.
const blankToUndefined = (val: unknown) => (val === "" ? undefined : val)

const envSchema = z.object({
  RESEND_API_KEY: z.preprocess(blankToUndefined, z.string().min(1).optional()),
  CONTACT_TO_EMAIL: z.preprocess(blankToUndefined, z.string().email().optional()),
  NEXT_PUBLIC_SITE_URL: z.preprocess(blankToUndefined, z.string().url().optional()),
})

export const env = envSchema.parse({
  RESEND_API_KEY: process.env.RESEND_API_KEY,
  CONTACT_TO_EMAIL: process.env.CONTACT_TO_EMAIL,
  NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
})

export const isEmailDeliveryConfigured = Boolean(env.RESEND_API_KEY && env.CONTACT_TO_EMAIL)
