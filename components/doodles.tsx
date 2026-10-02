"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { useIntro } from "./intro"

const shapes = {
  underline: { box: "0 0 100 14", d: "M2 9 C 25 2, 55 13, 98 4", stretch: true },
  circle: { box: "0 0 200 80", d: "M30 42 C 20 12, 175 2, 188 36 C 198 70, 45 80, 16 50 C 6 36, 70 12, 130 10" },
  arrow: { box: "0 0 120 90", d: "M6 10 C 45 2, 95 20, 100 68 M82 56 L100 70 L110 46" },
  star: { box: "0 0 50 50", d: "M25 3 L29 21 L47 25 L29 29 L25 47 L21 29 L3 25 L21 21 Z" },
  squiggle: { box: "0 0 100 20", d: "M2 10 C 10 -2, 18 22, 26 10 S 42 -2, 50 10 S 66 22, 74 10 S 90 -2, 98 10", stretch: true },
  burst: { box: "0 0 60 60", d: "M30 4 V16 M30 44 V56 M4 30 H16 M44 30 H56 M12 12 L20 20 M40 40 L48 48 M48 12 L40 20 M20 40 L12 48" },
} as const

export type DoodleKind = keyof typeof shapes

/** Hand-drawn SVG mark that draws itself once it scrolls into view. */
export function Doodle({
  kind,
  className = "",
  delay = 0,
  afterIntro = false,
  duration = 0.9,
}: {
  kind: DoodleKind
  className?: string
  delay?: number
  afterIntro?: boolean
  duration?: number
}) {
  const ref = useRef<SVGSVGElement>(null)
  const inView = useInView(ref, { once: true, margin: "-10% 0px" })
  const { ready } = useIntro()
  const go = inView && (!afterIntro || ready)
  const s = shapes[kind]
  return (
    <svg
      ref={ref}
      viewBox={s.box}
      fill="none"
      aria-hidden
      preserveAspectRatio={"stretch" in s ? "none" : "xMidYMid meet"}
      className={`pointer-events-none overflow-visible ${className}`}
    >
      <motion.path
        d={s.d}
        stroke="currentColor"
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={go ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
        transition={{ duration, delay, ease: [0.65, 0, 0.35, 1] }}
      />
    </svg>
  )
}

/** Slapped-on sticker badge. */
export function Sticker({
  children,
  className = "",
  color = "#f086d0",
  rotate = -8,
}: {
  children: React.ReactNode
  className?: string
  color?: string
  rotate?: number
}) {
  return (
    <motion.span
      initial={{ scale: 0, rotate: rotate - 25, opacity: 0 }}
      whileInView={{ scale: 1, rotate, opacity: 1 }}
      whileHover={{ rotate: rotate + 6, scale: 1.08 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ type: "spring", stiffness: 260, damping: 14 }}
      style={{ backgroundColor: color }}
      className={`inline-block select-none rounded-full border-2 border-[#101010] px-3 py-1.5 text-[11px] font-extrabold uppercase leading-none tracking-normal text-[#101010] shadow-[3px_3px_0_#101010] ${className}`}
    >
      {children}
    </motion.span>
  )
}
