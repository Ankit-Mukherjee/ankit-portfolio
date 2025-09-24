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
      title: "Consulting & Leadership",
      skills: [
        "Client Consulting",
        "Stakeholder Management",
        "Technical Leadership",
        "Business Analysis",
        "Solution Architecture",
        "Executive Presentations",
        "Agile/Scrum",
      ],
    },
    {
      title: "Cloud & Big Data",
      skills: [
        "AWS EC2",
        "AWS Lambda",
        "AWS S3",
        "AWS API Gateway",
        "AWS DynamoDB",
        "AWS CloudFormation",
        "AWS Bedrock",
        "AWS Lex",
        "AWS Connect",
        "AWS SageMaker",
        "Hadoop",
        "Spark",
      ],
    },
    {
      title: "Programming Languages",
      skills: ["Python", "JavaScript", "TypeScript", "Java", "C", "C++", "SQL", "HTML", "CSS"],
    },
    {
      title: "Full-Stack Frameworks",
      skills: ["React", "Next.js", "NestJS", "Express.js", "Flask", "FastAPI", "REST APIs", "WebSockets"],
    },
    {
      title: "DevOps & CI/CD",
      skills: ["Docker", "Kubernetes", "Jenkins", "GitHub Actions", "Automated Testing", "Monitoring"],
    },
    {
      title: "ML/AI",
      skills: [
        "PyTorch",
        "Scikit-learn",
        "OpenAI API",
        "Hugging Face",
        "AWS SageMaker",
        "AWS Bedrock",
        "LLMs",
        "Vector Search",
      ],
    },
    {
      title: "Databases",
      skills: ["PostgreSQL", "MySQL", "Redshift", "Synapse", "Snowflake", "Teradata", "DynamoDB", "MongoDB"],
    },
    {
      title: "Certifications",
      skills: ["Azure Fundamentals (AZ-900)", "Azure Data Fundamentals (DP-900)", "Snowflake Hands-on Essentials"],
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
