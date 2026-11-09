import { motion } from 'framer-motion'
import {
  ArrowUpRight,
  Clock,
  Coffee,
  Croissant,
  Heart,
  Leaf,
  MapPin,
  Sparkles,
  Star,
} from 'lucide-react'
import { usePageMeta } from '../hooks/usePageMeta'
import { GalleryArt } from '../components/GalleryArt'
import { Gallery } from '../sections/Gallery'
import { Marquee } from '../components/Marquee'
import { ButtonLink } from '../components/ButtonLink'
import { business } from '../data/business'
import {
  categoryCounts,
  foodCategories,
  totalFood,
  totalProducts,
} from '../data/menu'

const values = [
  {
    icon: Coffee,
    title: 'Good coffee, no fuss',
    text: 'Kopi yang enak nggak harus rumit. Kami fokus pada rasa yang konsisten dan harga yang masuk akal.',
    color: 'bg-butter',
  },
  {
    icon: Sparkles,
    title: 'Playful by nature',
    text: 'Menu boleh serius soal rasa, tapi suasana tetap santai. Sedikit warna dan banyak alasan untuk tersenyum.',
    color: 'bg-[#FFDCC8]',
  },
  {
    icon: Heart,
    title: 'Local at heart',
    text: 'Tumbuh di Jatinangor, dekat dengan keseharian mahasiswa, pekerja, dan siapa pun yang mampir.',
    color: 'bg-[#DFEBCB]',
  },
]

const menuGroups = [
  {
    title: 'Coffee & espresso',
    icon: Coffee,
    categories: ['Special Beri Kopi', 'Seri Signature', 'Seri Creamy', 'Espresso Bar'],
  },
  {
    title: 'Matcha, mocktail & more',
    icon: Leaf,
    categories: ['Seri Matcha', 'Mocktail', 'Beri Non Kopi', 'Add On'],
  },
  {
    title: 'Kitchen bites',
    icon: Croissant,
    categories: foodCategories,
  },
]

const countByCategory = Object.fromEntries(
  categoryCounts.map(({ category, count }) => [category, count]),
)

