import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, Instagram, MapPin, Menu, X } from 'lucide-react'
import { BrandLogo } from './BrandLogo'
import { business } from '../data/business'
import { useLockBodyScroll } from '../hooks/useLockBodyScroll'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Menu', to: '/menu' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useLockBodyScroll(open)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <>
      <header
        className={`sticky top-0 z-50 border-b bg-cream/90 backdrop-blur-xl transition-all duration-300 ${
          scrolled ? 'border-espresso/10 shadow-[0_8px_30px_-24px_rgba(48,36,31,0.4)]' : 'border-transparent'
        }`}
      >
        <div className="container-page flex h-[68px] items-center justify-between gap-4 lg:h-[76px]">
          <BrandLogo
            variant="horizontal"
            linked
            eager
            symbolClassName="h-8 w-8 sm:h-9 sm:w-9"
            wordmarkClassName="h-[19px] w-auto sm:h-[21px]"
          />

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Navigasi utama">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  `relative rounded-full px-4 py-2 text-[13px] font-bold transition-colors ${
                    isActive ? 'text-beri-red' : 'text-espresso/55 hover:text-espresso'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {item.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-active-dot"
                        className="absolute -bottom-0.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-beri-red"
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              to="/menu"
              className="group hidden h-11 items-center gap-2 rounded-full bg-beri-red px-5 text-[13px] font-bold text-cream shadow-[0_3px_0_0_#A80C20] transition-all hover:bg-beri-red-dark active:translate-y-[2px] active:shadow-none sm:inline-flex"
            >
              Explore Menu
              <ArrowUpRight
                className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                strokeWidth={2.4}
              />
            </Link>

            <button
              type="button"
              onClick={() => setOpen(true)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-espresso/10 bg-white text-espresso transition-colors hover:border-espresso/30 lg:hidden"
              aria-label="Buka navigasi"
              aria-expanded={open}
              aria-controls="mobile-navigation"
            >
              <Menu className="h-5 w-5" strokeWidth={2.2} />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-navigation"
            className="fixed inset-0 z-[70] flex flex-col bg-cream lg:hidden"
            initial={{ opacity: 0, y: -14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="container-page flex h-[68px] shrink-0 items-center justify-between">
              <BrandLogo
                variant="horizontal"
                linked
                eager
                symbolClassName="h-8 w-8"
                wordmarkClassName="h-[19px] w-auto"
              />
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-espresso/10 bg-white text-espresso"
                aria-label="Tutup navigasi"
                autoFocus
              >
                <X className="h-5 w-5" strokeWidth={2.2} />
              </button>
            </div>

            <div className="container-page flex flex-1 flex-col overflow-y-auto pb-8 pt-6">
              <nav className="flex flex-col" aria-label="Navigasi mobile">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.to}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.06 + index * 0.06, duration: 0.35 }}
                  >
                    <NavLink
                      to={item.to}
                      end={item.to === '/'}
                      className={({ isActive }) =>
                        `group flex items-center justify-between border-b border-espresso/10 py-4 ${
                          isActive ? 'text-beri-red' : 'text-espresso'
                        }`
                      }
                    >
                      <span className="flex items-baseline gap-4">
                        <span className="text-[10px] font-bold tracking-[0.16em] text-espresso/30">
                          0{index + 1}
                        </span>
                        <span className="font-display text-4xl font-extrabold tracking-[-0.04em] sm:text-5xl">
                          {item.label}
                        </span>
                      </span>
                      <ArrowUpRight
                        className="h-6 w-6 text-espresso/25 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-beri-red"
                        strokeWidth={2}
                      />
                    </NavLink>
                  </motion.div>
                ))}
              </nav>

              <div className="mt-auto pt-10">
                <Link
                  to="/menu"
                  className="flex h-14 w-full items-center justify-center gap-2 rounded-full bg-beri-red text-sm font-bold text-cream shadow-[0_4px_0_0_#A80C20]"
                >
                  Explore Menu
                  <ArrowUpRight className="h-4 w-4" strokeWidth={2.4} />
                </Link>

                <div className="mt-6 grid grid-cols-2 gap-3 text-xs font-semibold">
                  <a
                    href={business.maps.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-2xl border border-espresso/10 bg-white p-3.5 text-espresso/60"
                  >
                    <MapPin className="h-4 w-4 text-beri-red" />
                    Jatinangor
                  </a>
                  <a
                    href={business.instagram.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-2xl border border-espresso/10 bg-white p-3.5 text-espresso/60"
                  >
                    <Instagram className="h-4 w-4 text-beri-red" />
                    Instagram
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
