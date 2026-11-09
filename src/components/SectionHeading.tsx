import type { ReactNode } from 'react'
import { motion } from 'framer-motion'

type SectionHeadingProps = {
  eyebrow: string
  title: ReactNode
  description?: ReactNode
  align?: 'left' | 'center'
  light?: boolean
  action?: ReactNode
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  light = false,
  action,
  className = '',
}: SectionHeadingProps) {
  const isCenter = align === 'center'

  return (
    <div
      className={`flex flex-col gap-6 ${
        isCenter ? 'items-center text-center' : 'items-start'
      } ${action ? 'md:flex-row md:items-end md:justify-between' : ''} ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className={`max-w-2xl ${isCenter ? 'mx-auto' : ''}`}
      >
        <p className={`eyebrow ${light ? 'text-butter' : 'text-beri-red'}`}>
          <span
            className={`h-1.5 w-1.5 rounded-full ${light ? 'bg-butter' : 'bg-beri-red'}`}
            aria-hidden="true"
          />
          {eyebrow}
        </p>
        <h2
          className={`display-title mt-4 text-[2.65rem] sm:text-5xl lg:text-6xl ${
            light ? 'text-cream' : 'text-espresso'
          }`}
        >
          {title}
        </h2>
        {description && (
          <p className={`mt-5 max-w-xl ${light ? 'text-cream/65' : 'body-copy'}`}>
            {description}
          </p>
        )}
      </motion.div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  )
}
