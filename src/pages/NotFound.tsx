import { Link } from 'react-router-dom'
import { ArrowLeft, Coffee } from 'lucide-react'
import { usePageMeta } from '../hooks/usePageMeta'
import { BrandLogo } from '../components/BrandLogo'

export default function NotFound() {
  usePageMeta({
    title: 'Halaman Tidak Ditemukan — Beri Kopi Jatinangor',
    description: 'Halaman yang kamu cari tidak ada. Kembali ke menu Beri Kopi Jatinangor.',
  })

  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden bg-cream py-16">
      <div className="paper-grain pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="container-page relative flex flex-col items-center text-center">
        <BrandLogo variant="symbol" symbolClassName="h-20 w-20" eager />
        <p className="eyebrow mt-8 text-beri-red">
          <Coffee className="h-3.5 w-3.5" strokeWidth={2.4} />
          Error 404
        </p>
        <h1 className="display-title mt-4 text-[clamp(4rem,16vw,10rem)] text-espresso">
          NYASAR?
        </h1>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-espresso/55 sm:text-base">
          Halaman ini nggak ada di menu kami. Mungkin kamu salah ketik, atau kopinya
          sudah habis. Yuk balik ke tempat yang benar.
        </p>
        <Link
          to="/"
          className="group mt-7 inline-flex h-12 items-center gap-2 rounded-full bg-beri-red px-6 text-sm font-bold text-cream shadow-[0_4px_0_0_#A80C20] transition-colors hover:bg-beri-red-dark"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" strokeWidth={2.4} />
          Kembali ke beranda
        </Link>
      </div>
    </section>
  )
}
