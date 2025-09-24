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
    <section className="h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5 pt-16 pb-8">
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-transparent to-primary/5 animate-pulse" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 max-h-full flex flex-col justify-center">
        <div className="mb-4 sm:mb-6 flex justify-center">
          <div
            className={`relative group transition-all duration-1500 ease-out transform ${
              showElements.image
                ? "opacity-100 translate-y-0 scale-100 rotate-0"
                : "opacity-0 translate-y-20 scale-50 rotate-12"
            }`}
          >
            <div className="absolute -inset-6 bg-gradient-to-r from-primary via-primary/70 to-primary/50 rounded-full blur-2xl opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/60 to-primary/40 rounded-full blur-xl animate-spin-slow"></div>
            <div
              className="absolute -inset-2 bg-gradient-to-r from-primary/40 to-primary/20 rounded-full blur-lg animate-pulse"
              style={{ animationDelay: "0.5s" }}
            ></div>
            <div className="relative">
              <Image
                src="/images/1.jpg"
                alt="Ankit Mukherjee"
                width={280}
                height={280}
                className="rounded-full object-cover object-center border-4 sm:border-6 border-background shadow-2xl transition-all duration-700 hover:scale-105 hover:rotate-2 relative z-10 ring-2 sm:ring-4 ring-primary/20 ring-offset-2 sm:ring-offset-4 ring-offset-background w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80"
                style={{
                  objectPosition: "center 20%",
                  aspectRatio: "1/1",
                  filter: "brightness(1.05) contrast(1.1) saturate(1.1)",
                }}
                priority
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/15 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20" />
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary/30 to-transparent opacity-20 animate-pulse z-5" />
            </div>
          </div>
        </div>

        <h1
          className={`text-3xl sm:text-5xl lg:text-7xl font-black text-foreground mb-3 sm:mb-4 text-balance transition-all duration-1500 ease-out transform ${
            showElements.name ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-16 scale-75"
          }`}
        >
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent animate-pulse">
            Ankit Mukherjee
          </span>
        </h1>

        <div
          className={`transition-all duration-1500 ease-out transform ${
            showElements.description ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full"
          }`}
        >
          <p className="text-lg sm:text-xl text-muted-foreground mb-1 sm:mb-2 max-w-3xl mx-auto text-pretty">
            Cloud Consultant & Full-Stack Engineer | AWS Solutions Architect | AI/ML Specialist
          </p>
          <p className="text-base sm:text-lg text-primary/80 font-semibold animate-pulse">
            Delivered $12M+ client wins through innovative cloud solutions and technical leadership
          </p>
        </div>

        <div
          className={`flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-6 sm:mb-8 mt-4 sm:mt-6 transition-all duration-1500 ease-out transform ${
            showElements.buttons ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-20 scale-90"
          }`}
        >
          <Button
            onClick={() => scrollToSection("projects")}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 sm:px-10 py-3 sm:py-4 rounded-full transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-primary/25 text-base sm:text-lg font-semibold"
          >
            View My Work
          </Button>
          <Button
            onClick={() => scrollToSection("contact")}
            variant="outline"
            size="lg"
            className="px-8 sm:px-10 py-3 sm:py-4 rounded-full transition-all duration-500 hover:scale-110 hover:shadow-xl text-base sm:text-lg font-semibold border-2"
          >
            Get In Touch
          </Button>
        </div>

        <div
          className={`flex justify-center space-x-6 sm:space-x-8 transition-all duration-1500 ease-out ${
            showElements.social ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {[
            { href: "https://github.com/Ankit-Mukherjee", icon: Github, delay: "0ms" },
            { href: "https://www.linkedin.com/in/ankit281", icon: Linkedin, delay: "200ms" },
            { href: "mailto:ank26.m@gmail.com", icon: Mail, delay: "400ms" },
          ].map(({ href, icon: Icon, delay }, index) => (
            <a
              key={index}
              href={href}
              target={href.startsWith("mailto:") ? undefined : "_blank"}
              rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
              className="text-muted-foreground hover:text-primary transition-all duration-500 hover:scale-125 hover:rotate-12 transform"
              style={{ animationDelay: delay }}
            >
              <Icon className="h-6 w-6 sm:h-7 sm:w-7" />
            </a>
          ))}
        </div>
      </div>

      <button
        onClick={() => scrollToSection("about")}
        className={`absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 text-primary hover:text-primary/80 transition-all duration-1500 animate-bounce hover:scale-125 ${
          showElements.arrow ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <ArrowDown className="h-6 w-6 sm:h-8 sm:w-8" />
      </button>
    </section>
  )
}
