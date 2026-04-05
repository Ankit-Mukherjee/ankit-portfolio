"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

const REVEAL_TEXT =
  "The engineer who built enterprise systems at PwC, scaled AI pipelines at startups, and never stopped shipping."

export function ScrollReveal() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.5"],
  })

  const words = REVEAL_TEXT.split(" ")
  const scale = useTransform(scrollYProgress, [0, 1], [0.96, 1])

  return (
    <section ref={containerRef} className="relative h-[150vh] bg-background">
      <div className="sticky top-0 h-screen flex items-center justify-center px-6 sm:px-12">
        <motion.p
          style={{ scale }}
          className="max-w-4xl text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-center"
        >
          {words.map((word, i) => {
            const start = i / words.length
            const end = start + 1 / words.length
            return (
              <Word key={i} range={[start, end]} progress={scrollYProgress}>
                {word}
              </Word>
            )
          })}
        </motion.p>
      </div>
    </section>
  )
}

function Word({
  children,
  range,
  progress,
}: {
  children: string
  range: [number, number]
  progress: ReturnType<typeof useScroll>["scrollYProgress"]
}) {
  const opacity = useTransform(progress, range, [0.15, 1])

  return (
    <span className="inline-block mr-[0.35em] whitespace-pre">
      <motion.span
        style={{ opacity }}
        className="text-foreground will-change-[opacity]"
      >
        {children}
      </motion.span>
    </span>
  )
}
