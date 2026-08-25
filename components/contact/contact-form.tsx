"use client"

import { useState, useTransition } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { contactFormSchema, type ContactFormValues } from "@/lib/validations/contact"
import { submitContactForm, type ContactActionResult } from "@/app/contact/actions"
import { site } from "@/data/site"

export function ContactForm() {
  const [isPending, startTransition] = useTransition()
  const [result, setResult] = useState<ContactActionResult | null>(null)

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: { name: "", email: "", message: "", company: "" },
  })

  function onSubmit(values: ContactFormValues) {
    startTransition(async () => {
      const response = await submitContactForm(values)
      setResult(response)
      if (response.status === "success") {
        toast.success("Message sent — thanks for reaching out.")
        form.reset()
      }
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" noValidate>
        <input
          type="text"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="absolute left-[-9999px] h-0 w-0 opacity-0"
          {...form.register("company")}
        />

        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Your name" autoComplete="name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="you@example.com" autoComplete="email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea rows={6} placeholder="Tell me a bit about the opportunity or project..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" size="lg" disabled={isPending} className="w-full rounded-full sm:w-auto">
          {isPending ? "Sending…" : "Send Message"}
        </Button>

        {result?.status === "not-configured" && (
          <p role="status" className="text-sm text-muted-foreground">
            Thanks — your message was received. Live email delivery isn&rsquo;t configured yet, so please also reach
            out directly at{" "}
            <a className="text-primary hover:underline" href={`mailto:${site.email}`}>
              {site.email}
            </a>
            .
          </p>
        )}

        {result?.status === "error" && (
          <p role="alert" className="text-sm text-destructive">
            {result.message}
          </p>
        )}
      </form>
    </Form>
  )
}
