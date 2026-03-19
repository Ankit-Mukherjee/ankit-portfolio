"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "Filmic Technologies",
    category: "Founding Engineer",
    description:
      "Seed-funded MVP with real-time collaboration. Built full-stack architecture with React, NestJS, WebSockets, and PostgreSQL.",
    skills: ["React", "NestJS", "WebSockets", "PostgreSQL"],
    image:
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&q=80&auto=format&fit=crop",
  },
  {
    title: "FitFlow Coach",
    category: "AI / Multi-Agent",
    description:
      "Multi-agent AI fitness coach built with LangGraph and GenAI. React/TypeScript frontend with intelligent workout planning.",
    skills: ["LangGraph", "GenAI", "React", "TypeScript"],
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80&auto=format&fit=crop",
  },
  {
    title: "Medical Imaging Classification",
    category: "Deep Learning",
    description:
      "PyTorch CNN for medical image classification achieving 92% accuracy. Custom data pipelines and model optimization.",
    skills: ["PyTorch", "CNN", "Medical Imaging", "Python"],
    image:
      "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&q=80&auto=format&fit=crop",
  },
  {
    title: "Cloud Migration Accelerator",
    category: "Cloud / Data",
    description:
      "Automated Teradata to Snowflake/Redshift migration. 98% reduction in manual effort, $2M+ in projected savings.",
    skills: ["Snowflake", "Redshift", "Teradata", "Automation"],
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80&auto=format&fit=crop",
  },
  {
    title: "AI Customer Engagement",
    category: "Conversational AI",
    description:
      "Voice and chat engagement platform powered by AWS Bedrock and Claude. Sub-200ms latency for real-time interactions.",
    skills: ["AWS Bedrock", "Claude", "Voice AI", "Real-time"],
    image:
      "https://images.unsplash.com/photo-1531746790095-e5906a48010d?w=800&q=80&auto=format&fit=crop",
  },
  {
    title: "VGG-16 vs ResNet-18",
    category: "Research",
    description:
      "Deep learning research comparing VGG-16 and ResNet-18 architectures. Achieved 90.6% accuracy with detailed analysis.",
    skills: ["VGG-16", "ResNet-18", "PyTorch", "Research"],
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=80&auto=format&fit=crop",
    github: "https://github.com/Ankit-Mukherjee/VGG-vs-Resnet",
  },
  {
    title: "FitFuel",
    category: "AI / Full-Stack",
    description:
      "AI-powered diet planning app using DistilGPT-2. Next.js frontend with D3.js visualizations, Dockerized deployment.",
    skills: ["DistilGPT-2", "Next.js", "D3.js", "Docker"],
    image:
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&q=80&auto=format&fit=crop",
    github: "https://github.com/Ankit-Mukherjee/dietChartGenerator",
    demo: "http://104.248.229.28/",
  },
  {
    title: "Distributed Performance Analysis",
    category: "Big Data",
    description:
      "Large-scale performance analysis using Apache Spark. Distributed computing for processing massive datasets efficiently.",
    skills: ["Apache Spark", "Distributed Computing", "Python", "Big Data"],
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80&auto=format&fit=crop",
    github:
      "https://github.com/Ankit-Mukherjee/distributed-performance-analysis",
  },
]

