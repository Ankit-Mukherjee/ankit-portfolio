"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ArrowRight, Download } from "lucide-react"

export function ContactSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="contact" className="py-24 sm:py-40 bg-neutral-100 overflow-hidden" ref={ref}>
      {/* Scrolling marquee banner */}
      <div className="overflow-hidden mb-14 sm:mb-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="flex whitespace-nowrap"
        >
          <motion.div
            animate={{ x: "-50%" }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="flex shrink-0"
          >
            {Array.from({ length: 8 }).map((_, i) => (
              <span
                key={i}
                className="text-[18vw] sm:text-[14vw] lg:text-[11vw] font-bold leading-none tracking-[-0.04em] mx-4 sm:mx-8 shrink-0"
              >
                <span className="text-black">HEY!</span>
                <span className="text-neutral-300 ml-3 sm:ml-6">SAY HI</span>
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <div className="px-6 sm:px-10">
        {/* Email CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center"
        >
          <a
            href="mailto:ank26.m@gmail.com"
            className="group flex items-center gap-4 border-2 border-black bg-white px-6 sm:px-8 py-4 hover:bg-black hover:text-white transition-all duration-300 cursor-pointer"
          >
            <span className="text-sm sm:text-base font-bold tracking-wider uppercase">
              ANK26.M@GMAIL.COM
            </span>
            <div className="w-10 h-10 bg-black text-white group-hover:bg-white group-hover:text-black rounded-full flex items-center justify-center transition-all duration-300">
              <ArrowRight className="w-4 h-4" />
            </div>
          </a>
        </motion.div>

        {/* Resume download */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex justify-center mt-6"
        >
          <a
            href="/Ankit_Resume.pdf"
            download
            className="group flex items-center gap-2 text-[11px] font-medium tracking-[0.2em] text-neutral-400 hover:text-black transition-colors cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            DOWNLOAD RESUME
          </a>
        </motion.div>
      </div>
    </section>
  )
}
