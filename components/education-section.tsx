"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

const education = {
  degree: "Master of Science in Computer Science",
  focus: "Artificial Intelligence & Machine Learning",
  school: "University at Buffalo (SUNY)",
  location: "Buffalo, NY",
  period: "Aug 2024 - Dec 2025",
  coursework: [
    "Machine Learning",
    "Deep Learning",
    "Computer Vision",
    "Distributed Systems",
    "Data Intensive Computing",
  ],
}

export function EducationSection() {
  const [expanded, setExpanded] = useState(false)

  const heading = "EDUCATION"
  const letterVariants = {
    hidden: { y: "100%" },
    visible: (i: number) => ({
      y: 0,
      transition: {
        duration: 0.6,
        delay: i * 0.04,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  }

  return (
    <section id="education" className="py-24 sm:py-32 bg-white overflow-hidden">
      <div className="px-6 sm:px-10">
        {/* Header */}
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="text-[15vw] sm:text-[12vw] lg:text-[9vw] font-bold leading-[0.85] tracking-[-0.04em] text-black mb-4 flex overflow-hidden"
        >
          {heading.split("").map((letter, i) => (
            <motion.span
              key={i}
              custom={i}
              variants={letterVariants}
              className="inline-block"
            >
              {letter}
            </motion.span>
          ))}
        </motion.h2>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-3 mb-16 origin-left"
        >
          <span className="text-[11px] font-medium tracking-[0.3em] text-neutral-400">
            ACADEMIC BACKGROUND
          </span>
          <div className="h-px flex-1 bg-neutral-200" />
        </motion.div>

        {/* Side-by-side: Logo left, text right */}
        <div
          className="flex flex-col lg:flex-row items-start gap-8 lg:gap-16 cursor-pointer"
          onClick={() => setExpanded(!expanded)}
        >
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.3, type: "spring", stiffness: 100, damping: 15 }}
            className="relative w-full lg:w-[45%] aspect-[4/3] overflow-hidden rounded-sm shrink-0"
          >
            <Image
              src="/images/ub-logo.png"
              alt="University at Buffalo"
              fill
              className="object-contain"
            />
          </motion.div>

          {/* Text — big, bold, uneven lines */}
          <div className="flex-1">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-[4.5vw] font-black tracking-tight leading-[1.0] text-black"
            >
              UNIVERSITY
              <br />
              <span className="inline-block lg:ml-[10%]">AT BUFFALO</span>
              <br />
              <span className="inline-block lg:ml-[5%] text-3xl sm:text-4xl lg:text-[3.5vw]">(SUNY)</span>
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="text-lg sm:text-xl lg:text-2xl font-bold text-neutral-700 mt-6 leading-[1.1]"
            >
              Master of Science
              <br />
              <span className="inline-block lg:ml-[8%]">in Computer Science</span>
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.45 }}
              className="text-[11px] font-medium tracking-[0.2em] text-neutral-400 mt-4"
            >
              {education.period} — {education.location}
            </motion.p>

            {/* Expanded details */}
            <AnimatePresence>
              {expanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-base sm:text-lg text-neutral-500 mt-4"
                  >
                    Specialization: {education.focus}
                  </motion.p>

                  <div className="mt-8">
                    <span className="text-[11px] font-medium tracking-[0.3em] text-neutral-400 block mb-4">
                      RELEVANT COURSEWORK
                    </span>
                    <div className="flex flex-wrap gap-2.5">
                      {education.coursework.map((course, i) => (
                        <motion.span
                          key={course}
                          initial={{ opacity: 0, scale: 0.8, y: 10 }}
                          animate={{ opacity: 1, scale: 1, y: 0 }}
                          transition={{
                            delay: 0.15 + i * 0.06,
                            duration: 0.4,
                            type: "spring",
                            stiffness: 300,
                          }}
                          whileHover={{ scale: 1.08, y: -3, backgroundColor: "#005BBB", color: "#fff", borderColor: "#005BBB" }}
                          className="text-xs px-4 py-2 border border-neutral-200 text-neutral-600 transition-colors duration-200 cursor-default"
                        >
                          {course}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
