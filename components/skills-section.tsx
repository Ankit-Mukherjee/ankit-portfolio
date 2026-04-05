"use client"

import { useRef, useState } from "react"
import { motion, useInView, useScroll, useTransform, AnimatePresence } from "framer-motion"

const skillCategories = [
  {
    title: "LANGUAGES",
    number: "01",
    skills: ["Python (FastAPI)", "Node.js (NestJS)", "TypeScript", "Swift", "C++", "SQL", "Java", "Go"],
  },
  {
    title: "GENAI & ML",
    number: "02",
    skills: ["LLMs (OpenAI, Gemini, Anthropic)", "LangGraph", "Agentic RAG", "PyTorch", "CNNs", "NLP", "Computer Vision", "RAGAS"],
  },
  {
    title: "DATA & INFRASTRUCTURE",
    number: "03",
    skills: ["Weaviate", "pgvector", "Redis", "Kafka", "Dramatiq", "DynamoDB", "PostgreSQL"],
  },
  {
    title: "CLOUD & DEVOPS",
    number: "04",
    skills: ["AWS (EKS, Lambda, Bedrock, CloudFormation)", "Docker", "Kubernetes", "GitHub Actions", "CI/CD"],
  },
  {
    title: "FRONTEND & MOBILE",
    number: "05",
    skills: ["React", "Redux", "Next.js", "iOS Development", "JavaScript", "HTML5/CSS3"],
  },
  {
    title: "OBSERVABILITY",
    number: "06",
    skills: ["Prometheus", "Grafana", "Langfuse", "PostHog", "OpenTelemetry", "CloudWatch"],
  },
  {
    title: "CERTIFICATIONS",
    number: "07",
    skills: ["Azure Fundamentals (AZ-900)", "Azure Data Fundamentals (DP-900)"],
  },
]

export function SkillsSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null)

  const scrollRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"],
  })
  const bgTextX = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"])

  return (
    <section id="skills" ref={ref} className="py-24 sm:py-32 bg-white overflow-hidden relative">
      {/* Giant background text that parallaxes */}
      <motion.div
        style={{ x: bgTextX }}
        className="absolute top-1/2 -translate-y-1/2 pointer-events-none select-none whitespace-nowrap"
      >
        <span className="text-[25vw] font-bold tracking-[-0.04em] text-neutral-50">
          SKILLS & TOOLS
        </span>
      </motion.div>

      <div ref={scrollRef} className="px-6 sm:px-10 relative z-10">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-[15vw] sm:text-[12vw] lg:text-[9vw] font-bold leading-[0.85] tracking-[-0.04em] text-black mb-4"
        >
          SKILLS
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-center gap-3 mb-16"
        >
          <span className="text-[11px] font-medium tracking-[0.3em] text-neutral-400">
            TECHNICAL EXPERTISE
          </span>
          <div className="h-px flex-1 bg-neutral-200" />
        </motion.div>

        {/* Accordion-style skill categories */}
        <div className="max-w-4xl">
          {skillCategories.map((category, index) => (
            <SkillRow
              key={category.title}
              category={category}
              index={index}
              inView={inView}
              isHovered={hoveredCategory === index}
              onHover={() => setHoveredCategory(index)}
              onLeave={() => setHoveredCategory(null)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function SkillRow({
  category,
  index,
  inView,
  isHovered,
  onHover,
  onLeave,
}: {
  category: (typeof skillCategories)[0]
  index: number
  inView: boolean
  isHovered: boolean
  onHover: () => void
  onLeave: () => void
}) {
  const [expanded, setExpanded] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        delay: 0.2 + index * 0.08,
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className="group cursor-pointer"
      onClick={() => setExpanded(!expanded)}
    >
      {/* Divider line with grow animation */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.3 + index * 0.08, ease: [0.22, 1, 0.36, 1] }}
        className="h-px bg-neutral-200 origin-left"
      />

      {/* Row content */}
      <div className="py-6 sm:py-8 flex items-center gap-4 sm:gap-8">
        {/* Number */}
        <motion.span
          animate={{ opacity: isHovered ? 1 : 0.3 }}
          transition={{ duration: 0.3 }}
          className="text-[11px] font-medium tracking-[0.2em] text-neutral-400 w-8 shrink-0"
        >
          {category.number}
        </motion.span>

        {/* Title */}
        <motion.h3
          animate={{
            x: isHovered ? 12 : 0,
            letterSpacing: isHovered ? "0.05em" : "0.01em",
          }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-black flex-1"
        >
          {category.title}
        </motion.h3>

        {/* Skill count badge */}
        <motion.span
          animate={{ scale: isHovered ? 1.1 : 1 }}
          className="text-[10px] font-medium tracking-[0.2em] text-neutral-400 shrink-0"
        >
          {category.skills.length} SKILLS
        </motion.span>

        {/* Expand indicator */}
        <motion.div
          animate={{ rotate: expanded ? 45 : 0 }}
          transition={{ duration: 0.3 }}
          className="w-6 h-6 flex items-center justify-center shrink-0"
        >
          <div className="relative w-3 h-3">
            <div className="absolute left-1/2 top-0 w-px h-full bg-black -translate-x-1/2" />
            <div className="absolute top-1/2 left-0 h-px w-full bg-black -translate-y-1/2" />
          </div>
        </motion.div>
      </div>

      {/* Expanded skills */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-6 sm:pb-8 pl-12 sm:pl-16 flex flex-wrap gap-2.5">
              {category.skills.map((skill, i) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{
                    delay: i * 0.04,
                    duration: 0.3,
                    type: "spring",
                    stiffness: 300,
                  }}
                  whileHover={{ scale: 1.08, y: -3, backgroundColor: "#000", color: "#fff" }}
                  className="text-xs px-4 py-2 border border-neutral-200 text-neutral-600 transition-colors duration-200 cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
