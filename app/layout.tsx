import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/sonner"
import { SkipLink } from "@/components/layout/skip-link"
import { SiteHeader } from "@/components/layout/site-header"
import { SiteFooter } from "@/components/layout/site-footer"
import { BackToTop } from "@/components/layout/back-to-top"
import { siteName, siteUrl } from "@/lib/metadata"
import { personJsonLd, websiteJsonLd } from "@/lib/structured-data"
import "./globals.css"

const geistSans = Geist({ subsets: ["latin"], variable: "--font-geist-sans" })
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" })

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "MD Solyman Hossen | Full Stack Software Engineer",
    template: "%s | MD Solyman Hossen",
  },
  description:
    "Full Stack Software Engineer specialising in scalable web platforms, Next.js, MERN, Laravel, performance optimisation and AI-assisted automation.",
  keywords: [
    "Full Stack Software Engineer",
    "Next.js Developer",
    "MERN Stack Developer",
    "Laravel Developer",
    "AI Automation Engineer",
    "Software Engineer in Bangladesh",
    "Scalable Web Application Developer",
    "REST API Developer",
    "Performance Optimisation Engineer",
  ],
  authors: [{ name: "MD Solyman Hossen" }],
  creator: "MD Solyman Hossen",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "MD Solyman Hossen | Full Stack Software Engineer",
    description:
      "Full Stack Software Engineer specialising in scalable web platforms, Next.js, MERN, Laravel, performance optimisation and AI-assisted automation.",
    siteName,
  },
  twitter: {
    card: "summary_large_image",
    title: "MD Solyman Hossen | Full Stack Software Engineer",
    description:
      "Full Stack Software Engineer specialising in scalable web platforms, Next.js, MERN, Laravel, performance optimisation and AI-assisted automation.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon-light-32x32.png", media: "(prefers-color-scheme: light)", sizes: "32x32", type: "image/png" },
      { url: "/icon-dark-32x32.png", media: "(prefers-color-scheme: dark)", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-icon.png",
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fcfcfa" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd()) }}
        />
      </head>
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <SkipLink />
          <SiteHeader />
          <main id="main-content">{children}</main>
          <SiteFooter />
          <BackToTop />
          <Toaster />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
