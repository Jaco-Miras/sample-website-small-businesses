import { useState } from 'react'
import { Container } from '@/components/ui/Container'
import { MenuCard } from '@/components/ui/MenuCard'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { MENU_CATEGORIES, MENU_ITEMS } from '@/data/menu'
import type { MenuCategory } from '@/types'

export function MenuSection() {
  const [selectedCategory, setSelectedCategory] = useState<MenuCategory>('All')

  const filteredItems =
    selectedCategory === 'All'
      ? MENU_ITEMS
      : MENU_ITEMS.filter((item) => item.category === selectedCategory)

  return (
    <section id="menu" className="py-24">
      <Container>
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Bar Menu"
            title="Coffee & Daily Bakes"
            subtitle="Pulled to order using freshly roasted Philippine beans, paired with pastries baked every morning."
          />

          <div
            role="tablist"
            aria-label="Menu categories"
            className="flex flex-wrap gap-x-6 gap-y-2 border-b border-stone-200 pb-2"
          >
            {MENU_CATEGORIES.map((category) => {
              const isActive = selectedCategory === category
              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setSelectedCategory(category)}
                  className={`cursor-pointer pb-2 text-sm transition-colors ${
                    isActive
                      ? '-mb-[9px] border-b-2 border-stone-900 font-medium text-stone-900'
                      : 'text-stone-400 hover:text-stone-700'
                  }`}
                >
                  {category}
                </button>
              )
            })}
          </div>
        </div>

        <div className="mt-12 grid gap-x-12 md:grid-cols-2">
          {filteredItems.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>
      </Container>
    </section>
  )
}
