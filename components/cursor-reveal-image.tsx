"use client"

import { useRef, useEffect, useCallback } from "react"
import Image from "next/image"

interface CursorRevealImageProps {
  src: string
  revealSrc: string
  alt: string
  priority?: boolean
  loading?: "lazy" | "eager"
  className?: string
  style?: React.CSSProperties
  revealSize?: number
}

const TRAIL_LENGTH = 20

export function CursorRevealImage({
  src,
  revealSrc,
  alt,
  priority = false,
  loading,
  className = "",
  style,
  revealSize = 50,
}: CursorRevealImageProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const colorLayerRef = useRef<HTMLDivElement>(null)
  const rafRef = useRef<number>(0)
  const trailRef = useRef<{ x: number; y: number; age: number }[]>([])
  const isHoveringRef = useRef(false)
  const lastTimeRef = useRef(0)

  const buildMask = useCallback((time: number) => {
    if (!colorLayerRef.current) return
    const trail = trailRef.current

    if (!isHoveringRef.current && trail.length === 0) return

    // Slowly fade out trail points over time
    const dt = lastTimeRef.current ? (time - lastTimeRef.current) / 1000 : 0
    lastTimeRef.current = time

    // Age each point - very slow decay
    for (let i = trail.length - 1; i >= 0; i--) {
      trail[i].age += dt * 0.15 // very slow fade
      if (trail[i].age >= 1) {
        trail.splice(i, 1)
      }
    }

    if (trail.length === 0) {
      if (!isHoveringRef.current) {
        colorLayerRef.current.style.maskImage = "none"
        colorLayerRef.current.style.webkitMaskImage = "none"
        colorLayerRef.current.style.opacity = "0"
        return
      }
    }

    const gradients = trail.map((pos) => {
      const opacity = 1 - pos.age
      const size = revealSize * (1 - pos.age * 0.3)
      return `radial-gradient(circle ${size}px at ${pos.x}px ${pos.y}px, rgba(0,0,0,${opacity}) 0%, rgba(0,0,0,${opacity * 0.4}) 70%, transparent 100%)`
    })

    const mask = gradients.join(", ")
    colorLayerRef.current.style.maskImage = mask
    colorLayerRef.current.style.webkitMaskImage = mask
    colorLayerRef.current.style.maskComposite = "add"
    colorLayerRef.current.style.webkitMaskComposite = "source-over"

    rafRef.current = requestAnimationFrame(buildMask)
  }, [revealSize])

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    let lastX = 0
    let lastY = 0

    const onMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      // Only add point if cursor moved enough (avoids clumping)
      const dx = x - lastX
      const dy = y - lastY
      if (Math.sqrt(dx * dx + dy * dy) > 4) {
        trailRef.current.unshift({ x, y, age: 0 })
        if (trailRef.current.length > TRAIL_LENGTH) {
          trailRef.current.pop()
        }
        lastX = x
        lastY = y
      }
    }

    const onMouseEnter = () => {
      isHoveringRef.current = true
      lastTimeRef.current = 0
      if (colorLayerRef.current) {
        colorLayerRef.current.style.opacity = "1"
      }
      rafRef.current = requestAnimationFrame(buildMask)
    }

    const onMouseLeave = () => {
      isHoveringRef.current = false
      // Don't clear trail - let it fade out slowly
    }

    container.addEventListener("mousemove", onMouseMove, { passive: true })
    container.addEventListener("mouseenter", onMouseEnter)
    container.addEventListener("mouseleave", onMouseLeave)

    return () => {
      container.removeEventListener("mousemove", onMouseMove)
      container.removeEventListener("mouseenter", onMouseEnter)
      container.removeEventListener("mouseleave", onMouseLeave)
      cancelAnimationFrame(rafRef.current)
    }
  }, [buildMask])

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden">
      {/* Default visible layer - full color */}
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        loading={loading}
        className={className}
        style={style}
      />

      {/* Hidden layer - revealed by cursor trail */}
      <div
        ref={colorLayerRef}
        className="absolute inset-0"
        style={{
          opacity: 0,
          willChange: "mask-image, -webkit-mask-image",
        }}
      >
        <Image
          src={revealSrc}
          alt={alt}
          fill
          loading="lazy"
          className={className}
          style={style}
        />
      </div>
    </div>
  )
}
