import { useId } from 'react'
import { Coffee, Leaf, Sparkles } from 'lucide-react'

type ProductArtProps = {
  category: string
  seed?: string
  className?: string
}

type Palette = {
  bg: string
  accent: string
  soft: string
  liquid: string
  foam: string
  garnish: string
}

const palettes: Record<string, Palette> = {
  'Special Beri Kopi': {
    bg: '#FFE49A',
    accent: '#D10F29',
    soft: '#FFF4D2',
    liquid: '#7A4A32',
    foam: '#F6E2C6',
    garnish: '#FFF9F0',
  },
  'Seri Signature': {
    bg: '#FFDCC8',
    accent: '#D10F29',
    soft: '#FFF0E7',
    liquid: '#6D3C29',
    foam: '#FFE9D2',
    garnish: '#FFF9F0',
  },
  'Seri Matcha': {
    bg: '#DFEBCB',
    accent: '#5F7A3B',
    soft: '#F1F7E6',
    liquid: '#8CB556',
    foam: '#F5FAEC',
    garnish: '#D10F29',
  },
  'Seri Creamy': {
    bg: '#FFE0B8',
    accent: '#D10F29',
    soft: '#FFF4E3',
    liquid: '#F4A261',
    foam: '#FFF7EA',
    garnish: '#E76F51',
  },
  'Espresso Bar': {
    bg: '#EFE0D2',
    accent: '#30241F',
    soft: '#FBF4EA',
    liquid: '#4A2E21',
    foam: '#E6C9A8',
    garnish: '#D10F29',
  },
  Mocktail: {
    bg: '#FFD2C7',
    accent: '#D10F29',
    soft: '#FFF0EA',
    liquid: '#F08A5D',
    foam: '#FFE9D6',
    garnish: '#FFE49A',
  },
  'Beri Non Kopi': {
    bg: '#F8E5C0',
    accent: '#D10F29',
    soft: '#FFF6E5',
    liquid: '#B8744C',
    foam: '#F2D6B6',
    garnish: '#FFE49A',
  },
  'Add On': {
    bg: '#F2ECE4',
    accent: '#D10F29',
    soft: '#FFFAF2',
    liquid: '#7A4A32',
    foam: '#FFF9F0',
    garnish: '#FFE49A',
  },
  'Main Course': {
    bg: '#FFE7C2',
    accent: '#D10F29',
    soft: '#FFF7E8',
    liquid: '#C46B3A',
    foam: '#FFF2D9',
    garnish: '#6E8B3D',
  },
  Snack: {
    bg: '#FFE2B8',
    accent: '#D10F29',
    soft: '#FFF6E7',
    liquid: '#D98C43',
    foam: '#FFF1D8',
    garnish: '#6E8B3D',
  },
  'Roti & Pisang': {
    bg: '#F7E3C8',
    accent: '#D10F29',
    soft: '#FFF8ED',
    liquid: '#C99455',
    foam: '#FFF1D8',
    garnish: '#D10F29',
  },
}

const foodCategorySet = new Set(['Main Course', 'Snack', 'Roti & Pisang'])

function hashCode(value: string) {
  let hash = 0
  for (let i = 0; i < value.length; i += 1) {
    hash = (hash << 5) - hash + value.charCodeAt(i)
    hash |= 0
  }
  return Math.abs(hash)
}

function Sparkle({ x, y, scale = 1, color, opacity = 1 }: { x: number; y: number; scale?: number; color: string; opacity?: number }) {
  return (
    <path
      d="M0 -14C1.8 -4.2 4.2 -1.8 14 0C4.2 1.8 1.8 4.2 0 14C-1.8 4.2 -4.2 1.8 -14 0C-4.2 -1.8 -1.8 -4.2 0 -14Z"
      transform={`translate(${x} ${y}) scale(${scale})`}
      fill={color}
      opacity={opacity}
    />
  )
}

