"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

const navLinksLeft = [
  { label: "HOME", href: "#hero" },
  { label: "ABOUT", href: "#about" },
  { label: "EXPERIENCE", href: "#experience" },
  { label: "WORKS", href: "#work" },
]

const navLinksRight = [
  { label: "GITHUB", href: "https://github.com/Ankit-Mukherjee", external: true },
  { label: "LINKEDIN", href: "https://www.linkedin.com/in/ankit281", external: true },
  { label: "EMAIL", href: "mailto:ank26.m@gmail.com", external: true },
]

export function Navigation() {
  const [visible, setVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [onDark, setOnDark] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY
      setScrolled(currentY > 50)

      if (currentY < 50) {
        setVisible(true)
      } else if (currentY < lastScrollY) {
        setVisible(true)
      } else if (currentY > lastScrollY && currentY > 200) {
        setVisible(false)
      }

      setLastScrollY(currentY)

      // Detect if we're over a dark section
      const darkSections = document.querySelectorAll("[data-theme='dark']")
      let isOnDark = false
      darkSections.forEach((section) => {
        const rect = section.getBoundingClientRect()
        if (rect.top <= 80 && rect.bottom > 80) {
          isOnDark = true
        }
      })
      setOnDark(isOnDark)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  const handleClick = (href: string) => {
    setMobileOpen(false)
    if (href === "#hero") {
      window.scrollTo({ top: 0, behavior: "smooth" })
      return
    }
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
    }
  }

  const textColor = onDark && !scrolled
    ? "text-neutral-400 hover:text-white"
    : "text-neutral-800 hover:text-black"

  const logoColor = onDark && !scrolled ? "text-white" : "text-black"

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: visible ? 0 : -100 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white/90 backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div className="w-full px-6 sm:px-10 py-5 flex items-start justify-between">
          {/* Logo */}
          <motion.a
            href="#hero"
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: "smooth" })
            }}
            className={`cursor-pointer flex-shrink-0 transition-colors duration-300 ${scrolled ? "text-black" : logoColor}`}
            whileHover={{ opacity: 0.6 }}
          >
            <span className="text-lg font-bold leading-none tracking-tight">
              ANKIT
              <br />
              <span className="text-lg font-bold">MUK.</span>
            </span>
          </motion.a>

          {/* Center nav links - desktop - STAGGERED */}
          <div className="hidden lg:flex gap-16">
            <div className="flex flex-col gap-1.5">
              {navLinksLeft.map((link, i) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault()
                    handleClick(link.href)
                  }}
                  style={{ paddingLeft: `${[0, 16, 8, 24][i] || 0}px` }}
                  className={`text-[11px] font-medium tracking-widest transition-colors duration-200 cursor-pointer ${scrolled ? "text-neutral-800 hover:text-black" : textColor}`}
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className="flex flex-col gap-1.5">
              {navLinksRight.map((link, i) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  style={{ paddingLeft: `${[0, 16, 8][i] || 0}px` }}
                  className={`text-[11px] font-medium tracking-widest transition-colors duration-200 cursor-pointer ${scrolled ? "text-neutral-800 hover:text-black" : textColor}`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Right side - desktop - STAGGERED */}
          <div className="hidden lg:flex flex-col items-end gap-1.5">
            <span className="text-[11px] font-medium tracking-widest text-neutral-400">
              OPEN TO WORK
            </span>
            <a
              href="mailto:ank26.m@gmail.com"
              className={`text-[11px] font-medium tracking-widest transition-colors cursor-pointer ${scrolled ? "text-neutral-800 hover:text-black" : textColor}`}
              style={{ paddingRight: "16px" }}
            >
              ANK26.M@GMAIL.COM
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                handleClick("#contact")
              }}
              className={`text-[11px] font-medium tracking-widest transition-colors cursor-pointer ${scrolled ? "text-neutral-800 hover:text-black" : textColor}`}
              style={{ paddingRight: "0px" }}
            >
              GET IN TOUCH
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden p-2 cursor-pointer transition-colors duration-300 ${scrolled ? "text-black" : logoColor}`}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white flex flex-col items-center justify-center gap-8 lg:hidden"
          >
            {[...navLinksLeft, { label: "CONTACT", href: "#contact" }].map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault()
                  handleClick(link.href)
                }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="text-4xl font-bold tracking-tighter text-black cursor-pointer"
              >
                {link.label}
              </motion.a>
            ))}
            <div className="flex gap-6 mt-8">
              {navLinksRight.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 + i * 0.08 }}
                  className="text-xs font-medium tracking-widest text-neutral-800 hover:text-black cursor-pointer"
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
