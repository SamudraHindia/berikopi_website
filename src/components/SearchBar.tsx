import { Search, X } from 'lucide-react'

type SearchBarProps = {
  value: string
  onChange: (value: string) => void
  resultCount?: number
}

export function SearchBar({ value, onChange, resultCount }: SearchBarProps) {
  return (
    <div className="relative w-full">
      <Search
        className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-espresso/40"
        strokeWidth={2.4}
        aria-hidden="true"
      />
      <input
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Cari kopi, matcha, makanan…"
        aria-label="Cari produk di menu"
        className="h-12 w-full rounded-full border border-espresso/10 bg-white pl-11 pr-24 text-sm font-medium text-espresso shadow-sm outline-none transition-colors placeholder:text-espresso/35 focus:border-beri-red focus:ring-0"
      />
      <div className="absolute right-2 top-1/2 flex -translate-y-1/2 items-center gap-1">
        {value ? (
          <button
            type="button"
            onClick={() => onChange('')}
            className="flex h-8 w-8 items-center justify-center rounded-full text-espresso/50 transition-colors hover:bg-espresso/5 hover:text-espresso"
            aria-label="Hapus pencarian"
          >
            <X className="h-4 w-4" strokeWidth={2.3} />
          </button>
        ) : (
          typeof resultCount === 'number' && (
            <span className="pr-3 text-[10px] font-bold uppercase tracking-[0.12em] text-espresso/35">
              {resultCount} item
            </span>
          )
        )}
      </div>
    </div>
  )
}
