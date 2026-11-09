import { useDeferredValue, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Coffee, SearchX, Sparkles } from 'lucide-react'
import { usePageMeta } from '../hooks/usePageMeta'
import type { Product } from '../data/menu'
import {
  PRODUCT_CATEGORIES,
  categoryCounts,
  formatPrice,
  products,
  totalFood,
  totalProducts,
} from '../data/menu'
import { ProductCard } from '../components/ProductCard'
import { ProductModal } from '../components/ProductModal'
import { SearchBar } from '../components/SearchBar'
import { CategoryFilter } from '../components/CategoryFilter'

const countMap = Object.fromEntries(categoryCounts.map(({ category, count }) => [category, count]))
const drinkCount = totalProducts - totalFood - countMap['Add On']
const addOnCount = countMap['Add On']

function slugify(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
}

export default function MenuPage() {
  usePageMeta({
    title: 'Menu Lengkap — Beri Kopi Jatinangor',
    description:
      'Jelajahi 89 menu Beri Kopi Jatinangor: es kopi susu, matcha, mocktail, non-kopi, main course, snack, roti, dan pisang. Lengkap dengan harga dan ukuran.',
  })

  const [query, setQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState('All')
  const [selected, setSelected] = useState<Product | null>(null)
  const deferredQuery = useDeferredValue(query)

  const filtered = useMemo(() => {
    const normalized = deferredQuery.trim().toLowerCase()

    return products.filter((product) => {
      const matchesCategory =
        activeCategory === 'All' || product.category === activeCategory
      const matchesQuery =
        !normalized ||
        [product.name, product.category, product.description ?? '']
          .join(' ')
          .toLowerCase()
          .includes(normalized)

      return matchesCategory && matchesQuery
    })
  }, [activeCategory, deferredQuery])

  const isGrouped = activeCategory === 'All' && deferredQuery.trim() === ''

  const grouped = useMemo(
    () =>
      PRODUCT_CATEGORIES.map((category) => ({
        category,
        items: filtered.filter((product) => product.category === category),
      })).filter((group) => group.items.length > 0),
    [filtered],
  )

  return (
    <div className="bg-cream">
      <section className="relative overflow-hidden pb-8 pt-10 sm:pb-10 sm:pt-14">
        <div className="paper-grain pointer-events-none absolute inset-0" aria-hidden="true" />
        <div
          className="pointer-events-none absolute -right-24 top-2 h-72 w-72 rounded-full bg-butter/60 blur-2xl"
          aria-hidden="true"
        />
        <div className="container-page relative">
          <div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="eyebrow text-beri-red">
                <span className="h-1.5 w-1.5 rounded-full bg-beri-red" />
                Digital menu · {totalProducts} pilihan
              </p>
              <h1 className="display-title mt-4 text-[clamp(4.5rem,14vw,10rem)] text-espresso">
                THE <span className="text-beri-red">MENU.</span>
              </h1>
              <p className="body-copy mt-4 max-w-xl">
                Semua menu Beri Kopi Jatinangor, langsung dari kartu menu asli.
                Pilih kategori, cari favoritmu, lalu klik kartu untuk lihat detail
                dan ukuran.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2.5 lg:justify-end">
              <span className="sticker bg-white/80 text-espresso/50">
                <Coffee className="h-3 w-3 text-beri-red" strokeWidth={2.4} />
                {drinkCount} minuman
              </span>
              <span className="sticker bg-white/80 text-espresso/50">
                <Sparkles className="h-3 w-3 text-beri-red" strokeWidth={2.4} />
                {addOnCount} add-on
              </span>
              <span className="sticker bg-white/80 text-espresso/50">
                <Coffee className="h-3 w-3 text-warm-orange" strokeWidth={2.4} />
                {totalFood} makanan
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky controls */}
      <div className="sticky top-[68px] z-30 border-y border-espresso/10 bg-cream/95 backdrop-blur-xl lg:top-[76px]">
        <div className="container-page flex flex-col gap-3 py-3.5 lg:flex-row lg:items-center lg:gap-5">
          <div className="shrink-0 lg:w-[320px]">
            <SearchBar value={query} onChange={setQuery} resultCount={filtered.length} />
          </div>
          <div className="min-w-0 flex-1">
            <CategoryFilter
              categories={PRODUCT_CATEGORIES}
              counts={countMap}
              active={activeCategory}
              total={totalProducts}
              onChange={setActiveCategory}
            />
          </div>
        </div>
      </div>

      <section className="container-page pb-20 pt-7" aria-live="polite">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-espresso/40">
            {deferredQuery.trim()
              ? `${filtered.length} hasil untuk "${deferredQuery.trim()}"`
              : activeCategory === 'All'
                ? `${filtered.length} menu · semua kategori`
                : `${filtered.length} menu · ${activeCategory}`}
          </p>
          {(activeCategory !== 'All' || query) && (
            <button
              type="button"
              onClick={() => {
                setQuery('')
                setActiveCategory('All')
              }}
              className="text-xs font-bold text-beri-red underline-offset-4 hover:underline"
            >
              Reset filter
            </button>
          )}
        </div>

        {filtered.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center justify-center rounded-[2rem] border border-dashed border-espresso/15 bg-white/60 px-6 py-20 text-center"
          >
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-butter text-espresso">
              <SearchX className="h-7 w-7" strokeWidth={1.8} />
            </span>
            <h2 className="display-title mt-5 text-3xl text-espresso">BELUM KETEMU.</h2>
            <p className="mt-2 max-w-sm text-sm text-espresso/50">
              Coba kata kunci lain atau lihat semua menu. Mungkin kamu butuh
              rekomendasi?
            </p>
            <button
              type="button"
              onClick={() => {
                setQuery('')
                setActiveCategory('All')
              }}
              className="mt-6 inline-flex h-11 items-center gap-2 rounded-full bg-beri-red px-5 text-sm font-bold text-cream shadow-[0_3px_0_0_#A80C20] transition-colors hover:bg-beri-red-dark"
            >
              Lihat semua menu
            </button>
          </motion.div>
        ) : isGrouped ? (
          <div className="space-y-12">
            {grouped.map((group) => (
              <section key={group.category} id={slugify(group.category)} className="scroll-mt-44">
                <div className="mb-4 flex items-end justify-between gap-4 border-b border-espresso/10 pb-3">
                  <h2 className="font-display text-2xl font-extrabold tracking-[-0.03em] text-espresso sm:text-3xl">
                    {group.category}
                  </h2>
                  <span className="shrink-0 text-[10px] font-bold uppercase tracking-[0.14em] text-espresso/35">
                    {group.items.length} item
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 xl:grid-cols-4">
                  {group.items.map((product, index) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      onOpen={setSelected}
                      index={index}
                    />
                  ))}
                </div>
              </section>
            ))}
          </div>
        ) : (
          <AnimatePresence mode="popLayout" initial={false}>
            <motion.div
              key={`${activeCategory}-${deferredQuery}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 xl:grid-cols-4"
            >
              {filtered.map((product, index) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onOpen={setSelected}
                  index={index}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        )}

        <div className="mt-14 rounded-[2rem] bg-espresso p-6 text-cream sm:p-8">
          <div className="flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
            <div>
              <p className="eyebrow text-butter">Harga & ukuran</p>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-cream/60">
                R = Regular, L = Large, Hot = disajikan panas. Harga yang tertera
                mengikuti menu Beri Kopi Jatinangor dan dalam Rupiah. Untuk
                ketersediaan hari ini, tanyakan langsung saat berkunjung.
              </p>
            </div>
            <div className="shrink-0 rounded-2xl bg-cream/5 px-5 py-4 text-center">
              <p className="font-hand text-xl text-butter">from</p>
              <p className="font-display text-2xl font-extrabold">{formatPrice(4000)}</p>
              <p className="text-[9px] uppercase tracking-[0.12em] text-cream/35">menu termurah</p>
            </div>
          </div>
        </div>
      </section>

      <ProductModal product={selected} onClose={() => setSelected(null)} />
    </div>
  )
}
