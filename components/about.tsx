"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { links } from "./site-data"
import { Doodle, Sticker } from "./doodles"
import { Words } from "./words"
import { Btn } from "./fx"

export function About() {
  return (
    <section id="over" className="mx-auto grid max-w-7xl items-center gap-16 px-6 py-28 lg:grid-cols-2">
      <div className="relative mx-auto h-[420px] w-full max-w-[560px] sm:h-[520px]">
        <motion.div
          initial={{ rotate: -6, opacity: 0, y: 40 }}
          whileInView={{ rotate: -4, opacity: 1, y: 0 }}
          whileHover={{ rotate: 0, scale: 1.03 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="absolute left-0 top-0 w-[68%] bg-white p-3 pb-10 shadow-xl"
        >
          <Image src="/images/ankit-profile.jpg" alt="Ankit by the Brooklyn Bridge" width={600} height={800} className="aspect-[4/5] w-full object-cover" />
        </motion.div>
        <motion.div
          initial={{ rotate: 8, opacity: 0, y: 60 }}
          whileInView={{ rotate: 5, opacity: 1, y: 0 }}
          whileHover={{ rotate: 0, scale: 1.04 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="absolute bottom-0 right-0 w-[48%] bg-white p-3 pb-8 shadow-xl"
        >
          <Image src="/images/1.jpg" alt="Ankit" width={500} height={500} className="aspect-square w-full object-cover" />
        </motion.div>
        <Sticker className="absolute -bottom-4 left-[6%] z-10" rotate={-7} color="#f4d97a">Pure Storage AI</Sticker>
        <Doodle kind="star" className="absolute -left-4 top-[40%] h-10 w-10 text-[#1230f0]" />
        <Image
          src="/images/watermelon-cat.png"
          alt=""
          width={160}
          height={128}
          className="absolute right-[8%] top-[6%] w-28 rotate-12 drop-shadow-lg sm:w-36"
        />
      </div>

      <div className="text-center">
        <p className="font-serif-display text-2xl">Who I am</p>
        <h2 className="display mt-2 text-5xl sm:text-7xl">
          <Words text="The engineer" />
          <br />
          <Words text="behind" />
          <br />
          <span className="relative inline-block">
            <Words text="Ankit Mukherjee" className="font-serif-display normal-case tracking-[-0.03em]" delay={0.2} />
            <Doodle kind="squiggle" delay={0.8} className="absolute -bottom-3 left-0 h-3 w-full text-[#f086d0]" />
          </span>
        </h2>
        <p className="mx-auto mt-6 max-w-md text-sm leading-relaxed">
          I bridge robust enterprise architecture and high-velocity innovation, with a focus on distributed systems, AWS
          cloud infrastructure and applied AI. Today I&apos;m an AI engineer at Pure Storage building production-grade
          agentic systems — LLM services, guardrails and evaluation, observable and secure on AWS. Before that:
          feature lead at AskTuring.ai, three years at PwC, and an MS in AI &amp; ML from the University at Buffalo.
        </p>
        <div className="mt-6">
          <Btn href={links.resume} bg="#1230f0" fill="#101010" text="#ffffff" icon={<ArrowRight size={14} />}>
            Download résumé
          </Btn>
        </div>
      </div>
    </section>
  )
}
