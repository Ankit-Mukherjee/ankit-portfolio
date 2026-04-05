import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { MarqueeSection } from "@/components/marquee-section"
import { SkillsSection } from "@/components/skills-section"
import { ExperienceSection } from "@/components/experience-section"
import { WorkSection } from "@/components/work-section"
import { EducationSection } from "@/components/education-section"
import { ContactSection } from "@/components/contact-section"
import { FooterSection } from "@/components/footer-section"
import { CursorHeatmap } from "@/components/cursor-heatmap"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <CursorHeatmap />
      <Navigation />
      <HeroSection />
      <AboutSection />
      <MarqueeSection />
      <SkillsSection />
      <ExperienceSection />
      <WorkSection />
      <EducationSection />
      <ContactSection />
      <FooterSection />
    </main>
  )
}
