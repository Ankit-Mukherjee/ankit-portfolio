"use client"

import { motion } from "framer-motion"
import { Roll } from "./fx"
import { links } from "./site-data"
import { useIntro } from "./intro"

const items = [
  { label: "Over", href: "#over" },
  { label: "Werk", href: "#work" },
  { label: "What I do", href: "#services" },
]

export function Nav() {
  const { ready } = useIntro()
  return (
    <motion.header
      initial={{ y: -90, opacity: 0 }}
      animate={ready ? { y: 0, opacity: 1 } : { y: -90, opacity: 0 }}
      transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="pointer-events-none fixed inset-x-0 top-0 z-50 flex items-start justify-between px-4 pt-4 sm:px-6"
    >
      <a href="#top" className="pointer-events-auto font-script text-3xl leading-none text-[#1230f0] transition-transform hover:-rotate-6 hover:scale-110 sm:text-4xl">
        Ankit
      </a>
      <nav className="pointer-events-auto absolute left-1/2 top-4 hidden -translate-x-1/2 gap-5 rounded-sm bg-white px-4 py-3 text-[11px] font-semibold uppercase tracking-normal shadow-sm sm:flex">
        {items.map((i) => (
          <a key={i.href} href={i.href} className="group">
            <Roll>{i.label}</Roll>
          </a>
        ))}
      </nav>
      <a
        href={links.email}
        className="group pointer-events-auto flex items-center gap-2 rounded-sm bg-white px-3 py-3 text-[11px] font-semibold uppercase tracking-normal shadow-sm"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-[#1230f0] transition-transform duration-300 group-hover:scale-[2.5]" />
        <Roll>Contact</Roll>
      </a>
    </motion.header>
  )
}
