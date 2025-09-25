"use client"

import { useEffect } from "react"

export function LenisProvider() {
  useEffect(() => {
    let cleanup: (() => void) | undefined
    ;(async () => {
      // Use the renamed package `lenis` if available, fallback to @studio-freight/lenis
      let Lenis: any
      try {
        const mod = await import("lenis")
        Lenis = (mod as any).default || (mod as any)
      } catch {
        const mod = await import("@studio-freight/lenis")
        Lenis = (mod as any).default || (mod as any)
      }
      const lenis = new Lenis({
        smoothWheel: true,
        lerp: 0.1,
      })

      const raf = (time: number) => {
        lenis.raf(time)
        requestAnimationFrame(raf)
      }
      const id = requestAnimationFrame(raf)
      cleanup = () => cancelAnimationFrame(id)
    })()
    return () => cleanup?.()
  }, [])

  return null
}

export default LenisProvider


