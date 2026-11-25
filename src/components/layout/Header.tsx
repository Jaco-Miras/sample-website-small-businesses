import { Container } from '@/components/ui/Container'
import { BRAND, NAV_LINKS } from '@/data/brand'

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-stone-200/80 bg-[#faf8f5]/90 backdrop-blur-md">
      <Container className="flex items-center justify-between py-5">
        <a href="#top" className="flex items-baseline gap-3">
          <span className="font-serif text-xl tracking-tight text-stone-900">
            {BRAND.name}
          </span>
          <span className="hidden text-[11px] tracking-[0.18em] text-stone-400 uppercase sm:inline">
            {BRAND.tagline}
          </span>
        </a>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-8 text-sm text-stone-500 md:flex"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-stone-900"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#locations"
          className="border-b border-stone-900 pb-0.5 text-sm font-medium text-stone-900 transition-colors hover:border-amber-800 hover:text-amber-800"
        >
          {BRAND.cta}
        </a>
      </Container>
    </header>
  )
}
