import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import { SmoothScroll } from "@/components/smooth-scroll"
import "./globals.css"

export const metadata: Metadata = {
  title: "Ankit Mukherjee - Full-Stack Software Engineer",
  description:
    "Full-Stack Software Engineer specializing in building scalable web applications with React, Python & FastAPI. Expertise in Agentic AI workflows and cloud systems.",
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
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased bg-white text-black">
        <SmoothScroll />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
