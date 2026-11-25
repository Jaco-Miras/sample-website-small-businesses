import type { LocationItem } from '@/types'

interface LocationCardProps {
  location: LocationItem
  featured?: boolean
}

export function LocationCard({
  location,
  featured = false,
}: LocationCardProps) {
  if (featured) {
    return (
      <article className="rounded-2xl border border-stone-200 bg-[#faf8f5] p-8 sm:p-10">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200/80 pb-4 text-[11px] font-semibold tracking-[0.16em] uppercase">
          <span className="text-amber-800">{location.region}</span>
          <span className="text-stone-400">{location.status}</span>
        </div>

        <h3 className="mt-6 font-serif text-2xl text-stone-900 sm:text-3xl">
          {location.branch}
        </h3>

        <dl className="mt-6 grid gap-6 border-t border-stone-200/80 pt-6 sm:grid-cols-2">
          <div>
            <dt className="text-[11px] font-semibold tracking-[0.16em] text-stone-400 uppercase">
              Address
            </dt>
            <dd className="mt-2 text-sm leading-relaxed text-stone-600">
              {location.address}
            </dd>
          </div>
          <div>
            <dt className="text-[11px] font-semibold tracking-[0.16em] text-stone-400 uppercase">
              Hours
            </dt>
            <dd className="mt-2 text-sm leading-relaxed text-stone-600">
              {location.hours}
            </dd>
          </div>
        </dl>
      </article>
    )
  }

  return (
    <article className="border-t border-stone-200 pt-6">
      <div className="flex items-center justify-between gap-2 text-[11px] font-semibold tracking-[0.16em] uppercase">
        <span className="text-amber-800">{location.region}</span>
        <span className="text-stone-400">{location.status}</span>
      </div>
      <h3 className="mt-3 font-serif text-xl text-stone-900">
        {location.branch}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-stone-500">
        {location.address}
      </p>
      <p className="mt-3 text-xs text-stone-400">{location.hours}</p>
    </article>
  )
}
