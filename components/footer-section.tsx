"use client"

import { Github, Linkedin, Mail } from "lucide-react"

export function FooterSection() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border py-12 bg-background">
      <div className="max-w-5xl mx-auto px-6 sm:px-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-sm font-bold tracking-widest uppercase text-foreground">
              Ankit Mukherjee
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              &copy; {currentYear} All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-4">
            {[
              {
                href: "https://github.com/Ankit-Mukherjee",
                icon: Github,
                label: "GitHub",
              },
              {
                href: "https://www.linkedin.com/in/ankit281",
                icon: Linkedin,
                label: "LinkedIn",
              },
              {
                href: "mailto:ank26.m@gmail.com",
                icon: Mail,
                label: "Email",
              },
            ].map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto:") ? undefined : "_blank"}
                rel={
                  href.startsWith("mailto:")
                    ? undefined
                    : "noopener noreferrer"
                }
                className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                aria-label={label}
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>

          <p className="text-xs text-muted-foreground/60">
            Built with Next.js & Framer Motion
          </p>
        </div>
      </div>
    </footer>
  )
}
