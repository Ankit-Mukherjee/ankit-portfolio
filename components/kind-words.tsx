"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { kindWords } from "./site-data"

const placement = ["lg:mt-0 lg:-rotate-2", "lg:mt-24 lg:rotate-1", "lg:mt-8 lg:rotate-2"]

export function KindWords() {
  return (
    <section className="px-6 pb-32 pt-10">
      <div className="mb-16 text-center">
        <p className="font-serif-display text-2xl">What colleagues say</p>
        <h2 className="display text-6xl sm:text-8xl">
          Kind <span className="font-serif-display normal-case tracking-[-0.03em]">words</span>
        </h2>
      </div>
      <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-3">
        {kindWords.map((k, i) => (
          <motion.a
            key={k.name}
            href={k.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: i * 0.1 }}
            className={`block ${placement[i]}`}
          >
            <div className="relative">
              <Image src={k.image} alt={k.name} width={500} height={600} className={`aspect-[4/5] w-full object-cover ${k.name === "Bhagya" ? "object-[50%_30%]" : "object-top"}`} />
              <span className="font-script absolute left-1/2 top-6 -translate-x-1/2 -rotate-3 text-5xl text-[#1230f0] [text-shadow:0_0_0_#fff,2px_2px_0_#fff,-2px_-2px_0_#fff,2px_-2px_0_#fff,-2px_2px_0_#fff]">
                {k.name}
              </span>
            </div>
            <p className="font-serif-display mt-4 text-xl leading-snug">&ldquo;{k.text}&rdquo;</p>
            <p className="mt-2 text-[11px] font-semibold uppercase">{k.who}</p>
          </motion.a>
        ))}
      </div>
    </section>
  )
}
