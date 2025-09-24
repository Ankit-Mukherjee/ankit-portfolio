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
        isScrolled ? "bg-background/80 backdrop-blur-md border-b border-border/50" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="font-bold text-xl text-foreground">Ankit Mukherjee</div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              Contact
            </button>
            <ThemeToggle />
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="h-9 w-9"
            >
              {isMobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-border/50">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={() => scrollToSection("about")}
                className="block px-3 py-2 text-muted-foreground hover:text-foreground transition-colors duration-200 w-full text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("experience")}
                className="block px-3 py-2 text-muted-foreground hover:text-foreground transition-colors duration-200 w-full text-left"
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="block px-3 py-2 text-muted-foreground hover:text-foreground transition-colors duration-200 w-full text-left"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="block px-3 py-2 text-muted-foreground hover:text-foreground transition-colors duration-200 w-full text-left"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block px-3 py-2 text-muted-foreground hover:text-foreground transition-colors duration-200 w-full text-left"
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
