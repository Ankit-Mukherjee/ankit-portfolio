"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

const skills = [
  "REACT", "PYTHON", "FASTAPI", "TYPESCRIPT", "NEXT.JS", "AWS",
  "DOCKER", "POSTGRESQL", "NODE.JS", "NESTJS", "LANGRAPH", "WEAVIATE",
  "PYTORCH", "KUBERNETES", "REDIS", "GRAPHQL",
]

export function MarqueeSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const x1 = useTransform(scrollYProgress, [0, 1], [0, -200])
  const x2 = useTransform(scrollYProgress, [0, 1], [-200, 0])

  return (
    <section ref={ref} data-theme="dark" className="py-16 sm:py-24 bg-black overflow-hidden">
      <motion.div style={{ x: x1 }} className="flex gap-8 mb-6 whitespace-nowrap">
        {[...skills, ...skills].map((skill, i) => (
          <span
            key={i}
            className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tighter text-neutral-800"
          >
            {skill}
          </span>
        ))}
      </motion.div>
      <motion.div style={{ x: x2 }} className="flex gap-8 whitespace-nowrap">
        {[...skills, ...skills].map((skill, i) => (
          <span
            key={i}
            className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tighter"
            style={{ WebkitTextStroke: "1px #fff", WebkitTextFillColor: "transparent" }}
          >
            {skill}
          </span>
        ))}
      </motion.div>
    </section>
  )
}
