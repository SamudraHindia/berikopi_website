import { motion } from 'framer-motion'
import { Camera, Sparkles } from 'lucide-react'
import { GalleryArt } from '../components/GalleryArt'
import { SectionHeading } from '../components/SectionHeading'

const galleryItems = [
  {
    variant: 'window' as const,
    title: 'Slow mornings',
    caption: 'Sunlight, a good cup, nowhere to rush.',
    className: 'col-span-2 aspect-[16/11] md:col-span-5 md:row-span-2 md:aspect-auto',
  },
  {
    variant: 'brew' as const,
    title: 'The brew bar',
    caption: 'Where the good stuff happens.',
    className: 'aspect-[4/5] md:col-span-4 md:aspect-auto',
  },
  {
    variant: 'sweet' as const,
    title: 'Something sweet',
    caption: 'Roti, pisang, and a little extra.',
    className: 'aspect-[4/5] md:col-span-3 md:aspect-auto',
  },
  {
    variant: 'table' as const,
    title: 'Iced & easy',
    caption: 'Cold drinks for warm Jatinangor days.',
    className: 'aspect-[4/5] md:col-span-4 md:aspect-auto',
  },
  {
    variant: 'storefront' as const,
    title: 'Come say hi',
    caption: 'Your happy place, found.',
    className: 'aspect-[4/5] md:col-span-3 md:aspect-auto',
  },
]

export function Gallery() {
  return (
    <section className="relative overflow-hidden bg-cream py-16 sm:py-20 lg:py-24" id="gallery">
      <div className="container-page">
        <SectionHeading
          eyebrow="Beri moments"
          title={
            <>
              A LITTLE LOOK
              <br />
              <span className="text-beri-red">AROUND.</span>
            </>
          }
          description="Ilustrasi suasana dan menu Beri Kopi — dibuat untuk menggambarkan vibe tempat kami di Jatinangor."
          action={
            <span className="hidden items-center gap-2 text-[10px] font-bold uppercase tracking-[0.14em] text-espresso/35 md:flex">
              <Camera className="h-3.5 w-3.5" strokeWidth={2.2} />
              Illustrated scenes
            </span>
          }
        />

        <div className="mt-10 grid grid-cols-2 gap-3 md:auto-rows-[220px] md:grid-cols-12 md:gap-4">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className={`group relative overflow-hidden rounded-[1.5rem] border border-espresso/10 md:rounded-[1.75rem] ${item.className}`}
            >
              <GalleryArt
                variant={item.variant}
                className="absolute inset-0 h-full w-full transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/60 via-espresso/5 to-transparent opacity-80" />
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
                <div className="flex items-center gap-1.5 text-cream/60">
                  <Sparkles className="h-3 w-3" strokeWidth={2.2} />
                  <span className="text-[8px] font-bold uppercase tracking-[0.16em]">
                    Beri moments
                  </span>
                </div>
                <p className="mt-1 font-display text-lg font-bold leading-tight tracking-[-0.02em] text-cream sm:text-xl">
                  {item.title}
                </p>
                <p className="mt-0.5 hidden text-xs text-cream/65 sm:block">{item.caption}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="mt-4 text-right text-[10px] font-semibold uppercase tracking-[0.14em] text-espresso/30">
          Ilustrasi suasana Beri Kopi
        </p>
      </div>
    </section>
  )
}
