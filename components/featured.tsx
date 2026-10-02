"use client"

import { Plus } from "lucide-react"
import { featured, moreProjects } from "./site-data"
import { Doodle, Sticker } from "./doodles"
import { Words } from "./words"
import { Btn } from "./fx"

export function Featured() {
  return (
    <section id="work" className="bg-[#101010] px-4 pb-32 pt-28 text-[#f4f4f4] sm:px-8">
      <div className="mb-16 text-center">
        <p className="font-serif-display mx-auto max-w-xs text-xl leading-tight">
          Not to be missed, worth sharing. Here&apos;s a pick of what I build.
        </p>
        <h2 className="relative mt-3 inline-block display text-6xl sm:text-8xl">
          <Words text="Recent" /> <Words text="work" className="font-serif-display normal-case tracking-[-0.03em]" delay={0.15} />
          <Doodle kind="star" className="absolute -right-12 -top-4 h-10 w-10 text-[#f086d0]" delay={0.6} />
          <Doodle kind="burst" className="absolute -left-12 top-2 h-10 w-10 text-[#1230f0]" delay={0.8} />
          <Sticker className="absolute -bottom-3 -right-24 hidden sm:inline-block" rotate={8} color="#8fd3b6">Scroll ↓</Sticker>
        </h2>
      </div>

      <div className="mx-auto max-w-5xl">
        {featured.map((p, i) => (
          <a
            key={p.title}
            href={p.href}
            target="_blank"
            rel="noopener noreferrer"
            style={{ top: 72 + i * 12, backgroundColor: p.frame }}
            data-cursor="View"
            className="group sticky mb-10 block rounded-sm p-3 transition-transform duration-500 hover:-rotate-[0.6deg] sm:p-4"
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-black sm:aspect-[16/9]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={p.image} alt={p.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <span className="absolute left-4 top-4 bg-[#f086d0] px-2 py-1 text-[10px] font-semibold uppercase text-black">
                {p.tag}
              </span>
              <div className="absolute inset-x-0 bottom-0 p-5 text-center">
                <h3 className="display text-4xl text-white sm:text-7xl">{p.title}</h3>
                <p className="mx-auto mt-2 hidden max-w-lg text-xs text-white/80 sm:block">{p.text}</p>
              </div>
            </div>
          </a>
        ))}
      </div>

      <div className="mx-auto mt-24 max-w-4xl">
        <p className="font-serif-display mb-6 text-center text-2xl">More experiments</p>
        <ul className="divide-y divide-white/15 border-y border-white/15">
          {moreProjects.map((p) => (
            <li key={p.title}>
              <a
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-4 py-5 transition-colors hover:text-[#f086d0]"
              >
                <span className="display text-3xl transition-transform duration-300 group-hover:translate-x-3 sm:text-5xl">{p.title}</span>
                <span className="hidden text-sm text-white/60 sm:block">{p.tag}</span>
                <Plus className="shrink-0 transition-transform group-hover:rotate-90" />
              </a>
            </li>
          ))}
        </ul>
        <div className="mt-10 text-center">
          <Btn href="https://github.com/Ankit-Mukherjee" external icon={<Plus size={14} />}>
            See all on GitHub
          </Btn>
        </div>
      </div>
    </section>
  )
}
