"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { ExternalLink, Quote } from "lucide-react"

const recommendations = [
  {
    name: "John P. Weiksnar",
    title: "Futurist, Vice President - Tesla Owners Club NY State",
    text: "I am delighted to recommend Ankit, an affable graduate student intern who was part of a web app project in the tech sector. Ankit was a pivotal member of the backend team, demonstrating skill and dedication. He helped develop a real-time chat feature using WebSockets, amping up the platform's effectiveness. His database design ensured scalability and performance. Ankit also managed AWS deployment for a robust system.",
    linkedinUrl: "https://www.linkedin.com/in/john-p-weiksnar-122138/",
    avatar: "/images/john.jpeg",
    initials: "JW",
  },
  {
    name: "Neslihan Kilic",
    title: "Conversational AI at SAP",
    text: "I had the pleasure of working with Ankit at PwC on conversational AI and contact center transformation projects. Ankit stood out for his openness, clarity, and willingness to bridge the gap between design and technology. His deep understanding of cloud native architectures made collaboration both easy and productive. He's exactly the kind of teammate who elevates the whole team's work.",
    linkedinUrl: "https://www.linkedin.com/in/neslihankilic/",
    avatar: "/images/nes.jpeg",
    initials: "NK",
  },
  {
    name: "Bhagya Pasupureddy",
    title: "Gen AI | Agentic AI | Digital Contact Solutions Manager @ PwC",
    text: "I've had the pleasure of working closely with Ankit and have always been impressed by his enthusiasm, adaptability, and quick learning. He has a natural knack for picking up new technologies and implementing them effectively. Beyond his technical skills, he brings an energetic and positive vibe to the team. A true asset to any project or team he's part of!",
    linkedinUrl: "https://www.linkedin.com/in/bhagya-pasupureddy/",
    avatar: "/images/bhagya.jpeg",
    initials: "BP",
  },
]

export function RecommendationsSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      id="recommendations"
      className="py-28 relative overflow-hidden bg-background"
      ref={ref}
    >
      <div className="max-w-5xl mx-auto px-6 sm:px-12">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter text-foreground">
            WHAT PEOPLE
          </h2>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter text-outline">
            SAY
          </h2>
        </motion.div>

        {/* Testimonial cards */}
        <div className="space-y-12">
          {recommendations.map((rec, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.7,
                delay: 0.2 + index * 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative p-8 sm:p-10 rounded-2xl border border-border bg-card"
            >
              {/* Large quotation mark */}
              <Quote className="absolute top-6 right-8 w-12 h-12 text-primary/10" />

              <div className="flex items-start gap-5 mb-6">
                {/* Avatar */}
                <div className="relative w-14 h-14 rounded-full overflow-hidden flex-shrink-0 border-2 border-border">
                  <Image
                    src={rec.avatar}
                    alt={rec.name}
                    fill
                    loading="lazy"
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-foreground text-lg">
                    {rec.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{rec.title}</p>
                </div>
              </div>

              <blockquote className="text-base text-muted-foreground leading-relaxed italic mb-6">
                &ldquo;{rec.text}&rdquo;
              </blockquote>

              <a
                href={rec.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-primary transition-colors cursor-pointer"
              >
                View on LinkedIn
                <ExternalLink className="w-3 h-3" />
              </a>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 1 }}
          className="text-center mt-12"
        >
          <a
            href="https://www.linkedin.com/in/ankit281"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors cursor-pointer"
          >
            See all recommendations on LinkedIn
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
