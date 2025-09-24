"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Code, Database, Brain, Cloud, BarChart3, Target } from "lucide-react"

export function ProjectsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [visibleCards, setVisibleCards] = useState<boolean[]>([])
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          projects.forEach((_, index) => {
            setTimeout(() => {
              setVisibleCards((prev) => {
                const newVisible = [...prev]
                newVisible[index] = true
                return newVisible
              })
            }, index * 300)
          })
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const projects = [
    {
      title: "Cloud Migration Accelerator",
      description:
        "Enterprise-grade automation tool for seamless database migrations (Teradata → Snowflake/Redshift/Synapse). Reduced manual conversion effort by 98% and enabled one-click deployments.",
      highlights: [
        "Built intelligent SQL parser with regex-based query transformation",
        "Automated schema mapping and data type conversion across platforms",
        "Integrated CI/CD pipelines for automated testing and deployment",
        "Delivered $2M+ cost savings through migration automation",
      ],
      skills: ["Python", "Flask", "React", "AWS", "Snowflake", "Teradata", "CI/CD"],
      icon: Cloud,
      category: "Enterprise Solution",
    },
    {
      title: "AI-Powered Customer Engagement Platform",
      description:
        "Conversational AI system with multi-channel support (voice + chat) using AWS Bedrock and Anthropic Claude. Achieved <200ms response latency for thousands of daily interactions.",
      highlights: [
        "Integrated AWS Lex, Connect, and Bedrock for seamless voice/chat experience",
        "Implemented vector-based knowledge retrieval for contextual responses",
        "Built scalable microservices architecture with NestJS and DynamoDB",
        "Designed real-time analytics dashboard for conversation insights",
      ],
      skills: ["AWS Bedrock", "NestJS", "DynamoDB", "AI/ML", "Microservices", "Real-time Analytics"],
      icon: Brain,
      category: "AI Solution",
    },
    {
      title: "Comparative Analysis: VGG-16 vs ResNet-18",
      description:
        "Deep learning research project comparing CNN architectures for multi-class image classification. Achieved 90.6% accuracy with ResNet-18 while analyzing gradient flow patterns.",
      highlights: [
        "Built VGG-16 (92M params) and ResNet-18 (12M params) from scratch in PyTorch",
        "ResNet skip connections showed 10x higher early-layer L2 norms",
        "Reduced test error by 12% using mixup and label smoothing techniques",
        "Achieved 3.2x faster convergence with SGD & RMSprop vs Adam optimizer",
      ],
      skills: ["PyTorch", "Deep Learning", "Computer Vision", "Python", "Research"],
      github: "https://github.com/Ankit-Mukherjee/VGG-vs-Resnet",
      icon: Code,
      category: "Research Project",
    },
    {
      title: "FitFuel - AI Diet App",
      description:
        "Intelligent nutrition application providing personalized meal plans through fine-tuned language models and interactive data visualizations.",
      highlights: [
        "Fine-tuned DistilGPT-2 on structured nutrition data for meal recommendations",
        "Built responsive Next.js frontend with D3.js visualizations",
        "Containerized full-stack app using Docker with NGINX reverse proxy",
        "Deployed on DigitalOcean with automated CI/CD pipeline",
      ],
      skills: ["Next.js", "FastAPI", "Docker", "AI/ML", "DigitalOcean", "NGINX", "D3.js"],
      github: "https://github.com/Ankit-Mukherjee/dietChartGenerator-",
      demo: "http://104.248.229.28/",
      icon: Database,
      category: "Full-Stack App",
    },
    {
      title: "Distributed Performance Analysis",
      description:
        "Comprehensive distributed computing project using Apache Spark and multiprocessing to solve computationally intensive tasks with performance comparisons across traditional and distributed methods.",
      highlights: [
        "Implemented Apache Spark solutions for edit distance computation, MLP inference, and flock simulation",
        "Built multiprocessing alternatives for performance comparison against traditional for-loop methods",
        "Developed Multi-Layer Perceptron inference using both non-Spark and Apache Spark implementations",
        "Created bird flock movement simulation with distributed computing optimization using Apache Spark",
      ],
      skills: [
        "Apache Spark",
        "Python",
        "Distributed Systems",
        "Multiprocessing",
        "Performance Analysis",
        "Machine Learning",
      ],
      github: "https://github.com/Ankit-Mukherjee/distributed-performance-analysis",
      icon: BarChart3,
      category: "Systems Project",
    },
    {
      title: "Handwritten Digit Classification",
      description:
        "Machine learning project implementing Logistic Regression and SVM classifiers for MNIST digit recognition with comprehensive performance analysis.",
      highlights: [
        "Implemented one-vs-all logistic regression and multi-class classification",
        "Built SVM classifiers with linear and RBF kernels for comparison",
        "Achieved high accuracy through hyperparameter tuning and optimization",
        "Conducted extensive performance analysis with visualization of results",
      ],
      skills: ["Python", "Scikit-learn", "Machine Learning", "SVM", "Logistic Regression", "MNIST"],
      github: "https://github.com/Ankit-Mukherjee/digit-classification-logreg-svm",
      icon: Target,
      category: "ML Project",
    },
  ]

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-muted/30 via-background to-primary/5 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 animate-pulse" />
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`transition-all duration-1500 ease-out transform ${
            isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-16 scale-75"
          }`}
        >
          <h2 className="text-4xl sm:text-5xl font-black text-center mb-16 text-foreground">
            Featured{" "}
            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">Projects</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`bg-card/80 backdrop-blur-sm border-border/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-700 group transform hover:scale-105 hover:-rotate-1 ${
                visibleCards[index] ? "opacity-100 translate-y-0 rotate-0" : "opacity-0 translate-y-20 rotate-6"
              }`}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <project.icon className="h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                      <Badge variant="secondary" className="text-xs font-semibold">
                        {project.category}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors duration-500 font-bold">
                      {project.title}
                    </CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 text-pretty leading-relaxed">{project.description}</p>

                <ul className="space-y-2 mb-6">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-start">
                      <span className="text-primary mr-2 mt-1 font-bold">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.skills.map((skill, i) => (
                    <Badge
                      key={i}
                      variant="outline"
                      className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3">
                  {project.github && (
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="hover:scale-105 transition-transform duration-300 bg-transparent"
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  )}
                  {project.demo && (
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="hover:scale-105 transition-transform duration-300 bg-transparent"
                    >
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
