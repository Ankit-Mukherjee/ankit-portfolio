"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Quote, Star, ArrowDown } from "lucide-react"

const recommendations = [
  {
    id: 1,
    name: "John P. Weiksnar",
    title: "Futurist • Vice President, Tesla Owners Club NY State",
    company: "Tesla Owners Club NY State",
    relationship: "Worked together",
    date: "October 11, 2025",
    text: "I am delighted to recommend Ankit, an affable graduate student intern who was part of a web app project in the tech sector. Ankit was a pivotal member of the backend team, demonstrating skill and dedication. He helped develop a real-time chat feature using WebSockets, amping up the platform's effectiveness. His database design ensured scalability and performance. Ankit also managed AWS deployment for a robust system. His technical skills, attitude, and ability to handle responsibilities make him an great candidate for any tech role. I endorse Ankit for his advanced contributions and professionalism.",
    linkedinUrl: "https://www.linkedin.com/in/john-p-weiksnar-122138/",
    initials: "JW",
    avatar: "/images/john.jpeg"
  },
  {
    id: 2,
    name: "Neslihan Kilic",
    title: "Conversational AI at SAP",
    company: "SAP",
    relationship: "Worked together",
    date: "October 10, 2025",
    text: "I had the pleasure of working with Ankit at PwC, where we collaborated on conversational AI and contact center transformation projects. As a Conversation Design Manager, I often worked closely with engineers, and Ankit stood out for his openness, clarity, and willingness to bridge the gap between design and technology. He was always eager to explain technical concepts, walk through solutions in the tools, and ensure that the design and development sides stayed aligned. His deep understanding of cloud native architectures and conversational AI systems made collaboration both easy and productive. Ankit brought a collaborative spirit and a great sense of ownership to every project. He's exactly the kind of teammate who elevates the whole team's work. I truly enjoyed working with him and would look forward to collaborating again without hesitation.",
    linkedinUrl: "https://www.linkedin.com/in/neslihankilic/",
    initials: "NK",
    avatar: "/images/nes.jpeg"
  },
  {
    id: 3,
    name: "Bhagya Pasupureddy",
    title: "Gen AI | Agentic AI | Digital Contact Solutions Manager @ PwC",
    company: "PwC",
    relationship: "Mentor",
    date: "October 9, 2025",
    text: "I've had the pleasure of working closely with Ankit and have always been impressed by his enthusiasm, adaptability, and quick learning. He has a natural knack for picking up new technologies and implementing them effectively in a short time. Beyond his technical skills, he brings an energetic and positive vibe to the team, making collaboration both productive and fun. A true asset to any project or team he's part of!",
    linkedinUrl: "https://www.linkedin.com/in/bhagya-pasupureddy/",
    initials: "BP",
    avatar: "/images/bhagya.jpeg"
  }
]

export function RecommendationsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [visibleCards, setVisibleCards] = useState<number[]>([])
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Stagger the appearance of cards
          recommendations.forEach((_, index) => {
            setTimeout(() => {
              setVisibleCards(prev => [...prev, index])
            }, index * 200)
          })
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="recommendations" ref={sectionRef} className="py-24 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Modern header with side layout */}
          <div className="grid lg:grid-cols-3 gap-12 mb-20">
            <div className="lg:col-span-1">
              <h2 className="text-4xl sm:text-5xl font-light text-foreground mb-6 leading-tight">
                What People
                <span className="block font-medium">Say</span>
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed">
                Recommendations from colleagues and mentors who have worked closely with me on various projects.
              </p>
            </div>
            
            <div className="lg:col-span-2">
              <div className="space-y-8">
                {recommendations.map((recommendation, index) => (
                  <div
                    key={recommendation.id}
                    className={`group transition-all duration-700 ${
                      visibleCards.includes(index)
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 translate-x-10"
                    }`}
                    style={{ transitionDelay: `${index * 200}ms` }}
                  >
                    <div className="flex gap-6 p-6 bg-background border border-border hover:border-foreground/30 transition-all duration-500 hover:shadow-lg">
                      {/* Avatar */}
                      <div className="flex-shrink-0">
                        <Avatar className="h-16 w-16 border border-border">
                          <AvatarImage 
                            src={recommendation.avatar}
                            alt={recommendation.name}
                          />
                          <AvatarFallback className="bg-muted text-foreground font-medium">
                            {recommendation.initials}
                          </AvatarFallback>
                        </Avatar>
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1 space-y-4">
                        <div>
                          <h3 className="font-medium text-foreground text-lg">
                            {recommendation.name}
                          </h3>
                          <p className="text-sm text-muted-foreground mb-2">
                            {recommendation.title}
                          </p>
                          <Badge variant="secondary" className="text-xs bg-muted text-muted-foreground border-none">
                            {recommendation.relationship}
                          </Badge>
                        </div>
                        
                        <blockquote className="text-foreground leading-relaxed font-light italic">
                          "{recommendation.text}"
                        </blockquote>
                        
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">{recommendation.date}</span>
                          <a
                            href={recommendation.linkedinUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-foreground hover:text-muted-foreground transition-colors font-medium group-hover:underline"
                          >
                            View on LinkedIn →
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center pt-8 border-t border-border">
            <p className="text-muted-foreground font-light mb-4">
              Want to see more recommendations?
            </p>
            <a
              href="https://www.linkedin.com/in/ankit281"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-foreground hover:text-muted-foreground transition-colors font-medium group"
            >
              Visit my LinkedIn profile
              <ArrowDown className="h-4 w-4 rotate-[-90deg] group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
