import { motion } from 'framer-motion'
import { ArrowUpRight, Clock, ExternalLink, Instagram, MapPin, Navigation } from 'lucide-react'
import { ButtonLink } from '../components/ButtonLink'
import { business } from '../data/business'

export function Location() {
  return (
    <section className="relative overflow-hidden bg-butter/45 py-16 sm:py-20 lg:py-24" id="location">
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full border border-espresso/5"
        aria-hidden="true"
      />
      <div className="container-page grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="eyebrow text-beri-red">
            <span className="h-1.5 w-1.5 rounded-full bg-beri-red" />
            Find us
          </p>
          <h2 className="display-title mt-4 text-[3rem] text-espresso sm:text-6xl">
            MAMPIR,
            <br />
            <span className="text-beri-red">YUK.</span>
          </h2>
          <p className="body-copy mt-5 max-w-md">
            Lagi di Jatinangor? Mampir untuk kopi sore, makan siang, atau sekadar
            cari tempat ngobrol. Kami di Jatinangor, Sumedang.
          </p>

          <div className="mt-7 space-y-3">
            <div className="flex items-start gap-3 rounded-2xl border border-espresso/10 bg-white/70 p-4">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-beri-red text-cream">
                <MapPin className="h-4 w-4" strokeWidth={2.2} />
              </span>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-espresso/35">
                  Lokasi
                </p>
                <p className="mt-0.5 text-sm font-bold text-espresso">{business.address.line1}</p>
                <p className="text-xs leading-relaxed text-espresso/50">
                  {business.address.line2}
                </p>
                <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.08em] text-beri-red">
                  {business.rating.score.toLocaleString('id-ID')} ★ · {business.rating.count} ulasan Google
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-2xl border border-espresso/10 bg-white/70 p-4">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-espresso text-cream">
                <Clock className="h-4 w-4" strokeWidth={2.2} />
              </span>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-espresso/35">
                  Jam buka
                </p>
                <p className="mt-0.5 text-sm font-bold text-espresso">{business.hours.label}</p>
                <p className="mt-0.5 text-xs text-espresso/45">{business.hours.note}</p>
              </div>
            </div>

            <a
              href={business.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-3 rounded-2xl border border-espresso/10 bg-white/70 p-4 transition-colors hover:bg-white"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-warm-orange text-espresso">
                <Instagram className="h-4 w-4" strokeWidth={2.2} />
              </span>
              <div className="flex-1">
                <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-espresso/35">
                  Sosial
                </p>
                <p className="mt-0.5 text-sm font-bold text-espresso">
                  Cari Beri Kopi di Instagram
                </p>
              </div>
              <ArrowUpRight
                className="mt-2 h-4 w-4 text-espresso/30 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                strokeWidth={2.2}
              />
            </a>
          </div>

          <div className="mt-7">
            <ButtonLink
              href={business.maps.directionsUrl}
              external
              variant="primary"
              size="md"
              withArrow
            >
              <Navigation className="h-4 w-4" strokeWidth={2.2} />
              Buka Google Maps
            </ButtonLink>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="overflow-hidden rounded-[2rem] border border-espresso/10 bg-white p-2 shadow-card">
            <div className="relative h-[330px] overflow-hidden rounded-[1.6rem] bg-espresso/5 sm:h-[420px]">
              <iframe
                title="Lokasi Beri Kopi Jatinangor di Google Maps"
                src={business.maps.embedUrl}
                className="h-full w-full border-0"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="pointer-events-none absolute inset-x-0 top-0 flex items-start justify-between p-3">
                <span className="rounded-full bg-espresso/85 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.14em] text-cream backdrop-blur-sm">
                  Beri Kopi · Jatinangor
                </span>
                <span className="rounded-full bg-white/90 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.12em] text-espresso shadow-sm backdrop-blur-sm">
                  {business.hours.label}
                </span>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-5 -left-3 hidden rotate-[-3deg] items-center gap-2 rounded-full border border-espresso/10 bg-white px-4 py-2.5 text-[10px] font-bold uppercase tracking-[0.12em] text-espresso/55 shadow-sm sm:flex">
            <ExternalLink className="h-3.5 w-3.5 text-beri-red" strokeWidth={2.2} />
            Peta interaktif
          </div>

          <div className="absolute -right-3 -top-4 hidden h-20 w-20 rotate-[8deg] flex-col items-center justify-center rounded-full bg-beri-red text-cream shadow-lg sm:flex">
            <MapPin className="h-4 w-4" strokeWidth={2.2} />
            <span className="mt-1 font-hand text-lg leading-none">here!</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
