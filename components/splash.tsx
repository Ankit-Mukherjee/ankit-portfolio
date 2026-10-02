"use client"

import { useEffect, useState } from "react"
import { motion, useReducedMotion } from "framer-motion"
import { useIntro } from "./intro"

const KEY = "intro-seen"
// A looping swirl that crosses the whole screen. Drawn very thick it covers everything,
// then it thins out and un-draws along its length, uncovering the page.
const SWIRL =
  "M90 880 C 40 380, 520 60, 820 230 C 1080 380, 800 700, 540 600 C 300 510, 380 270, 620 320 C 860 370, 900 700, 950 980"

export function Splash() {
  const { setReady } = useIntro()
  const reduce = useReducedMotion()
  const [gone, setGone] = useState(false)
  const [leaving, setLeaving] = useState(false)
  const [count, setCount] = useState(0)

  useEffect(() => {
    let seen = false
    try {
      seen = !!sessionStorage.getItem(KEY)
    } catch {}
    if (seen || reduce) {
      setReady(true)
      setGone(true)
      return
    }
    const start = performance.now()
    const total = 1800
    let raf = 0
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / total)
      setCount(Math.round(p * 100))
      if (p < 1) raf = requestAnimationFrame(tick)
      else {
        setLeaving(true)
        try {
          sessionStorage.setItem(KEY, "1")
        } catch {}
        setTimeout(() => setReady(true), 650)
      }
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [reduce, setReady])

  if (gone) return null

  return (
    <div className="pointer-events-none fixed inset-0 z-[100] overflow-clip" style={{ pointerEvents: leaving ? "none" : "auto" }}>
      {/* solid blue until the swirl takes over */}
      <motion.div
        className="absolute inset-0 bg-[#1230f0]"
        animate={{ opacity: leaving ? 0 : 1 }}
        transition={{ duration: 0.01 }}
      />

      <svg
        viewBox="0 0 1000 1000"
        preserveAspectRatio="none"
        fill="none"
        aria-hidden
        className="absolute -left-[15%] -top-[15%] h-[130%] w-[130%] text-[#1230f0]"
      >
        <motion.path
          d={SWIRL}
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ strokeWidth: 1300, pathLength: 1, pathOffset: 0 }}
          animate={leaving ? { strokeWidth: 70, pathLength: 0, pathOffset: 1 } : { strokeWidth: 1300, pathLength: 1, pathOffset: 0 }}
          transition={{ duration: 1.7, ease: [0.76, 0, 0.24, 1] }}
          onAnimationComplete={() => leaving && setGone(true)}
        />
      </svg>

      {/* loader content, hidden as the swirl starts */}
      <motion.div
        className="absolute inset-0 flex flex-col items-center justify-center text-white"
        animate={{ opacity: leaving ? 0 : 1 }}
        transition={{ duration: 0.2 }}
      >
        <p className="mb-6 text-[11px] font-semibold uppercase tracking-normal opacity-70">Hello world</p>
        <motion.p
          initial={{ clipPath: "inset(0 100% 0 0)" }}
          animate={{ clipPath: "inset(0 0% 0 0)" }}
          transition={{ duration: 1.5, ease: [0.65, 0, 0.35, 1], delay: 0.15 }}
          className="font-script px-4 text-[22vw] leading-[1.1] sm:text-[12vw]"
        >
          Ankit Mukherjee
        </motion.p>
        <motion.svg viewBox="0 0 300 14" fill="none" className="mt-2 w-[60vw] max-w-xl overflow-visible" aria-hidden>
          <motion.path
            d="M2 9 C 60 2, 120 13, 190 6 S 270 4, 298 8"
            stroke="white"
            strokeWidth={3}
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.2, delay: 0.7, ease: "easeInOut" }}
          />
        </motion.svg>
        <span className="absolute bottom-6 right-6 font-serif-display text-5xl tabular-nums sm:text-7xl">{count}</span>
      </motion.div>
    </div>
  )
}
