"use client"

import { useRef, type ReactNode } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export function ScrollStretch({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  // When section top hits viewport top (0.0) → fully scrolled past (1.0)
  // Scale stretches from 1 → 1.15 as it leaves
  const scaleY = useTransform(scrollYProgress, [0, 0.3, 1], [1, 1, 1.2])
  const scaleX = useTransform(scrollYProgress, [0, 0.3, 1], [1, 1, 0.95])
  const opacity = useTransform(scrollYProgress, [0, 0.4, 1], [1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.3, 1], [0, 0, -60])
  const filter = useTransform(
    scrollYProgress,
    [0, 0.4, 1],
    ["blur(0px)", "blur(0px)", "blur(6px)"]
  )

  return (
    <div ref={ref} className="relative">
      <motion.div
        style={{
          scaleY,
          scaleX,
          opacity,
          y,
          filter,
          transformOrigin: "top center",
          willChange: "transform, opacity, filter",
        }}
      >
        {children}
      </motion.div>
    </div>
  )
}
