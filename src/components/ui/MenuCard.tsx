import type { MenuItem } from '@/types'
import { formatPrice } from '@/utils/format'

interface MenuCardProps {
  item: MenuItem
}

export function MenuCard({ item }: MenuCardProps) {
  return (
    <article className="group flex flex-col justify-between border-t border-stone-200 py-6 transition-colors hover:border-stone-400">
      <div>
        <div className="flex items-baseline justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2.5">
            <h3 className="font-serif text-xl text-stone-900">{item.name}</h3>
            {item.badge && (
              <span className="text-[10px] font-semibold tracking-[0.15em] text-amber-800 uppercase">
                · {item.badge}
              </span>
            )}
          </div>
          <span className="shrink-0 text-base font-medium text-stone-900 tabular-nums">
            {formatPrice(item.price)}
          </span>
        </div>

        <p className="mt-2 text-sm leading-relaxed text-stone-500">
          {item.description}
        </p>
      </div>

      <p className="mt-3 text-xs tracking-wide text-stone-400">
        {item.category} &mdash; {item.servingNote}
      </p>
    </article>
  )
}
