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
      className="py-24 bg-background"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Modern split layout */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left side - About content */}
          <div className="lg:col-span-7 space-y-12">
            <div
              className={`transition-all duration-1000 ease-out transform ${
                showElements.title ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <h2 className="text-4xl sm:text-5xl font-light text-foreground leading-tight">
                About
                <span className="block font-medium">Me</span>
              </h2>
            </div>

            <div className="space-y-8">
              <div
                className={`transition-all duration-1000 ease-out transform ${
                  showElements.text1 ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                }`}
              >
                <p className="text-lg text-muted-foreground leading-relaxed font-light">
                  I'm a <span className="text-foreground font-medium">Full-Stack Software Engineer</span>{" "}
                  with 3+ years of experience specializing in building scalable web applications. Currently working at{" "}
                  <span className="text-foreground font-medium">AskTuring.AI</span>, a fast-paced AI startup, where I lead features, 
                  do system design, come up with execution plans, and build them end-to-end. I specialize in FastAPI, Agentic RAG, and 
                  REST API development using Python, creating scalable AI-powered systems that deliver real value.
                </p>
              </div>

              <div
                className={`transition-all duration-1000 ease-out transform ${
                  showElements.text2 ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                }`}
              >
                <p className="text-lg text-muted-foreground leading-relaxed font-light">
                  Previously at PwC, I developed scalable NestJS APIs for quota enforcement and built intuitive capacity management 
                  interfaces using React (TypeScript), achieving 90% unit test coverage. I deployed containerized services on AWS ECS 
                  and utilized SQS to decouple services, buffering 300% traffic spikes. I'm passionate about bridging the gap between 
                  complex infrastructure and intuitive user experiences.
                </p>
              </div>
            </div>

            <div
              className={`transition-all duration-1000 ease-out transform ${
                showElements.badges ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <h3 className="text-xl font-medium text-foreground mb-6">Core Expertise</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Full-Stack Development",
                  "Agentic AI Workflows",
                  "Cloud Architecture",
                  "Microservices",
                  "System Reliability",
                  "Vector Search & RAG",
                ].map((skill, index) => (
                  <div
                    key={skill}
                    className="p-4 bg-muted/30 border border-border hover:border-foreground/30 transition-all duration-300 group"
                    style={{
                      animationDelay: `${index * 100}ms`,
                    }}
                  >
                    <span className="text-foreground font-medium group-hover:text-muted-foreground transition-colors">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right side - Education & Stats */}
          <div className="lg:col-span-5 space-y-8">
            <div
              className={`transition-all duration-1000 ease-out transform ${
                showElements.card ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              }`}
            >
              <div className="bg-muted/20 border border-border p-8">
                <h3 className="text-2xl font-light text-foreground mb-8">Education</h3>
                <div className="space-y-8">
                  {[
                    {
                      degree: "MS in Computer Science (Focus: AI/ML)",
                      school: "University at Buffalo, SUNY",
                      period: "Dec 2025",
                      gpa: "GPA: 3.73",
                    },
                    {
                      degree: "BS in Information Science",
                      school: "Institute of Engineering and Management",
                      period: "July 2021",
                    },
                  ].map((edu, index) => (
                    <div
                      key={index}
                      className="border-l-2 border-foreground pl-6"
                      style={{ transitionDelay: `${800 + index * 200}ms` }}
                    >
                      <h4 className="font-medium text-foreground text-lg mb-1">{edu.degree}</h4>
                      <p className="text-muted-foreground font-light mb-1">{edu.school}</p>
                      <p className="text-sm text-foreground font-medium">{edu.period}</p>
                      {edu.gpa && <p className="text-sm text-muted-foreground font-light">{edu.gpa}</p>}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Stats section */}
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-muted/20 border border-border">
                <div className="text-3xl font-light text-foreground mb-2">3+</div>
                <div className="text-sm text-muted-foreground font-light">Years Experience</div>
              </div>
              <div className="text-center p-6 bg-muted/20 border border-border">
                <div className="text-3xl font-light text-foreground mb-2">90%</div>
                <div className="text-sm text-muted-foreground font-light">Test Coverage</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
