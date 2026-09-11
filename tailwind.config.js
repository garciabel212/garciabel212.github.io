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
        surface: {
          DEFAULT: '#0D1428',
          elevated: '#111D33',
          card: '#0F1A2E',
          glass: 'rgba(255,255,255,0.04)',
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
      backgroundImage: {
        'hero-gradient': 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(59,130,246,0.15) 0%, transparent 60%)',
        'cobalt-gradient': 'linear-gradient(180deg, #071428 0%, #0A1A38 100%)',
        'violet-gradient': 'linear-gradient(135deg, #10082A 0%, #180E3A 100%)',
        'cyan-gradient': 'linear-gradient(135deg, #2563EB 0%, #06B6D4 100%)',
        'blue-violet': 'linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%)',
        'product-glow': 'radial-gradient(ellipse 60% 40% at 50% 50%, rgba(59,130,246,0.2) 0%, transparent 70%)',
        'section-fade-cobalt': 'linear-gradient(180deg, #070D1A 0%, #071428 50%, #070D1A 100%)',
        'section-fade-violet': 'linear-gradient(180deg, #070D1A 0%, #0D0820 50%, #070D1A 100%)',
      },
      boxShadow: {
        'glow-blue': '0 0 40px rgba(59,130,246,0.18)',
        'glow-blue-lg': '0 0 80px rgba(59,130,246,0.25)',
        'glow-cyan': '0 0 40px rgba(6,182,212,0.15)',
        'glow-violet': '0 0 40px rgba(139,92,246,0.2)',
        'product': '0 40px 80px rgba(0,0,0,0.7), 0 0 60px rgba(59,130,246,0.1)',
        'card': '0 4px 24px rgba(0,0,0,0.5)',
        'card-hover': '0 12px 48px rgba(59,130,246,0.15)',
        'glass': '0 4px 24px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.06)',
        'glass-hover': '0 8px 40px rgba(59,130,246,0.15), inset 0 1px 0 rgba(255,255,255,0.08)',
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
