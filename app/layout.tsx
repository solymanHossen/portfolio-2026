import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const geistSans = Geist({ subsets: ["latin"] })
const geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Md. Solyman Hossen - Senior Full Stack Engineer",
  description:
    "Senior full-stack engineer specializing in enterprise architecture, microservices, and scalable systems. 3+ years building high-performance applications with React, Next.js, Node.js, and Laravel.",
  keywords: [
    "full-stack engineer",
    "backend developer",
    "software architect",
    "React",
    "Next.js",
    "Node.js",
    "Laravel",
  ],
  authors: [{ name: "Md. Solyman Hossen", url: "https://solyman.dev" }],
  creator: "Md. Solyman Hossen",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://solyman.dev",
    title: "Md. Solyman Hossen - Senior Full Stack Engineer",
    description: "Portfolio of senior full-stack engineer specializing in enterprise architecture and scalable systems",
    siteName: "Solyman Portfolio",
    images: [
      {
        url: "https://solyman.dev/og-image.png",
        width: 1200,
        height: 630,
        alt: "Solyman Hossen Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Md. Solyman Hossen - Senior Full Stack Engineer",
    description: "Portfolio of senior full-stack engineer specializing in enterprise architecture",
    creator: "@solyman",
    images: ["https://solyman.dev/og-image.png"],
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
    canonical: "https://solyman.dev",
  },
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#050505" },
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
    <html lang="en">
      <head>
        {/* Structured data for rich snippets */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Md. Solyman Hossen",
              url: "https://solyman.dev",
              sameAs: ["https://linkedin.com/in/solymanhhossen", "https://github.com/solyman"],
              jobTitle: "Senior Full Stack Engineer",
              workLocation: {
                "@type": "Place",
                name: "Dhaka, Bangladesh",
              },
            }),
          }}
        />
      </head>
      <body className={`font-sans antialiased bg-dark text-light`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
