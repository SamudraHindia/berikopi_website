import { motion } from 'framer-motion'
import { ArrowUpRight, Check, Coffee, Croissant, Leaf } from 'lucide-react'
import { ButtonLink } from '../components/ButtonLink'
import { GalleryArt } from '../components/GalleryArt'
import { totalFood, totalProducts } from '../data/menu'

const highlights = [
  {
    icon: Coffee,
    title: 'Coffee first',
    text: 'Es kopi susu gula aren, espresso bar, dan signature creamy.',
  },
  {
    icon: Leaf,
    title: 'Beyond coffee',
    text: 'Matcha, mocktail, teh, dan minuman non-kopi untuk semua mood.',
  },
  {
    icon: Croissant,
    title: 'Bites included',
    text: 'Main course, snack, roti, dan pisang — dari sarapan sampai sore.',
  },
]

export function AboutPreview() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
      <div className="container-page grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="relative order-2 lg:order-1"
        >
          <div className="relative overflow-hidden rounded-[2rem] border border-espresso/10 shadow-card sm:rounded-[2.5rem]">
            <GalleryArt variant="storefront" className="aspect-[4/3.4]" />
            <div className="absolute inset-0 bg-gradient-to-t from-espresso/40 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3 sm:bottom-6 sm:left-6 sm:right-6">
              <p className="font-hand text-2xl text-cream sm:text-3xl">our little corner.</p>
              <span className="sticker bg-cream text-[9px] text-espresso/60">Jatinangor</span>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, rotate: 6, scale: 0.9 }}
            whileInView={{ opacity: 1, rotate: 4, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 170, damping: 16 }}
            className="absolute -right-2 -top-5 flex h-24 w-24 flex-col items-center justify-center rounded-full bg-beri-red text-cream shadow-lg sm:-right-5 sm:-top-7 sm:h-28 sm:w-28"
          >
            <span className="font-display text-3xl font-extrabold leading-none">{totalProducts}</span>
            <span className="mt-1 text-center text-[8px] font-bold uppercase leading-tight tracking-[0.12em]">
              menu
              <br />
              pilihan
            </span>
          </motion.div>

          <div className="absolute -bottom-5 left-5 hidden rotate-[-3deg] rounded-2xl border border-espresso/10 bg-butter px-4 py-3 shadow-sm sm:block">
            <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-espresso/45">
              Good to know
            </p>
            <p className="mt-1 text-xs font-bold text-espresso">
              {totalFood} pilihan makanan · harga dalam IDR
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="order-1 lg:order-2"
        >
          <p className="eyebrow text-beri-red">
            <span className="h-1.5 w-1.5 rounded-full bg-beri-red" />
            About Beri
          </p>
          <h2 className="display-title mt-4 text-[2.8rem] text-espresso sm:text-5xl lg:text-6xl">
            A LITTLE
            <br />
            SUNSHINE
            <br />
            IN A CUP.
          </h2>
          <p className="body-copy mt-5 max-w-lg">
            Beri Kopi adalah tempat kopi dan makanan di Jatinangor. Kami percaya
            hari yang baik dimulai dari minuman yang tepat, porsi yang pas, dan
            suasana yang bikin betah.
          </p>
          <p className="body-copy mt-3 max-w-lg">
            Dari es kopi susu gula aren sampai matcha, mocktail, ricebowl, dan roti
            panggang — semua dibuat untuk dinikmati tanpa ribet.
          </p>

          <div className="mt-7 space-y-3">
            {highlights.map((highlight) => (
              <div key={highlight.title} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cream text-beri-red">
                  <highlight.icon className="h-4 w-4" strokeWidth={2.2} />
                </span>
                <div>
                  <p className="text-sm font-bold text-espresso">{highlight.title}</p>
                  <p className="text-xs leading-relaxed text-espresso/50">{highlight.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <ButtonLink to="/about" variant="primary" size="md" withArrow>
              Kenalan lebih jauh
            </ButtonLink>
            <a
              href="#location"
              className="group inline-flex items-center gap-2 text-sm font-bold text-espresso/55 transition-colors hover:text-beri-red"
            >
              <Check className="h-4 w-4 text-beri-red" strokeWidth={2.5} />
              Mampir ke Jatinangor
              <ArrowUpRight
                className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                strokeWidth={2.2}
              />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
