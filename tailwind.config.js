/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#040810',
          900: '#070D1A',
          800: '#0A1020',
          700: '#0D1428',
        },
        cobalt: {
          950: '#040F22',
          900: '#071428',
          800: '#0A1C38',
          700: '#0D2448',
          600: '#10305E',
        },
        violet: {
          950: '#08041A',
          900: '#10082A',
          800: '#180E3A',
          700: '#22124E',
        },
        dark: {
          950: '#070909',
          900: '#0c1010',
          850: '#0f1414',
          800: '#111616',
          700: '#161d1d',
        },
        surface: {
          DEFAULT: '#0c1010',
          elevated: '#111616',
          card: '#0c1010',
          border: 'var(--surface-border)',
        },
        accent: {
          blue: '#3B82F6',
          'blue-light': '#60A5FA',
          'blue-dark': '#2563EB',
          cyan: '#06B6D4',
          'cyan-light': '#22D3EE',
          violet: '#8B5CF6',
          'violet-light': '#A78BFA',
          lime: '#D4F435',
          'lime-light': '#E5FA6B',
        },
        icy: {
          DEFAULT: '#B8D8EE',
          light: '#D4EBFA',
          muted: '#7FA8CC',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
        display: ['Oswald', 'Inter', 'sans-serif'],
      },
      fontSize: {
        // editorial display sizes using clamp
        'display-2xl': 'clamp(4rem, 9vw, 10rem)',
        'display-xl': 'clamp(3rem, 7vw, 8rem)',
        'display-lg': 'clamp(2.5rem, 5vw, 6rem)',
        'display-md': 'clamp(2rem, 4vw, 4.5rem)',
        'display-sm': 'clamp(1.5rem, 3vw, 3rem)',
      },
      lineHeight: {
        'display': '0.95',
        'tight-display': '1.0',
      },
      boxShadow: {
        'inset': 'var(--shadow-inset)',
        'card': 'var(--shadow-card)',
        'float': 'var(--shadow-float)',
        'hero': 'var(--shadow-hero)',
        'lime': 'var(--shadow-lime)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'float-reverse': 'floatReverse 7s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'flow': 'flow 3s linear infinite',
        'dash': 'dash 4s linear infinite',
        'scan': 'scan 4s linear infinite',
        'fade-up': 'fadeUp 0.7s ease-out forwards',
        'reveal': 'reveal 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        floatReverse: {
          '0%, 100%': { transform: 'translateY(-8px)' },
          '50%': { transform: 'translateY(6px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.7', transform: 'scale(1.05)' },
        },
        flow: {
          '0%': { strokeDashoffset: '200' },
          '100%': { strokeDashoffset: '0' },
        },
        dash: {
          '0%': { strokeDashoffset: '1000' },
          '100%': { strokeDashoffset: '0' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        reveal: {
          '0%': { opacity: '0', transform: 'translateY(32px) scaleY(0.9)' },
          '100%': { opacity: '1', transform: 'translateY(0) scaleY(1)' },
        },
      },
      perspective: {
        '500': '500px',
        '1000': '1000px',
        '2000': '2000px',
      },
    },
  },
  plugins: [],
}
