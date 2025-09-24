"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Award, DollarSign } from "lucide-react"

export function ExperienceSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [visibleCards, setVisibleCards] = useState<boolean[]>([])
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          experiences.forEach((_, index) => {
            setTimeout(() => {
              setVisibleCards((prev) => {
                const newVisible = [...prev]
                newVisible[index] = true
                return newVisible
              })
            }, index * 500)
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

  const experiences = [
    {
      title: "Software Engineer",
      company: "Filmic, New York",
      period: "Jan 2025 – May 2025",
      location: "New York",
      description: [
        "Built a full-stack film archival & discussion platform with NestJS, React, PostgreSQL",
        "Implemented WebSocket-powered real-time chat and role-based access control",
        "Designed and deployed Dockerized microservices on AWS with modular scaling, enabling fault-tolerant architecture",
        "Led end-to-end development: schema design, API dev, CI/CD, deployment",
      ],
      skills: ["NestJS", "React", "PostgreSQL", "WebSocket", "Docker", "AWS", "CI/CD"],
      achievements: [],
    },
    {
      title: "Cloud Consultant",
      company: "PwC, India",
      period: "July 2021 – July 2024",
      location: "India",
      description: [
        "Led end-to-end delivery and architecture of AWS based AI-powered customer engagement solutions for U.S. clients",
        "Client-facing consultant: conducted weekly stakeholder sessions, authored Statements of Work (SoWs), design documentation",
        "Developed automation accelerators and CI/CD pipelines to automate testing and deployment, improving time-to-market",
        "Managed PwC Labs' internal product development (Report Rationalization Tool), leading sprints, assigning tasks in Jira",
        "Built cloud migration accelerators (Teradata→Snowflake/Redshift/Synapse), delivering one-click automation",
        "Regularly presented technical solutions and pitch decks to directors and partners, contributing to funding approvals",
      ],
      skills: [
        "AWS",
        "Client Consulting",
        "Stakeholder Management",
        "Technical Leadership",
        "Agile/Scrum",
        "Business Analysis",
        "Solution Architecture",
      ],
      achievements: [
        { icon: DollarSign, text: "Enabled $12M contract win by outperforming competitor POCs" },
        { icon: Award, text: "90% reduction in redundant reporting effort through internal product development" },
        { icon: Award, text: "98% reduction in manual query conversion effort through automation accelerators" },
      ],
    },
  ]

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-muted/30 via-background to-primary/5 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-l from-primary/5 via-transparent to-primary/5 animate-pulse" />
      <div
        className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1.5s" }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2
          className={`text-4xl sm:text-5xl font-black text-center mb-16 text-foreground transition-all duration-1500 ease-out transform ${
            isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-16 scale-75"
          }`}
        >
          Work{" "}
          <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">Experience</span>
        </h2>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className={`bg-card/80 backdrop-blur-sm border-border/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-1000 ease-out hover:scale-[1.02] hover:-rotate-1 transform ${
                visibleCards[index]
                  ? "opacity-100 translate-x-0 rotate-0 scale-100"
                  : index % 2 === 0
                    ? "opacity-0 -translate-x-20 -rotate-3 scale-90"
                    : "opacity-0 translate-x-20 rotate-3 scale-90"
              }`}
            >
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <CardTitle className="text-2xl text-foreground font-bold">{exp.title}</CardTitle>
                  <div className="flex items-center text-muted-foreground text-sm font-medium">
                    <Calendar className="h-4 w-4 mr-1" />
                    {exp.period}
                  </div>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span className="font-semibold text-primary">{exp.company}</span>
                  <span className="mx-2">•</span>
                  <span>{exp.location}</span>
                </div>
              </CardHeader>
              <CardContent>
                {exp.achievements.length > 0 && (
                  <div className="mb-6 p-6 bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl border border-primary/20">
                    <h4 className="font-bold text-foreground mb-4 flex items-center text-lg">
                      <Award className="h-5 w-5 mr-2 text-primary" />
                      Key Achievements
                    </h4>
                    <div className="space-y-3">
                      {exp.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-start text-sm">
                          <achievement.icon className="h-5 w-5 mr-3 mt-0.5 text-primary flex-shrink-0" />
                          <span className="text-muted-foreground font-medium">{achievement.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <ul className="space-y-3 mb-6">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-muted-foreground flex items-start">
                      <span className="text-primary mr-3 mt-2 font-bold">•</span>
                      <span className="text-pretty leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, i) => (
                    <Badge
                      key={i}
                      variant="outline"
                      className="text-xs hover:scale-110 hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-semibold"
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
    </section>
  )
}
