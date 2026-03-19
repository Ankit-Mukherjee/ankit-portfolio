import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { ScrollReveal } from "@/components/scroll-reveal"
import { HorizontalProjects } from "@/components/horizontal-projects"
import { ExperienceSection } from "@/components/experience-section"
import { SkillsMarquee } from "@/components/skills-marquee"
import { AboutSection } from "@/components/about-section"
import { RecommendationsSection } from "@/components/recommendations-section"
import { ContactSection } from "@/components/contact-section"
import { FooterSection } from "@/components/footer-section"

export default function Home() {
  return (
    <main className="min-h-screen pb-0">
      <Navigation />
      <HeroSection />
      <ScrollReveal />
      <HorizontalProjects />
      <ExperienceSection />
      <SkillsMarquee />
      <AboutSection />
      <RecommendationsSection />
      <ContactSection />
      <FooterSection />
    </main>
  )
}