export function HorizontalProjects() {
  const containerRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const [maxTranslate, setMaxTranslate] = useState(0)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  // Measure actual track width vs viewport to compute scroll distance
  useEffect(() => {
    function measure() {
      if (!trackRef.current) return
      const trackWidth = trackRef.current.scrollWidth
      const viewportWidth = window.innerWidth
      setMaxTranslate(Math.max(0, trackWidth - viewportWidth + 48 + 32))
    }
    measure()
    window.addEventListener("resize", measure)
    return () => window.removeEventListener("resize", measure)
  }, [])

  const x = useTransform(
    scrollYProgress,
    [0.05, 0.95],
    [0, -maxTranslate]
  )

  const activeIndex = useTransform(
    scrollYProgress,
    [0.05, 0.95],
    [0, projects.length - 1]
  )

  return (
    <section id="projects" ref={containerRef} className="relative h-[250vh]">
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        {/* Section title + counter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="px-6 sm:px-12 mb-8 flex items-end justify-between"
        >
          <div>
            <h2 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tighter text-foreground">
              FEATURED
            </h2>
            <h2 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tighter text-outline">
              WORK
            </h2>
          </div>

          {/* Progress counter - desktop only */}
          <div className="hidden md:flex items-baseline gap-1 pb-2">
            <Counter value={activeIndex} />
            <span className="text-sm text-muted-foreground font-medium">
              / {String(projects.length).padStart(2, "0")}
            </span>
          </div>
        </motion.div>

        {/* Horizontal scroll container - desktop */}
        <div className="hidden md:block">
          <motion.div
            ref={trackRef}
            style={{ x }}
            className="flex gap-8 pl-12 will-change-transform"
          >
            {projects.map((project, i) => (
              <ProjectCard key={i} project={project} index={i} scrollProgress={scrollYProgress} />
            ))}
          </motion.div>
        </div>

        {/* Vertical scroll for mobile */}
        <div className="md:hidden overflow-y-auto max-h-[60vh] px-6 space-y-6 pb-6">
          {projects.map((project, i) => (
            <ProjectCardMobile key={i} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function Counter({ value }: { value: ReturnType<typeof useTransform> }) {
  const display = useTransform(value, (v) =>
    String(Math.round(v) + 1).padStart(2, "0")
  )

  return (
    <motion.span className="text-3xl font-bold text-foreground tabular-nums">
      {display}
    </motion.span>
  )
}

function ProjectCard({
  project,
  index,
  scrollProgress,
}: {
  project: (typeof projects)[0]
  index: number
  scrollProgress: ReturnType<typeof useScroll>["scrollYProgress"]
}) {
  // Subtle parallax: image moves slower than card
  const imageY = useTransform(
    scrollProgress,
    [0, 1],
    [index % 2 === 0 ? -20 : -30, index % 2 === 0 ? 20 : 30]
  )

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative w-[500px] h-[400px] flex-shrink-0 rounded-2xl overflow-hidden group cursor-default"
    >
      {/* Background image with parallax */}
      <motion.div style={{ y: imageY }} className="absolute inset-[-30px]">
        <Image
          src={project.image}
          alt={project.title}
          fill
          loading="lazy"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </motion.div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20" />

      {/* Content */}
      <div className="absolute inset-0 p-8 flex flex-col justify-end">
        {/* Category badge */}
        <span className="inline-block w-fit px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 mb-4">
          {project.category}
        </span>

        <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-sm text-gray-300 leading-relaxed mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Skills tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.skills.map((skill, i) => (
            <span
              key={i}
              className="text-[10px] font-medium uppercase tracking-wider px-2 py-1 rounded bg-white/10 text-gray-300"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-300 hover:text-cyan-400 transition-colors cursor-pointer"
            >
              <Github className="w-3.5 h-3.5" />
              Code
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-300 hover:text-cyan-400 transition-colors cursor-pointer"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}

function ProjectCardMobile({
  project,
  index,
}: {
  project: (typeof projects)[0]
  index: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      viewport={{ once: true }}
      className="relative w-full h-64 rounded-xl overflow-hidden group"
    >
      <Image
        src={project.image}
        alt={project.title}
        fill
        loading="lazy"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20" />
      <div className="absolute inset-0 p-5 flex flex-col justify-end">
        <span className="inline-block w-fit px-2.5 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 mb-2">
          {project.category}
        </span>
        <h3 className="text-lg font-bold text-white mb-1">{project.title}</h3>
        <p className="text-xs text-gray-300 leading-relaxed line-clamp-2 mb-3">
          {project.description}
        </p>
        <div className="flex gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[10px] font-medium text-gray-300 hover:text-cyan-400 transition-colors cursor-pointer"
            >
              <Github className="w-3 h-3" />
              Code
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[10px] font-medium text-gray-300 hover:text-cyan-400 transition-colors cursor-pointer"
            >
              <ExternalLink className="w-3 h-3" />
              Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}
