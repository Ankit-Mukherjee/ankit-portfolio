import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import { SmoothScroll } from "@/components/smooth-scroll"
import "./globals.css"

export const metadata: Metadata = {
  title: "Ankit Mukherjee - Full-Stack Software Engineer",
  description:
    "Full-Stack Software Engineer specializing in building scalable web applications with React, Python & FastAPI. Expertise in Agentic AI workflows and cloud systems.",
  metadataBase: new URL("https://ankitmuk.com"),
  openGraph: {
    title: "Ankit Mukherjee - Full-Stack Software Engineer",
    description: "Full-Stack Engineer & AI Systems Builder crafting high-impact experiences.",
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
    title: "Ankit Mukherjee - Full-Stack Software Engineer",
    description: "Full-Stack Engineer & AI Systems Builder crafting high-impact experiences.",
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
