import { motion } from 'framer-motion'
import {
  ArrowUpRight,
  Clock,
  ExternalLink,
  Instagram,
  MapPin,
  MessageCircle,
  Navigation,
  Sparkles,
} from 'lucide-react'
import { usePageMeta } from '../hooks/usePageMeta'
import { business } from '../data/business'
import { ButtonLink } from '../components/ButtonLink'
import { GalleryArt } from '../components/GalleryArt'

const contactCards = [
  {
    icon: MapPin,
    label: 'Lokasi',
    title: business.address.line1,
    description: `${business.address.line2}. Buka Google Maps untuk titik dan petunjuk arah terbaru.`,
    actionLabel: 'Petunjuk arah',
    href: business.maps.directionsUrl,
    tone: 'bg-beri-red text-cream',
    external: true,
  },
  {
    icon: Instagram,
    label: 'Instagram',
    title: business.instagram.displayName,
    description: 'Cari akun dan update terbaru Beri Kopi lewat Instagram.',
    actionLabel: 'Cari di Instagram',
    href: business.instagram.url,
    tone: 'bg-warm-orange text-espresso',
    external: true,
  },
  {
    icon: Clock,
    label: 'Jam buka',
    title: business.hours.label,
    description: business.hours.note,
    actionLabel: 'Lihat di Maps',
    href: business.maps.directionsUrl,
    tone: 'bg-butter text-espresso',
    external: true,
  },
]

