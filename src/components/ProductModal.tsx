import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, Check, MapPin, X } from 'lucide-react'
import type { Product } from '../data/menu'
import { formatPrice } from '../data/menu'
import { ProductArt } from './ProductArt'
import { useLockBodyScroll } from '../hooks/useLockBodyScroll'

type ProductModalProps = {
  product: Product | null
  onClose: () => void
}

export function ProductModal({ product, onClose }: ProductModalProps) {
  const [variantIndex, setVariantIndex] = useState(0)
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const previouslyFocused = useRef<HTMLElement | null>(null)

  useLockBodyScroll(Boolean(product))

  useEffect(() => {
    setVariantIndex(0)
  }, [product?.id])

  useEffect(() => {
    if (!product) return

    previouslyFocused.current = document.activeElement as HTMLElement
    const timer = window.setTimeout(() => closeButtonRef.current?.focus(), 60)

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.clearTimeout(timer)
      window.removeEventListener('keydown', handleKeyDown)
      previouslyFocused.current?.focus()
    }
  }, [product, onClose])

  const selectedVariant = product?.variants?.[variantIndex]
  const price = selectedVariant?.price ?? product?.price ?? 0

  return createPortal(
    <AnimatePresence>
      {product && (
        <motion.div
          className="fixed inset-0 z-[80] flex items-end justify-center p-0 sm:items-center sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <button
            type="button"
            className="absolute inset-0 cursor-default bg-espresso/55 backdrop-blur-[3px]"
            onClick={onClose}
            aria-label="Tutup detail produk"
            tabIndex={-1}
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="product-modal-title"
            initial={{ opacity: 0, y: 40, scale: 0.985 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.985 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            className="relative max-h-[92dvh] w-full max-w-[960px] overflow-y-auto rounded-t-[2rem] bg-cream shadow-2xl sm:max-h-[88vh] sm:rounded-[2rem]"
          >
            <button
              ref={closeButtonRef}
              type="button"
              onClick={onClose}
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-espresso shadow-sm backdrop-blur-sm transition-colors hover:bg-white hover:text-beri-red"
              aria-label="Tutup detail produk"
            >
              <X className="h-5 w-5" strokeWidth={2.3} />
            </button>

            <div className="grid md:grid-cols-[0.92fr_1.08fr]">
              <div className="relative md:min-h-[560px]">
                <ProductArt
                  category={product.category}
                  seed={product.id}
                  className="h-[270px] w-full sm:h-[340px] md:h-full md:min-h-[560px]"
                />
                <div className="absolute bottom-4 left-4 hidden items-center gap-2 rounded-full bg-white/85 px-3.5 py-2 text-[10px] font-bold uppercase tracking-[0.14em] text-espresso/55 backdrop-blur-sm sm:flex">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#5E8C4A]" />
                  {product.available ? 'Tersedia' : 'Sedang habis'}
                </div>
              </div>

              <div className="flex flex-col p-5 sm:p-8 md:p-10">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-beri-red">
                  {product.category}
                </p>
                <h2
                  id="product-modal-title"
                  className="display-title mt-3 text-[2rem] leading-[0.95] text-espresso sm:text-4xl"
                >
                  {product.name}
                </h2>

                {product.description ? (
                  <p className="mt-4 text-sm leading-relaxed text-espresso/60">
                    {product.description}
                  </p>
                ) : (
                  <p className="mt-4 text-sm leading-relaxed text-espresso/45">
                    Salah satu menu pilihan Beri Kopi Jatinangor. Tanyakan ketersediaan
                    hari ini saat berkunjung.
                  </p>
                )}

                {product.variants && product.variants.length > 0 && (
                  <div className="mt-6">
                    <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-espresso/40">
                      Pilih ukuran
                    </p>
                    <div className="mt-2.5 flex flex-wrap gap-2">
                      {product.variants.map((variant, index) => (
                        <button
                          key={variant.name}
                          type="button"
                          onClick={() => setVariantIndex(index)}
                          aria-pressed={variantIndex === index}
                          className={`inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-xs font-bold transition-colors ${
                            variantIndex === index
                              ? 'border-beri-red bg-beri-red text-cream'
                              : 'border-espresso/10 bg-white text-espresso/60 hover:border-espresso/30'
                          }`}
                        >
                          {variantIndex === index && <Check className="h-3.5 w-3.5" strokeWidth={3} />}
                          {variant.name}
                          <span className="opacity-70">{formatPrice(variant.price)}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                <div className="mt-7 flex items-end justify-between gap-4 border-t border-espresso/10 pt-5">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-espresso/40">
                      Harga
                    </p>
                    <p className="font-display text-2xl font-extrabold tracking-[-0.03em] text-beri-red">
                      {formatPrice(price)}
                    </p>
                  </div>
                  <span className="sticker bg-white text-[9px] text-espresso/50">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#5E8C4A]" />
                    {product.available ? 'Tersedia' : 'Habis'}
                  </span>
                </div>

                <div className="mt-auto flex flex-col gap-2.5 pt-7 sm:flex-row">
                  <Link
                    to="/contact"
                    onClick={onClose}
                    className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-espresso px-5 text-sm font-bold text-cream transition-colors hover:bg-ink"
                  >
                    <MapPin className="h-4 w-4" strokeWidth={2.2} />
                    Mampir ke Beri
                  </Link>
                  <button
                    type="button"
                    onClick={onClose}
                    className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-espresso/15 px-5 text-sm font-bold text-espresso/70 transition-colors hover:border-espresso/30 hover:text-espresso"
                  >
                    Kembali ke menu
                    <ArrowUpRight className="h-4 w-4" strokeWidth={2.2} />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  )
}
