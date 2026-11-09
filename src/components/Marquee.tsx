import { Coffee, Sparkles } from 'lucide-react'

type MarqueeProps = {
  items?: string[]
  tone?: 'red' | 'dark' | 'butter'
}

const defaultItems = [
  'FRESH BREW',
  'GOOD MOODS',
  'JATINANGOR',
  'ES KOPI SUSU',
  'MATCHA & MOCKTAIL',
  'MADE FOR SLOW DAYS',
]

const tones = {
  red: 'bg-beri-red text-cream border-beri-red',
  dark: 'bg-espresso text-cream border-espresso',
  butter: 'bg-butter text-espresso border-butter',
} as const

export function Marquee({ items = defaultItems, tone = 'red' }: MarqueeProps) {
  const half = (
    <div className="flex shrink-0 items-center">
      {items.map((item, index) => (
        <span key={`${item}-${index}`} className="flex items-center">
          <span className="whitespace-nowrap px-5 font-display text-sm font-extrabold uppercase tracking-[0.08em] sm:px-7 sm:text-base">
            {item}
          </span>
          {index % 2 === 0 ? (
            <Sparkles className="h-4 w-4 shrink-0 opacity-90" strokeWidth={2.4} />
          ) : (
            <Coffee className="h-4 w-4 shrink-0 opacity-90" strokeWidth={2.4} />
          )}
        </span>
      ))}
    </div>
  )

  return (
    <div className={`marquee border-y py-3.5 ${tones[tone]}`} aria-hidden="true">
      <div className="marquee__track">
        {half}
        {half}
      </div>
    </div>
  )
}
