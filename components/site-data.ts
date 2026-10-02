export const links = {
  github: "https://github.com/Ankit-Mukherjee",
  linkedin: "https://www.linkedin.com/in/ankit281",
  email: "mailto:ank26.m@gmail.com",
  resume: "/Ankit_Resume.pdf",
}

export const logos = {
  pure: { name: "Pure Storage", src: "/logos/pure-storage.svg", h: 22 },
  askturing: { name: "AskTuring.ai", src: "/logos/askturing.png", h: 44 },
  pwc: { name: "PwC", src: "/logos/pwc.svg", h: 40 },
  buffalo: { name: "University at Buffalo", src: "/logos/buffalo.png", h: 44 },
}

export const featured = [
  {
    title: "STORY WEAVER",
    tag: "GenAI / Full-Stack",
    image: "https://images.unsplash.com/photo-1516414447565-b14be0adf13e?w=1600&q=80&auto=format&fit=crop",
    frame: "#f4d97a",
    text: "Co-write narratives with Gemini 2.5 Flash — 100% character and plot consistency across turns, branching choices and genre remix.",
    href: "https://github.com/Ankit-Mukherjee/story-weaver",
  },
  {
    title: "AI ENGAGE",
    tag: "Conversational AI",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1600&q=80&auto=format&fit=crop",
    frame: "#1230f0",
    text: "Voice + chat customer engagement on AWS Bedrock and Anthropic Claude with vector retrieval and sub-200ms latency.",
    href: links.linkedin,
  },
  {
    title: "FITFLOW COACH",
    tag: "Multi-agent / RAG",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1600&q=80&auto=format&fit=crop",
    frame: "#e8553a",
    text: "LangGraph agents for nutrition and workouts, with Astra DB vector memory that adapts macro plans over time.",
    href: "https://github.com/Ankit-Mukherjee/Fit-App",
  },
  {
    title: "BREAST CANCER AI",
    tag: "Deep Learning / XAI",
    image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=1600&q=80&auto=format&fit=crop",
    frame: "#f086d0",
    text: "Custom CNN exported to ONNX with Grad-CAM heatmaps, served by FastAPI and a React/TypeScript frontend.",
    href: "https://github.com/Ankit-Mukherjee/breastmnist-classification",
  },
  {
    title: "FILMIC TECH",
    tag: "Founding Engineer",
    image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=1600&q=80&auto=format&fit=crop",
    frame: "#8fd3b6",
    text: "Founding engineer on a seed-funded MVP: React, NestJS, PostgreSQL and real-time collaboration over WebSockets.",
    href: links.linkedin,
  },
]

export const moreProjects = [
  { title: "FitFuel", tag: "Fine-tuned DistilGPT-2 diet planner", href: "https://github.com/Ankit-Mukherjee/dietChartGenerator-" },
  { title: "Spark Bench", tag: "Sequential vs. parallel vs. Spark", href: "https://github.com/Ankit-Mukherjee/distributed-performance-analysis" },
  { title: "Palette Shift", tag: "K-means colour palette transfer", href: "https://github.com/Ankit-Mukherjee/cluster-based-image-editing" },
  { title: "Digit Classify", tag: "Logistic regression vs. SVM on MNIST", href: "https://github.com/Ankit-Mukherjee/digit-classification-logreg-svm" },
  { title: "Neural Net", tag: "From-scratch NumPy network", href: "https://github.com/Ankit-Mukherjee/Neural-Network-MNIST-CelebA" },
  { title: "ML Foundations", tag: "LDA, QDA, Ridge from scratch", href: "https://github.com/Ankit-Mukherjee/ML_Regression_Discriminants" },
]

export const skills = [
  { title: "GENAI & ML", text: "LLMs (OpenAI, Gemini, Anthropic), LangGraph, agentic RAG, RAGAS, PyTorch, CNNs, NLP and computer vision." },
  { title: "BACKEND", text: "Python (FastAPI), Node.js (NestJS), TypeScript, Go, Java, C++ and SQL — built for real traffic." },
  { title: "DATA", text: "Weaviate, pgvector, PostgreSQL, Redis, Kafka, Dramatiq and DynamoDB." },
  { title: "CLOUD & DEVOPS", text: "AWS (EKS, Lambda, Bedrock, CloudFormation), Docker, Kubernetes, GitHub Actions and CI/CD." },
  { title: "FRONTEND & MOBILE", text: "React, Redux, Next.js, JavaScript, HTML5/CSS3 and iOS development with Swift." },
  { title: "OBSERVABILITY", text: "Prometheus, Grafana, Langfuse, PostHog, OpenTelemetry and CloudWatch." },
]

export const experience = [
  {
    company: "PURE STORAGE",
    logo: "pure",
    role: "AI Engineer",
    period: "Present",
    text: "Building production-grade agentic AI systems that drive enterprise automation and digital transformation. Designing and deploying LLM-based services with prompt engineering, guardrails and model evaluation frameworks, delivered as secure, scalable, observable systems on AWS that plug into enterprise platforms.",
  },
  {
    company: "ASKTURING.AI",
    logo: "askturing",
    role: "Software Engineer — Feature Lead",
    period: "Previously",
    text: "Owned critical product initiatives from architecture and data modeling to production code. Led the Slack integration team, shipping an omni-channel enterprise chat experience from scratch. 12 API endpoints, 5 async workers and 100K+ messages ingested into Weaviate. A 44-node LangGraph pipeline with hybrid vector + BM25 search cut time-to-first-token by 40%, and an LLM-as-judge RAGAS framework lifted answer quality by 30%.",
  },
  {
    company: "PWC",
    logo: "pwc",
    role: "Software Engineer — High-Scale Systems",
    period: "Jul 2021 – Jul 2024",
    text: "Spearheaded a GenAI initiative that secured a $12M+ client contract with an AWS Bedrock RAG pipeline. Tech lead for an enterprise platform used by 1,000+ people, built Kafka + DynamoDB microservices that cut latency 40% through 300% traffic spikes, and a Stripe revenue engine processing $1M+ a year.",
  },
]

export const kindWords = [
  {
    name: "John",
    image: "/images/john.jpeg",
    who: "John P. Weiksnar — Tesla Owners Club NY State",
    text: "A pivotal member of the backend team — real-time chat over WebSockets, a scalable database design and AWS deployment.",
    href: "https://www.linkedin.com/in/john-p-weiksnar-122138/",
  },
  {
    name: "Neslihan",
    image: "/images/nes.jpeg",
    who: "Neslihan Kilic — Conversational AI at SAP",
    text: "Open, clear, and willing to bridge design and technology. The kind of teammate who elevates everyone's work.",
    href: "https://www.linkedin.com/in/neslihankilic/",
  },
  {
    name: "Bhagya",
    image: "/images/bhagya.jpeg",
    who: "Bhagya Pasupureddy — Gen AI Manager @ PwC",
    text: "Enthusiastic, adaptable and a quick learner with a natural knack for new tech. A true asset to any team.",
    href: "https://www.linkedin.com/in/bhagya-pasupureddy/",
  },
]
