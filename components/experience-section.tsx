"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useInView, animate } from "framer-motion"
import { ExternalLink } from "lucide-react"

function AskTuringLogo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.9914 5.39652C17.252 3.47938 14.8339 2.41431 12.2462 2.3291C12.1189 2.3291 12.034 2.3291 11.9068 2.3291C9.44625 2.3291 7.113 3.26637 5.33124 4.92788C3.42222 6.67461 2.36165 9.10298 2.2768 11.7018C2.19196 14.3005 3.12526 16.7715 4.86459 18.646C6.60392 20.5632 9.02202 21.6283 11.6098 21.7135C14.1976 21.7987 16.6581 20.904 18.5247 19.1147C22.4276 15.4508 22.6397 9.31599 18.9914 5.39652Z" fill="#9F3031"/>
      <path d="M20.6883 3.82023C16.1915 -1.03651 8.64026 -1.29213 3.80407 3.22378C-1.03213 7.7397 -1.28667 15.323 3.21015 20.1798C7.70696 25.0365 15.2582 25.2921 20.0944 20.7762C24.9306 16.2603 25.1851 8.67697 20.6883 3.82023ZM19.2035 19.7963C17.2097 21.6283 14.6643 22.6507 11.9492 22.6507C9.23418 22.6507 11.6947 22.6507 11.5674 22.6507C8.72511 22.5655 6.0949 21.3301 4.14345 19.2425C2.192 17.155 1.17386 14.4284 1.30112 11.574C1.38597 8.71957 2.61623 6.07819 4.69494 4.11845C6.77366 2.15871 9.48872 1.17884 12.331 1.26405C15.1734 1.34925 17.8036 2.58474 19.755 4.67229C23.7428 8.97519 23.5307 15.7491 19.2035 19.7963Z" fill="#666766"/>
      <path d="M9.5735 6.12087C10.0655 6.12087 10.4644 5.72031 10.4644 5.22621C10.4644 4.7321 10.0655 4.33154 9.5735 4.33154C9.08148 4.33154 8.68262 4.7321 8.68262 5.22621C8.68262 5.72031 9.08148 6.12087 9.5735 6.12087Z" fill="white"/>
      <path d="M18.8215 10.2107C19.3136 10.2107 19.7124 9.81016 19.7124 9.31605C19.7124 8.82194 19.3136 8.42139 18.8215 8.42139C18.3295 8.42139 17.9307 8.82194 17.9307 9.31605C17.9307 9.81016 18.3295 10.2107 18.8215 10.2107Z" fill="white"/>
      <path d="M5.16187 15.2381C5.65389 15.2381 6.05275 14.8375 6.05275 14.3434C6.05275 13.8493 5.65389 13.4487 5.16187 13.4487C4.66986 13.4487 4.271 13.8493 4.271 14.3434C4.271 14.8375 4.66986 15.2381 5.16187 15.2381Z" fill="white"/>
      <path d="M15.343 6.37624C15.835 6.37624 16.2339 5.97569 16.2339 5.48158C16.2339 4.98747 15.835 4.58691 15.343 4.58691C14.851 4.58691 14.4521 4.98747 14.4521 5.48158C14.4521 5.97569 14.851 6.37624 15.343 6.37624Z" fill="white"/>
      <path d="M9.02223 19.6258C9.51424 19.6258 9.9131 19.2252 9.9131 18.7311C9.9131 18.237 9.51424 17.8364 9.02223 17.8364C8.53021 17.8364 8.13135 18.237 8.13135 18.7311C8.13135 19.2252 8.53021 19.6258 9.02223 19.6258Z" fill="white"/>
      <path d="M5.58619 9.657C6.07821 9.657 6.47707 9.25645 6.47707 8.76234C6.47707 8.26823 6.07821 7.86768 5.58619 7.86768C5.09417 7.86768 4.69531 8.26823 4.69531 8.76234C4.69531 9.25645 5.09417 9.657 5.58619 9.657Z" fill="white"/>
      <path d="M18.2281 14.8118L16.4463 12.8947C16.7433 11.4462 16.3615 9.91245 15.3009 8.71957C13.5191 6.80244 10.5495 6.71723 8.68293 8.46395C6.77391 10.2533 6.68906 13.2355 8.4284 15.11C9.53139 16.3029 11.0586 16.7715 12.5434 16.5585L14.3252 18.4757C14.707 18.9017 15.3433 18.9017 15.7675 18.5183L16.4887 17.8366L14.3252 16.0047C14.4949 15.8769 14.9191 15.536 15.0888 15.3656C15.2585 15.1952 15.6827 14.8118 15.81 14.5988L17.5069 16.8993L18.2281 16.2177C18.6523 15.8343 18.6523 15.1952 18.2705 14.7692L18.2281 14.8118ZM13.3494 13.4911C12.501 14.258 11.2283 14.2154 10.4647 13.4059C9.70108 12.5538 9.7435 11.2757 10.5495 10.5089C11.398 9.74204 12.6707 9.78464 13.4343 10.5941C14.1979 11.4462 14.1555 12.7243 13.3494 13.4911Z" fill="white"/>
      <path d="M10.5495 10.4662C9.70106 11.233 9.65864 12.5537 10.4647 13.3632C11.2283 14.2152 12.5434 14.2578 13.3494 13.4484C14.1979 12.6815 14.2403 11.3608 13.4343 10.5514C12.6707 9.6993 11.3555 9.6567 10.5495 10.4662Z" fill="#9F3031"/>
    </svg>
  )
}

