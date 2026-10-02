"use client"

import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"
import { logos } from "./site-data"

const strip: ({ logo: keyof typeof logos } | { text: string })[] = [
  { logo: "pure" }, { text: "AWS Bedrock" }, { logo: "askturing" }, { text: "Anthropic" }, { logo: "pwc" },
  { text: "LangGraph" }, { logo: "buffalo" }, { text: "FastAPI" }, { text: "Kubernetes" }, { text: "Weaviate" },
]

export function Hero() {
  return (
    <header id="top" className="relative flex min-h-screen flex-col justify-between pt-28">
      <div className="flex flex-1 flex-col items-center justify-center px-4 text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.7, duration: 0.7 }}
          className="font-serif-display mb-4 text-2xl leading-[1.05] sm:text-3xl"
        >
          Full-stack engineer &amp;
          <br />
          AI systems builder
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="display text-[13vw] sm:text-[10vw]"
        >
          Ships AI that
          <br />
          <span className="font-serif-display normal-case tracking-[-0.03em]">actually</span> works
        </motion.h1>
        <motion.a
          href="#over"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.3 }}
          className="mt-10 flex items-center gap-2 text-sm font-medium"
        >
          <span className="relative font-serif-display text-xl">
            Discover more
            <svg viewBox="0 0 100 10" className="absolute -bottom-2 left-0 w-full text-[#1230f0]" fill="none">
              <path d="M2 7 C 25 2, 55 9, 98 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </span>
          <span className="flex h-6 w-6 items-center justify-center bg-[#1230f0] text-white">
            <ArrowDown size={14} />
          </span>
        </motion.a>
      </div>

      <div className="overflow-hidden py-10">
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
      </div>
    </header>
  )
}
