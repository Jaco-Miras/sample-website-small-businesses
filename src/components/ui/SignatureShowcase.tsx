import { useEffect, useState } from "react";
import type { DishCategory, MenuItem } from "@/types";
import { formatPrice } from "@/utils/format";

interface SignatureShowcaseProps {
  items: MenuItem[];
  categories: DishCategory[];
  intervalMs?: number;
}

export function SignatureShowcase({
  items,
  categories,
  intervalMs = 5000,
}: SignatureShowcaseProps) {
  const [categoryIndex, setCategoryIndex] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const activeCategory = categories[categoryIndex % categories.length];
  const categoryItems = items.filter(
    (item) => item.category === activeCategory,
  );

  const count = categoryItems.length;
  const safeIndex = count > 0 ? activeIndex % count : 0;
  const currentItem = categoryItems[safeIndex];

  useEffect(() => {
    if (count <= 1 || isPaused) return;

    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % count);
    }, intervalMs);

    return () => window.clearInterval(timer);
  }, [count, intervalMs, isPaused]);

  if (!currentItem) return null;

  const handleNextCategory = () => {
    setCategoryIndex((prev) => (prev + 1) % categories.length);
    setActiveIndex(0);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + count) % count);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % count);
  };

  return (
    <div
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={() => setIsPaused(false)}
      className="rounded-2xl border border-stone-200 bg-white p-8 sm:p-10"
    >
      <div className="flex items-center justify-between gap-4 border-b border-stone-100 pb-4 text-[11px] font-semibold tracking-[0.18em] uppercase">
        <span className="text-amber-800">
          {currentItem.badge ?? "Featured"}
        </span>

        <button
          type="button"
          onClick={handleNextCategory}
          title="Click to switch category"
          aria-label={`Switch category, current category ${activeCategory}`}
          className="inline-flex cursor-pointer items-center gap-1.5 border-b border-dashed border-stone-300 pb-0.5 text-stone-500 transition-colors hover:border-stone-900 hover:text-stone-900"
        >
          <span>{activeCategory}</span>
          <span aria-hidden="true" className="text-[10px]">
            &#8635;
          </span>
        </button>
      </div>

      <div
        key={currentItem.id}
        aria-live="polite"
        className="animate-signature-fade mt-8 min-h-43"
      >
        <div className="flex items-baseline justify-between gap-4">
          <h2 className="font-serif text-2xl text-stone-900 sm:text-3xl">
            {currentItem.name}
          </h2>
          <span className="shrink-0 text-lg font-medium text-stone-900 tabular-nums">
            {formatPrice(currentItem.price)}
          </span>
        </div>

        <p className="mt-4 text-sm leading-relaxed text-stone-500">
          {currentItem.description}
        </p>

        <p className="mt-6 text-xs tracking-wide text-stone-400">
          {currentItem.servingNote}
        </p>
      </div>

      <div className="mt-8 flex items-center justify-between gap-4 border-t border-stone-100 pt-5">
        <a
          href="#menu"
          className="inline-flex items-center gap-2 text-sm font-medium text-stone-900 transition-colors hover:text-amber-800"
        >
          <span>View Full Menu</span>
          <span aria-hidden="true">&rarr;</span>
        </a>

        {count > 1 && (
          <div className="flex items-center gap-3">
            <div
              role="tablist"
              aria-label={`${activeCategory} items`}
              className="flex items-center gap-1.5"
            >
              {categoryItems.map((item, index) => {
                const isActive = index === safeIndex;
                return (
                  <button
                    key={item.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    aria-label={`Show ${item.name}`}
                    onClick={() => setActiveIndex(index)}
                    className={`h-1.5 cursor-pointer rounded-full transition-all ${
                      isActive
                        ? "w-5 bg-stone-900"
                        : "w-1.5 bg-stone-300 hover:bg-stone-500"
                    }`}
                  />
                );
              })}
            </div>

            <div className="flex items-center gap-1 border-l border-stone-200 pl-3">
              <button
                type="button"
                onClick={handlePrev}
                aria-label={`Previous ${activeCategory} item`}
                className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-full text-xs text-stone-500 transition-colors hover:bg-stone-100 hover:text-stone-900"
              >
                &larr;
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label={`Next ${activeCategory} item`}
                className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-full text-xs text-stone-500 transition-colors hover:bg-stone-100 hover:text-stone-900"
              >
                &rarr;
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
