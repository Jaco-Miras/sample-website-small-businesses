import { Container } from '@/components/ui/Container'
import { SignatureShowcase } from '@/components/ui/SignatureShowcase'
import { HERO_CONTENT } from '@/data/brand'
import { MENU_ITEMS, SHOWCASE_CATEGORIES } from '@/data/menu'

export function HeroSection() {
  return (
    <section className="border-b border-stone-200/80 py-20 lg:py-28">
      <Container className="grid gap-16 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-7">
          <p className="text-[11px] font-semibold tracking-[0.2em] text-amber-800 uppercase">
            {HERO_CONTENT.eyebrow}
          </p>
          <h1 className="mt-5 font-serif text-4xl leading-[1.1] font-normal tracking-tight text-stone-900 sm:text-5xl lg:text-6xl">
            {HERO_CONTENT.headline}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-stone-500 sm:text-lg">
            {HERO_CONTENT.description}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-6">
            <a
              href={HERO_CONTENT.primaryCta.href}
              className="rounded-full bg-stone-900 px-7 py-3.5 text-sm font-medium text-stone-50 transition-colors hover:bg-amber-900"
            >
              {HERO_CONTENT.primaryCta.label}
            </a>
            <a
              href={HERO_CONTENT.secondaryCta.href}
              className="border-b border-stone-400 pb-0.5 text-sm font-medium text-stone-700 transition-colors hover:border-stone-900 hover:text-stone-900"
            >
              {HERO_CONTENT.secondaryCta.label}
            </a>
          </div>
        </div>

        <div className="lg:col-span-5">
          <SignatureShowcase
            items={MENU_ITEMS}
            categories={SHOWCASE_CATEGORIES}
          />
        </div>
      </Container>
    </section>
  )
}
