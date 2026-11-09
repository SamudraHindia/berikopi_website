type CoffeeFallbackProps = {
  className?: string
}

export function CoffeeFallback({ className = '' }: CoffeeFallbackProps) {
  return (
    <div className={`relative flex items-center justify-center ${className}`} aria-hidden="true">
      <svg viewBox="0 0 520 520" className="h-full w-full" role="presentation">
        <defs>
          <linearGradient id="cup-red" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#E51A34" />
            <stop offset="100%" stopColor="#B70D24" />
          </linearGradient>
        </defs>

        <circle cx="260" cy="262" r="205" fill="#FFE49A" />
        <circle cx="260" cy="262" r="168" fill="#FFF4D2" opacity="0.65" />
        <path
          d="M80 380C120 330 165 410 220 362C275 314 330 390 438 330"
          fill="none"
          stroke="#D10F29"
          strokeOpacity="0.18"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path d="M58 152L72 186L106 200L72 214L58 248L44 214L10 200L44 186Z" fill="#D10F29" opacity="0.55" />
        <path d="M451 96L460 117L481 126L460 135L451 156L442 135L421 126L442 117Z" fill="#D10F29" opacity="0.7" />
        <circle cx="438" cy="378" r="5" fill="#D10F29" opacity="0.45" />
        <circle cx="86" cy="300" r="7" fill="#F4A261" />

        <g transform="rotate(-7 260 280)">
          <ellipse cx="260" cy="438" rx="118" ry="18" fill="#30241F" opacity="0.12" />

          {/* straw */}
          <g transform="rotate(-10 328 170)">
            <rect x="319" y="90" width="19" height="174" rx="9.5" fill="#FFF9F0" />
            <rect x="319" y="126" width="19" height="17" fill="#D10F29" />
            <rect x="319" y="180" width="19" height="17" fill="#D10F29" />
          </g>

          {/* cup */}
          <path
            d="M172 174H348L324 416C322 432 309 444 293 444H227C211 444 198 432 196 416L172 174Z"
            fill="url(#cup-red)"
          />
          <path
            d="M182 250H338L330 336C329 343 323 348 316 348H204C197 348 191 343 190 336L182 250Z"
            fill="#FFF9F0"
          />
          <path
            d="M176 190H344L340 220H180L176 190Z"
            fill="#FFF9F0"
            opacity="0.35"
          />

          {/* lid */}
          <rect x="163" y="154" width="194" height="28" rx="14" fill="#FFF9F0" />
          <rect x="176" y="145" width="168" height="20" rx="10" fill="#FFF4E3" />
          <rect x="200" y="160" width="120" height="9" rx="4.5" fill="#FFFFFF" opacity="0.7" />

          {/* logo sticker */}
          <circle cx="260" cy="300" r="48" fill="#FFF9F0" />
          <circle cx="260" cy="300" r="35" fill="none" stroke="#D10F29" strokeWidth="6" />
          <path d="M252 276V324" stroke="#D10F29" strokeWidth="5" strokeLinecap="round" />
          <path d="M260 288C273 286 273 310 260 313" fill="#D10F29" />
          <text
            x="260"
            y="365"
            textAnchor="middle"
            fontFamily="DM Sans, sans-serif"
            fontSize="12"
            fontWeight="800"
            letterSpacing="3"
            fill="#FFF9F0"
          >
            BERI KOPI
          </text>
        </g>

        {/* floating beans */}
        <g transform="translate(96 382) rotate(-20)">
          <ellipse cx="0" cy="0" rx="22" ry="31" fill="#4A2E21" />
          <path d="M-3 -23C10 -12 -10 12 3 23" fill="none" stroke="#2A1811" strokeWidth="3" strokeLinecap="round" />
        </g>
        <g transform="translate(438 304) rotate(34)">
          <ellipse cx="0" cy="0" rx="16" ry="23" fill="#4A2E21" />
          <path d="M-2 -17C7 -9 -7 9 2 17" fill="none" stroke="#2A1811" strokeWidth="2.4" strokeLinecap="round" />
        </g>
        <g transform="translate(430 184) rotate(-8)">
          <ellipse cx="0" cy="0" rx="11" ry="16" fill="#4A2E21" />
          <path d="M-1 -12C5 -6 -5 6 1 12" fill="none" stroke="#2A1811" strokeWidth="2" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  )
}
