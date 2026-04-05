"use client"

import { useRef, useEffect, useCallback } from "react"

const DOT_SPACING = 28
const DOT_BASE_RADIUS = 1.2
const DOT_MAX_RADIUS = 3.5
const CURSOR_RADIUS = 120
const FADE_SPEED = 0.005

export function CursorHeatmap() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const rafRef = useRef<number>(0)
  const mouseRef = useRef({ x: -999, y: -999 })
  const dotsRef = useRef<Float32Array | null>(null)
  const colsRef = useRef(0)
  const rowsRef = useRef(0)

  const initDots = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const w = window.innerWidth
    const h = window.innerHeight

    canvas.width = w
    canvas.height = h

    const cols = Math.ceil(w / DOT_SPACING) + 1
    const rows = Math.ceil(h / DOT_SPACING) + 1
    colsRef.current = cols
    rowsRef.current = rows

    dotsRef.current = new Float32Array(cols * rows)
  }, [])

  const render = useCallback(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext("2d")
    const dots = dotsRef.current
    if (!canvas || !ctx || !dots) return

    const cols = colsRef.current
    const rows = rowsRef.current
    const mx = mouseRef.current.x
    const my = mouseRef.current.y

    ctx.clearRect(0, 0, canvas.width, canvas.height)

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const idx = row * cols + col
        const x = col * DOT_SPACING + DOT_SPACING / 2
        const y = row * DOT_SPACING + DOT_SPACING / 2

        // Heat up dots near cursor
        if (mx > -900) {
          const dx = x - mx
          const dy = y - my
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < CURSOR_RADIUS) {
            const intensity = 1 - dist / CURSOR_RADIUS
            const target = intensity * intensity
            if (target > dots[idx]) {
              dots[idx] = target
            }
          }
        }

        // Fade
        if (dots[idx] > 0) {
          dots[idx] = Math.max(0, dots[idx] - FADE_SPEED)
        }

        // Draw
        if (dots[idx] > 0.01) {
          const heat = dots[idx]
          const radius = DOT_BASE_RADIUS + (DOT_MAX_RADIUS - DOT_BASE_RADIUS) * heat
          const alpha = heat * 0.5

          ctx.beginPath()
          ctx.arc(x, y, radius, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(100, 100, 100, ${alpha})`
          ctx.fill()
        }
      }
    }

    rafRef.current = requestAnimationFrame(render)
  }, [])

  useEffect(() => {
    initDots()

    const onMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
    }
    const onMouseLeave = () => {
      mouseRef.current = { x: -999, y: -999 }
    }
    const onResize = () => {
      initDots()
    }

    window.addEventListener("mousemove", onMouseMove, { passive: true })
    document.addEventListener("mouseleave", onMouseLeave)
    window.addEventListener("resize", onResize)
    rafRef.current = requestAnimationFrame(render)

    return () => {
      window.removeEventListener("mousemove", onMouseMove)
      document.removeEventListener("mouseleave", onMouseLeave)
      window.removeEventListener("resize", onResize)
      cancelAnimationFrame(rafRef.current)
    }
  }, [initDots, render])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[999]"
    />
  )
}
