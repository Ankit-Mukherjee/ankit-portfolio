"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Mail, MapPin, Github, Linkedin, Send } from "lucide-react"

declare global {
  interface Window {
    emailjs: any
  }
}

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle")
  const ref = useRef(null)
  const formRef = useRef<HTMLFormElement>(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    const script = document.createElement("script")
    script.src =
      "https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"
    script.onload = () => {
      window.emailjs.init("hM8L5suF_GkqmrHS9")
    }
    document.head.appendChild(script)
    return () => {
      if (script.parentNode) document.head.removeChild(script)
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
      if (!window.emailjs) throw new Error("EmailJS not loaded")

      await window.emailjs.send("service_i2vps4i", "template_32owwp9", {
        from_name: `${firstName} ${lastName}`,
        from_email: email,
        subject: subject || "Portfolio Contact",
        message,
        to_email: "ank26.m@gmail.com",
      })

      setSubmitStatus("success")
      formRef.current?.reset()
    } catch {
      setSubmitStatus("error")
      window.location.href = `mailto:ank26.m@gmail.com?subject=${encodeURIComponent(subject || "Portfolio Contact")}&body=${encodeURIComponent(
        `Name: ${firstName} ${lastName}\nEmail: ${email}\n\nMessage:\n${message}`
      )}`
    }

    setIsSubmitting(false)
  }

  const socials = [
    {
      href: "https://github.com/Ankit-Mukherjee",
      icon: Github,
      label: "GitHub",
    },
    {
      href: "https://www.linkedin.com/in/ankit281",
      icon: Linkedin,
      label: "LinkedIn",
    },
    { href: "mailto:ank26.m@gmail.com", icon: Mail, label: "Email" },
  ]

  return (
    <section
      id="contact"
      className="relative min-h-screen flex items-center py-24 bg-background"
    >
      <div className="max-w-5xl mx-auto px-6 sm:px-12 w-full" ref={ref}>
        {/* Dramatic heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <h2 className="text-5xl sm:text-6xl lg:text-8xl font-bold tracking-tighter text-foreground">
            LET&apos;S BUILD
          </h2>
          <h2 className="text-5xl sm:text-6xl lg:text-8xl font-bold tracking-tighter text-outline">
            SOMETHING
          </h2>
          <h2 className="text-5xl sm:text-6xl lg:text-8xl font-bold tracking-tighter text-outline">
            TOGETHER
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left - info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="lg:col-span-2 space-y-8"
          >
            <p className="text-base text-muted-foreground leading-relaxed">
              Interested in discussing opportunities, innovative projects, or
              just tech in general? I would love to connect.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <Mail className="w-4 h-4" />
                </div>
                <a
                  href="mailto:ank26.m@gmail.com"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                >
                  ank26.m@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="text-sm text-muted-foreground">
                  San Jose, CA
                </span>
              </div>
            </div>

            <div className="flex gap-3">
              {socials.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={
                    href.startsWith("mailto:")
                      ? undefined
                      : "noopener noreferrer"
                  }
                  aria-label={label}
                  className="p-3 rounded-xl border border-border text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors cursor-pointer"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right - form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                <div className="grid grid-cols-2 gap-4">
                  <input
                    name="firstName"
                    placeholder="First Name"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground/60 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                  />
                  <input
                    name="lastName"
                    placeholder="Last Name"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground/60 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                  />
                </div>
                <input
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground/60 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                />
                <input
                  name="subject"
                  placeholder="Subject"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground/60 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground/60 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all resize-none"
                />

                {submitStatus === "success" && (
                  <p className="text-sm text-primary font-medium">
                    Message sent! I will get back to you soon.
                  </p>
                )}
                {submitStatus === "error" && (
                  <p className="text-sm text-destructive font-medium">
                    Failed to send. Redirecting to email...
                  </p>
                )}

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-primary text-primary-foreground font-medium text-sm transition-all cursor-pointer hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <Send className="w-4 h-4" />
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
