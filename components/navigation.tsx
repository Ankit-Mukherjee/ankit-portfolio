"use client"

import { useState, useEffect } from "react"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/90 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="font-light text-xl text-foreground tracking-wide">Ankit Mukherjee</div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-12">
            <button
              onClick={() => scrollToSection("about")}
              className="relative text-muted-foreground hover:text-foreground transition-all duration-300 font-light text-sm tracking-wide group"
            >
              <span className="relative z-10">About</span>
              <div className="absolute bottom-0 left-0 w-0 h-px bg-foreground transition-all duration-300 group-hover:w-full"></div>
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className="relative text-muted-foreground hover:text-foreground transition-all duration-300 font-light text-sm tracking-wide group"
            >
              <span className="relative z-10">Experience</span>
              <div className="absolute bottom-0 left-0 w-0 h-px bg-foreground transition-all duration-300 group-hover:w-full"></div>
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="relative text-muted-foreground hover:text-foreground transition-all duration-300 font-light text-sm tracking-wide group"
            >
              <span className="relative z-10">Projects</span>
              <div className="absolute bottom-0 left-0 w-0 h-px bg-foreground transition-all duration-300 group-hover:w-full"></div>
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="relative text-muted-foreground hover:text-foreground transition-all duration-300 font-light text-sm tracking-wide group"
            >
              <span className="relative z-10">Skills</span>
              <div className="absolute bottom-0 left-0 w-0 h-px bg-foreground transition-all duration-300 group-hover:w-full"></div>
            </button>
            <button
              onClick={() => scrollToSection("recommendations")}
              className="relative text-muted-foreground hover:text-foreground transition-all duration-300 font-light text-sm tracking-wide group"
            >
              <span className="relative z-10">Recommendations</span>
              <div className="absolute bottom-0 left-0 w-0 h-px bg-foreground transition-all duration-300 group-hover:w-full"></div>
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="relative text-muted-foreground hover:text-foreground transition-all duration-300 font-light text-sm tracking-wide group"
            >
              <span className="relative z-10">Contact</span>
              <div className="absolute bottom-0 left-0 w-0 h-px bg-foreground transition-all duration-300 group-hover:w-full"></div>
            </button>
            <div className="w-px h-6 bg-border mx-4"></div>
            <ThemeToggle />
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="h-10 w-10"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-border">
            <div className="px-4 pt-4 pb-6 space-y-2">
              <button
                onClick={() => scrollToSection("about")}
                className="block px-3 py-3 text-muted-foreground hover:text-foreground transition-all duration-300 w-full text-left font-light hover:bg-muted/20 hover:translate-x-2 rounded-sm"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("experience")}
                className="block px-3 py-3 text-muted-foreground hover:text-foreground transition-all duration-300 w-full text-left font-light hover:bg-muted/20 hover:translate-x-2 rounded-sm"
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="block px-3 py-3 text-muted-foreground hover:text-foreground transition-all duration-300 w-full text-left font-light hover:bg-muted/20 hover:translate-x-2 rounded-sm"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="block px-3 py-3 text-muted-foreground hover:text-foreground transition-all duration-300 w-full text-left font-light hover:bg-muted/20 hover:translate-x-2 rounded-sm"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection("recommendations")}
                className="block px-3 py-3 text-muted-foreground hover:text-foreground transition-all duration-300 w-full text-left font-light hover:bg-muted/20 hover:translate-x-2 rounded-sm"
              >
                Recommendations
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block px-3 py-3 text-muted-foreground hover:text-foreground transition-all duration-300 w-full text-left font-light hover:bg-muted/20 hover:translate-x-2 rounded-sm"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
