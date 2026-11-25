import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ROASTERY_HIGHLIGHTS } from '@/data/brand'

export function StorySection() {
  return (
    <section id="story" className="border-t border-stone-200/80 bg-white py-24">
      <Container>
        <SectionHeading
          eyebrow="Our Roastery"
          title="Rooted in Local Coffee"
          subtitle="From highland harvests to your morning cup — simple craft, transparent sourcing, and unhurried hospitality."
        />

        <div className="mt-14 grid gap-10 md:grid-cols-3">
          {ROASTERY_HIGHLIGHTS.map((highlight) => (
            <article
              key={highlight.id}
              className="border-t border-stone-200 pt-6"
            >
              <span className="text-xs font-medium tracking-[0.2em] text-amber-800">
                {highlight.number}
              </span>
              <h3 className="mt-4 font-serif text-xl text-stone-900">
                {highlight.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-stone-500">
                {highlight.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}
