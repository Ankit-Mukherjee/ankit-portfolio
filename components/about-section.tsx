"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [showElements, setShowElements] = useState({
    title: false,
    text1: false,
    text2: false,
    badges: false,
    card: false,
  })
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          setTimeout(() => setShowElements((prev) => ({ ...prev, title: true })), 200)
          setTimeout(() => setShowElements((prev) => ({ ...prev, text1: true })), 600)
          setTimeout(() => setShowElements((prev) => ({ ...prev, text2: true })), 1000)
          setTimeout(() => setShowElements((prev) => ({ ...prev, badges: true })), 1400)
          setTimeout(() => setShowElements((prev) => ({ ...prev, card: true })), 800)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 pt-24 bg-gradient-to-br from-background via-muted/20 to-primary/5 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 animate-pulse" />
      <div
        className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "2s" }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2
          className={`text-4xl sm:text-5xl font-black text-center mb-16 text-foreground transition-all duration-1500 ease-out transform ${
            showElements.title ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-16 scale-75"
          }`}
        >
          About <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p
              className={`text-lg text-muted-foreground text-pretty transition-all duration-1500 ease-out transform ${
                showElements.text1 ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full"
              }`}
            >
              I'm a passionate <span className="text-primary font-semibold">Cloud Consultant & Software Engineer</span>{" "}
              with over 3 years of experience building scalable cloud applications and AI-powered solutions. Currently
              pursuing my Master's in Computer Science at University at Buffalo, I specialize in full-stack development
              with a focus on AWS cloud services and modern web technologies.
            </p>

            <p
              className={`text-lg text-muted-foreground text-pretty transition-all duration-1500 ease-out transform ${
                showElements.text2 ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"
              }`}
            >
              At PwC, I led <span className="text-primary font-semibold">$12M+ client wins</span> through innovative
              cloud solutions and technical leadership. I developed end-to-end cloud applications for U.S. clients,
              including conversational AI chatbots and automation tools. I'm passionate about creating efficient,
              scalable solutions that solve real-world problems.
            </p>

            <div
              className={`flex flex-wrap gap-3 transition-all duration-1500 ease-out transform ${
                showElements.badges ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-90"
              }`}
            >
              {[
                "Full-Stack Development",
                "Cloud Architecture",
                "AI/ML Integration",
                "DevOps",
                "Technical Leadership",
              ].map((badge, index) => (
                <Badge
                  key={badge}
                  variant="secondary"
                  className="transition-all duration-500 ease-out hover:scale-110 hover:bg-primary hover:text-primary-foreground font-semibold"
                  style={{
                    animationDelay: `${index * 100}ms`,
                    transform: showElements.badges ? "translateY(0)" : "translateY(20px)",
                  }}
                >
                  {badge}
                </Badge>
              ))}
            </div>
          </div>

          <Card
            className={`bg-card/80 backdrop-blur-sm border-border/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-1500 ease-out hover:scale-105 hover:-rotate-1 transform ${
              showElements.card
                ? "opacity-100 translate-x-0 rotate-0 scale-100"
                : "opacity-0 translate-x-20 rotate-6 scale-90"
            }`}
          >
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-foreground">Education</h3>
              <div className="space-y-6">
                {[
                  {
                    degree: "MS in Computer Science",
                    school: "University at Buffalo, SUNY",
                    period: "Aug 2024 – Dec 2025",
                  },
                  {
                    degree: "Bachelor's in Information Technology",
                    school: "Institute of Engineering and Management",
                    period: "Aug 2017 – July 2021",
                  },
                ].map((edu, index) => (
                  <div
                    key={index}
                    className={`transition-all duration-1000 ease-out transform ${
                      showElements.card ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    }`}
                    style={{ transitionDelay: `${800 + index * 200}ms` }}
                  >
                    <h4 className="font-semibold text-foreground text-lg">{edu.degree}</h4>
                    <p className="text-muted-foreground font-medium">{edu.school}</p>
                    <p className="text-sm text-primary">{edu.period}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
