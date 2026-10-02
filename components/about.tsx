"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { links } from "./site-data"

export function About() {
  return (
    <section id="over" className="mx-auto grid max-w-7xl items-center gap-16 px-6 py-28 lg:grid-cols-2">
      <div className="relative mx-auto h-[420px] w-full max-w-[560px] sm:h-[520px]">
        <motion.div
          initial={{ rotate: -6, opacity: 0, y: 40 }}
          whileInView={{ rotate: -4, opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="absolute left-0 top-0 w-[68%] bg-white p-3 pb-10 shadow-xl"
        >
          <Image src="/images/ankit-profile.jpg" alt="Ankit by the Brooklyn Bridge" width={600} height={800} className="aspect-[4/5] w-full object-cover" />
        </motion.div>
        <motion.div
          initial={{ rotate: 8, opacity: 0, y: 60 }}
          whileInView={{ rotate: 5, opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="absolute bottom-0 right-0 w-[48%] bg-white p-3 pb-8 shadow-xl"
        >
          <Image src="/images/1.jpg" alt="Ankit" width={500} height={500} className="aspect-square w-full object-cover" />
        </motion.div>
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
          The engineer behind
          <br />
          <span className="font-serif-display normal-case tracking-[-0.03em]">Ankit Mukherjee</span>
        </h2>
        <p className="mx-auto mt-6 max-w-md text-sm leading-relaxed">
          I bridge robust enterprise architecture and high-velocity innovation, with a focus on distributed systems, AWS
          cloud infrastructure and applied AI. Today I&apos;m an AI engineer at Pure Storage building production-grade
          agentic systems — LLM services, guardrails and evaluation, observable and secure on AWS. Before that:
          feature lead at AskTuring.ai, three years at PwC, and an MS in AI &amp; ML from the University at Buffalo.
        </p>
        <a
          href={links.resume}
          className="mt-6 inline-flex items-center text-[11px] font-semibold uppercase"
        >
          <span className="flex h-8 w-8 items-center justify-center bg-[#1230f0] text-white"><ArrowRight size={14} /></span>
          <span className="bg-[#1230f0]/10 px-3 py-2.5 text-[#1230f0] ring-1 ring-[#1230f0]">Download résumé</span>
        </a>
      </div>
    </section>
  )
}
