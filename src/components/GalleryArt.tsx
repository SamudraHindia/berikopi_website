type GalleryVariant = 'window' | 'brew' | 'table' | 'storefront' | 'sweet'

type GalleryArtProps = {
  variant: GalleryVariant
  className?: string
}

const palettes = {
  window: { bg: '#FFE49A', wall: '#FFF4D2', accent: '#D10F29' },
  brew: { bg: '#EFE0D2', wall: '#FFF9F0', accent: '#D10F29' },
  table: { bg: '#FFDCC8', wall: '#FFF4E3', accent: '#D10F29' },
  storefront: { bg: '#FFE49A', wall: '#FFF9F0', accent: '#D10F29' },
  sweet: { bg: '#F7E3C8', wall: '#FFF6E5', accent: '#D10F29' },
} as const

export function GalleryArt({ variant, className = '' }: GalleryArtProps) {
  const p = palettes[variant]

  return (
    <svg
      viewBox="0 0 600 460"
      className={`h-full w-full ${className}`}
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      role="presentation"
    >
      <rect width="600" height="460" fill={p.bg} />

      {variant === 'window' && (
        <g>
          <rect x="0" y="0" width="600" height="460" fill={p.wall} />
          <rect x="118" y="58" width="364" height="300" rx="18" fill="#FFD27A" />
          <rect x="118" y="58" width="364" height="300" rx="18" fill="none" stroke="#30241F" strokeOpacity="0.12" strokeWidth="10" />
          <circle cx="378" cy="148" r="48" fill="#FFF4D2" opacity="0.9" />
          <path d="M118 280C190 236 250 258 300 292C352 328 416 270 482 244V358H118V280Z" fill="#F4A261" opacity="0.65" />
          <path d="M118 306C186 272 244 300 308 326C370 352 430 302 482 288V358H118V306Z" fill="#D10F29" opacity="0.16" />
          <path d="M482 58V358" stroke="#30241F" strokeOpacity="0.12" strokeWidth="10" />
          <path d="M300 58V358" stroke="#30241F" strokeOpacity="0.12" strokeWidth="10" />
          <path d="M118 208H482" stroke="#30241F" strokeOpacity="0.1" strokeWidth="8" />
          <path d="M44 52C112 108 88 206 44 262V52Z" fill="#D10F29" opacity="0.85" />
          <path d="M556 52C488 108 512 206 556 262V52Z" fill="#D10F29" opacity="0.85" />
          <rect x="0" y="356" width="600" height="104" fill="#E7C9A7" />
          <rect x="0" y="356" width="600" height="10" fill="#30241F" opacity="0.08" />
          {/* plant */}
          <g transform="translate(76 292)">
            <path d="M38 64C16 20 20 -2 36 4C50 10 54 34 44 64" fill="#5E8C4A" />
            <path d="M44 64C60 22 82 8 88 24C95 42 72 58 54 68" fill="#6E9E56" />
            <path d="M22 62H72L66 104H28L22 62Z" fill="#D10F29" />
            <rect x="20" y="58" width="54" height="10" rx="5" fill="#A80C20" />
          </g>
          {/* cup on sill */}
          <g transform="translate(248 276)">
            <ellipse cx="62" cy="86" rx="70" ry="9" fill="#30241F" opacity="0.12" />
            <path d="M22 22H102L94 78C93 85 87 90 80 90H44C37 90 31 85 30 78L22 22Z" fill="#FFF9F0" />
            <path d="M30 34H94L89 72H35L30 34Z" fill="#7A4A32" />
            <path d="M100 36C124 34 128 62 106 68" fill="none" stroke="#FFF9F0" strokeWidth="10" strokeLinecap="round" />
            <path d="M52 8C44 -2 60 -6 54 -18" fill="none" stroke="#D10F29" strokeWidth="3" strokeLinecap="round" opacity="0.5" />
            <path d="M72 8C64 -2 80 -6 74 -18" fill="none" stroke="#D10F29" strokeWidth="3" strokeLinecap="round" opacity="0.35" />
          </g>
          {/* hanging lamp */}
          <path d="M300 0V38" stroke="#30241F" strokeWidth="3" />
          <path d="M272 38H328L340 80H260L272 38Z" fill="#30241F" />
          <circle cx="300" cy="72" r="12" fill="#FFE49A" />
        </g>
      )}

      {variant === 'brew' && (
        <g>
          <rect x="0" y="0" width="600" height="460" fill={p.wall} />
          <rect x="0" y="0" width="600" height="460" fill="#EFE0D2" opacity="0.5" />
          <rect x="0" y="330" width="600" height="130" fill="#C89B6D" />
          <rect x="0" y="330" width="600" height="12" fill="#30241F" opacity="0.12" />
          <path d="M76 0V330M524 0V330" stroke="#30241F" strokeOpacity="0.06" strokeWidth="30" />
          {/* machine */}
          <g transform="translate(138 102)">
            <rect x="0" y="0" width="324" height="216" rx="24" fill="#D10F29" />
            <rect x="18" y="20" width="288" height="72" rx="14" fill="#A80C20" />
            <circle cx="74" cy="56" r="17" fill="#FFF9F0" />
            <circle cx="74" cy="56" r="8" fill="#30241F" />
            <circle cx="132" cy="56" r="17" fill="#FFF9F0" />
            <circle cx="132" cy="56" r="8" fill="#30241F" />
            <rect x="190" y="40" width="94" height="30" rx="15" fill="#FFF9F0" opacity="0.9" />
            <rect x="34" y="120" width="256" height="16" rx="8" fill="#FFF9F0" opacity="0.2" />
            <rect x="110" y="154" width="104" height="42" rx="10" fill="#30241F" />
            <path d="M146 154V196M178 154V196" stroke="#FFF9F0" strokeWidth="4" opacity="0.4" />
            <circle cx="268" cy="172" r="19" fill="#FFF9F0" opacity="0.9" />
            <path d="M260 172H276M268 164V180" stroke="#D10F29" strokeWidth="4" strokeLinecap="round" />
          </g>
          {/* cup */}
          <g transform="translate(244 292)">
            <ellipse cx="56" cy="92" rx="62" ry="8" fill="#30241F" opacity="0.18" />
            <path d="M16 30H96L88 84C87 90 82 94 75 94H37C30 94 25 90 24 84L16 30Z" fill="#FFF9F0" />
            <path d="M24 40H88L83 78H29L24 40Z" fill="#30241F" />
            <path d="M94 44C116 42 120 70 100 76" fill="none" stroke="#FFF9F0" strokeWidth="9" strokeLinecap="round" />
            <path d="M48 18C40 8 56 4 50 -8" fill="none" stroke="#D10F29" strokeWidth="3" strokeLinecap="round" opacity="0.5" />
          </g>
          {/* croissant */}
          <g transform="translate(434 306) rotate(-12)">
            <path d="M0 26C18 0 64 0 84 26C64 44 18 44 0 26Z" fill="#E8B45E" />
            <path d="M14 22C26 12 48 12 58 20" fill="none" stroke="#C98A3E" strokeWidth="4" strokeLinecap="round" />
          </g>
          {/* shelf */}
          <rect x="64" y="52" width="72" height="6" rx="3" fill="#30241F" opacity="0.2" />
          <rect x="78" y="28" width="20" height="24" rx="4" fill="#5E8C4A" />
          <rect x="104" y="34" width="18" height="18" rx="4" fill="#F4A261" />
        </g>
      )}

      {variant === 'table' && (
        <g>
          <rect x="0" y="0" width="600" height="460" fill={p.wall} />
          <path d="M0 0H600V460H0Z" fill="#FFDCC8" opacity="0.5" />
          <path d="M0 280H600V460H0Z" fill="#F4A261" />
          <path d="M0 280H600V460H0Z" fill="#D10F29" opacity="0.15" />
          {Array.from({ length: 10 }).map((_, index) => (
            <rect
              key={`h-${index}`}
              x={index * 60}
              y="280"
              width="30"
              height="30"
              fill="#FFF9F0"
              opacity="0.35"
            />
          ))}
          {Array.from({ length: 10 }).map((_, index) => (
            <rect
              key={`v-${index}`}
              x={index * 60 + 30}
              y="310"
              width="30"
              height="30"
              fill="#FFF9F0"
              opacity="0.35"
            />
          ))}
          {/* window light */}
          <path d="M0 0L220 0L40 280H0V0Z" fill="#FFF9F0" opacity="0.35" />
          {/* iced matcha */}
          <g transform="translate(150 128) rotate(-5)">
            <ellipse cx="70" cy="190" rx="64" ry="10" fill="#30241F" opacity="0.12" />
            <path d="M28 26H112L102 174C101 182 95 188 86 188H54C45 188 39 182 38 174L28 26Z" fill="#FFFFFF" opacity="0.85" />
            <path d="M36 74H104L98 172C97 178 93 181 87 181H53C47 181 43 178 42 172L36 74Z" fill="#8CB556" />
            <path d="M36 104H104V126H36Z" fill="#F5FAEC" opacity="0.55" />
            <rect x="20" y="18" width="100" height="16" rx="8" fill="#FFF9F0" />
            <rect x="82" y="-26" width="11" height="60" rx="5.5" fill="#D10F29" transform="rotate(8 87 4)" />
            <circle cx="70" cy="146" r="18" fill="#FFF9F0" opacity="0.8" />
          </g>
          {/* iced coffee */}
          <g transform="translate(338 166) rotate(4)">
            <ellipse cx="64" cy="172" rx="58" ry="9" fill="#30241F" opacity="0.12" />
            <path d="M24 24H104L95 158C94 165 89 170 81 170H47C39 170 34 165 33 158L24 24Z" fill="#FFFFFF" opacity="0.85" />
            <path d="M32 72H96L91 156C90 161 87 164 82 164H46C41 164 38 161 37 156L32 72Z" fill="#7A4A32" />
            <path d="M32 96H96V116H32Z" fill="#F6E2C6" opacity="0.7" />
            <rect x="18" y="16" width="92" height="15" rx="7.5" fill="#FFF9F0" />
            <rect x="76" y="-28" width="10" height="56" rx="5" fill="#FFF9F0" transform="rotate(-7 81 0)" />
            <rect x="76" y="-12" width="10" height="10" fill="#D10F29" transform="rotate(-7 81 0)" />
          </g>
          {/* croissant plate */}
          <g transform="translate(240 340)">
            <ellipse cx="80" cy="34" rx="96" ry="26" fill="#FFF9F0" />
            <path d="M22 30C40 2 108 2 138 30C116 52 46 52 22 30Z" fill="#E8B45E" />
            <path d="M46 26C60 14 100 14 116 26" fill="none" stroke="#C98A3E" strokeWidth="4" strokeLinecap="round" />
            <path d="M44 28C62 42 98 42 118 28" fill="none" stroke="#C98A3E" strokeWidth="4" strokeLinecap="round" />
          </g>
        </g>
      )}

      {variant === 'storefront' && (
        <g>
          <rect width="600" height="460" fill={p.bg} />
          <circle cx="504" cy="84" r="52" fill="#FFF4D2" />
          <path d="M0 360H600V460H0Z" fill="#E7C9A7" />
          <rect x="104" y="118" width="392" height="250" rx="12" fill="#FFF9F0" />
          <rect x="84" y="100" width="432" height="28" rx="10" fill="#D10F29" />
          {/* awning */}
          <g>
            <path d="M92 100H508L492 148H108L92 100Z" fill="#D10F29" />
            {Array.from({ length: 7 }).map((_, index) => (
              <path
                key={index}
                d={`M${108 + index * 55.5} 148C${108 + index * 55.5} 166 ${135 + index * 55.5} 166 ${135 + index * 55.5} 148Z`}
                fill="#D10F29"
              />
            ))}
            {Array.from({ length: 7 }).map((_, index) => (
              <path
                key={`cream-${index}`}
                d={`M${135 + index * 55.5} 148C${135 + index * 55.5} 166 ${163.5 + index * 55.5} 166 ${163.5 + index * 55.5} 148Z`}
                fill="#FFF9F0"
              />
            ))}
          </g>
          {/* window */}
          <rect x="148" y="182" width="220" height="142" rx="8" fill="#FFD27A" />
          <rect x="148" y="182" width="220" height="142" rx="8" fill="none" stroke="#30241F" strokeOpacity="0.12" strokeWidth="8" />
          <path d="M300 182V324" stroke="#30241F" strokeOpacity="0.12" strokeWidth="6" />
          <path d="M148 250H368" stroke="#30241F" strokeOpacity="0.1" strokeWidth="6" />
          <circle cx="300" cy="286" r="26" fill="#FFF9F0" />
          <circle cx="300" cy="286" r="18" fill="none" stroke="#D10F29" strokeWidth="4" />
          <path d="M296 270V302" stroke="#D10F29" strokeWidth="3" />
          <path d="M300 278C309 277 309 295 300 296" fill="#D10F29" />
          {/* door */}
          <rect x="392" y="182" width="76" height="186" rx="6" fill="#30241F" />
          <rect x="404" y="196" width="52" height="98" rx="4" fill="#FFD27A" opacity="0.8" />
          <circle cx="452" cy="300" r="4" fill="#FFE49A" />
          {/* plant */}
          <g transform="translate(76 274)">
            <path d="M46 70C26 30 32 8 46 16C60 24 62 46 52 70" fill="#5E8C4A" />
            <path d="M52 72C70 34 90 22 94 38C99 56 76 68 58 76" fill="#6E9E56" />
            <path d="M30 70H82L76 110H36L30 70Z" fill="#D10F29" />
          </g>
          {/* stool + sign */}
          <g transform="translate(80 366)">
            <rect x="0" y="0" width="72" height="10" rx="5" fill="#30241F" />
            <path d="M8 10V46M64 10V46" stroke="#30241F" strokeWidth="5" />
          </g>
          <g transform="translate(480 348) rotate(6)">
            <rect x="0" y="0" width="66" height="42" rx="8" fill="#FFF9F0" />
            <text x="33" y="20" textAnchor="middle" fontFamily="DM Sans, sans-serif" fontSize="8" fontWeight="800" letterSpacing="1.6" fill="#D10F29">
              BERI
            </text>
            <text x="33" y="32" textAnchor="middle" fontFamily="DM Sans, sans-serif" fontSize="8" fontWeight="800" letterSpacing="1.6" fill="#30241F">
              KOPI
            </text>
          </g>
        </g>
      )}

      {variant === 'sweet' && (
        <g>
          <rect width="600" height="460" fill={p.wall} />
          <path d="M0 0H600V460H0Z" fill="#F7E3C8" opacity="0.5" />
          <circle cx="98" cy="88" r="70" fill="#FFE49A" />
          <path d="M0 356H600V460H0Z" fill="#C89B6D" />
          <path d="M0 356H600V368H0Z" fill="#30241F" opacity="0.1" />
          {/* plate */}
          <g transform="translate(144 126)">
            <ellipse cx="170" cy="184" rx="158" ry="54" fill="#FFF9F0" />
            <ellipse cx="170" cy="174" rx="136" ry="42" fill="#FFF4E3" />
            {/* toast stack */}
            <g transform="rotate(-4 170 140)">
              <rect x="104" y="122" width="134" height="46" rx="18" fill="#E8B87B" />
              <rect x="116" y="112" width="116" height="38" rx="16" fill="#F2CE96" />
              <path d="M128 128C146 116 174 116 192 128" fill="none" stroke="#FFF3DE" strokeWidth="7" strokeLinecap="round" />
              <circle cx="146" cy="144" r="6" fill="#D10F29" />
              <circle cx="176" cy="142" r="6" fill="#D10F29" />
              <circle cx="204" cy="146" r="6" fill="#D10F29" />
            </g>
            {/* banana */}
            <g transform="rotate(18 292 180)">
              <path d="M250 188C270 160 308 158 326 180C308 200 272 202 250 188Z" fill="#FFE49A" />
              <path d="M258 186C278 168 304 166 318 180" fill="none" stroke="#E8C25A" strokeWidth="5" strokeLinecap="round" />
            </g>
            <g transform="rotate(-24 92 184)">
              <path d="M70 180C84 158 108 158 120 178C108 194 84 194 70 180Z" fill="#FFE49A" />
            </g>
            {/* coffee */}
            <g transform="translate(226 6)">
              <ellipse cx="58" cy="118" rx="58" ry="9" fill="#30241F" opacity="0.08" />
              <path d="M14 48H102L94 108C93 114 88 118 81 118H35C28 118 23 114 22 108L14 48Z" fill="#FFF9F0" />
              <path d="M22 58H94L88 102H28L22 58Z" fill="#7A4A32" />
              <path d="M100 62C122 60 124 88 104 94" fill="none" stroke="#FFF9F0" strokeWidth="9" strokeLinecap="round" />
              <path d="M50 32C42 22 58 18 52 6" fill="none" stroke="#D10F29" strokeWidth="3" strokeLinecap="round" opacity="0.5" />
            </g>
          </g>
          {/* napkin */}
          <g transform="translate(430 310) rotate(8)">
            <rect x="0" y="0" width="94" height="124" rx="6" fill="#FFF9F0" />
            <path d="M0 24H94M0 54H94M0 84H94" stroke="#D10F29" strokeOpacity="0.2" strokeWidth="4" />
          </g>
          {/* sparkle */}
          <path d="M470 70L478 96L504 104L478 112L470 138L462 112L436 104L462 96Z" fill="#D10F29" opacity="0.5" />
        </g>
      )}
    </svg>
  )
}
