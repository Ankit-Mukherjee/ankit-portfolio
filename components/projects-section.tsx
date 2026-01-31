"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Code, Database, Brain, Cloud, BarChart3, Target } from "lucide-react"

export function ProjectsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [visibleCards, setVisibleCards] = useState<boolean[]>([])
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          projects.forEach((_, index) => {
            setTimeout(() => {
              setVisibleCards((prev) => {
                const newVisible = [...prev]
                newVisible[index] = true
                return newVisible
              })
            }, index * 300)
          })
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const projects = [
    {
      title: "Filmic Technologies - Founding Engineer",
      description:
        "Led end-to-end development of a seed-funded MVP as a founding engineer. Built visually appealing interfaces using React and secure backend APIs using NestJS.",
      highlights: [
        "Full-Stack Ownership: Led end-to-end development of a seed-funded MVP",
        "Built visually appealing interfaces using React and secure backend APIs using NestJS",
        "Scalable Systems: Architected the database schema and implemented WebSockets for real-time interaction",
        "Ensured seamless user experience through careful system design and implementation",
      ],
      skills: ["React", "NestJS", "WebSockets", "PostgreSQL", "Full-Stack", "MVP Development"],
      icon: Code,
      category: "Startup MVP",
    },
    {
      title: "FitFlow Coach - AI Platform",
      description:
        "Engineered a multi-agent system using LangGraph to power intelligent user workflows. Integrated GenAI technologies into a web application to enhance user productivity.",
      highlights: [
        "GenAI Integration: Engineered a multi-agent system using LangGraph to power intelligent user workflows",
        "Integrated GenAI technologies into a web application to enhance user productivity",
        "Built intelligent agent workflows for complex user interactions",
        "Leveraged modern AI frameworks for scalable agent orchestration",
      ],
      skills: ["LangGraph", "GenAI", "Multi-Agent Systems", "React", "TypeScript", "AI Workflows"],
      icon: Brain,
      category: "AI Platform",
    },
    {
      title: "Medical Imaging Classification",
      description:
        "Computer vision project training a PyTorch CNN achieving 92% accuracy. Built a frontend serving layer to visualize real-time model outputs.",
      highlights: [
        "Trained a PyTorch CNN achieving 92% accuracy on medical imaging classification",
        "Built a frontend serving layer to visualize real-time model outputs",
        "Implemented end-to-end ML pipeline from training to deployment",
        "Created interactive visualizations for model predictions and performance metrics",
      ],
      skills: ["PyTorch", "Computer Vision", "CNN", "Python", "Frontend", "Model Serving"],
      icon: Target,
      category: "Computer Vision",
    },
  ]

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-muted/30 via-background to-primary/5 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 animate-pulse" />
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`transition-all duration-1500 ease-out transform ${
            isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-16 scale-75"
          }`}
        >
          <h2 className="text-4xl sm:text-5xl font-black text-center mb-16 text-foreground">
            Featured{" "}
            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">Projects</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`bg-card/80 backdrop-blur-sm border-border/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-700 group transform hover:scale-105 hover:-rotate-1 ${
                visibleCards[index] ? "opacity-100 translate-y-0 rotate-0" : "opacity-0 translate-y-20 rotate-6"
              }`}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <project.icon className="h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                      <Badge variant="secondary" className="text-xs font-semibold">
                        {project.category}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors duration-500 font-bold">
                      {project.title}
                    </CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 text-pretty leading-relaxed">{project.description}</p>

                <ul className="space-y-2 mb-6">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-start">
                      <span className="text-primary mr-2 mt-1 font-bold">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.skills.map((skill, i) => (
                    <Badge
                      key={i}
                      variant="outline"
                      className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3">
                  {project.github && (
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="hover:scale-105 transition-transform duration-300 bg-transparent"
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  )}
                  {project.demo && (
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="hover:scale-105 transition-transform duration-300 bg-transparent"
                    >
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
