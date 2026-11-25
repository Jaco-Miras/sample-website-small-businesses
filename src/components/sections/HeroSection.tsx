import { Container } from '@/components/ui/Container'
import { HERO_CONTENT } from '@/data/brand'
import { FEATURED_MENU_ITEM } from '@/data/menu'
import { formatPrice } from '@/utils/format'

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
          <div className="rounded-2xl border border-stone-200 bg-white p-8 sm:p-10">
            <div className="flex items-center justify-between border-b border-stone-100 pb-4 text-[11px] font-semibold tracking-[0.18em] uppercase">
              <span className="text-amber-800">House Signature</span>
              <span className="text-stone-400">
                {FEATURED_MENU_ITEM.category}
              </span>
            </div>

            <div className="mt-8">
              <div className="flex items-baseline justify-between gap-4">
                <h2 className="font-serif text-2xl text-stone-900 sm:text-3xl">
                  {FEATURED_MENU_ITEM.name}
                </h2>
                <span className="shrink-0 text-lg font-medium text-stone-900 tabular-nums">
                  {formatPrice(FEATURED_MENU_ITEM.price)}
                </span>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-stone-500">
                {FEATURED_MENU_ITEM.description}
              </p>

              <p className="mt-6 text-xs tracking-wide text-stone-400">
                {FEATURED_MENU_ITEM.servingNote}
              </p>
            </div>

            <div className="mt-8 border-t border-stone-100 pt-5">
              <a
                href="#menu"
                className="inline-flex items-center gap-2 text-sm font-medium text-stone-900 transition-colors hover:text-amber-800"
              >
                <span>View Full Menu</span>
                <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