export function ProductArt({ category, seed = '', className = '' }: ProductArtProps) {
  const reactId = useId().replace(/:/g, '')
  const palette = palettes[category] ?? palettes['Special Beri Kopi']
  const hash = hashCode(seed || category)
  const isFood = foodCategorySet.has(category)
  const tilt = (hash % 7) - 3
  const isAddOn = category === 'Add On'
  const isHot = category === 'Espresso Bar'

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{ backgroundColor: palette.bg }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 400 300"
        className="h-full w-full"
        preserveAspectRatio="xMidYMid slice"
        role="presentation"
      >
        <defs>
          <linearGradient id={`glass-${reactId}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.3" />
          </linearGradient>
          <linearGradient id={`liquid-${reactId}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={palette.liquid} stopOpacity="0.88" />
            <stop offset="100%" stopColor={palette.liquid} />
          </linearGradient>
          <clipPath id={`cup-${reactId}`}>
            <path d="M154 96H246L232 238C231 248 223 255 213 255H187C177 255 169 248 168 238L154 96Z" />
          </clipPath>
        </defs>

        {/* Playful backdrop */}
        <circle cx={62 + (hash % 28)} cy={54 + (hash % 18)} r="90" fill={palette.soft} opacity="0.65" />
        <circle cx={345 - (hash % 30)} cy={255} r="62" fill={palette.soft} opacity="0.55" />
        <path
          d={`M${-20 + (hash % 32)} 250C80 180 120 290 210 228C280 180 330 242 420 196`}
          fill="none"
          stroke={palette.accent}
          strokeOpacity="0.16"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <Sparkle x={52} y={92} scale={0.7} color={palette.accent} opacity={0.5} />
        <Sparkle x={342} y={64} scale={1} color={palette.accent} opacity={0.7} />
        <Sparkle x={318} y={218} scale={0.5} color={palette.accent} opacity={0.4} />
        <circle cx={58} cy={208} r="4" fill={palette.accent} opacity="0.35" />
        <circle cx={352} cy={132} r="3" fill={palette.accent} opacity="0.35" />

        {isFood ? (
          <g transform={`translate(200 168) rotate(${tilt}) translate(-200 -168)`}>
            <ellipse cx="200" cy="232" rx="126" ry="24" fill="#30241F" opacity="0.09" />
            <ellipse cx="200" cy="214" rx="118" ry="32" fill={palette.soft} />
            <ellipse cx="200" cy="207" rx="118" ry="32" fill="#FFFFFF" />
            <ellipse cx="200" cy="207" rx="96" ry="24" fill={palette.foam} opacity="0.9" />
            {category === 'Roti & Pisang' ? (
              <g>
                <rect x="142" y="170" width="116" height="40" rx="18" fill={palette.liquid} />
                <rect x="148" y="162" width="104" height="34" rx="16" fill="#E8B87B" />
                <path d="M156 170C174 158 204 160 224 170" fill="none" stroke="#FFF3DE" strokeWidth="7" strokeLinecap="round" />
                <circle cx="170" cy="187" r="5" fill={palette.garnish} />
                <circle cx="202" cy="183" r="5" fill={palette.garnish} />
                <circle cx="230" cy="188" r="5" fill={palette.garnish} />
                <path d="M232 160C242 150 250 154 250 164" fill="none" stroke={palette.garnish} strokeWidth="4" strokeLinecap="round" />
              </g>
            ) : category === 'Snack' ? (
              <g>
                <rect x="150" y="182" width="100" height="22" rx="8" fill={palette.accent} opacity="0.9" transform="rotate(-4 200 193)" />
                <rect x="156" y="166" width="88" height="22" rx="8" fill={palette.liquid} transform="rotate(3 200 177)" />
                <circle cx="160" cy="194" r="15" fill="#E8B45E" />
                <circle cx="188" cy="190" r="14" fill="#D99A45" />
                <circle cx="219" cy="196" r="16" fill="#E8B45E" />
                <circle cx="244" cy="190" r="12" fill="#D99A45" />
                <path d="M166 175C178 166 190 170 196 178" fill="none" stroke="#FFF3DE" strokeWidth="4" strokeLinecap="round" />
                <circle cx="228" cy="176" r="5" fill={palette.garnish} />
              </g>
            ) : (
              <g>
                <path d="M130 204C130 171 154 150 184 150C214 150 238 170 238 199V204H130Z" fill="#F5D9A8" />
                <path d="M138 199C142 178 162 165 184 165C207 165 226 178 230 199" fill="none" stroke="#E5B96F" strokeWidth="5" strokeLinecap="round" opacity="0.8" />
                <ellipse cx="214" cy="184" rx="28" ry="17" fill={palette.liquid} transform="rotate(-16 214 184)" />
                <ellipse cx="214" cy="181" rx="24" ry="14" fill="#E5A05B" transform="rotate(-16 214 181)" />
                <path d="M190 172C202 163 220 164 230 172" fill="none" stroke={palette.garnish} strokeWidth="4" strokeLinecap="round" />
                <circle cx="240" cy="199" r="8" fill="#D9583B" />
                <path d="M124 207C123 201 128 197 134 199" fill="none" stroke={palette.garnish} strokeWidth="3" strokeLinecap="round" />
                <path d="M258 194C266 186 274 188 276 195" fill="none" stroke={palette.garnish} strokeWidth="4" strokeLinecap="round" />
              </g>
            )}
            <g transform="translate(283 148) rotate(14)">
              <rect x="-24" y="-15" width="48" height="30" rx="15" fill="#FFFFFF" />
              <text x="0" y="4" textAnchor="middle" fontFamily="DM Sans, sans-serif" fontSize="10" fontWeight="800" fill={palette.accent} letterSpacing="1">
                BERI
              </text>
            </g>
          </g>
        ) : isAddOn ? (
          <g transform={`translate(200 168) rotate(${tilt}) translate(-200 -168)`}>
            <ellipse cx="200" cy="235" rx="112" ry="18" fill="#30241F" opacity="0.08" />
            <g transform="translate(138 136)">
              <rect x="0" y="0" width="38" height="38" rx="12" fill="#FFFFFF" opacity="0.9" transform="rotate(-10 19 19)" />
              <rect x="10" y="10" width="18" height="18" rx="5" fill={palette.soft} />
            </g>
            <g transform="translate(198 118)">
              <path d="M0 34C0 34 -26 18 -26 2C-26 -10 -14 -18 -3 -11C0 -9 2 -6 2 -6C2 -6 4 -9 8 -11C20 -19 32 -9 30 4C28 19 -1 34 -1 34Z" fill="#FFFFFF" />
              <path d="M2 25C2 25 -14 15 -14 4C-14 -4 -7 -8 -1 -4" fill="none" stroke={palette.accent} strokeWidth="2.5" strokeLinecap="round" />
            </g>
            <g transform="translate(258 146)">
              <rect x="0" y="0" width="30" height="74" rx="12" fill="#FFFFFF" opacity="0.92" transform="rotate(12 15 37)" />
              <rect x="8" y="0" width="14" height="12" rx="4" fill={palette.accent} transform="rotate(12 15 37)" />
              <rect x="5" y="38" width="20" height="14" rx="4" fill={palette.soft} transform="rotate(12 15 37)" />
            </g>
            <g transform="translate(108 184)">
              <path d="M0 0H56L50 48C49 55 43 60 36 60H20C13 60 7 55 6 48L0 0Z" fill="#FFFFFF" opacity="0.9" />
              <path d="M8 10H48L44 44H12L8 10Z" fill={palette.liquid} opacity="0.75" />
            </g>
            <Coffee x={188} y={188} size={30} color={palette.accent} strokeWidth={1.8} />
          </g>
        ) : isHot ? (
          <g transform={`translate(200 158) rotate(${tilt}) translate(-200 -158)`}>
            <ellipse cx="200" cy="248" rx="106" ry="18" fill="#30241F" opacity="0.09" />
            <ellipse cx="200" cy="235" rx="88" ry="15" fill="#FFFFFF" />
            <path d="M158 138H242L234 216C233 228 223 236 211 236H189C177 236 167 228 166 216L158 138Z" fill="#FFFFFF" />
            <path d="M168 150H232L226 211C225 219 219 225 211 225H189C181 225 175 219 174 211L168 150Z" fill={palette.liquid} />
            <path d="M172 156C188 148 212 148 228 156L226 176C210 168 190 168 174 176L172 156Z" fill={palette.foam} opacity="0.95" />
            <path d="M166 190H234" stroke={palette.accent} strokeWidth="14" opacity="0.95" />
            <path d="M238 160C266 158 274 188 248 199" fill="none" stroke="#FFFFFF" strokeWidth="13" strokeLinecap="round" />
            <path d="M238 160C260 160 264 184 246 193" fill="none" stroke={palette.bg} strokeWidth="5" strokeLinecap="round" opacity="0.35" />
            <path d="M180 116C170 102 192 98 184 82" fill="none" stroke={palette.accent} strokeWidth="3.5" strokeLinecap="round" opacity="0.5" />
            <path d="M208 116C198 102 220 98 212 82" fill="none" stroke={palette.accent} strokeWidth="3.5" strokeLinecap="round" opacity="0.35" />
            <circle cx="200" cy="198" r="17" fill="#FFF9F0" />
            <circle cx="200" cy="198" r="11.5" fill="none" stroke={palette.accent} strokeWidth="2.4" />
            <path d="M197 190V206" stroke={palette.accent} strokeWidth="2" />
            <path d="M200 194C204 193 204 201 200 201" fill={palette.accent} />
          </g>
        ) : (
          <g transform={`translate(200 162) rotate(${tilt}) translate(-200 -162)`}>
            <ellipse cx="200" cy="252" rx="98" ry="17" fill="#30241F" opacity="0.09" />
            {/* straw */}
            <g transform="rotate(-12 245 105)">
              <rect x="239" y="52" width="13" height="112" rx="6.5" fill={palette.accent} />
              <rect x="239" y="74" width="13" height="12" fill="#FFF9F0" opacity="0.85" />
              <rect x="239" y="106" width="13" height="12" fill="#FFF9F0" opacity="0.85" />
            </g>
            {/* cup body */}
            <path d="M154 96H246L232 238C231 248 223 255 213 255H187C177 255 169 248 168 238L154 96Z" fill={`url(#glass-${reactId})`} stroke="#FFFFFF" strokeOpacity="0.7" strokeWidth="2" />
            {/* liquid */}
            <g clipPath={`url(#cup-${reactId})`}>
              <rect x="150" y="144" width="100" height="120" fill={`url(#liquid-${reactId})`} />
              <path d="M150 144C166 136 180 152 200 144C220 136 236 150 252 142V164H150V144Z" fill={palette.foam} />
              {category === 'Seri Matcha' ? (
                <>
                  <path d="M150 196C172 186 188 204 208 196C226 189 240 197 252 192V258H150V196Z" fill="#F5FAEC" opacity="0.3" />
                  <circle cx="178" cy="220" r="9" fill="#FFFFFF" opacity="0.45" />
                </>
              ) : (
                <path d="M150 214C172 202 190 224 212 214C230 206 244 216 252 209V258H150V214Z" fill="#FFF9F0" opacity="0.4" />
              )}
            </g>
            {/* lid */}
            <path d="M148 88C148 82 153 78 160 78H240C247 78 252 82 252 88V98C252 103 248 106 243 106H157C152 106 148 103 148 98V88Z" fill="#FFF9F0" />
            <rect x="160" y="85" width="80" height="8" rx="4" fill="#FFFFFF" opacity="0.65" />
            <circle cx="200" cy="116" r="6" fill="#FFFFFF" opacity="0.5" />
            {/* label */}
            <circle cx="200" cy="190" r="27" fill="#FFF9F0" opacity="0.98" />
            <circle cx="200" cy="190" r="20" fill="none" stroke={palette.accent} strokeWidth="3" />
            <path d="M194 177V203" stroke={palette.accent} strokeWidth="2.6" strokeLinecap="round" />
            <path d="M200 185C206 184 206 196 200 197" fill={palette.accent} />
            <text x="200" y="226" textAnchor="middle" fontFamily="DM Sans, sans-serif" fontSize="8" fontWeight="800" letterSpacing="1.6" fill="#FFF9F0">
              BERI KOPI
            </text>
            <Sparkle x={252} y={148} scale={0.45} color="#FFFFFF" opacity={0.75} />
          </g>
        )}
      </svg>

      <div className="pointer-events-none absolute left-4 top-4 flex items-center gap-1.5 rounded-full bg-white/80 px-2.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-espresso/60 backdrop-blur-sm">
        {isFood ? (
          <Sparkles className="h-3 w-3 text-beri-red" strokeWidth={2.5} />
        ) : category === 'Seri Matcha' ? (
          <Leaf className="h-3 w-3 text-[#5F7A3B]" strokeWidth={2.5} />
        ) : (
          <Coffee className="h-3 w-3 text-beri-red" strokeWidth={2.5} />
        )}
        {isFood ? 'Bites' : isAddOn ? 'Extra' : 'Sip'}
      </div>
    </div>
  )
}
