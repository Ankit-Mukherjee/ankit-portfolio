"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"

export function AboutSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-24 sm:py-32 bg-white" ref={ref}>
      <div className="max-w-4xl mx-auto px-6 sm:px-10 text-center">
        {/* Label */}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="block text-[11px] font-medium tracking-[0.3em] text-black mb-8"
        >
          MYSELF
        </motion.span>

        {/* Big bold centered heading */}
        <motion.h2
          className="text-[5.5vw] sm:text-[3.5vw] lg:text-[2.5vw] font-black tracking-[-0.02em] leading-[1.15] text-black text-center max-w-[90%] sm:max-w-[600px] mx-auto"
        >
          {["FULL-STACK ENGINEER & AI", "SYSTEMS BUILDER", "CRAFTING HIGH-IMPACT", "EXPERIENCES."].map((line, lineIdx) => (
            <span key={lineIdx} className="block">
              {line.split(" ").map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.5,
                    delay: 0.15 + (lineIdx * 3 + i) * 0.03,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="inline-block mr-[0.28em]"
                >
                  {word}
                </motion.span>
              ))}
            </span>
          ))}
        </motion.h2>

        {/* Centered image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 mx-auto w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] lg:w-[450px] lg:h-[450px] relative overflow-hidden"
        >
          <Image
            src="/images/watermelon-cat.png"
            alt="Watermelon cat"
            fill
            className="object-cover"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="text-[11px] sm:text-xs font-medium tracking-[0.15em] text-black mt-3 uppercase leading-relaxed"
        >
          I LOVE CATS.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="text-[11px] sm:text-xs font-medium tracking-[0.15em] text-black mt-6 uppercase leading-relaxed max-w-sm mx-auto"
        >
          I BELIEVE THE BEST ENGINEERING HAPPENS WHERE EXTREME OWNERSHIP AND CREATIVE PROBLEM-SOLVING INTERSECT.
        </motion.p>
      </div>
    </section>
  )
}
