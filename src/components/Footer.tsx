import { Link } from 'react-router-dom'
import { ArrowUp, ArrowUpRight, Clock, Instagram, MapPin } from 'lucide-react'
import { BrandLogo } from './BrandLogo'
import { business } from '../data/business'

const footerLinks = [
  { label: 'Home', to: '/' },
  { label: 'Menu', to: '/menu' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

export function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="relative overflow-hidden bg-espresso text-cream">
      {/* CTA band */}
      <div className="border-b border-cream/10">
        <div className="container-page grid gap-8 py-14 md:py-20 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <p className="eyebrow text-butter">
              <span className="h-1.5 w-1.5 rounded-full bg-butter" />
              See you soon
            </p>
            <h2 className="display-title mt-4 text-[3rem] text-cream sm:text-6xl lg:text-7xl">
              SEE YOU AT <span className="text-butter">BERI.</span>
            </h2>
          </div>
          <div className="lg:pb-2">
            <p className="max-w-md text-sm leading-relaxed text-cream/55 sm:text-base">
              Haus? Lapar? Butuh tempat nongkrong yang bikin happy? Kami punya kopi,
              matcha, mocktail, dan makanan yang siap nemenin harimu.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                to="/menu"
                className="group inline-flex h-12 items-center gap-2 rounded-full bg-beri-red px-6 text-sm font-bold text-cream shadow-[0_4px_0_0_#7d0918] transition-colors hover:bg-beri-red-dark"
              >
                Lihat Menu
                <ArrowUpRight
                  className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  strokeWidth={2.4}
                />
              </Link>
              <a
                href={business.maps.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center gap-2 rounded-full border border-cream/20 px-6 text-sm font-bold text-cream transition-colors hover:border-cream/50 hover:bg-cream/5"
              >
                <MapPin className="h-4 w-4" strokeWidth={2.2} />
                Petunjuk Arah
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="container-page grid gap-10 py-12 md:grid-cols-[1.25fr_0.7fr_1fr] md:py-16">
        <div>
          <Link
            to="/"
            className="inline-flex rounded-2xl bg-cream p-3.5"
            aria-label="Beri Kopi Jatinangor — beranda"
          >
            <BrandLogo
              variant="horizontal"
              symbolClassName="h-9 w-9"
              wordmarkClassName="h-[21px] w-auto"
            />
          </Link>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-cream/50">
            Kopi, matcha, mocktail, dan makanan untuk hari-hari yang lebih baik.
            Ditemukan di Jatinangor.
          </p>
          <a
            href={business.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-cream/70 transition-colors hover:text-butter"
          >
            <Instagram className="h-4 w-4" strokeWidth={2} />
            {business.instagram.displayName}
            <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.2} />
          </a>
        </div>

        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-cream/35">
            Jelajahi
          </p>
          <nav className="mt-4 flex flex-col gap-3" aria-label="Navigasi footer">
            {footerLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="w-fit text-sm font-semibold text-cream/65 transition-colors hover:text-butter"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={business.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit text-sm font-semibold text-cream/65 transition-colors hover:text-butter"
            >
              Instagram
            </a>
          </nav>
        </div>

        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-cream/35">
            Mampir
          </p>
          <div className="mt-4 space-y-4 text-sm">
            <a
              href={business.maps.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-3 text-cream/65 transition-colors hover:text-butter"
            >
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" strokeWidth={2} />
              <span>
                {business.address.line1}
                <span className="mt-0.5 block text-[11px] leading-relaxed text-cream/45">
                  {business.address.line2}
                </span>
                <span className="mt-1 block text-[11px] text-cream/35">
                  Buka Google Maps
                </span>
              </span>
            </a>
            <p className="flex items-start gap-2 text-xs leading-relaxed text-cream/45">
              <Clock className="mt-0.5 h-3.5 w-3.5 shrink-0" strokeWidth={2} />
              <span>
                {business.hours.label}
                <span className="mt-0.5 block text-[11px] text-cream/35">
                  {business.hours.note}
                </span>
              </span>
            </p>
            <p className="text-xs text-cream/35">Harga dalam Rupiah (IDR).</p>
          </div>
        </div>
      </div>

      {/* Oversized wordmark */}
      <div className="relative overflow-hidden border-t border-cream/10">
        <div className="container-page flex items-center justify-between gap-4 py-5">
          <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-cream/30">
            © {new Date().getFullYear()} Beri Kopi Jatinangor
          </p>
          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.16em] text-cream/40 transition-colors hover:text-butter"
          >
            Kembali ke atas
            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-cream/15">
              <ArrowUp className="h-3 w-3" strokeWidth={2.4} />
            </span>
          </button>
        </div>
        <div
          className="pointer-events-none select-none whitespace-nowrap text-center font-display text-[21vw] font-extrabold leading-[0.7] tracking-[-0.06em] text-cream/[0.035] lg:text-[17vw]"
          aria-hidden="true"
        >
          BERI KOPI
        </div>
      </div>
    </footer>
  )
}
