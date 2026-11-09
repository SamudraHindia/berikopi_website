import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import type { Product } from '../data/menu'
import { formatCompactPrice, formatPrice } from '../data/menu'
import { ProductArt } from './ProductArt'

type ProductCardProps = {
  product: Product
  onOpen: (product: Product) => void
  index?: number
  compact?: boolean
}

export function ProductCard({ product, onOpen, index = 0, compact = false }: ProductCardProps) {
  const lowestPrice = product.variants?.length
    ? Math.min(...product.variants.map((variant) => variant.price))
    : product.price

  return (
    <motion.button
      type="button"
      onClick={() => onOpen(product)}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.035, 0.25), ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -5 }}
      className="group flex w-full flex-col rounded-[1.75rem] border border-espresso/[0.08] bg-white p-2.5 text-left shadow-card transition-shadow duration-300 hover:shadow-lift focus-visible:ring-2 focus-visible:ring-beri-red sm:p-3"
      aria-label={`Lihat detail ${product.name}`}
    >
      <div className="relative overflow-hidden rounded-[1.3rem]">
        <ProductArt
          category={product.category}
          seed={product.id}
          className={`w-full transition-transform duration-500 ease-out group-hover:scale-[1.035] ${
            compact ? 'aspect-[4/3]' : 'aspect-[4/3]'
          }`}
        />
        <span className="absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-white/90 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.12em] text-espresso/70 backdrop-blur-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-[#5E8C4A]" aria-hidden="true" />
          {product.available ? 'Tersedia' : 'Habis'}
        </span>
        <span className="absolute bottom-3 right-3 flex h-9 w-9 translate-y-2 items-center justify-center rounded-full bg-beri-red text-cream opacity-0 shadow-sm transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <ArrowUpRight className="h-4 w-4" strokeWidth={2.5} />
        </span>
      </div>

      <div className="flex flex-1 flex-col px-1.5 pb-1 pt-4">
        <p className="text-[10px] font-bold uppercase leading-none tracking-[0.16em] text-espresso/40">
          {product.category}
        </p>
        <h3 className="mt-2 font-display text-[17px] font-bold leading-[1.15] tracking-[-0.02em] text-espresso sm:text-lg">
          {product.name}
        </h3>
        {!compact && product.description && (
          <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-espresso/50">
            {product.description}
          </p>
        )}
        <div className="mt-auto flex flex-wrap items-end justify-between gap-x-2 gap-y-1.5 pt-4">
          <div>
            {product.variants && product.variants.length > 1 && (
              <span className="mr-1.5 text-[10px] font-semibold uppercase tracking-wide text-espresso/40">
                mulai
              </span>
            )}
            <span className="font-display text-base font-extrabold tracking-[-0.02em] text-beri-red sm:text-[17px]">
              {formatPrice(lowestPrice)}
            </span>
          </div>
          <span className="flex flex-wrap gap-1 text-[10px] font-bold uppercase tracking-wide text-espresso/35">
            {product.variants?.map((variant) => (
              <span key={variant.name} className="rounded-full bg-espresso/[0.05] px-2 py-1">
                {variant.name} {formatCompactPrice(variant.price)}
              </span>
            ))}
          </span>
        </div>
      </div>
    </motion.button>
  )
}
