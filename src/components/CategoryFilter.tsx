type CategoryFilterProps = {
  categories: readonly string[]
  counts: Record<string, number>
  active: string
  total: number
  onChange: (category: string) => void
}

export function CategoryFilter({ categories, counts, active, total, onChange }: CategoryFilterProps) {
  return (
    <div
      className="scrollbar-none -mx-1 flex gap-2 overflow-x-auto px-1 pb-1 lg:mx-0 lg:flex-wrap lg:overflow-visible lg:px-0"
      role="group"
      aria-label="Filter kategori menu"
    >
      <button
        type="button"
        onClick={() => onChange('All')}
        aria-pressed={active === 'All'}
        className={`shrink-0 rounded-full border px-4 py-2.5 text-xs font-bold transition-colors ${
          active === 'All'
            ? 'border-beri-red bg-beri-red text-cream shadow-[0_3px_0_0_#A80C20]'
            : 'border-espresso/10 bg-white text-espresso/65 hover:border-espresso/30 hover:text-espresso'
        }`}
      >
        Semua <span className="ml-1 opacity-60">{total}</span>
      </button>
      {categories.map((category) => (
        <button
          key={category}
          type="button"
          onClick={() => onChange(category)}
          aria-pressed={active === category}
          className={`shrink-0 rounded-full border px-4 py-2.5 text-xs font-bold transition-colors ${
            active === category
              ? 'border-beri-red bg-beri-red text-cream shadow-[0_3px_0_0_#A80C20]'
              : 'border-espresso/10 bg-white text-espresso/65 hover:border-espresso/30 hover:text-espresso'
          }`}
        >
          {category} <span className="ml-1 opacity-60">{counts[category] ?? 0}</span>
        </button>
      ))}
    </div>
  )
}
