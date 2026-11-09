import { useState } from 'react'
import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'
import { ButtonLink } from '../components/ButtonLink'
import { ProductCard } from '../components/ProductCard'
import { ProductModal } from '../components/ProductModal'
import { SectionHeading } from '../components/SectionHeading'
import type { Product } from '../data/menu'
import { getFeaturedProducts } from '../data/menu'

export function FeaturedMenu() {
  const [selected, setSelected] = useState<Product | null>(null)
  const featured = getFeaturedProducts()

  return (
    <section className="relative bg-cream py-16 sm:py-20 lg:py-24" id="featured">
      <div className="container-page">
        <SectionHeading
          eyebrow="Menu highlights"
          title={
            <>
              SIP THE <span className="text-beri-red">HAPPY.</span>
            </>
          }
          description="Enam favorit yang paling sering bikin balik lagi. Sebagian besar tersedia dalam ukuran regular dan large — cek detail tiap menu."
          action={
            <ButtonLink to="/menu" variant="outline" size="md" withArrow>
              Lihat semua menu
            </ButtonLink>
          }
        />

        <div className="mt-10 grid grid-cols-2 gap-3 sm:mt-12 sm:gap-4 lg:grid-cols-3">
          {featured.map((product, index) => (
            <ProductCard key={product.id} product={product} onOpen={setSelected} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="mt-8 flex flex-col items-center justify-between gap-5 rounded-[1.75rem] border border-espresso/10 bg-butter/60 px-5 py-5 sm:flex-row sm:px-7"
        >
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-beri-red text-cream">
              <Sparkles className="h-4 w-4" strokeWidth={2.2} />
            </span>
            <p className="text-sm font-semibold text-espresso/70">
              Masih ada 80+ pilihan kopi, matcha, mocktail, dan makanan.
            </p>
          </div>
          <ButtonLink to="/menu" variant="dark" size="sm" withArrow>
            Buka menu lengkap
          </ButtonLink>
        </motion.div>
      </div>

      <ProductModal product={selected} onClose={() => setSelected(null)} />
    </section>
  )
}
