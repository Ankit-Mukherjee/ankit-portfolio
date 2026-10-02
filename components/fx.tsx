"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion"
import { ArrowUp } from "lucide-react"

/** Text that rolls up to a duplicate on hover. Put it inside an element with the `group` class. */
export function Roll({ children }: { children: string }) {
  return (
    <span className="relative inline-block overflow-hidden align-bottom">
      <span className="block transition-transform duration-300 ease-out group-hover:-translate-y-full">{children}</span>
      <span className="absolute left-0 top-full block transition-transform duration-300 ease-out group-hover:-translate-y-full">
        {children}
      </span>
    </span>
  )
}

/** Button with a colour fill that slides up and an icon that swaps on hover. */
export function Btn({
  href,
  children,
  icon,
  bg = "#f086d0",
  fill = "#1230f0",
  text = "#101010",
  hoverText = "#ffffff",
  external,
}: {
  href: string
  children: string
  icon?: React.ReactNode
  bg?: string
  fill?: string
  text?: string
  hoverText?: string
  external?: boolean
}) {
  const [hover, setHover] = useState(false)
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{ backgroundColor: bg, color: hover ? hoverText : text }}
      className="group relative inline-flex items-center gap-2 overflow-hidden px-4 py-2.5 text-[11px] font-semibold uppercase transition-colors duration-300 active:scale-[0.97]"
    >
      <span
        style={{ backgroundColor: fill }}
        className="absolute inset-0 translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0"
      />
      {icon && (
        <span className="relative h-3.5 w-3.5 overflow-hidden">
          <span className="absolute inset-0 transition-transform duration-300 group-hover:-translate-y-full">{icon}</span>
          <span className="absolute inset-0 translate-y-full transition-transform duration-300 group-hover:translate-y-0">{icon}</span>
        </span>
      )}
      <span className="relative">{children}</span>
    </a>
  )
}

/** Pink label that trails the mouse over anything with data-cursor="…". */
export function CursorLabel() {
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const sx = useSpring(x, { stiffness: 400, damping: 32 })
  const sy = useSpring(y, { stiffness: 400, damping: 32 })
  const [label, setLabel] = useState<string | null>(null)

  useEffect(() => {
    if (!window.matchMedia("(hover: hover)").matches) return
    const move = (e: MouseEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)
      const el = (e.target as HTMLElement | null)?.closest<HTMLElement>("[data-cursor]")
      setLabel(el?.dataset.cursor ?? null)
    }
    window.addEventListener("mousemove", move)
    return () => window.removeEventListener("mousemove", move)
  }, [x, y])

  return (
    <motion.div style={{ x: sx, y: sy }} className="pointer-events-none fixed left-0 top-0 z-[90]">
      <AnimatePresence>
        {label && (
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ type: "spring", stiffness: 400, damping: 22 }}
            className="absolute -left-10 -top-10 flex h-20 w-20 items-center justify-center rounded-full bg-[#f086d0] text-[11px] font-extrabold uppercase text-[#101010]"
          >
            {label}
          </motion.span>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export function ScrollTop() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const on = () => setShow(window.scrollY > 700)
    on()
    window.addEventListener("scroll", on, { passive: true })
    return () => window.removeEventListener("scroll", on)
  }, [])
  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className="group fixed bottom-4 right-4 z-40 flex h-11 w-11 items-center justify-center overflow-hidden bg-white text-[#101010] shadow-md"
        >
          <span className="absolute inset-0 translate-y-full bg-[#1230f0] transition-transform duration-300 group-hover:translate-y-0" />
          <ArrowUp size={16} className="relative transition-colors group-hover:text-white" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
