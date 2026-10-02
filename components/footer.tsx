import { Plus } from "lucide-react"
import { links } from "./site-data"

export function Footer() {
  return (
    <footer className="bg-[#101010] px-6 pb-8 pt-32 text-[#f4f4f4]">
      <div className="text-center">
        <h2 className="display text-6xl sm:text-9xl">Got an idea</h2>
        <p className="font-serif-display text-6xl leading-[0.9] sm:text-9xl">to bring to life?</p>
        <p className="mt-6 text-xs">Say what you&apos;re working on. I&apos;ll help make it real.</p>
        <a
          href={links.email}
          className="mt-8 inline-flex items-center gap-2 bg-[#f086d0] px-4 py-2.5 text-[11px] font-semibold uppercase text-black"
        >
          <Plus size={14} /> Say hello
        </a>
      </div>

      <div className="mx-auto mt-28 grid max-w-6xl gap-12 border-t border-white/15 pt-12 sm:grid-cols-[1fr_auto_auto]">
        <p className="font-script text-7xl leading-none sm:text-9xl">Ankit</p>
        <div className="text-sm leading-7">
          <p className="mb-2 text-[11px] font-semibold uppercase">Navigate</p>
          {["Over|#over", "Werk|#work", "What I do|#services", "Contact|" + links.email].map((l) => {
            const [t, h] = l.split("|")
            return (
              <a key={t} href={h} className="block text-white/70 hover:text-white">
                {t}
              </a>
            )
          })}
        </div>
        <div className="text-sm leading-7">
          <p className="mb-2 text-[11px] font-semibold uppercase">Contact</p>
          <a href={links.email} className="block text-white/70 hover:text-white">ank26.m@gmail.com</a>
          <a href={links.github} target="_blank" rel="noopener noreferrer" className="block text-white/70 hover:text-white">GitHub</a>
          <a href={links.linkedin} target="_blank" rel="noopener noreferrer" className="block text-white/70 hover:text-white">LinkedIn</a>
        </div>
      </div>
      <p className="mx-auto mt-16 max-w-6xl text-[11px] text-white/50">© {new Date().getFullYear()} Ankit Mukherjee</p>
    </footer>
  )
}
