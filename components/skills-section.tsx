"use client"

import { useRef } from "react"
import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { Monitor, Server, CloudCog, BrainCircuit, Award } from "lucide-react"

const skillCategories = [
  {
    title: "Frontend",
    icon: Monitor,
    skills: ["React", "TypeScript", "Jest", "React Testing Library", "HTML5", "CSS3", "Data Visualization"],
    gradient: "from-cyan-500/20 to-blue-500/20",
    iconColor: "text-cyan-500",
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Python", "FastAPI", "NestJS", "Node.js", "Java", "RESTful APIs", "Microservices", "SQL", "NoSQL"],
    gradient: "from-green-500/20 to-emerald-500/20",
    iconColor: "text-green-500",
  },
  {
    title: "Infrastructure",
    icon: CloudCog,
    skills: ["AWS ECS", "Docker", "SQS", "CloudWatch", "Kubernetes", "Capacity Management"],
    gradient: "from-orange-500/20 to-amber-500/20",
    iconColor: "text-orange-500",
  },
  {
    title: "AI & Tools",
    icon: BrainCircuit,
    skills: ["Agentic RAG", "Langfuse", "Weaviate", "RAG", "Git", "CI/CD", "Agile/Scrum", "Unit Testing"],
    gradient: "from-purple-500/20 to-pink-500/20",
    iconColor: "text-purple-500",
  },
  {
    title: "Certifications",
    icon: Award,
    skills: ["Azure Fundamentals (AZ-900)", "Azure Data Fundamentals (DP-900)"],
    gradient: "from-primary/20 to-accent/20",
    iconColor: "text-primary",
  },
]

export function SkillsSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const parallaxY = useTransform(scrollYProgress, [0, 1], [50, -50])

  return (
    <section id="skills" className="py-28 relative overflow-hidden">
      <motion.div
        style={{ y: parallaxY }}
        className="absolute -bottom-20 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[150px] pointer-events-none"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4 text-foreground">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mb-16" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40, rotateX: 10 }}
              animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{
                delay: 0.15 * index,
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <motion.div
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="h-full rounded-2xl glass p-6 group cursor-default hover:glow-cyan-strong transition-all duration-500"
              >
                {/* Category header */}
                <div className="flex items-center gap-3 mb-5">
                  <div className={`p-2.5 rounded-xl bg-gradient-to-br ${category.gradient}`}>
                    <category.icon className={`w-5 h-5 ${category.iconColor}`} />
                  </div>
                  <h3 className="font-bold text-foreground text-lg">{category.title}</h3>
                </div>

                {/* Skills with staggered entrance */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.3 + index * 0.1 + i * 0.04, duration: 0.3 }}
                      whileHover={{ scale: 1.08, y: -2 }}
                      className="text-xs px-3 py-1.5 rounded-lg bg-secondary text-foreground/80 hover:bg-primary/10 hover:text-primary transition-all cursor-default font-medium"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
