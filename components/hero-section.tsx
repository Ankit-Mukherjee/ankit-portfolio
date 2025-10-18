"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [showElements, setShowElements] = useState({
    image: false,
    name: false,
    description: false,
    buttons: false,
    social: false,
    arrow: false,
  })

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)

    // Staggered dramatic entrances
    setTimeout(() => setShowElements((prev) => ({ ...prev, image: true })), 300)
    setTimeout(() => setShowElements((prev) => ({ ...prev, name: true })), 800)
    setTimeout(() => setShowElements((prev) => ({ ...prev, description: true })), 1200)
    setTimeout(() => setShowElements((prev) => ({ ...prev, buttons: true })), 1600)
    setTimeout(() => setShowElements((prev) => ({ ...prev, social: true })), 2000)
    setTimeout(() => setShowElements((prev) => ({ ...prev, arrow: true })), 2400)

    return () => clearTimeout(timer)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden bg-background pt-16">
      {/* Modern geometric background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-muted/5"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-muted/3"></div>
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-foreground rotate-45"></div>
        <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-foreground rotate-45"></div>
        <div className="absolute bottom-1/4 left-1/2 w-3 h-3 bg-foreground/20 rotate-45"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left side - Content */}
          <div className="space-y-8">
            <div
              className={`transition-all duration-1000 ease-out transform ${
                showElements.name ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-foreground leading-tight">
                <span className="block animate-fade-in-up" style={{ animationDelay: "0.2s" }}>Ankit</span>
                <span className="block font-medium animate-fade-in-up" style={{ animationDelay: "0.4s" }}>Mukherjee</span>
              </h1>
            </div>

            <div
              className={`transition-all duration-1000 ease-out transform delay-200 ${
                showElements.description ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
            >
              <div className="space-y-4">
                <p className="text-lg sm:text-xl text-muted-foreground font-light leading-relaxed">
                  Cloud Consultant & Full-Stack Engineer
                </p>
                <p className="text-base text-foreground font-medium">
                  AWS Solutions Architect | AI/ML Specialist
                </p>
                <p className="text-sm text-muted-foreground font-light max-w-md">
                  Delivered $12M+ client wins through innovative cloud solutions and technical leadership
                </p>
              </div>
            </div>

            <div
              className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 ease-out transform delay-400 ${
                showElements.buttons ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
            >
              <Button
                onClick={() => scrollToSection("projects")}
                size="lg"
                className="bg-foreground hover:bg-foreground/90 text-background px-8 py-4 rounded-none transition-all duration-300 text-base font-medium w-full sm:w-auto hover:scale-105 animate-glow"
              >
                View Projects
              </Button>
              <Button
                onClick={() => scrollToSection("contact")}
                variant="outline"
                size="lg"
                className="px-8 py-4 rounded-none transition-all duration-300 text-base font-medium border-foreground text-foreground hover:bg-foreground hover:text-background w-full sm:w-auto hover:scale-105 animate-float"
              >
                Contact Me
              </Button>
            </div>

            <div
              className={`flex space-x-6 transition-all duration-1000 ease-out transform delay-600 ${
                showElements.social ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
            >
              {[
                { href: "https://github.com/Ankit-Mukherjee", icon: Github, label: "GitHub" },
                { href: "https://www.linkedin.com/in/ankit281", icon: Linkedin, label: "LinkedIn" },
                { href: "mailto:ank26.m@gmail.com", icon: Mail, label: "Email" },
              ].map(({ href, icon: Icon, label }, index) => (
                <a
                  key={index}
                  href={href}
                  target={href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                  className="text-muted-foreground hover:text-foreground transition-all duration-300 group hover:scale-110"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Icon className="h-5 w-5 mb-1 group-hover:animate-bounce" />
                  <span className="text-xs font-light block group-hover:translate-y-1 transition-transform">{label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Right side - Image */}
          <div className="flex justify-center lg:justify-end">
            <div
              className={`relative transition-all duration-1000 ease-out transform ${
                showElements.image
                  ? "opacity-100 translate-x-0 scale-100"
                  : "opacity-0 translate-x-10 scale-95"
              }`}
            >
              <div className="relative group">
                {/* Animated background circles */}
                <div className="absolute -inset-4 bg-muted/20 rounded-full blur-xl animate-pulse"></div>
                <div className="absolute -inset-2 bg-muted/10 rounded-full blur-lg animate-pulse" style={{ animationDelay: "1s" }}></div>
                
                {/* Main circular image */}
                <div className="relative z-10">
                  <Image
                    src="/images/ankit.png"
                    alt="Ankit Mukherjee"
                    width={300}
                    height={300}
                    className="rounded-full object-cover object-center border-2 border-border shadow-2xl transition-all duration-700 hover:scale-110 hover:rotate-3 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96"
                    style={{
                      objectPosition: "center 20%",
                      aspectRatio: "1/1",
                    }}
                    priority
                  />
                  
                  {/* Floating animation elements */}
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-foreground rounded-full animate-bounce" style={{ animationDelay: "0.5s" }}></div>
                  <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-muted rounded-full animate-bounce" style={{ animationDelay: "1.5s" }}></div>
                  <div className="absolute top-1/2 -left-4 w-2 h-2 bg-foreground/60 rounded-full animate-pulse" style={{ animationDelay: "2s" }}></div>
                  <div className="absolute top-1/4 -right-6 w-2 h-2 bg-muted/80 rounded-full animate-pulse" style={{ animationDelay: "2.5s" }}></div>
                </div>
                
                {/* Rotating border animation */}
                <div className="absolute inset-0 rounded-full border-2 border-transparent bg-gradient-to-r from-foreground via-muted to-foreground animate-spin opacity-20" style={{ animationDuration: "8s" }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={() => scrollToSection("about")}
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 text-muted-foreground hover:text-foreground transition-all duration-500 hover:scale-110 ${
          showElements.arrow ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
      >
        <ArrowDown className="h-5 w-5" />
      </button>
    </section>
  )
}
