import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

type Variant = 'primary' | 'dark' | 'outline' | 'white' | 'ghost'
type Size = 'md' | 'lg' | 'sm'

const variants: Record<Variant, string> = {
  primary:
    'bg-beri-red text-cream border-beri-red shadow-[0_4px_0_0_#A80C20] hover:bg-beri-red-dark hover:shadow-[0_2px_0_0_#A80C20]',
  dark: 'bg-espresso text-cream border-espresso shadow-[0_4px_0_0_#170F0C] hover:bg-ink hover:shadow-[0_2px_0_0_#170F0C]',
  outline:
    'bg-transparent text-espresso border-espresso/20 hover:border-espresso hover:bg-espresso hover:text-cream',
  white:
    'bg-white text-espresso border-white shadow-[0_4px_0_0_rgba(48,36,31,0.12)] hover:bg-butter',
  ghost: 'border-transparent bg-transparent text-espresso hover:bg-espresso/5',
}

const sizes: Record<Size, string> = {
  sm: 'h-9 px-4 text-xs',
  md: 'h-11 px-5 text-sm',
  lg: 'h-12 px-6 text-sm sm:h-14 sm:px-7 sm:text-[15px]',
}

type CommonProps = {
  children: ReactNode
  variant?: Variant
  size?: Size
  className?: string
  withArrow?: boolean
}

const base =
  'group inline-flex items-center justify-center gap-2 rounded-full border font-bold tracking-[-0.01em] transition-all duration-200 active:translate-y-[2px] active:shadow-none'

export function ButtonLink({
  to,
  href,
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  withArrow = false,
  external = false,
}: CommonProps & { to?: string; href?: string; external?: boolean }) {
  const content = (
    <>
      {children}
      {withArrow && (
        <ArrowUpRight
          className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          strokeWidth={2.3}
        />
      )}
    </>
  )

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {content}
      </a>
    )
  }

  return (
    <Link to={to ?? '/'} className={classes}>
      {content}
    </Link>
  )
}
