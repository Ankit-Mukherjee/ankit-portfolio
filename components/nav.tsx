import { links } from "./site-data"

const items = [
  { label: "Over", href: "#over" },
  { label: "Werk", href: "#work" },
  { label: "What I do", href: "#services" },
]

export function Nav() {
  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 flex items-start justify-between px-4 pt-4 sm:px-6">
      <a href="#top" className="pointer-events-auto font-script text-3xl leading-none text-[#1230f0] sm:text-4xl">
        Ankit
      </a>
      <nav className="pointer-events-auto absolute left-1/2 top-4 hidden -translate-x-1/2 gap-5 rounded-sm bg-white px-4 py-3 text-[11px] font-semibold uppercase tracking-normal shadow-sm sm:flex">
        {items.map((i) => (
          <a key={i.href} href={i.href} className="transition-opacity hover:opacity-50">
            {i.label}
          </a>
        ))}
      </nav>
      <a
        href={links.email}
        className="pointer-events-auto flex items-center gap-2 rounded-sm bg-white px-3 py-3 text-[11px] font-semibold uppercase tracking-normal shadow-sm"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-[#1230f0]" />
        Contact
      </a>
    </header>
  )
}
