"use client"

import { motion } from "framer-motion"

/** Splits text into words that rise into place when scrolled into view. */
export function Words({ text, className = "", delay = 0 }: { text: string; className?: string; delay?: number }) {
  return (
    <span className={className}>
      {text.split(" ").map((w, i, arr) => (
        <span key={i} className="inline-block overflow-hidden pb-[0.1em] align-bottom -mb-[0.1em]">
          <motion.span
            className="inline-block"
            initial={{ y: "110%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, margin: "-8%" }}
            transition={{ duration: 0.8, delay: delay + i * 0.07, ease: [0.22, 1, 0.36, 1] }}
          >
            {w}
            {i < arr.length - 1 ? " " : ""}
          </motion.span>
        </span>
      ))}
    </span>
  )
}
