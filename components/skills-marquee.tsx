"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

const frontendSkills = [
  "REACT",
  "TYPESCRIPT",
  "JEST",
  "HTML5",
  "CSS3",
  "DATA VISUALIZATION",
  "NEXT.JS",
  "D3.JS",
]

const backendSkills = [
  "PYTHON",
  "FASTAPI",
  "NESTJS",
  "NODE.JS",
  "JAVA",
  "RESTFUL APIS",
  "MICROSERVICES",
  "SQL",
  "NOSQL",
]

const infraAiSkills = [
  "AWS ECS",
  "DOCKER",
  "SQS",
  "CLOUDWATCH",
  "KUBERNETES",
  "AGENTIC RAG",
  "LANGFUSE",
  "WEAVIATE",
  "GIT",
  "CI/CD",
  "AGILE",
  "AZURE AZ-900",
  "AZURE DP-900",
]

export function SkillsMarquee() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const x1 = useTransform(scrollYProgress, [0, 1], [0, -300])
  const x2 = useTransform(scrollYProgress, [0, 1], [-300, 0])
  const x3 = useTransform(scrollYProgress, [0, 1], [0, -200])

  return (
    <section
      ref={containerRef}
      className="py-24 overflow-hidden bg-background relative"
    >
      {/* Section label */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 mb-12">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground"
        >
          Technologies & Skills
        </motion.p>
      </div>

      <div className="space-y-6">
        {/* Row 1: Frontend - scrolls left */}
        <motion.div style={{ x: x1 }} className="will-change-transform">
          <MarqueeRow skills={frontendSkills} direction="left" />
        </motion.div>

        {/* Row 2: Backend - scrolls right */}
        <motion.div style={{ x: x2 }} className="will-change-transform">
          <MarqueeRow skills={backendSkills} direction="right" />
        </motion.div>

        {/* Row 3: Infra + AI - scrolls left */}
        <motion.div style={{ x: x3 }} className="will-change-transform">
          <MarqueeRow skills={infraAiSkills} direction="left" />
        </motion.div>
      </div>
    </section>
  )
}

function MarqueeRow({
  skills,
  direction,
}: {
  skills: string[]
  direction: "left" | "right"
}) {
  const doubled = [...skills, ...skills, ...skills, ...skills]

  return (
    <div className="flex overflow-hidden">
      <div
        className={`flex shrink-0 gap-4 ${
          direction === "left" ? "animate-marquee" : "animate-marquee-reverse"
        }`}
      >
        {doubled.map((skill, i) => (
          <span
            key={`${skill}-${i}`}
            className="whitespace-nowrap text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground/10 hover:text-primary/60 transition-colors duration-300 cursor-default px-4"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  )
}
