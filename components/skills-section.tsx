"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function SkillsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        "React",
        "TypeScript",
        "Jest",
        "React Testing Library",
        "HTML5",
        "CSS3",
        "Data Visualization",
      ],
    },
    {
      title: "Backend",
      skills: [
        "Python",
        "FastAPI",
        "NestJS",
        "Node.js",
        "Java",
        "RESTful APIs",
        "Microservices",
        "SQL",
        "NoSQL",
      ],
    },
    {
      title: "Infrastructure",
      skills: [
        "AWS ECS",
        "Docker",
        "SQS",
        "CloudWatch",
        "Kubernetes",
        "Capacity Management",
      ],
    },
    {
      title: "AI & Tools",
      skills: [
        "Agentic RAG",
        "Langfuse",
        "Weaviate",
        "RAG",
        "Git",
        "CI/CD",
        "Agile/Scrum",
        "Unit Testing",
      ],
    },
    {
      title: "Certifications",
      skills: [
        "Microsoft Certified: Azure Fundamentals (AZ-900)",
        "Azure Data Fundamentals (DP-900)",
      ],
    },
  ]

  return (
    <section id="skills" ref={sectionRef} className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-foreground">
            Technical Skills & Expertise
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <Card
                key={index}
                className={`bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-lg transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <CardTitle className="text-lg text-foreground">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <Badge
                        key={i}
                        variant="secondary"
                        className="text-xs hover:bg-primary/10 transition-colors duration-200"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
