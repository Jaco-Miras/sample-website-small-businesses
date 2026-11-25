interface SectionHeadingProps {
  eyebrow: string
  title: string
  subtitle?: string
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: SectionHeadingProps) {
  return (
    <div>
      <p className="text-[11px] font-semibold tracking-[0.2em] text-amber-800 uppercase">
        {eyebrow}
      </p>
      <h2 className="mt-3 font-serif text-3xl font-normal tracking-tight text-stone-900 sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-stone-500 sm:text-base">
          {subtitle}
        </p>
      )}
    </div>
  )
}
