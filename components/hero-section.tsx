"use client"

import { useRef } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import Image from "next/image"

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 })
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 })

  const imageX = useTransform(springX, [-500, 500], [10, -10])
  const imageY = useTransform(springY, [-500, 500], [10, -10])

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect()
    if (!rect) return
    mouseX.set(e.clientX - rect.left - rect.width / 2)
    mouseY.set(e.clientY - rect.top - rect.height / 2)
  }

  const nameLetters = "ANKIT".split("")
  const lastNameLetters = "MUKHERJEE".split("")

  return (
    <section
      id="hero"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen w-full bg-white flex flex-col justify-center pt-24 pb-12"
    >
      {/* Massive name */}
      <div className="px-6 sm:px-10">
        <div className="overflow-hidden">
          <motion.h1
            className="text-[18vw] sm:text-[15vw] lg:text-[12vw] font-bold leading-[0.85] tracking-[-0.04em] text-black"
          >
            {nameLetters.map((letter, i) => (
              <motion.span
                key={i}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.1 + i * 0.04,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="inline-block"
              >
                {letter}
              </motion.span>
            ))}
          </motion.h1>
        </div>
        <div className="overflow-hidden">
          <motion.h1
            className="text-[18vw] sm:text-[15vw] lg:text-[12vw] font-bold leading-[0.85] tracking-[-0.04em] text-black"
          >
            {lastNameLetters.map((letter, i) => (
              <motion.span
                key={i}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.3 + i * 0.04,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="inline-block"
              >
                {letter}
              </motion.span>
            ))}
          </motion.h1>
        </div>
      </div>

      {/* Photo section with vertical labels */}
      <div className="mt-12 sm:mt-16 px-6 sm:px-10 flex items-start gap-6 sm:gap-10">
        {/* Vertical labels */}
        <div className="flex flex-col gap-12 pt-4">
          {["SHOWCASE", "ENGINEER", "CREATIVE"].map((label, i) => (
            <motion.span
              key={label}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 + i * 0.15 }}
              className="vertical-text text-[10px] sm:text-[11px] font-medium tracking-[0.3em] text-neutral-400"
            >
              {label}
            </motion.span>
          ))}
        </div>

        {/* Profile photo */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          style={{ x: imageX, y: imageY }}
          className="relative w-[250px] h-[320px] sm:w-[300px] sm:h-[400px] lg:w-[350px] lg:h-[450px] overflow-hidden will-change-transform"
        >
          <Image
            src="/images/ankit-profile.jpg"
            alt="Ankit Mukherjee"
            fill
            priority
            className="object-cover"
            style={{ objectPosition: "center 20%" }}
          />
        </motion.div>

        {/* Down arrow / scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="hidden sm:flex flex-col items-center gap-2 pt-4 ml-auto"
        >
          <span className="vertical-text text-[10px] tracking-[0.3em] text-neutral-400 font-medium">
            SCROLL
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-12 bg-neutral-300"
          />
        </motion.div>
      </div>
    </section>
  )
}
