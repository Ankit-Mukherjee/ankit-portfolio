"use client"

import { Github, Linkedin, Mail, Heart } from "lucide-react"

export function FooterSection() {
  const currentYear = new Date().getFullYear()

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-black dark:bg-white border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white dark:text-black">Ankit Mukherjee</h3>
            <p className="text-sm text-gray-300 dark:text-gray-700">
              Full-Stack Software Engineer specializing in Agentic AI workflows, React (TypeScript), and Node.js.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-white dark:text-black uppercase tracking-wider">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              {[
                { label: "Home", id: "hero" },
                { label: "About", id: "about" },
                { label: "Experience", id: "experience" },
                { label: "Projects", id: "projects" },
                { label: "Skills", id: "skills" },
                { label: "Contact", id: "contact" },
              ].map((link) => (
                <button
                  key={link.id}
                  onClick={() => link.id === "hero" ? scrollToTop() : scrollToSection(link.id)}
                  className="text-sm text-gray-300 dark:text-gray-700 hover:text-white dark:hover:text-black transition-colors duration-300 text-left"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-white dark:text-black uppercase tracking-wider">Connect</h4>
            <div className="flex flex-col space-y-3">
              <a
                href="https://github.com/Ankit-Mukherjee"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-sm text-gray-300 dark:text-gray-700 hover:text-white dark:hover:text-black transition-all duration-300 group"
              >
                <Github className="h-5 w-5 mr-3 group-hover:scale-110 transition-transform" />
                <span>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/ankit281"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-sm text-gray-300 dark:text-gray-700 hover:text-white dark:hover:text-black transition-all duration-300 group"
              >
                <Linkedin className="h-5 w-5 mr-3 group-hover:scale-110 transition-transform" />
                <span>LinkedIn</span>
              </a>
              <a
                href="mailto:ank26.m@gmail.com"
                className="flex items-center text-sm text-gray-300 dark:text-gray-700 hover:text-white dark:hover:text-black transition-all duration-300 group"
              >
                <Mail className="h-5 w-5 mr-3 group-hover:scale-110 transition-transform" />
                <span>ank26.m@gmail.com</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-gray-800 dark:border-gray-300">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-300 dark:text-gray-700 text-center md:text-left">
              © {currentYear} Ankit Mukherjee. All rights reserved.
            </p>
            <p className="text-sm text-gray-300 dark:text-gray-700 flex items-center">
              Built with{" "}
              <Heart className="h-4 w-4 mx-1 text-red-500 animate-pulse" />
              using Next.js & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

