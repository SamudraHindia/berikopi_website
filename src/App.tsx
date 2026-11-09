import { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import { MotionConfig } from 'framer-motion'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { ScrollToTop } from './components/ScrollToTop'
import { SkipLink } from './components/SkipLink'
import { PageLoader } from './components/PageLoader'
import Home from './pages/Home'

const MenuPage = lazy(() => import('./pages/MenuPage'))
const AboutPage = lazy(() => import('./pages/AboutPage'))
const Contact = lazy(() => import('./pages/Contact'))
const NotFound = lazy(() => import('./pages/NotFound'))

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="flex min-h-screen flex-col bg-cream">
        <SkipLink />
        <ScrollToTop />
        <Navbar />
        <main id="main" className="flex-1">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/menu" element={<MenuPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </MotionConfig>
  )
}
