"use client"

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { ArrowDown } from "lucide-react"
import { Doodle, Sticker } from "./doodles"
import { useIntro } from "./intro"
import { logos } from "./site-data"

const strip: ({ logo: keyof typeof logos } | { text: string })[] = [
  { logo: "pure" }, { text: "AWS Bedrock" }, { logo: "askturing" }, { text: "Anthropic" }, { logo: "pwc" },
  { text: "LangGraph" }, { logo: "buffalo" }, { text: "FastAPI" }, { text: "Kubernetes" }, { text: "Weaviate" },
]

const ease = [0.22, 1, 0.36, 1] as const

function Line({ children, delay, ready }: { children: React.ReactNode; delay: number; ready: boolean }) {
  return (
    <span className="block overflow-hidden pb-[0.08em]">
      <motion.span
        className="block"
        initial={{ y: "110%" }}
        animate={ready ? { y: 0 } : { y: "110%" }}
        transition={{ duration: 1, delay, ease }}
      >
        {children}
      </motion.span>
    </span>
  )
}

export function Hero() {
  const { ready } = useIntro()
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const sx = useSpring(mx, { stiffness: 60, damping: 18 })
  const sy = useSpring(my, { stiffness: 60, damping: 18 })
  const a = { x: useTransform(sx, (v) => v * 30), y: useTransform(sy, (v) => v * 30) }
  const b = { x: useTransform(sx, (v) => v * -45), y: useTransform(sy, (v) => v * -25) }
  const c = { x: useTransform(sx, (v) => v * 20), y: useTransform(sy, (v) => v * -40) }

  return (
    <header
      id="top"
      onMouseMove={(e) => {
        mx.set(e.clientX / window.innerWidth - 0.5)
        my.set(e.clientY / window.innerHeight - 0.5)
      }}
      className="relative flex min-h-screen flex-col justify-between overflow-hidden pt-28"
    >
      {/* floating stickers that drift with the mouse */}
      <motion.div style={a} className="absolute left-[8%] top-[28%] hidden md:block">
        <Sticker rotate={-10} color="#f4d97a">Agentic AI</Sticker>
      </motion.div>
      <motion.div style={b} className="absolute right-[9%] top-[24%] hidden md:block">
        <Sticker rotate={9} color="#8fd3b6">Ships to prod</Sticker>
      </motion.div>
      <motion.div style={c} className="absolute bottom-[26%] right-[14%] hidden md:block">
        <Sticker rotate={-6} color="#f086d0">RAG • LLMs • AWS</Sticker>
      </motion.div>

      <div className="relative flex flex-1 flex-col items-center justify-center px-4 text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ delay: 0.15, duration: 0.7 }}
          className="font-serif-display mb-4 text-2xl leading-[1.05] sm:text-3xl"
        >
          Full-stack engineer &amp;
          <br />
          AI systems builder
        </motion.p>

        <h1 className="display text-[13vw] sm:text-[10vw]">
          <Line delay={0.25} ready={ready}>Ships AI that</Line>
          <Line delay={0.4} ready={ready}>
            <span className="relative inline-block">
              <span className="font-serif-display normal-case tracking-[-0.03em]">actually</span>
              <Doodle kind="circle" afterIntro delay={1.1} duration={1.1} className="absolute -inset-x-6 -inset-y-3 h-[calc(100%+1.5rem)] w-[calc(100%+3rem)] text-[#1230f0]" />
            </span>{" "}
            works
          </Line>
        </h1>

        <motion.a
          href="#over"
          initial={{ opacity: 0 }}
          animate={ready ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="group mt-10 flex items-center gap-2 text-sm font-medium"
        >
          <span className="relative font-serif-display text-xl">
            Discover more
            <Doodle kind="underline" afterIntro delay={1.2} className="absolute -bottom-2 left-0 h-2.5 w-full text-[#1230f0]" />
          </span>
          <span className="flex h-6 w-6 items-center justify-center overflow-hidden bg-[#1230f0] text-white">
            <ArrowDown size={14} className="transition-transform duration-300 group-hover:translate-y-1" />
          </span>
        </motion.a>
        <Doodle kind="arrow" afterIntro delay={1.5} className="absolute bottom-6 left-[58%] hidden h-16 w-24 -rotate-12 text-[#1230f0] md:block" />
        <Doodle kind="star" afterIntro delay={1.4} className="absolute left-[18%] top-[18%] hidden h-9 w-9 text-[#f086d0] md:block" />
        <Doodle kind="burst" afterIntro delay={1.6} className="absolute right-[20%] top-[14%] hidden h-10 w-10 text-[#1230f0] md:block" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ delay: 0.9, duration: 0.8 }}
        className="overflow-hidden py-10"
      >
        <div className="marquee-track flex items-center gap-16">
          {[...strip, ...strip].map((it, i) =>
            "logo" in it ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img key={i} src={logos[it.logo].src} alt={logos[it.logo].name} style={{ height: logos[it.logo].h }} className="w-auto max-w-none shrink-0" />
            ) : (
              <span key={i} className="whitespace-nowrap text-3xl font-extrabold uppercase tracking-tight text-[#1230f0]/90">
                {it.text}
              </span>
            ),
          )}
        </div>
      </motion.div>
    </header>
  )
}
