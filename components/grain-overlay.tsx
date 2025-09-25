"use client"

import { useEffect, useRef } from "react"

/**
 * Full-screen subtle film grain overlay using canvas. Extremely lightweight.
 */
export function GrainOverlay() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d", { alpha: true })
    if (!ctx) return

    let raf = 0
    const dpr = Math.min(2, window.devicePixelRatio || 1)

    const resize = () => {
      canvas.width = Math.floor(window.innerWidth * dpr)
      canvas.height = Math.floor(window.innerHeight * dpr)
      canvas.style.width = `${window.innerWidth}px`
      canvas.style.height = `${window.innerHeight}px`
    }
    resize()
    window.addEventListener("resize", resize)

    const noise = () => {
      const { width, height } = canvas
      const imageData = ctx.createImageData(width, height)
      const buffer = imageData.data
      for (let i = 0; i < buffer.length; i += 4) {
        const n = Math.random() * 255
        buffer[i] = n
        buffer[i + 1] = n
        buffer[i + 2] = n
        buffer[i + 3] = 12 // subtle
      }
      ctx.putImageData(imageData, 0, 0)
      raf = requestAnimationFrame(noise)
    }
    raf = requestAnimationFrame(noise)

    return () => {
      window.removeEventListener("resize", resize)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-[5000] mix-blend-overlay opacity-50"
      aria-hidden
    />
  )
}

export default GrainOverlay


