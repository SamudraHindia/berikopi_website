import { usePageMeta } from '../hooks/usePageMeta'
import { Hero } from '../sections/Hero'
import { Marquee } from '../components/Marquee'
import { FeaturedMenu } from '../sections/FeaturedMenu'
import { AboutPreview } from '../sections/AboutPreview'
import { Gallery } from '../sections/Gallery'
import { Location } from '../sections/Location'

export default function Home() {
  usePageMeta({
    title: 'Beri Kopi Jatinangor — Good Days Start With Good Coffee',
    description:
      'Your daily coffee, your happy place. Es kopi susu, matcha, mocktail, dan makanan di Beri Kopi Jatinangor. Jelajahi 89 menu pilihan.',
    image: '/images/hero/og-cover.png',
  })

  return (
    <>
      <Hero />
      <Marquee />
      <FeaturedMenu />
      <AboutPreview />
      <Gallery />
      <Location />
    </>
  )
}
