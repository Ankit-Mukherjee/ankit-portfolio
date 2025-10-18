"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Quote, Star } from "lucide-react"

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
    <section id="recommendations" ref={sectionRef} className="py-20 bg-gradient-to-br from-background via-background to-primary/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
              What People Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Recommendations from colleagues and mentors who have worked closely with me
            </p>
            <div className="flex justify-center mt-6">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recommendations.map((recommendation, index) => (
              <Card
                key={recommendation.id}
                className={`bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-700 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2 ${
                  visibleCards.includes(index)
                    ? "opacity-100 translate-y-0 scale-100"
                    : "opacity-0 translate-y-8 scale-95"
                }`}
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4 mb-4">
                    <Avatar className="h-12 w-12 ring-2 ring-primary/20">
                      <AvatarImage 
                        src={recommendation.avatar}
                        alt={recommendation.name}
                      />
                      <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                        {recommendation.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-foreground text-sm">
                        {recommendation.name}
                      </h3>
                      <p className="text-xs text-muted-foreground mb-1">
                        {recommendation.title}
                      </p>
                      <Badge variant="secondary" className="text-xs">
                        {recommendation.relationship}
                      </Badge>
                    </div>
                    <Quote className="h-5 w-5 text-primary/60 flex-shrink-0" />
                  </div>

                  <blockquote className="text-sm text-muted-foreground leading-relaxed mb-4 italic">
                    "{recommendation.text}"
                  </blockquote>

                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>{recommendation.date}</span>
                    <a
                      href={recommendation.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80 transition-colors font-medium"
                    >
                      View on LinkedIn
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground">
              Want to see more recommendations?{" "}
              <a
                href="https://www.linkedin.com/in/ankit281"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 transition-colors font-medium"
              >
                Visit my LinkedIn profile
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
