"use server"

import { Resend } from "resend"

import { contactFormSchema, type ContactFormValues } from "@/lib/validations/contact"
import { env, isEmailDeliveryConfigured } from "@/lib/env"

export type ContactActionResult =
  | { status: "success" }
  | { status: "error"; message: string }
  | { status: "not-configured" }

export async function submitContactForm(input: ContactFormValues): Promise<ContactActionResult> {
  // Honeypot: a real visitor never fills this hidden field. Pretend success
  // so bots get no signal that they were caught.
  if (input.company) {
    return { status: "success" }
  }

  const parsed = contactFormSchema.safeParse(input)
  if (!parsed.success) {
    return {
      status: "error",
      message: parsed.error.issues[0]?.message ?? "Please check the form and try again.",
    }
  }

  if (!isEmailDeliveryConfigured) {
    console.info("[contact] Submission received, but email delivery is not configured yet:", {
      name: parsed.data.name,
      email: parsed.data.email,
    })
    return { status: "not-configured" }
  }

  try {
    const resend = new Resend(env.RESEND_API_KEY)
    await resend.emails.send({
      // TODO: replace with a verified sending domain once one is configured for this project.
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: env.CONTACT_TO_EMAIL!,
      replyTo: parsed.data.email,
      subject: `New message from ${parsed.data.name}`,
      text: `${parsed.data.message}\n\nFrom: ${parsed.data.name} <${parsed.data.email}>`,
    })
    return { status: "success" }
  } catch (error) {
    console.error("[contact] Failed to send email:", error)
    return {
      status: "error",
      message: "Something went wrong sending your message. Please try emailing directly instead.",
    }
  }
}
