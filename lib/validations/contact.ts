import { z } from "zod"

export const contactFormSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name.").max(100),
  email: z.string().trim().email("Please enter a valid email address."),
  message: z.string().trim().min(10, "Message should be at least 10 characters.").max(2000),
  company: z.string().optional(),
})

export type ContactFormValues = z.infer<typeof contactFormSchema>
