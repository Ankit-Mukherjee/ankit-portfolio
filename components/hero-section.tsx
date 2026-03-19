"use client"

import { useRef } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import Image from "next/image"
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react"

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 })
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 })

  const imageX = useTransform(springX, [-500, 500], [15, -15])
  const imageY = useTransform(springY, [-500, 500], [15, -15])

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect()
    if (!rect) return
    mouseX.set(e.clientX - rect.left - rect.width / 2)
    mouseY.set(e.clientY - rect.top - rect.height / 2)
  }

  const socials = [
    { href: "https://github.com/Ankit-Mukherjee", icon: Github, label: "GitHub" },
    { href: "https://www.linkedin.com/in/ankit281", icon: Linkedin, label: "LinkedIn" },
    { href: "mailto:ank26.m@gmail.com", icon: Mail, label: "Email" },
  ]

  return (
    <section
      id="hero"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative h-screen w-full overflow-hidden bg-background flex items-center justify-center"
    >
      {/* Background subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(6,182,212,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Main content */}
      <div className="relative z-10 w-full max-w-[90vw] mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 px-6">
        {/* Text */}
        <div className="flex-1 text-center lg:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="name-shimmer text-[13vw] lg:text-[9vw] font-bold leading-[0.9] tracking-tighter"
          >
            ANKIT
            <br />
            MUKHERJEE
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.4,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-6 text-xs sm:text-sm font-medium tracking-[0.3em] uppercase text-muted-foreground"
          >
            Full-Stack Software Engineer
          </motion.p>
        </div>

        {/* Profile image with parallax */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          style={{ x: imageX, y: imageY }}
          className="relative w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 flex-shrink-0 will-change-transform"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-500/20 to-transparent blur-2xl" />
          <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white/10">
            <Image
              src="/images/ankit.png"
              alt="Ankit Mukherjee"
              fill
              priority
              className="object-cover"
              style={{ objectPosition: "center 20%" }}
            />
          </div>
        </motion.div>
      </div>

      {/* Social icons - bottom left */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="absolute bottom-8 left-6 sm:left-10 flex flex-col gap-4 z-10"
      >
        {socials.map(({ href, icon: Icon, label }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("mailto:") ? undefined : "_blank"}
            rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
            aria-label={label}
            className="text-muted-foreground hover:text-primary transition-colors duration-200 cursor-pointer"
          >
            <Icon className="w-5 h-5" />
          </a>
        ))}
        <div className="w-px h-16 bg-muted-foreground/30 mx-auto" />
      </motion.div>

      {/* Scroll indicator - bottom center */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
          Scroll
        </span>
        <ChevronDown className="w-4 h-4 text-muted-foreground animate-scroll-bounce" />
      </motion.div>
    </section>
  )
}