export default function Contact() {
  usePageMeta({
    title: 'Kontak & Lokasi — Beri Kopi Jatinangor',
    description:
      'Temukan lokasi Beri Kopi Jatinangor, buka petunjuk arah Google Maps, dan cek Instagram untuk info terbaru.',
    image: '/images/hero/og-cover.png',
  })

  return (
    <div className="bg-cream">
      {/* Hero */}
      <section className="relative overflow-hidden pb-14 pt-12 sm:pt-16">
        <div className="paper-grain pointer-events-none absolute inset-0" aria-hidden="true" />
        <div
          className="pointer-events-none absolute -right-32 top-10 h-96 w-96 rounded-full bg-butter/60 blur-3xl"
          aria-hidden="true"
        />
        <div className="container-page relative grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="eyebrow text-beri-red">
              <span className="h-1.5 w-1.5 rounded-full bg-beri-red" />
              Contact & location
            </p>
            <h1 className="display-title mt-4 text-[clamp(4rem,11vw,8rem)] text-espresso">
              SAY <span className="text-beri-red">HI.</span>
            </h1>
            <p className="body-copy mt-5 max-w-lg">
              Mau mampir, cari arah, atau sekadar cek kabar terbaru? Kami ada di
              Jatinangor. Titik paling akurat ada di Google Maps, update paling
              segar ada di Instagram.
            </p>

            <div className="mt-7 flex flex-col gap-3 min-[420px]:flex-row">
              <ButtonLink href={business.maps.directionsUrl} external variant="primary" size="md" withArrow>
                <Navigation className="h-4 w-4" strokeWidth={2.2} />
                Buka Google Maps
              </ButtonLink>
              <ButtonLink href={business.instagram.url} external variant="outline" size="md" withArrow>
                <Instagram className="h-4 w-4" strokeWidth={2.2} />
                Instagram
              </ButtonLink>
            </div>

            <div className="mt-8 flex items-center gap-3 text-xs font-semibold text-espresso/45">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white">
                <Sparkles className="h-4 w-4 text-beri-red" strokeWidth={2.2} />
              </span>
              <p>
                Alamat & jam buka mengikuti info Google Maps.
                <br className="hidden sm:block" /> WhatsApp, email, dan akun Instagram
                resmi belum terverifikasi.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-[500px]"
          >
            <div className="overflow-hidden rounded-[2rem] border border-espresso/10 shadow-card sm:rounded-[2.5rem]">
              <GalleryArt variant="storefront" className="aspect-[4/3.4]" />
            </div>
            <div className="absolute -left-3 -top-5 flex h-24 w-24 rotate-[-8deg] flex-col items-center justify-center rounded-full bg-beri-red text-cream shadow-lg sm:-left-5 sm:h-28 sm:w-28">
              <MapPin className="h-5 w-5" strokeWidth={2.2} />
              <span className="mt-1 font-hand text-xl leading-none">here!</span>
              <span className="mt-1 text-[8px] font-bold uppercase tracking-[0.14em] opacity-70">
                jatinangor
              </span>
            </div>
            <div className="absolute -bottom-4 right-4 flex items-center gap-2 rounded-full border border-espresso/10 bg-white px-4 py-2.5 text-[10px] font-bold uppercase tracking-[0.12em] text-espresso/55 shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[#5E8C4A]" />
              Find us on maps
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact cards */}
      <section className="pb-14">
        <div className="container-page grid gap-4 md:grid-cols-3">
          {contactCards.map((card, index) => (
            <motion.a
              key={card.label}
              href={card.href}
              target={card.external ? '_blank' : undefined}
              rel={card.external ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: index * 0.07 }}
              className="group flex flex-col rounded-[1.75rem] border border-espresso/10 bg-white p-5 shadow-card transition-shadow hover:shadow-lift sm:p-6"
            >
              <div className="flex items-start justify-between gap-4">
                <span className={`flex h-11 w-11 items-center justify-center rounded-2xl ${card.tone}`}>
                  <card.icon className="h-5 w-5" strokeWidth={2.1} />
                </span>
                <ArrowUpRight
                  className="h-5 w-5 text-espresso/20 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-beri-red"
                  strokeWidth={2.2}
                />
              </div>
              <p className="mt-5 text-[10px] font-bold uppercase tracking-[0.14em] text-espresso/35">
                {card.label}
              </p>
              <h2 className="mt-1 font-display text-lg font-extrabold leading-tight tracking-[-0.02em] text-espresso">
                {card.title}
              </h2>
              <p className="mt-2 text-xs leading-relaxed text-espresso/45">
                {card.description}
              </p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-beri-red">
                {card.actionLabel}
                <ExternalLink className="h-3 w-3" strokeWidth={2.2} />
              </span>
            </motion.a>
          ))}
        </div>
      </section>

      {/* Map */}
      <section className="bg-espresso py-14 text-cream sm:py-16">
        <div className="container-page">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="eyebrow text-butter">
                <span className="h-1.5 w-1.5 rounded-full bg-butter" />
                The map
              </p>
              <h2 className="display-title mt-3 text-4xl text-cream sm:text-5xl">
                FIND YOUR WAY <span className="text-butter">HERE.</span>
              </h2>
            </div>
            <a
              href={business.maps.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex w-fit items-center gap-2 rounded-full border border-cream/20 px-4 py-2.5 text-xs font-bold text-cream/70 transition-colors hover:border-cream/50 hover:text-cream"
            >
              <Navigation className="h-3.5 w-3.5" strokeWidth={2.2} />
              Buka di Google Maps
              <ArrowUpRight
                className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                strokeWidth={2.2}
              />
            </a>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
            className="mt-7 overflow-hidden rounded-[2rem] border border-cream/10 bg-cream/5 p-2"
          >
            <div className="relative h-[340px] overflow-hidden rounded-[1.6rem] bg-cream/10 sm:h-[460px]">
              <iframe
                title="Peta lokasi Beri Kopi Jatinangor"
                src={business.maps.embedUrl}
                className="h-full w-full border-0"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
              <span className="pointer-events-none absolute left-3 top-3 rounded-full bg-espresso/85 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.14em] text-cream backdrop-blur-sm">
                Beri Kopi · Jatinangor
              </span>
            </div>
          </motion.div>

          <div className="mt-6 grid gap-4 text-xs text-cream/45 sm:grid-cols-3">
            <p>
              <span className="font-bold text-cream/70">Alamat:</span>{' '}
              {business.address.full}. Sumber: Google Maps.
            </p>
            <p>
              <span className="font-bold text-cream/70">Jam buka:</span>{' '}
              {business.hours.label} — {business.hours.note}
            </p>
            <p className="flex items-start gap-2">
              <MessageCircle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-butter" strokeWidth={2} />
              WhatsApp, email, dan akun Instagram resmi belum terverifikasi. Sementara
              ini, cari Beri Kopi lewat Instagram.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
