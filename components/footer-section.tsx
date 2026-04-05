"use client"

import { motion } from "framer-motion"

const navLinks = [
  { label: "HOME", href: "#hero" },
  { label: "ABOUT", href: "#about" },
  { label: "EXPERIENCE", href: "#experience" },
  { label: "WORKS", href: "#work" },
  { label: "EDUCATION", href: "#education" },
]

const socialLinks = [
  { label: "GITHUB", href: "https://github.com/Ankit-Mukherjee" },
  { label: "LINKEDIN", href: "https://www.linkedin.com/in/ankit281" },
  { label: "EMAIL", href: "mailto:ank26.m@gmail.com" },
]

export function FooterSection() {
  const currentYear = new Date().getFullYear()

  const handleClick = (href: string) => {
    if (href === "#hero") {
      window.scrollTo({ top: 0, behavior: "smooth" })
      return
    }
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer data-theme="dark" className="border-t border-neutral-800 py-10 bg-black">
      <div className="px-6 sm:px-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: "smooth" })
            }}
            className="cursor-pointer"
          >
            <span className="text-lg font-bold leading-none tracking-tight text-white">
              ANKIT
              <br />
              MUK.
            </span>
          </a>

          {/* Nav links */}
          <div className="flex gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault()
                  handleClick(link.href)
                }}
                className="text-[11px] font-medium tracking-widest text-neutral-500 hover:text-white transition-colors cursor-pointer"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Social links */}
          <div className="flex gap-8">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={link.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                className="text-[11px] font-medium tracking-widest text-neutral-500 hover:text-white transition-colors cursor-pointer"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-neutral-800 flex flex-col sm:flex-row justify-between gap-4">
          <span className="text-[11px] text-neutral-600">
            &copy; {currentYear} Ankit Mukherjee. All rights reserved.
          </span>
          <span className="text-[11px] text-neutral-600">
            Built with Next.js & Framer Motion
          </span>
        </div>
      </div>
    </footer>
  )
}
