import { Link } from 'react-router-dom'

type BrandLogoProps = {
  variant?: 'full' | 'horizontal' | 'symbol' | 'wordmark'
  className?: string
  symbolClassName?: string
  wordmarkClassName?: string
  linked?: boolean
  eager?: boolean
}

const sources = {
  full: '/logo/berikopi-logo.svg',
  symbol: '/logo/berikopi-symbol.svg',
  wordmark: '/logo/berikopi-wordmark.svg',
} as const

export function BrandLogo({
  variant = 'horizontal',
  className = '',
  symbolClassName = 'h-9 w-9',
  wordmarkClassName = 'h-[22px] w-auto',
  linked = false,
  eager = false,
}: BrandLogoProps) {
  const loading = eager ? 'eager' : 'lazy'

  const content =
    variant === 'symbol' ? (
      <img
        src={sources.symbol}
        alt="Beri Kopi"
        className={`${symbolClassName} ${className}`}
        loading={loading}
        draggable={false}
      />
    ) : variant === 'wordmark' ? (
      <img
        src={sources.wordmark}
        alt="Beri Kopi"
        className={`${wordmarkClassName} ${className}`}
        loading={loading}
        draggable={false}
      />
    ) : variant === 'full' ? (
      <img
        src={sources.full}
        alt="Beri Kopi Jatinangor"
        className={`${symbolClassName} ${className}`}
        loading={loading}
        draggable={false}
      />
    ) : (
      <span className={`inline-flex items-center gap-2 ${className}`}>
        <img
          src={sources.symbol}
          alt=""
          aria-hidden="true"
          className={symbolClassName}
          loading={loading}
          draggable={false}
        />
        <img
          src={sources.wordmark}
          alt="Beri Kopi"
          className={wordmarkClassName}
          loading={loading}
          draggable={false}
        />
      </span>
    )

  if (!linked) return content

  return (
    <Link
      to="/"
      aria-label="Beri Kopi Jatinangor — kembali ke beranda"
      className="inline-flex shrink-0 items-center rounded-md focus-visible:ring-2"
    >
      {content}
    </Link>
  )
}