export default function AboutPage() {
  usePageMeta({
    title: 'Tentang Beri Kopi — Coffee & Good Moods di Jatinangor',
    description:
      'Kenalan dengan Beri Kopi Jatinangor: tempat kopi, matcha, mocktail, dan makanan untuk hari yang lebih baik. Lihat cerita, suasana, dan menu kami.',
  })

  return (
    <div className="bg-cream">
      {/* Hero */}
      <section className="relative overflow-hidden pb-14 pt-12 sm:pt-16 lg:pb-20">
        <div className="paper-grain pointer-events-none absolute inset-0" aria-hidden="true" />
        <div className="container-page relative grid items-center gap-10 lg:grid-cols-[1.04fr_0.96fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="eyebrow text-beri-red">
              <span className="h-1.5 w-1.5 rounded-full bg-beri-red" />
              About Beri
            </p>
            <h1 className="display-title mt-4 text-[clamp(3.5rem,9vw,7rem)] text-espresso">
              MORE THAN
              <br />
              A <span className="text-beri-red">CUP.</span>
            </h1>
            <p className="body-copy mt-5 max-w-lg">
              Beri Kopi Jatinangor adalah tempat untuk berhenti sebentar: menyeruput
              kopi, ngobrol, makan, atau sekadar menikmati hari. Bukan tempat yang
              rumit — hanya tempat yang terasa seperti milikmu.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <ButtonLink to="/menu" variant="primary" size="md" withArrow>
                Lihat menu kami
              </ButtonLink>
              <a
                href={business.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-sm font-bold text-espresso/60 transition-colors hover:text-beri-red"
              >
                Cari di Instagram
                <ArrowUpRight
                  className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  strokeWidth={2.2}
                />
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-4">
              <div>
                <p className="font-display text-3xl font-extrabold text-espresso">{totalProducts}</p>
                <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-espresso/35">
                  menu pilihan
                </p>
              </div>
              <div>
                <p className="font-display text-3xl font-extrabold text-espresso">{totalFood}</p>
                <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-espresso/35">
                  pilihan makanan
                </p>
              </div>
              <div>
                <p className="font-display text-3xl font-extrabold text-espresso">1</p>
                <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-espresso/35">
                  happy place
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96, rotate: 1 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-[520px]"
          >
            <div className="overflow-hidden rounded-[2rem] border border-espresso/10 shadow-card sm:rounded-[2.5rem]">
              <GalleryArt variant="window" className="aspect-[4/3.5]" />
            </div>
            <motion.div
              initial={{ opacity: 0, rotate: -12, scale: 0.8 }}
              animate={{ opacity: 1, rotate: -7, scale: 1 }}
              transition={{ delay: 0.45, type: 'spring', stiffness: 180, damping: 15 }}
              className="absolute -right-2 -top-5 flex h-24 w-24 flex-col items-center justify-center rounded-full bg-beri-red text-cream shadow-lg sm:-right-4 sm:-top-7 sm:h-28 sm:w-28"
            >
              <Star className="h-4 w-4 fill-current" strokeWidth={0} />
              <span className="mt-1 font-hand text-xl leading-none sm:text-2xl">hello!</span>
              <span className="mt-1 text-[8px] font-bold uppercase tracking-[0.14em] opacity-70">
                from jatinangor
              </span>
            </motion.div>
            <div className="absolute -bottom-5 left-5 rotate-[-3deg] rounded-2xl border border-espresso/10 bg-white px-4 py-3 shadow-sm">
              <p className="font-hand text-xl leading-none text-espresso/50">good days start here.</p>
            </div>
          </motion.div>
        </div>
      </section>

      <Marquee
        tone="dark"
        items={['COFFEE & KITCHEN', 'MADE FRESH', 'JATINANGOR', 'GOOD MOODS ONLY', 'MATCHA & MOCKTAIL']}
      />

      {/* Values */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="container-page">
          <div className="max-w-2xl">
            <p className="eyebrow text-beri-red">
              <span className="h-1.5 w-1.5 rounded-full bg-beri-red" />
              The Beri way
            </p>
            <h2 className="display-title mt-4 text-[2.8rem] text-espresso sm:text-5xl lg:text-6xl">
              SMALL PLACE,
              <br />
              BIG <span className="text-beri-red">MOOD.</span>
            </h2>
            <p className="body-copy mt-5">
              Tiga hal yang kami jaga di setiap cangkir dan setiap kunjungan.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="rounded-[1.75rem] border border-espresso/10 bg-cream p-6 sm:p-7"
              >
                <span className={`flex h-12 w-12 items-center justify-center rounded-2xl ${value.color}`}>
                  <value.icon className="h-5 w-5 text-espresso" strokeWidth={2} />
                </span>
                <h3 className="mt-5 font-display text-xl font-extrabold tracking-[-0.025em] text-espresso">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-espresso/55">{value.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What's pouring */}
      <section className="relative overflow-hidden bg-espresso py-16 text-cream sm:py-20 lg:py-24">
        <div
          className="pointer-events-none absolute -left-20 top-10 h-72 w-72 rounded-full border border-cream/10"
          aria-hidden="true"
        />
        <div className="container-page relative grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div>
            <p className="eyebrow text-butter">
              <span className="h-1.5 w-1.5 rounded-full bg-butter" />
              What&apos;s pouring
            </p>
            <h2 className="display-title mt-4 text-[2.9rem] text-cream sm:text-5xl">
              SESUATU UNTUK
              <br />
              SETIAP <span className="text-butter">MOOD.</span>
            </h2>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-cream/55">
              Mau kopi kuat, matcha creamy, mocktail segar, atau makanan berat?
              Semua ada dalam satu menu.
            </p>
            <div className="mt-7">
              <ButtonLink to="/menu" variant="white" size="md" withArrow>
                Jelajahi menu lengkap
              </ButtonLink>
            </div>
          </div>

          <div className="space-y-3">
            {menuGroups.map((group, groupIndex) => (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5, delay: groupIndex * 0.08 }}
                className="rounded-[1.5rem] border border-cream/10 bg-cream/[0.04] p-5 sm:p-6"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-cream/10 text-butter">
                    <group.icon className="h-4 w-4" strokeWidth={2.1} />
                  </span>
                  <h3 className="font-display text-xl font-bold tracking-[-0.02em] text-cream">
                    {group.title}
                  </h3>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.categories.map((category) => (
                    <span
                      key={category}
                      className="rounded-full border border-cream/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.08em] text-cream/55"
                    >
                      {category}
                      <span className="ml-1.5 text-cream/25">{countByCategory[category] ?? 0}</span>
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Gallery />

      {/* Practical info */}
      <section className="bg-white py-14 sm:py-16">
        <div className="container-page">
          <div className="grid gap-4 rounded-[2rem] border border-espresso/10 bg-cream p-6 sm:grid-cols-3 sm:p-8">
            <div>
              <p className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.14em] text-espresso/35">
                <MapPin className="h-3.5 w-3.5 text-beri-red" strokeWidth={2.2} />
                Lokasi
              </p>
              <p className="mt-2 text-sm font-bold text-espresso">{business.address.line1}</p>
              <p className="text-xs leading-relaxed text-espresso/45">
                {business.address.line2}
              </p>
              <a
                href={business.maps.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 inline-flex items-center gap-1 text-xs font-bold text-beri-red hover:underline"
              >
                Buka Google Maps
                <ArrowUpRight className="h-3 w-3" strokeWidth={2.2} />
              </a>
            </div>
            <div>
              <p className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.14em] text-espresso/35">
                <Clock className="h-3.5 w-3.5 text-beri-red" strokeWidth={2.2} />
                Jam buka
              </p>
              <p className="mt-2 text-sm font-bold text-espresso">{business.hours.label}</p>
              <p className="mt-1 text-xs leading-relaxed text-espresso/45">
                {business.hours.note} Info fasilitas dan nomor resmi belum
                terverifikasi.
              </p>
            </div>
            <div>
              <p className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.14em] text-espresso/35">
                <Star className="h-3.5 w-3.5 text-beri-red" strokeWidth={2.2} />
                Update
              </p>
              <p className="mt-2 text-sm font-bold text-espresso">Instagram</p>
              <a
                href={business.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 inline-flex items-center gap-1 text-xs font-bold text-beri-red hover:underline"
              >
                Cari Beri Kopi
                <ArrowUpRight className="h-3 w-3" strokeWidth={2.2} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
