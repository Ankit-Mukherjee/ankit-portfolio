import { Splash } from "@/components/splash"
import { Nav } from "@/components/nav"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Featured } from "@/components/featured"
import { Services } from "@/components/services"
import { KindWords } from "@/components/kind-words"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f4f4f4]">
      <Splash />
      <Nav />
      <Hero />
      <About />
      <Featured />
      <Services />
      <KindWords />
      <Footer />
    </main>
  )
}
