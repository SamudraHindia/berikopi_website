import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#FFF9F0',
        espresso: '#30241F',
        'beri-red': '#D10F29',
        'beri-red-dark': '#A80C20',
        butter: '#FFE49A',
        'warm-orange': '#F4A261',
        ink: '#241A16',
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', 'system-ui', 'sans-serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
        hand: ['Caveat', 'cursive'],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      boxShadow: {
        card: '0 2px 0 0 rgba(48,36,31,0.08), 0 18px 45px -24px rgba(48,36,31,0.28)',
        lift: '0 4px 0 0 rgba(48,36,31,0.1), 0 28px 60px -24px rgba(48,36,31,0.35)',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-2deg)' },
          '50%': { transform: 'rotate(2deg)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        marquee: 'marquee 26s linear infinite',
        wiggle: 'wiggle 5s ease-in-out infinite',
        'float-slow': 'float-slow 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
} satisfies Config