function PwCLogo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 200 80" xmlns="http://www.w3.org/2000/svg">
      <path fill="#D04A02" d="M8,18 L8,75 L18,75 L18,55 C21,58 26,60 32,60 C45,60 54,50 54,39 C54,28 45,18 32,18 C26,18 21,20 18,23 L18,18 Z M30,27 C39,27 44,32 44,39 C44,46 39,51 30,51 C21,51 18,46 18,39 C18,32 21,27 30,27 Z" />
      <path fill="#D04A02" d="M60,18 L72,55 L80,55 L89,30 L98,55 L106,55 L118,18 L108,18 L100,44 L91,18 L87,18 L78,44 L70,18 Z" />
      <path fill="#E88D28" d="M140,18 C127,18 118,28 118,39 C118,50 127,60 140,60 C149,60 156,55 160,48 L151,44 C149,48 145,51 140,51 C133,51 128,46 128,39 C128,32 133,27 140,27 C145,27 149,30 151,34 L160,30 C156,23 149,18 140,18 Z" />
      <rect fill="#E88D28" x="158" y="4" width="10" height="10" transform="rotate(45,163,9)" />
    </svg>
  )
}

interface Experience {
  company: string
  role: string
  period: string
  location: string
  website?: string
  logo: React.ComponentType<{ className?: string }>
  number: string
  description: string
  highlights: string[]
  skills: string[]
  achievements?: { label: string; value: string; prefix?: string; suffix?: string }[]
}

const experiences: Experience[] = [
  {
    company: "ASKTURING.AI",
    role: "Software Engineer — Tech Lead",
    period: "Jan 2026 - Present",
    location: "San Jose, CA",
    website: "https://askturing.ai",
    logo: AskTuringLogo,
    number: "01",
    description: "Partnered with the CEO to lead the Slack integration team at this AI startup, shipping an omni-channel enterprise chat experience from scratch. Architected 12 API endpoints and 5 async workers that let clients query RAG-powered knowledge bases and ingest 100K+ messages into Weaviate. Enhanced a 44-node LangGraph pipeline with hybrid vector+BM25 search and multi-hop decomposition, cutting time-to-first-token by 40%. Built an LLM-as-judge evaluation framework with RAGAS metrics that improved answer quality by 30%, and deployed the full observability stack on AKS — reducing mean debug time by 60%.",
    highlights: [
      "Designed 6 PostgreSQL tables with Alembic migrations, JSONB fields, and Redis deduplication for 99.9% reliability",
      "Built LLM-as-judge evaluation with 4 validators and cross-model ensemble judging with bias mitigation",
      "Containerized services via Docker for AKS, deployed OpenTelemetry, Grafana, Langfuse, and PostHog",
      "Boosted page load speeds by 25% across NestJS/TypeScript architecture with SSE streaming for real-time AI responses",
      "Primary code reviewer for full-stack PRs (FastAPI/Next.js), catching 15% of bugs pre-merge",
    ],
    skills: ["Python", "FastAPI", "LangGraph", "Weaviate", "Docker", "AKS", "PostgreSQL", "Redis"],
    achievements: [
      { label: "TTFT Improvement", value: "40", suffix: "%" },
      { label: "Answer Quality", value: "30", suffix: "% ↑" },
      { label: "Debug Time", value: "60", suffix: "% ↓" },
      { label: "Messages Ingested", value: "100", suffix: "K+" },
    ],
  },
  {
    company: "PWC",
    role: "Software Engineer — High-Scale Systems",
    period: "July 2021 - July 2024",
    location: "Kolkata, India",
    logo: PwCLogo,
    number: "02",
    description: "Spearheaded a GenAI initiative that secured a $12M+ client contract, architecting a RAG pipeline using AWS Bedrock and Lambda for complex fallback queries. Partnered directly with a Director to serve as Product Manager and Tech Lead for an internal enterprise platform used by 1,000+ users across 5+ major engagements. Built and scaled containerized microservices with Kafka messaging and DynamoDB, reducing latency by 40% while sustaining 300% traffic spikes. Engineered a secure revenue engine processing $1M+ annually with Stripe, integrated into a React/TypeScript frontend with 85% test coverage.",
    highlights: [
      "Architected RAG pipeline with AWS Bedrock Knowledge Base and Lambda for intelligent fallback resolution",
      "Modernized deployments with IaC via CloudFormation, CI/CD in GitHub Actions, and CloudWatch for 99.99% availability",
      "Built containerized REST API microservices (Node.js, Docker, AWS ECS) with Kafka and DynamoDB GSIs",
      "Engineered Stripe-powered revenue engine processing $1M+ annually with React/TypeScript frontend",
    ],
    skills: ["React", "TypeScript", "Node.js", "AWS ECS", "Kafka", "DynamoDB", "Stripe", "CloudFormation"],
    achievements: [
      { label: "Contract Value", value: "12", prefix: "$", suffix: "M+" },
      { label: "Latency Reduction", value: "40", suffix: "%" },
      { label: "Spike Buffer", value: "300", suffix: "%" },
      { label: "Availability", value: "99", suffix: ".99%" },
    ],
  },
]

