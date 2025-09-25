import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import { CustomCursor } from "@/components/custom-cursor"
import { GrainOverlay } from "@/components/grain-overlay"
import { LenisProvider } from "@/components/lenis-provider"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Ankit Mukherjee - Software Engineer & Cloud Developer",
  description:
    "Portfolio of Ankit Mukherjee - Full-stack developer specializing in cloud applications, AI solutions, and modern web technologies.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarnings>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <LenisProvider />
        <Suspense fallback={null}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem={true}
            disableTransitionOnChange={false}
            storageKey="ankit-portfolio-theme"
          >
            {children}
          </ThemeProvider>
        </Suspense>
        <GrainOverlay />
        <CustomCursor />
        <Analytics />
      </body>
    </html>
  )
}
