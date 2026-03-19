"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useScroll, useTransform, useInView, animate } from "framer-motion"
import { ExternalLink } from "lucide-react"

const experiences = [
  {
    company: "ASKTURING.AI",
    role: "Software Engineer",
    period: "Jan 2026 - Present",
    location: "San Jose, CA",
    website: "https://askturing.ai",
    bullets: [
      "Lead feature development in a fast-paced startup: system architecture, execution plans, and end-to-end delivery",
      "Built Slack DM/mention connector for agentic RAG using Python and FastAPI, enabling queries against channel history and files",
      "Designed file ingestion + vector search pipeline (chunking, embeddings, Weaviate) for improved retrieval quality",
      "Developed REST APIs with FastAPI for agentic RAG workflows with async processing for low-latency responses",
      "Integrated Langfuse tracing to monitor LLM/agent performance, debug retrieval, and optimize token usage",
    ],
    skills: [
      "Python",
      "FastAPI",
      "Agentic RAG",
      "REST APIs",
      "Weaviate",
      "Langfuse",
      "Slack API",
      "Vector Search",
      "System Design",
    ],
  },
  {
    company: "PWC",
    role: "Software Engineer",
    period: "July 2021 - July 2024",
    location: "India",
    bullets: [
      "Built capacity management interfaces using React (TypeScript), achieving 90% test coverage via Jest and React Testing Library",
      "Developed scalable NestJS APIs for quota enforcement, optimizing latency for high-concurrency workloads",
      "Deployed containerized services on AWS ECS, used SQS to decouple services buffering 300% traffic spikes",
      "Served as DRI, using CloudWatch monitoring to reduce Mean Time to Resolution (MTTR) by 40%",
      "Optimized PostgreSQL schemas with denormalization and indexing for real-time dashboards",
    ],
    skills: [
      "React",
      "TypeScript",
      "NestJS",
      "Node.js",
      "AWS ECS",
      "SQS",
      "PostgreSQL",
      "Jest",
      "CloudWatch",
    ],
    achievements: [
      { label: "Test Coverage", value: "90%" },
      { label: "MTTR Reduction", value: "40%" },
      { label: "Spike Buffering", value: "300%" },
      { label: "Projected Savings", value: "$2M+" },
    ],
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="relative">
      {experiences.map((exp, index) => (
        <div key={index}>
          <ExperienceBlock experience={exp} index={index} />
          {/* Gradient divider between blocks */}
          {index < experiences.length - 1 && (
            <div className="h-px mx-auto max-w-5xl px-6 sm:px-12">
              <div className="h-full bg-gradient-to-r from-transparent via-border to-transparent" />
            </div>
          )}
        </div>
      ))}
    </section>
  )
}

function ExperienceBlock({
  experience,
  index,
}: {
  experience: (typeof experiences)[0]
  index: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })
  const bgOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])

  return (
    <div
      ref={ref}
      className="relative min-h-screen flex items-center py-24 overflow-hidden"
    >
      {/* Massive outlined company name in background */}
      <motion.div
        style={{ opacity: bgOpacity }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
      >
        <span className="text-[20vw] font-bold tracking-tighter text-outline-white whitespace-nowrap">
          {experience.company}
        </span>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-12 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Company + Role */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-center gap-3 mb-4">
                <h3 className="text-4xl sm:text-5xl font-bold tracking-tighter text-foreground">
                  {experience.company}
                </h3>
                {experience.website && (
                  <a
                    href={experience.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 transition-colors cursor-pointer"
                    aria-label={`Visit ${experience.company}`}
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                )}
              </div>
              <p className="text-lg font-medium text-foreground mb-1">
                {experience.role}
              </p>
              <p className="text-sm text-muted-foreground">
                {experience.period} -- {experience.location}
              </p>
            </motion.div>

            {/* Animated horizontal line divider */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="h-px bg-gradient-to-r from-primary via-primary/50 to-transparent mt-6 mb-8 origin-left"
            />

            {/* Achievements grid */}
            {experience.achievements && (
              <div className="grid grid-cols-2 gap-4">
                {experience.achievements.map((ach, i) => (
                  <AchievementCard
                    key={i}
                    achievement={ach}
                    index={i}
                    inView={inView}
                  />
                ))}
              </div>
            )}

            {/* Skills */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-2 mt-8"
            >
              {experience.skills.map((skill, i) => (
                <span
                  key={i}
                  className="text-[11px] font-medium uppercase tracking-wider px-3 py-1.5 rounded-full border border-border text-muted-foreground hover:border-primary hover:text-primary transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right: Bullet points with clip-path reveal */}
          <div>
            <ul className="space-y-5">
              {experience.bullets.map((bullet, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, clipPath: "inset(0 100% 0 0)" }}
                  animate={
                    inView
                      ? { opacity: 1, clipPath: "inset(0 0% 0 0)" }
                      : {}
                  }
                  transition={{
                    duration: 0.7,
                    delay: 0.3 + i * 0.12,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="flex items-start text-sm text-muted-foreground leading-relaxed"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 shrink-0" />
                  {bullet}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

function AchievementCard({
  achievement,
  index,
  inView,
}: {
  achievement: { label: string; value: string }
  index: number
  inView: boolean
}) {
  const [displayValue, setDisplayValue] = useState(achievement.value)

  useEffect(() => {
    if (!inView) return

    // Parse numeric part for counting animation
    const match = achievement.value.match(/^(\$?)(\d+)(.*)$/)
    if (!match) return

    const prefix = match[1]
    const target = parseInt(match[2], 10)
    const suffix = match[3]

    const controls = animate(0, target, {
      duration: 1.5,
      delay: 0.5 + index * 0.15,
      ease: [0.22, 1, 0.36, 1],
      onUpdate(value) {
        setDisplayValue(`${prefix}${Math.round(value)}${suffix}`)
      },
    })

    return () => controls.stop()
  }, [inView, achievement.value, index])

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
      animate={inView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.4 + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="p-4 rounded-xl bg-card border border-border"
    >
      <div className="text-2xl font-bold text-primary tabular-nums">
        {displayValue}
      </div>
      <div className="text-xs text-muted-foreground mt-1 font-medium uppercase tracking-wider">
        {achievement.label}
      </div>
    </motion.div>
  )
}
