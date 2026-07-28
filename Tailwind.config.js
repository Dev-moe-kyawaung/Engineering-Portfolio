/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        blueprint: {
          50: '#E8F0FE',
          100: '#B8D4F6',
          200: '#8AB8EE',
          300: '#5C9CE6',
          400: '#2E80DE',
          500: '#1E3A5F',
          600: '#162E4A',
          700: '#0F2236',
          800: '#071522',
          900: '#030A11',
        },
        grid: {
          light: '#4A90D9',
          DEFAULT: '#2E6BB5',
          dark: '#1A4A7A',
        },
        paper: {
          DEFAULT: '#F5F0E8',
          dark: '#E8E0D0',
          light: '#FAF7F2',
        },
        accent: {
          orange: '#FF6B35',
          red: '#E74C3C',
          yellow: '#F1C40F',
          green: '#2ECC71',
        },
        measurement: {
          line: '#E74C3C',
          text: '#C0392B',
          guide: '#FF6B35',
          dimension: '#4A90D9',
        },
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', 'monospace'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'sans-serif'],
      },
      backgroundImage: {
        'grid-paper': `
          linear-gradient(rgba(74, 144, 217, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(74, 144, 217, 0.1) 1px, transparent 1px)
        `,
        'blueprint-grid': `
          linear-gradient(rgba(30, 58, 95, 0.08) 1px, transparent 1px),
          linear-gradient(90deg, rgba(30, 58, 95, 0.08) 1px, transparent 1px)
        `,
      },
      backgroundSize: {
        grid: '20px 20px',
        'grid-lg': '40px 40px',
      },
      animation: {
        'draw-line': 'drawLine 2s ease-in-out forwards',
        'snap-in': 'snapIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
        'measure-grow': 'measureGrow 1.5s ease-out forwards',
        'blueprint-reveal': 'blueprintReveal 1s ease-out forwards',
        'coordinate-enter': 'coordinateEnter 0.8s ease-out forwards',
        'pulse-dot': 'pulseDot 2s ease-in-out infinite',
      },
      keyframes: {
        drawLine: {
          '0%': { strokeDashoffset: '100%' },
          '100%': { strokeDashoffset: '0%' },
        },
        snapIn: {
          '0%': { transform: 'scale(0.95) translateY(10px)', opacity: '0' },
          '50%': { transform: 'scale(1.02) translateY(-2px)' },
          '100%': { transform: 'scale(1) translateY(0)', opacity: '1' },
        },
        measureGrow: {
          '0%': { transform: 'scaleX(0)', opacity: '0' },
          '100%': { transform: 'scaleX(1)', opacity: '1' },
        },
        blueprintReveal: {
          '0%': { clipPath: 'inset(0 100% 0 0)' },
          '100%': { clipPath: 'inset(0 0 0 0)' },
        },
        coordinateEnter: {
          '0%': { transform: 'translate(var(--x-start), var(--y-start))', opacity: '0' },
          '100%': { transform: 'translate(0, 0)', opacity: '1' },
        },
        pulseDot: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.5', transform: 'scale(1.5)' },
        },
      },
    },
  },
  plugins: [],
};

