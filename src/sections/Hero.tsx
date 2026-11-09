import { Suspense, lazy, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDown, ArrowRight, ArrowUpRight, MapPin, Sparkles, Star } from 'lucide-react'
import { CoffeeFallback } from '../components/CoffeeFallback'
import { totalProducts } from '../data/menu'

const CoffeeScene = lazy(() => import('../three/CoffeeScene'))

const ease = [0.22, 1, 0.36, 1] as const

export function Hero() {
  const reduceMotion = useReducedMotion()
  const [showScene, setShowScene] = useState(false)

  useEffect(() => {
    if (reduceMotion) return
    const timer = window.setTimeout(() => setShowScene(true), 200)
    return () => window.clearTimeout(timer)
  }, [reduceMotion])

  const fadeUp = {
    initial: { opacity: 0, y: 26 },
    animate: { opacity: 1, y: 0 },
  }

  return (
    <section className="relative overflow-hidden bg-cream">
      <div className="paper-grain pointer-events-none absolute inset-0" aria-hidden="true" />

      {/* Ambient doodles */}
      <svg
        className="pointer-events-none absolute -left-24 top-24 h-64 w-64 text-beri-red/10"
        viewBox="0 0 200 200"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="100" cy="100" r="98" stroke="currentColor" strokeWidth="2" strokeDasharray="4 10" />
        <circle cx="100" cy="100" r="64" stroke="currentColor" strokeWidth="2" />
      </svg>
      <svg
        className="pointer-events-none absolute -right-16 top-16 h-52 w-52 text-warm-orange/30"
        viewBox="0 0 200 200"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M20 100C40 30 80 20 110 60C140 100 175 70 182 128C188 180 105 195 62 168C25 145 6 150 20 100Z"
          stroke="currentColor"
          strokeWidth="2.5"
        />
      </svg>

      <div className="container-page relative grid gap-6 pb-14 pt-10 sm:gap-8 lg:min-h-[calc(100svh-76px)] lg:grid-cols-[1.04fr_0.96fr] lg:items-center lg:gap-4 lg:pb-16 lg:pt-12">
        <div className="relative z-10 max-w-[680px]">
          <motion.div
            {...fadeUp}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05, ease }}
            className="sticker bg-white/80 text-espresso/60 backdrop-blur-sm"
          >
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-beri-red text-cream">
              <Star className="h-3 w-3 fill-current" strokeWidth={0} />
            </span>
            Coffee & good moods · Jatinangor
          </motion.div>

          <h1 className="display-title mt-5 text-[clamp(3.35rem,8.4vw,7rem)] text-espresso">
            <motion.span
              className="block"
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease }}
            >
              GOOD DAYS
            </motion.span>
            <motion.span
              className="relative mt-1 block w-fit"
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.18, ease }}
            >
              <span className="absolute inset-x-[-0.08em] bottom-[0.08em] top-[0.15em] -z-10 -rotate-[1.4deg] rounded-[0.18em] bg-butter" />
              START WITH
              <svg
                className="absolute -right-6 -top-5 h-8 w-8 text-beri-red sm:-right-9 sm:-top-7 sm:h-10 sm:w-10"
                viewBox="0 0 40 40"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M20 3V37M3 20H37M8 8L32 32M32 8L8 32"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </motion.span>
            <motion.span
              className="relative mt-1 block w-fit text-beri-red"
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.26, ease }}
            >
              GOOD COFFEE.
              <svg
                className="absolute -bottom-2 left-1 h-3 w-[78%] text-beri-red/70 sm:-bottom-3 sm:h-4"
                viewBox="0 0 300 18"
                fill="none"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path
                  d="M3 12C55 4 96 14 145 8C194 2 238 13 297 6"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </motion.span>
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.38, ease }}
            className="mt-6 max-w-md sm:mt-7"
          >
            <p className="text-lg font-semibold tracking-[-0.01em] text-espresso sm:text-xl">
              Your daily coffee, your happy place.
            </p>
            <p className="body-copy mt-2.5">
              Es kopi susu, matcha, mocktail, dan bites yang bikin hari biasa terasa
              lebih seru. Dibuat segar, disajikan santai — khas Beri Kopi Jatinangor.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.48, ease }}
            className="mt-7 flex flex-col gap-3 min-[420px]:flex-row"
          >
            <Link
              to="/menu"
              className="group inline-flex h-14 items-center justify-center gap-2 rounded-full bg-beri-red px-7 text-sm font-bold text-cream shadow-[0_4px_0_0_#A80C20] transition-all hover:bg-beri-red-dark active:translate-y-[2px] active:shadow-none"
            >
              Explore Menu
              <ArrowRight
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
                strokeWidth={2.4}
              />
            </Link>
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-espresso/20 px-6 py-4 text-sm font-bold text-espresso transition-colors hover:border-espresso hover:bg-espresso hover:text-cream"
            >
              <MapPin className="h-4 w-4" strokeWidth={2.2} />
              Find Us
              <ArrowUpRight
                className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                strokeWidth={2.2}
              />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-[11px] font-bold uppercase tracking-[0.12em] text-espresso/40 sm:mt-8"
          >
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-beri-red" />
              {totalProducts} pilihan menu
            </span>
            <span className="hidden h-3 w-px bg-espresso/15 sm:block" />
            <span>Kopi dari Rp19.000</span>
            <span className="hidden h-3 w-px bg-espresso/15 sm:block" />
            <span className="flex items-center gap-1.5">
              <MapPin className="h-3 w-3" strokeWidth={2.2} />
              Jatinangor
            </span>
          </motion.div>
        </div>

        {/* Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease }}
          className="relative mx-auto w-full max-w-[570px] lg:max-w-none"
        >
          <div className="relative mx-auto aspect-square w-full max-w-[540px]">
            <div className="absolute inset-[7%] rounded-full bg-butter" />
            <div className="absolute inset-[7%] rotate-[8deg] rounded-full border border-espresso/10" />
            <div className="absolute inset-[17%] rounded-full bg-cream/60" />
            <div className="absolute inset-0">
              {showScene && !reduceMotion ? (
                <Suspense fallback={<CoffeeFallback className="absolute inset-0" />}>
                  <CoffeeScene />
                </Suspense>
              ) : (
                <CoffeeFallback className="absolute inset-0" />
              )}
            </div>

            <motion.div
              initial={{ opacity: 0, rotate: -10, scale: 0.8 }}
              animate={{ opacity: 1, rotate: -8, scale: 1 }}
              transition={{ delay: 0.8, type: 'spring', stiffness: 180, damping: 16 }}
              className="absolute right-[4%] top-[10%] flex h-20 w-20 flex-col items-center justify-center rounded-full bg-beri-red text-cream shadow-lg sm:h-24 sm:w-24"
            >
              <Sparkles className="h-4 w-4" strokeWidth={2.2} />
              <span className="mt-1 font-hand text-lg leading-none sm:text-xl">fresh!</span>
              <span className="mt-1 text-[8px] font-bold uppercase tracking-[0.14em] opacity-70">
                daily brew
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="absolute bottom-[14%] left-0 rotate-[-4deg] rounded-2xl border border-espresso/10 bg-white px-4 py-3 shadow-card sm:bottom-[16%] sm:px-5 sm:py-4"
            >
              <p className="font-hand text-lg leading-none text-espresso/55">your fave</p>
              <p className="mt-1 text-xs font-bold uppercase tracking-[0.08em] text-espresso">
                Es Kopi Susu
              </p>
              <p className="mt-1 font-display text-lg font-extrabold text-beri-red">Rp19.000</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, type: 'spring', stiffness: 200, damping: 18 }}
              className="absolute bottom-[6%] right-[6%] flex items-center gap-2 rounded-full bg-espresso px-3.5 py-2 text-[10px] font-bold uppercase tracking-[0.12em] text-cream"
            >
              <Star className="h-3 w-3 fill-butter text-butter" strokeWidth={0} />
              good mood inside
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.6 }}
              className="absolute -left-2 top-[42%] hidden -rotate-6 items-center gap-2 rounded-full border border-espresso/10 bg-cream px-3 py-2 text-[10px] font-bold uppercase tracking-[0.1em] text-espresso/50 sm:flex"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#5E8C4A]" />
              made fresh
            </motion.div>
          </div>
        </motion.div>
      </div>

      <div className="container-page relative flex items-center justify-between pb-8">
        <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.16em] text-espresso/30">
          <ArrowDown className="h-3.5 w-3.5 animate-bounce" strokeWidth={2.2} />
          Scroll untuk lihat menu
        </div>
        <p className="hidden font-hand text-lg text-espresso/35 sm:block">
          good coffee, good company.
        </p>
      </div>
    </section>
  )
}
