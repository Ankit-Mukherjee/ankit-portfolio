"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Github, Linkedin } from "lucide-react"

declare global {
  interface Window {
    emailjs: any
  }
}

export function ContactSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const sectionRef = useRef<HTMLElement>(null)
  const formRef = useRef<HTMLFormElement>(null)

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

    const script = document.createElement("script")
    script.src = "https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"
    script.onload = () => {
      window.emailjs.init("hM8L5suF_GkqmrHS9") // Replace with your EmailJS public key
    }
    document.head.appendChild(script)

    return () => {
      observer.disconnect()
      if (script.parentNode) {
        document.head.removeChild(script)
      }
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    const formData = new FormData(e.currentTarget)
    const firstName = formData.get("firstName") as string
    const lastName = formData.get("lastName") as string
    const email = formData.get("email") as string
    const subject = formData.get("subject") as string
    const message = formData.get("message") as string

    try {
      if (!window.emailjs) {
        throw new Error("EmailJS not loaded")
      }

      const templateParams = {
        from_name: `${firstName} ${lastName}`,
        from_email: email,
        subject: subject || "Portfolio Contact",
        message: message,
        to_email: "ank26.m@gmail.com",
      }

      await window.emailjs.send(
        "service_i2vps4i", // Replace with your EmailJS service ID
        "template_32owwp9", // Replace with your EmailJS template ID
        templateParams,
      )

      setSubmitStatus("success")
      if (formRef.current) {
        formRef.current.reset()
      }
    } catch (error) {
      console.error("EmailJS Error:", error)
      setSubmitStatus("error")

      // Fallback to mailto if EmailJS fails
      const mailtoLink = `mailto:ank26.m@gmail.com?subject=${encodeURIComponent(subject || "Portfolio Contact")}&body=${encodeURIComponent(
        `Name: ${firstName} ${lastName}\nEmail: ${email}\n\nMessage:\n${message}`,
      )}`
      window.location.href = mailtoLink
    }

    setIsSubmitting(false)
  }

  return (
    <section id="contact" ref={sectionRef} className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-foreground">Get In Touch</h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div
              className={`transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
            >
              <h3 className="text-2xl font-semibold mb-6 text-foreground">Let's Connect</h3>
              <p className="text-muted-foreground mb-8 text-pretty">
                I'm always interested in discussing new opportunities, innovative projects, or just having a
                conversation about technology. Feel free to reach out!
              </p>

              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-primary mr-3" />
                  <a
                    href="mailto:ank26.m@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    ank26.m@gmail.com
                  </a>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-primary mr-3" />
                  <span className="text-muted-foreground">San Jose, CA</span>
                </div>
              </div>

              <div className="flex space-x-4 mt-8">
                <a
                  href="https://github.com/Ankit-Mukherjee"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
                >
                  <Github className="h-6 w-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/ankit281"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
              </div>
            </div>

            <Card
              className={`bg-card/50 backdrop-blur-sm border-border/50 transition-all duration-1000 delay-400 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
            >
              <CardHeader>
                <CardTitle className="text-xl text-foreground">Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <Input
                      name="firstName"
                      placeholder="First Name"
                      required
                      className="bg-background/50 border-border/50 focus:border-primary transition-colors"
                    />
                    <Input
                      name="lastName"
                      placeholder="Last Name"
                      required
                      className="bg-background/50 border-border/50 focus:border-primary transition-colors"
                    />
                  </div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Email Address"
                    required
                    className="bg-background/50 border-border/50 focus:border-primary transition-colors"
                  />
                  <Input
                    name="subject"
                    placeholder="Subject"
                    required
                    className="bg-background/50 border-border/50 focus:border-primary transition-colors"
                  />
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    rows={5}
                    required
                    className="bg-background/50 border-border/50 focus:border-primary transition-colors resize-none"
                  />

                  {submitStatus === "success" && (
                    <div className="text-primary text-sm font-medium">
                      Message sent successfully! I'll get back to you soon.
                    </div>
                  )}
                  {submitStatus === "error" && (
                    <div className="text-red-600 text-sm font-medium">
                      Failed to send message. Please try again or use the email link above.
                    </div>
                  )}

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 hover:scale-105 disabled:opacity-50"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
