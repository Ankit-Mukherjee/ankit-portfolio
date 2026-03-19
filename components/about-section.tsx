"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { GraduationCap } from "lucide-react"

export function AboutSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-28 relative overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto px-6 sm:px-12" ref={ref}>
        {/* Split screen: image left, text right */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          {/* Left: atmospheric image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative aspect-[4/3] rounded-2xl overflow-hidden"
          >
            <Image
              src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80&auto=format&fit=crop"
              alt="Tech workspace"
              fill
              loading="lazy"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-sm font-medium text-white/80">
                San Jose, CA
              </p>
            </div>
          </motion.div>

          {/* Right: bio text */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl font-bold tracking-tighter text-foreground mb-8"
            >
              ABOUT
              <br />
              <span className="text-outline">ME</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base text-muted-foreground leading-relaxed mb-6"
            >
              I am a{" "}
              <span className="text-foreground font-semibold">
                Full-Stack Software Engineer
              </span>{" "}
              with 3+ years of experience building scalable web applications.
              Currently at{" "}
              <span className="text-primary font-semibold">AskTuring.AI</span>,
              I lead features end-to-end -- from system design and execution
              plans to production deployment -- specializing in FastAPI, Agentic
              RAG, and Python-based AI systems.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base text-muted-foreground leading-relaxed mb-8"
            >
              Previously at{" "}
              <span className="text-foreground font-semibold">PwC</span>, I
              built capacity management UIs with React/TypeScript (90% test
              coverage), scalable NestJS APIs, and containerized services on AWS
              ECS that buffered 300% traffic spikes. I bridge complex
              infrastructure with intuitive user experiences.
            </motion.p>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-3 gap-6"
            >
              {[
                { value: "3+", label: "Years Experience" },
                { value: "90%", label: "Test Coverage" },
                { value: "8+", label: "Projects Shipped" },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-primary">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1 uppercase tracking-wider font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Education cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap className="w-6 h-6 text-primary" />
            <h3 className="text-2xl font-bold tracking-tight text-foreground">
              Education
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="p-6 rounded-xl border border-border bg-card hover:border-primary/30 transition-colors"
            >
              <h4 className="font-bold text-foreground text-lg">
                MS Computer Science (AI/ML)
              </h4>
              <p className="text-sm text-muted-foreground mt-1">
                University at Buffalo, SUNY
              </p>
              <div className="flex items-center gap-3 mt-3">
                <span className="text-xs font-semibold text-primary">
                  Dec 2025
                </span>
                <span className="text-xs text-muted-foreground">
                  GPA: 3.73
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="p-6 rounded-xl border border-border bg-card hover:border-primary/30 transition-colors"
            >
              <h4 className="font-bold text-foreground text-lg">
                BS Information Science
              </h4>
              <p className="text-sm text-muted-foreground mt-1">
                Institute of Engineering and Management
              </p>
              <div className="mt-3">
                <span className="text-xs font-semibold text-primary">
                  July 2021
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