const ease = [0.22, 1, 0.36, 1]

export function ExperienceSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="experience" ref={ref} data-theme="dark" className="bg-black overflow-hidden py-24 sm:py-40">
      <div className="px-6 sm:px-10">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 60, filter: "blur(8px)" }}
          animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.8, ease }}
          className="text-[15vw] sm:text-[12vw] lg:text-[9vw] font-bold leading-[0.85] tracking-[-0.04em] text-white mb-8"
        >
          EXPERIENCE
        </motion.h2>

        {/* Thin divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 1.2, delay: 0.3, ease }}
          className="h-px bg-white/20 origin-left mb-24 sm:mb-32"
        />

        {/* Experience blocks */}
        <div className="space-y-0">
          {experiences.map((exp, index) => (
            <ExperienceBlock key={exp.company} experience={exp} index={index} isLast={index === experiences.length - 1} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ExperienceBlock({
  experience,
  index,
  isLast,
}: {
  experience: Experience
  index: number
  isLast: boolean
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-50px" })

  const ledeSentence = experience.description.split(". ")[0] + "."
  const bodyText = experience.description.split(". ").slice(1).join(". ")
  const ledeWords = ledeSentence.split(" ")

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 1, ease }}
      className="relative"
    >
      {/* Hero Zone: Number + Vertical Company Name + Logo */}
      <div className="flex flex-col sm:flex-row items-start sm:items-end gap-6 sm:gap-0">
        <motion.span
          initial={{ opacity: 0, y: 80, filter: "blur(12px)" }}
          animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 1, delay: 0, ease }}
          className="text-[28vw] sm:text-[18vw] lg:text-[14vw] font-bold leading-none tracking-[-0.06em] text-white"
        >
          {experience.number}
        </motion.span>

        {/* Vertical company name — hidden on mobile */}
        <motion.span
          initial={{ opacity: 0, x: -10 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3, ease }}
          className="hidden sm:block text-[11px] font-medium tracking-[0.3em] text-white/30 uppercase mb-4 sm:mb-8"
          style={{ writingMode: "vertical-rl" }}
        >
          {experience.company}
        </motion.span>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.15, type: "spring", stiffness: 120 }}
          className="w-[120px] h-[120px] sm:w-[180px] sm:h-[180px] lg:w-[220px] lg:h-[220px] bg-white flex items-center justify-center p-6 sm:p-8 shrink-0 sm:ml-auto sm:mb-4"
        >
          <experience.logo className="w-full h-full" />
        </motion.div>
      </div>

      {/* Meta Bar */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 1, delay: 0.35, ease }}
        className="h-px bg-white/15 origin-left mt-8 sm:mt-10"
      />
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.4, ease }}
        className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mt-4 sm:mt-5 gap-2 sm:gap-4"
      >
        <div className="flex items-center gap-3">
          <h3 className="text-base sm:text-lg font-bold tracking-[0.02em] text-white uppercase">
            {experience.role}
          </h3>
          {experience.website && (
            <a href={experience.website} target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-white transition-colors">
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
        <p className="text-[11px] tracking-[0.2em] text-white/40 font-medium shrink-0">
          {experience.period} — {experience.location}
        </p>
      </motion.div>

      {/* Two-Column Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mt-12 sm:mt-16">
        {/* Left Column */}
        <div className="lg:col-span-7">
          {/* Lede — word-by-word reveal */}
          <p className="text-xl sm:text-2xl lg:text-3xl font-bold leading-[1.15] tracking-[-0.01em] text-white">
            {ledeWords.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.025, ease }}
                className="inline-block mr-[0.3em]"
              >
                {word}
              </motion.span>
            ))}
          </p>

          {/* Body text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-sm sm:text-base text-white/60 leading-[1.8] mt-4 sm:mt-6 max-w-lg"
          >
            {bodyText}
          </motion.p>

          {/* Highlights — numbered rows */}
          <div className="mt-10 sm:mt-12">
            {experience.highlights.map((highlight, i) => (
              <div key={i}>
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={inView ? { scaleX: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 + i * 0.06, ease }}
                  className="h-px bg-white/10 origin-left"
                />
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.85 + i * 0.06, ease }}
                  className="flex items-start gap-4 py-3.5"
                >
                  <span className="text-[11px] tracking-[0.2em] text-white/25 font-medium w-6 shrink-0 mt-0.5">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[13px] sm:text-sm text-white/55 leading-relaxed tracking-wide">
                    {highlight}
                  </span>
                </motion.div>
              </div>
            ))}
            {/* Final divider */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.8 + experience.highlights.length * 0.06, ease }}
              className="h-px bg-white/10 origin-left"
            />
          </div>
        </div>

        {/* Right Column */}
        <div className="lg:col-span-5 order-first lg:order-last">
          {/* Achievements — 2x2 grid */}
          {experience.achievements && (
            <div>
              <motion.span
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.55 }}
                className="text-[11px] font-medium tracking-[0.3em] text-white/30 block mb-5"
              >
                IMPACT
              </motion.span>
              <div className="grid grid-cols-2 gap-4 sm:gap-5">
                {experience.achievements.map((ach, i) => (
                  <motion.div
                    key={ach.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 + i * 0.1, ease }}
                    className="border border-white/10 p-5 sm:p-6"
                  >
                    <AchievementCounter achievement={ach} index={i} inView={inView} />
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Tech Stack */}
          <div className="mt-8 sm:mt-10">
            <motion.span
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 1.0 }}
              className="text-[11px] font-medium tracking-[0.3em] text-white/30 block mb-3"
            >
              TECH STACK
            </motion.span>
            <div className="flex flex-wrap gap-2">
              {experience.skills.map((skill, i) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8, y: 8 }}
                  animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
                  transition={{
                    delay: 1.0 + i * 0.03,
                    duration: 0.3,
                    type: "spring",
                    stiffness: 300,
                  }}
                  className="text-[11px] px-3 py-1.5 border border-white/15 text-white/50 hover:border-white/40 hover:text-white/80 transition-colors duration-200 cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Experience separator */}
      {!isLast && (
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 1.2, delay: 1.2, ease }}
          className="h-px bg-white/10 origin-left mt-20 sm:mt-28 mb-20 sm:mb-28"
        />
      )}
    </motion.div>
  )
}

function AchievementCounter({
  achievement,
  index,
  inView,
}: {
  achievement: { label: string; value: string; prefix?: string; suffix?: string }
  index: number
  inView: boolean
}) {
  const [display, setDisplay] = useState("0")

  useEffect(() => {
    if (!inView) return
    const target = parseInt(achievement.value, 10)
    const controls = animate(0, target, {
      duration: 1.5,
      delay: 0.6 + index * 0.1,
      ease: [0.22, 1, 0.36, 1],
      onUpdate(value) { setDisplay(Math.round(value).toString()) },
    })
    return () => controls.stop()
  }, [achievement.value, index, inView])

  return (
    <div>
      <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tabular-nums tracking-[-0.03em]">
        {achievement.prefix || ""}{display}{achievement.suffix || ""}
      </div>
      <div className="text-[10px] font-medium tracking-[0.25em] text-white/40 uppercase mt-2">
        {achievement.label}
      </div>
    </div>
  )
}
