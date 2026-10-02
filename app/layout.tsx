import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import { SmoothScroll } from "@/components/smooth-scroll"
import "./globals.css"

export const metadata: Metadata = {
  title: "Ankit Mukherjee - AI Engineer",
  description:
    "AI Engineer specializing in building scalable web applications with React, Python & FastAPI. Expertise in Agentic AI workflows and cloud systems.",
  metadataBase: new URL("https://ankitmuk.com"),
  openGraph: {
    title: "Ankit Mukherjee - AI Engineer",
    description: "AI Engineer at Pure Storage building production-grade agentic AI systems on AWS.",
    url: "https://ankitmuk.com",
    siteName: "Ankit Mukherjee",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ankit Mukherjee - AI Engineer",
    description: "AI Engineer at Pure Storage building production-grade agentic AI systems on AWS.",
    images: ["/og-image.png"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter+Tight:wght@400;500;600;700;800&family=Instrument+Serif:ital@0;1&family=Yellowtail&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased bg-[#f4f4f4] text-[#101010] tracking-[-0.02em]">
        <SmoothScroll />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
