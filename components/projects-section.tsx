"use client"

import { useRef, useState } from "react"
import { motion, useInView, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Code, Database, Brain, Cloud, BarChart3, Target, ChevronDown, ChevronUp } from "lucide-react"

const projects = [
  {
    title: "Filmic Technologies",
    subtitle: "Founding Engineer",
    description: "Led end-to-end development of a seed-funded MVP. Built React frontend and NestJS backend with WebSockets for real-time interaction.",
    skills: ["React", "NestJS", "WebSockets", "PostgreSQL"],
    icon: Code,
    category: "Startup MVP",
    accent: "from-cyan-500 to-blue-500",
  },
  {
    title: "FitFlow Coach",
    subtitle: "AI Platform",
    description: "Multi-agent system using LangGraph to power intelligent workflows. Integrated GenAI into a React/TypeScript web app.",
    skills: ["LangGraph", "GenAI", "Multi-Agent", "React"],
    icon: Brain,
    category: "AI Platform",
    accent: "from-purple-500 to-pink-500",
  },
  {
    title: "Medical Imaging Classification",
    subtitle: "Computer Vision",
    description: "PyTorch CNN achieving 92% accuracy on medical imaging. Built frontend serving layer for real-time model output visualization.",
    skills: ["PyTorch", "CNN", "Python", "Model Serving"],
    icon: Target,
    category: "Computer Vision",
    accent: "from-green-500 to-emerald-500",
  },
  {
    title: "Cloud Migration Accelerator",
    subtitle: "Enterprise Solution",
    description: "Automation tool for database migrations (Teradata to Snowflake/Redshift). 98% reduction in manual effort, $2M+ cost savings.",
    skills: ["Python", "Flask", "React", "AWS", "Snowflake"],
    icon: Cloud,
    category: "Enterprise",
    accent: "from-orange-500 to-amber-500",
  },
  {
    title: "AI Customer Engagement",
    subtitle: "Conversational AI",
    description: "Multi-channel AI system (voice + chat) using AWS Bedrock and Anthropic Claude. <200ms latency with vector knowledge retrieval.",
    skills: ["AWS Bedrock", "NestJS", "DynamoDB", "AI/ML"],
    icon: Brain,
    category: "AI Solution",
    accent: "from-cyan-500 to-teal-500",
  },
  {
    title: "VGG-16 vs ResNet-18",
    subtitle: "Deep Learning Research",
    description: "Comparative CNN architecture analysis. ResNet-18 achieved 90.6% accuracy with 10x higher early-layer gradients.",
    skills: ["PyTorch", "Deep Learning", "Research"],
    github: "https://github.com/Ankit-Mukherjee/VGG-vs-Resnet",
    icon: Code,
    category: "Research",
    accent: "from-violet-500 to-purple-500",
  },
  {
    title: "FitFuel",
    subtitle: "AI Diet App",
    description: "Nutrition app with fine-tuned DistilGPT-2 for meal plans. Next.js + D3.js frontend, Dockerized on DigitalOcean.",
    skills: ["Next.js", "FastAPI", "Docker", "D3.js"],
    github: "https://github.com/Ankit-Mukherjee/dietChartGenerator-",
    demo: "http://104.248.229.28/",
    icon: Database,
    category: "Full-Stack",
    accent: "from-rose-500 to-pink-500",
  },
  {
    title: "Distributed Performance",
    subtitle: "Apache Spark",
    description: "Distributed computing for edit distance, MLP inference, and flock simulation with cross-method performance comparisons.",
    skills: ["Apache Spark", "Python", "Distributed Systems"],
    github: "https://github.com/Ankit-Mukherjee/distributed-performance-analysis",
    icon: BarChart3,
    category: "Systems",
    accent: "from-blue-500 to-indigo-500",
  },
]

export function ProjectsSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })
  const [showAll, setShowAll] = useState(false)
  const displayed = showAll ? projects : projects.slice(0, 6)

  return (
    <section id="projects" className="py-28 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4 text-foreground">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mb-16" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence>
            {displayed.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40, filter: "blur(6px)" }}
                animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
                exit={{ opacity: 0, y: -20 }}
                transition={{
                  delay: 0.1 + index * 0.08,
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
                layout
              >
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="h-full rounded-2xl glass p-5 group cursor-default hover:glow-cyan-strong transition-shadow duration-500 relative overflow-hidden"
                >
                  {/* Subtle gradient accent on hover */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${project.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-2xl`} />

                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-2.5">
                      <div className={`p-2 rounded-xl bg-gradient-to-br ${project.accent} opacity-15`}>
                        <project.icon className="w-4 h-4 text-foreground" />
                      </div>
                      <Badge variant="secondary" className="text-[11px] font-semibold">
                        {project.category}
                      </Badge>
                    </div>
                    <div className="flex gap-1.5">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all cursor-pointer"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all cursor-pointer"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-bold text-foreground group-hover:text-primary transition-colors duration-300 mb-0.5">
                    {project.title}
                  </h3>
                  <p className="text-xs text-primary font-semibold mb-3">{project.subtitle}</p>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="text-[11px] px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Show more/less */}
        {projects.length > 6 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8 }}
            className="flex justify-center mt-10"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowAll(!showAll)}
              className="flex items-center gap-2 px-6 py-2.5 rounded-xl glass text-sm font-medium text-foreground hover:text-primary hover:glow-cyan transition-all cursor-pointer"
            >
              {showAll ? "Show Less" : `Show All (${projects.length})`}
              {showAll ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  )
}
