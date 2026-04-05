"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"

export function AboutSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-24 sm:py-32 bg-white" ref={ref}>
      <div className="max-w-5xl mx-auto px-6 sm:px-10">
        {/* Green box with all content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="px-5 sm:px-8 lg:px-12 py-10 sm:py-12 lg:py-14"
          style={{ backgroundColor: "rgb(190, 255, 162)" }}
        >
          {/* Label */}
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="block text-[11px] font-medium tracking-[0.3em] text-black/40 mb-8 text-center"
          >
            MYSELF
          </motion.span>

          {/* One big bold header — left aligned */}
          <div className="text-left max-w-3xl">
            <motion.h2
              className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05] text-black"
            >
              {"FULL-STACK ENGINEER & AI SYSTEMS BUILDER SHIPPING 0-TO-1 PRODUCTS AT SCALE.".split(" ").map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.5,
                    delay: 0.15 + i * 0.04,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="inline-block mr-[0.25em]"
                >
                  {word}
                </motion.span>
              ))}
            </motion.h2>
          </div>

          {/* Watermelon cat */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 sm:mt-8 mx-auto w-[350px] h-[430px] sm:w-[450px] sm:h-[550px] lg:w-[520px] lg:h-[640px] relative overflow-hidden"
          >
            <Image
              src="/images/watermelon-cat.png"
              alt="Watermelon cat"
              fill
              className="object-contain"
            />
          </motion.div>

          {/* Quote */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="text-xs sm:text-sm font-bold tracking-[0.12em] text-black/60 text-right -mt-10 sm:-mt-14 relative z-10 uppercase max-w-sm ml-auto leading-relaxed"
          >
            I BELIEVE THE BEST ENGINEERING HAPPENS WHERE EXTREME OWNERSHIP AND CREATIVE PROBLEM-SOLVING INTERSECT.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
