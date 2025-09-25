"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

/**
 * CustomCursor renders a red ring cursor with scale/opacity changes on hover/press.
 * It auto-disables on touch devices (pointer: coarse).
 */
export function CustomCursor() {
  const [enabled, setEnabled] = useState(false)
  const [isHover, setIsHover] = useState(false)
  const [isDown, setIsDown] = useState(false)
  const hoverSelectors = 'a, button, [role="button"], .hoverable'

  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const mx = useSpring(x, { stiffness: 600, damping: 40, mass: 0.6 })
  const my = useSpring(y, { stiffness: 600, damping: 40, mass: 0.6 })

  const unsubRef = useRef<() => void>()

  useEffect(() => {
    const isCoarse = window.matchMedia('(pointer: coarse)').matches
    if (isCoarse) return // disable on touch
    setEnabled(true)

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)
    }
    const onDown = () => setIsDown(true)
    const onUp = () => setIsDown(false)
    window.addEventListener('mousemove', onMove)
    window.addEventListener('mousedown', onDown)
    window.addEventListener('mouseup', onUp)

    // hover intent over interactive elements
    const enter = () => setIsHover(true)
    const leave = () => setIsHover(false)
    const nodes = Array.from(document.querySelectorAll(hoverSelectors))
    nodes.forEach((n) => {
      n.addEventListener('mouseenter', enter)
      n.addEventListener('mouseleave', leave)
    })

    unsubRef.current = () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mousedown', onDown)
      window.removeEventListener('mouseup', onUp)
      nodes.forEach((n) => {
        n.removeEventListener('mouseenter', enter)
        n.removeEventListener('mouseleave', leave)
      })
    }

    return () => unsubRef.current?.()
  }, [x, y])

  if (!enabled) return null

  const size = isDown ? 12 : isHover ? 40 : 22
  const alpha = isHover ? 0.25 : 0.15

  return (
    <>
      {/* Outer ring */}
      <motion.div
        style={{ left: 0, top: 0, translateX: mx, translateY: my }}
        className="pointer-events-none fixed z-[10000]"
        animate={{ width: size, height: size, marginLeft: -size / 2, marginTop: -size / 2 }}
        transition={{ type: "spring", stiffness: 500, damping: 40 }}
      >
        <div
          className="rounded-full border-2 border-red-600/80 bg-red-600"
          style={{ width: "100%", height: "100%", opacity: isDown ? 0.9 : isHover ? 0.6 : 0.35 }}
        />
      </motion.div>

      {/* Soft glow */}
      <motion.div
        style={{ left: 0, top: 0, translateX: mx, translateY: my }}
        className="pointer-events-none fixed z-[9999]"
        animate={{ width: size * 3, height: size * 3, marginLeft: -(size * 3) / 2, marginTop: -(size * 3) / 2, opacity: alpha }}
        transition={{ type: "spring", stiffness: 400, damping: 35 }}
      >
        <div className="rounded-full bg-red-500 blur-2xl" style={{ width: "100%", height: "100%" }} />
      </motion.div>
    </>
  )
}

export default CustomCursor


