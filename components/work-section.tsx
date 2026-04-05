"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { ArrowRight, X, Github, ExternalLink } from "lucide-react"

interface Project {
  title: string
  category: string
  image: string
  description: string
  details: string
  skills: string[]
  github?: string
  demo?: string
}

const projects: Project[] = [
  {
    title: "STORY WEAVER",
    category: "GenAI / Full-Stack",
    image: "https://images.unsplash.com/photo-1516414447565-b14be0adf13e?w=800&q=80&auto=format&fit=crop",
    description: "AI-powered collaborative storytelling with Gemini.",
    details: "Interactive storytelling app where users co-write narratives with Google Gemini 2.5 Flash. Maintains 100% character and plot consistency across turns via full-history context. Features genre-specific guidance for Fantasy, Sci-Fi, Mystery, Romance, Horror, and Comedy — plus branching plot choices, genre remix, and live character extraction.",
    skills: ["Next.js", "TypeScript", "FastAPI", "Gemini AI", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/Ankit-Mukherjee/story-weaver",
  },
  {
    title: "FILMIC TECH",
    category: "Founding Engineer",
    image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800&q=80&auto=format&fit=crop",
    description: "Seed-funded MVP with real-time collaboration.",
    details: "Led end-to-end development of a seed-funded startup MVP as the founding engineer. Built a React frontend with real-time collaboration features powered by WebSockets and a NestJS backend with PostgreSQL.",
    skills: ["React", "NestJS", "WebSockets", "PostgreSQL", "System Design"],
  },
  {
    title: "FITFLOW COACH",
    category: "AI / RAG",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80&auto=format&fit=crop",
    description: "Multi-agent AI fitness coach with RAG-powered memory.",
    details: "AI fitness coaching system using LangGraph to orchestrate specialized agents for nutrition and workout planning. Features vector-powered note storage via Astra DB with NVIDIA AI search, enabling semantic retrieval of past coaching insights. Personalized macro recommendations adapt over time through Retrieval-Augmented Generation.",
    skills: ["LangGraph", "FastAPI", "React", "Astra DB", "NVIDIA AI", "LangFlow"],
    github: "https://github.com/Ankit-Mukherjee/Fit-App",
  },
  {
    title: "FITFUEL",
    category: "Fine-Tuned LLM",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80&auto=format&fit=crop",
    description: "Personalized diet plans from a fine-tuned DistilGPT-2.",
    details: "Full-stack AI nutrition app powered by a DistilGPT-2 model fine-tuned on a custom diet dataset. Generates tailored meal plans based on individual health profiles including diabetes, hypertension, and macro targets. User auth via Supabase, containerized with Docker, deployed on DigitalOcean.",
    skills: ["DistilGPT-2", "PyTorch", "FastAPI", "Next.js", "Docker", "Supabase"],
    github: "https://github.com/Ankit-Mukherjee/dietChartGenerator-",
  },
  {
    title: "BREAST CANCER AI",
    category: "Deep Learning / XAI",
    image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800&q=80&auto=format&fit=crop",
    description: "CNN classifier with Grad-CAM explainability.",
    details: "End-to-end ML pipeline for binary classification on the BreastMNIST dataset (malignant vs. benign). Custom 3-block CNN trained with aggressive data augmentation on ~550 images. Exported to ONNX for low-latency inference. Implements Grad-CAM heatmaps showing which image regions influenced predictions. Full-stack with FastAPI backend and React/TypeScript frontend.",
    skills: ["PyTorch", "ONNX", "Grad-CAM", "FastAPI", "React", "TypeScript"],
    github: "https://github.com/Ankit-Mukherjee/breastmnist-classification",
  },
  {
    title: "AI ENGAGE",
    category: "Conversational AI",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80&auto=format&fit=crop",
    description: "Voice + chat with sub-200ms latency.",
    details: "Multi-channel AI customer engagement system with voice and chat. Powered by AWS Bedrock and Anthropic Claude with vector-based knowledge retrieval. Sub-200ms latency.",
    skills: ["AWS Bedrock", "NestJS", "DynamoDB", "Anthropic Claude", "Vector Search"],
  },
  {
    title: "SPARK BENCH",
    category: "Distributed Computing",
    image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&q=80&auto=format&fit=crop",
    description: "Sequential vs. parallel vs. Spark performance analysis.",
    details: "Benchmarks three compute-intensive problems — edit distance, MLP inference, and flock simulation — across sequential, Python multiprocessing, and Apache Spark paradigms. Reveals how distributed frameworks excel at scale despite initial overhead, with direct performance comparisons across methodologies.",
    skills: ["Apache Spark", "Python", "Multiprocessing", "MLP", "Data Analysis"],
    github: "https://github.com/Ankit-Mukherjee/distributed-performance-analysis",
  },
  {
    title: "PALETTE SHIFT",
    category: "Computer Vision",
    image: "https://images.unsplash.com/photo-1550859492-d5da9d8e45f3?w=800&q=80&auto=format&fit=crop",
    description: "K-means color compression and palette transfer.",
    details: "ML-powered image processing tool that compresses images by clustering their color palette with k-means, then transfers that palette to recolor a second image via k-nearest neighbors. Uses the Elbow Method to determine optimal cluster count, maintaining visual quality while reducing color complexity.",
    skills: ["Python", "Scikit-learn", "K-Means", "KNN", "Pillow", "NumPy"],
    github: "https://github.com/Ankit-Mukherjee/cluster-based-image-editing",
  },
  {
    title: "DIGIT CLASSIFY",
    category: "Machine Learning",
    image: "https://images.unsplash.com/photo-1457904375453-3e1fc2fc76f4?w=800&q=80&auto=format&fit=crop",
    description: "MNIST classification — Logistic Regression vs. SVM.",
    details: "Comparative study of three ML classifiers on MNIST: binary logistic regression (one-vs-all), multi-class softmax, and SVMs with linear and RBF kernels. Includes hyperparameter tuning across regularization values with accuracy visualization across train, validation, and test splits.",
    skills: ["Python", "Scikit-learn", "SVM", "Logistic Regression", "NumPy", "Matplotlib"],
    github: "https://github.com/Ankit-Mukherjee/digit-classification-logreg-svm",
  },
  {
    title: "NEURAL NET",
    category: "Deep Learning",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80&auto=format&fit=crop",
    description: "From-scratch neural network for MNIST + CelebA.",
    details: "Neural network built entirely from scratch using NumPy — no PyTorch or TensorFlow. Implements forward/back propagation with sigmoid activations and L-BFGS optimization. Trained on MNIST for digit recognition and CelebA for face attribute classification, demonstrating deep learning fundamentals at the lowest level.",
    skills: ["Python", "NumPy", "SciPy", "Neural Networks", "Backpropagation"],
    github: "https://github.com/Ankit-Mukherjee/Neural-Network-MNIST-CelebA",
  },
  {
    title: "ML FOUNDATIONS",
    category: "Statistical Learning",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80&auto=format&fit=crop",
    description: "LDA, QDA, Ridge Regression, and polynomial transforms.",
    details: "Implements core statistical learning methods from scratch: Linear and Quadratic Discriminant Analysis with decision boundary visualization, OLS and Ridge regression with regularization tuning, gradient descent optimization, and non-linear regression via polynomial feature transforms. Comparative analysis across all approaches on classification and regression tasks.",
    skills: ["Python", "NumPy", "SciPy", "LDA", "QDA", "Ridge Regression", "Matplotlib"],
    github: "https://github.com/Ankit-Mukherjee/ML_Regression_Discriminants",
  },
]

export function WorkSection() {
  const sectionRef = useRef(null)
  const inView = useInView(sectionRef, { once: true, margin: "-100px" })
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const scrollRef = useRef<HTMLDivElement>(null)

  // Start in the middle set so user can scroll both directions
  useEffect(() => {
    const el = scrollRef.current
    if (el) {
      el.scrollLeft = el.scrollWidth / 3
    }
  }, [])

  // Infinite scroll: when user scrolls near the end or start, jump seamlessly
  const handleScroll = () => {
    const el = scrollRef.current
    if (!el) return
    const third = el.scrollWidth / 3

    if (el.scrollLeft >= third * 2) {
      el.scrollLeft -= third
    } else if (el.scrollLeft <= 0) {
      el.scrollLeft += third
    }
  }

  return (
    <section id="work" ref={sectionRef} className="py-24 sm:py-32 bg-neutral-50 overflow-hidden">
      <div className="px-6 sm:px-10">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-[20vw] sm:text-[15vw] lg:text-[12vw] font-bold leading-[0.85] tracking-[-0.04em] text-black text-center"
        >
          WORK
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-[11px] font-medium tracking-[0.3em] text-neutral-400 text-center mt-4 mb-16"
        >
          SCROLL TO EXPLORE
        </motion.p>
      </div>

      {/* Manual infinite scroll carousel */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex items-start gap-5 sm:gap-6 overflow-x-auto px-6 sm:px-10 pb-6"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {/* Triple the list: [projects] [projects] [projects] — start in the middle set */}
          {[...projects, ...projects, ...projects].map((project, i) => (
            <ProjectCard key={`${i}-${project.title}`} project={project} index={i % projects.length} onClick={() => setSelectedProject(project)} />
          ))}
        </div>
      </motion.div>

      {/* Project detail modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>
    </section>
  )
}

// Each card: unique width + height. All top-aligned, varied shapes (tall, short, landscape, portrait)
const cardStyles = [
  { w: 300, h: "h-[220px] sm:h-[340px]" },   // landscape-ish
  { w: 320, h: "h-[300px] sm:h-[460px]" },   // tall portrait
  { w: 350, h: "h-[200px] sm:h-[280px]" },   // wide landscape
  { w: 280, h: "h-[280px] sm:h-[420px]" },   // tall narrow
  { w: 330, h: "h-[230px] sm:h-[350px]" },   // medium
  { w: 290, h: "h-[310px] sm:h-[480px]" },   // tallest
  { w: 340, h: "h-[210px] sm:h-[300px]" },   // landscape
  { w: 300, h: "h-[270px] sm:h-[400px]" },   // portrait
  { w: 360, h: "h-[190px] sm:h-[260px]" },   // widest + shortest
  { w: 280, h: "h-[290px] sm:h-[440px]" },   // tall narrow
  { w: 320, h: "h-[240px] sm:h-[360px]" },   // medium
]

function ProjectCard({ project, index, onClick }: { project: Project; index: number; onClick: () => void }) {
  const style = cardStyles[index % cardStyles.length]

  return (
    <div
      className="shrink-0 group cursor-pointer"
      style={{ width: `${style.w}px` }}
      onClick={onClick}
    >
      <div className={`relative ${style.h} overflow-hidden rounded-sm`}>
        <Image
          src={project.image}
          alt={project.title}
          fill
          loading="lazy"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="mt-3 flex items-start justify-between">
        <div>
          <h3 className="text-sm font-bold tracking-wide text-black">{project.title}</h3>
          <p className="text-[11px] text-neutral-400 mt-0.5">{project.category}</p>
        </div>
        <ArrowRight className="w-4 h-4 text-neutral-300 group-hover:text-black group-hover:translate-x-1 transition-all duration-300 mt-1" />
      </div>
    </div>
  )
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.98 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="relative bg-white max-w-2xl w-full max-h-[85vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-white/90 hover:bg-black hover:text-white transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>
        <div className="relative h-[250px] sm:h-[300px] overflow-hidden">
          <Image src={project.image} alt={project.title} fill className="object-cover" />
        </div>
        <div className="p-6 sm:p-8">
          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-black">{project.title}</h3>
          <p className="text-[11px] font-medium tracking-[0.2em] text-neutral-400 mb-6 mt-1">{project.category}</p>
          <p className="text-sm text-neutral-600 leading-relaxed mb-6">{project.details}</p>
          <div className="mb-6">
            <span className="text-[11px] font-medium tracking-[0.3em] text-neutral-400 block mb-3">TECH STACK</span>
            <div className="flex flex-wrap gap-2">
              {project.skills.map((skill) => (
                <span key={skill} className="text-xs px-3 py-1.5 border border-neutral-200 text-neutral-600">{skill}</span>
              ))}
            </div>
          </div>
          {(project.github || project.demo) && (
            <div className="flex gap-3 pt-4 border-t border-neutral-200">
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-2.5 border-2 border-black text-sm font-bold tracking-wider uppercase hover:bg-black hover:text-white transition-all duration-300">
                  <Github className="w-4 h-4" /> GitHub
                </a>
              )}
              {project.demo && (
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-2.5 border-2 border-black text-sm font-bold tracking-wider uppercase hover:bg-black hover:text-white transition-all duration-300">
                  <ExternalLink className="w-4 h-4" /> Live Demo
                </a>
              )}
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  )
}
