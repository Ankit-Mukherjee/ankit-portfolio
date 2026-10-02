"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { experience, logos, skills } from "./site-data"
import { Doodle, Sticker } from "./doodles"
import { Words } from "./words"

function Rows({ rows }: { rows: { title: string; sub?: string; text: string; logo?: keyof typeof logos }[] }) {
  const [open, setOpen] = useState(0)
  return (
    <ul className="border-t border-black/15">
      {rows.map((r, i) => (
        <li key={r.title} className="border-b border-black/15" onMouseEnter={() => setOpen(i)}>
          <button onClick={() => setOpen(i)} className="group/row flex w-full items-baseline justify-between gap-4 py-5 text-left">
            <span className="display text-4xl transition-transform duration-300 group-hover/row:translate-x-3 sm:text-6xl">{r.title}</span>
            {r.sub && <span className="font-serif-display hidden text-xl sm:block">{r.sub}</span>}
          </button>
          <motion.div
            initial={false}
            animate={{ height: open === i ? "auto" : 0, opacity: open === i ? 1 : 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="flex items-start justify-between gap-8 pb-8">
              <p className="max-w-2xl text-sm leading-relaxed">{r.text}</p>
              {r.logo && (
                <motion.div
                  initial={false}
                  whileHover={{ rotate: 0, scale: 1.06 }}
                  animate={{ rotate: open === i ? (i % 2 ? 6 : -6) : 0, y: open === i ? 0 : 20, scale: open === i ? 1 : 0.9 }}
                  transition={{ type: "spring", stiffness: 120, damping: 14 }}
                  className="hidden shrink-0 bg-white p-3 pb-6 shadow-xl sm:block"
                >
                  <div className="flex h-24 w-36 items-center justify-center bg-[#f4f4f4] p-3">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={logos[r.logo].src} alt={logos[r.logo].name} className="max-h-full max-w-full object-contain" />
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </li>
      ))}
    </ul>
  )
}

export function Services() {
  return (
    <section id="services" className="mx-auto max-w-5xl px-6 py-28">
      <div className="mb-12 text-center">
        <p className="font-serif-display text-2xl">What I do</p>
        <h2 className="relative inline-block display text-6xl sm:text-8xl">
          <Words text="The" /> <Words text="toolbox" className="font-serif-display normal-case tracking-[-0.03em]" delay={0.12} />
          <Doodle kind="underline" delay={0.7} className="absolute -bottom-2 left-0 h-3 w-full text-[#1230f0]" />
          <Sticker className="absolute -right-20 -top-4 hidden sm:inline-block" rotate={10} color="#f4d97a">Full stack</Sticker>
        </h2>
      </div>
      <Rows rows={skills} />

      <div className="mb-12 mt-32 text-center">
        <p className="font-serif-display text-2xl">Where I&apos;ve worked</p>
        <h2 className="relative inline-block display text-6xl sm:text-8xl">
          <Words text="Experi" /><Words text="ence" className="font-serif-display normal-case tracking-[-0.03em]" delay={0.12} />
          <Doodle kind="circle" delay={0.7} className="absolute -inset-x-4 -inset-y-2 h-[calc(100%+1rem)] w-[calc(100%+2rem)] text-[#f086d0]" />
        </h2>
      </div>
      <Rows rows={experience.map((e) => ({ title: e.company, sub: `${e.role} · ${e.period}`, text: e.text, logo: e.logo as keyof typeof logos }))} />

      <div className="mt-32 text-center">
        <p className="font-serif-display text-2xl">Education</p>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logos.buffalo.src} alt={logos.buffalo.name} className="mx-auto mt-4 h-14 w-auto" />
        <h2 className="display mt-2 text-4xl sm:text-6xl"><Words text="University at Buffalo (SUNY)" /></h2>
        <p className="mt-3 text-sm">
          MS in Computer Science — Artificial Intelligence &amp; Machine Learning · Aug 2024 – Dec 2025
        </p>
        <p className="mx-auto mt-2 max-w-md text-xs text-black/60">
          Machine Learning · Deep Learning · Computer Vision · Distributed Systems · Data Intensive Computing
        </p>
      </div>
    </section>
  )
}
