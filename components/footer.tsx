"use client"

import { Plus } from "lucide-react"
import { links } from "./site-data"
import { Doodle, Sticker } from "./doodles"
import { Words } from "./words"
import { Btn, Roll } from "./fx"

export function Footer() {
  return (
    <footer className="bg-[#101010] px-6 pb-8 pt-32 text-[#f4f4f4]">
      <div className="text-center">
        <h2 className="display text-6xl sm:text-9xl"><Words text="Got an idea" /></h2>
        <p className="relative inline-block font-serif-display text-6xl leading-[0.9] sm:text-9xl">
          <Words text="to bring to life?" delay={0.2} />
          <Doodle kind="squiggle" delay={0.9} className="absolute -bottom-4 left-0 h-4 w-full text-[#f086d0]" />
        </p>
        <p className="mt-6 text-xs">Say what you&apos;re working on. I&apos;ll help make it real.</p>
        <div className="relative mt-8 inline-block">
          <Btn href={links.email} icon={<Plus size={14} />}>Say hello</Btn>
          <Doodle kind="arrow" delay={1} className="absolute -left-24 -top-10 hidden h-16 w-20 -scale-x-100 rotate-12 text-[#f086d0] sm:block" />
          <Sticker className="absolute -right-32 -top-4 hidden sm:inline-block" rotate={8} color="#f4d97a">Open to ideas</Sticker>
        </div>
      </div>

      <div className="mx-auto mt-28 grid max-w-6xl gap-12 border-t border-white/15 pt-12 sm:grid-cols-[1fr_auto_auto]">
        <p className="font-script text-7xl leading-none sm:text-9xl">Ankit</p>
        <div className="text-sm leading-7">
          <p className="mb-2 text-[11px] font-semibold uppercase">Navigate</p>
          {["Over|#over", "Werk|#work", "What I do|#services", "Contact|" + links.email].map((l) => {
            const [t, h] = l.split("|")
            return (
              <a key={t} href={h} className="group block text-white/70 hover:text-white">
                <Roll>{t}</Roll>
              </a>
            )
          })}
        </div>
        <div className="text-sm leading-7">
          <p className="mb-2 text-[11px] font-semibold uppercase">Contact</p>
          <a href={links.email} className="group block text-white/70 hover:text-white"><Roll>ank26.m@gmail.com</Roll></a>
          <a href={links.github} target="_blank" rel="noopener noreferrer" className="group block text-white/70 hover:text-white"><Roll>GitHub</Roll></a>
          <a href={links.linkedin} target="_blank" rel="noopener noreferrer" className="group block text-white/70 hover:text-white"><Roll>LinkedIn</Roll></a>
        </div>
      </div>
      <p className="mx-auto mt-16 max-w-6xl text-[11px] text-white/50">© {new Date().getFullYear()} Ankit Mukherjee</p>
    </footer>
  )
}
