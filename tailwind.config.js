/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: ['selector', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: 'var(--bg)',
          secondary: 'var(--bg-secondary)',
        },
        surface: {
          DEFAULT: 'var(--surface)',
          elevated: 'var(--surface-elevated)',
          highlight: 'var(--surface-highlight)',
        },
        content: {
          primary: 'var(--text-primary)',
          secondary: 'var(--text-secondary)',
          muted: 'var(--text-muted)',
        },
        border: {
          DEFAULT: 'var(--border)',
          strong: 'var(--border-strong)',
          subtle: 'var(--border-subtle)',
        },
        accent: {
          DEFAULT: 'var(--accent)',
          text: 'var(--accent-text)',
          blue: '#2452C6',
          'blue-light': '#4B78E6',
          'blue-dark': '#1B3EA0',
          'warm-ivory': '#F5F2EC',
          charcoal: '#191B1E',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', '"Times New Roman"', 'Times', 'Georgia', 'serif'],
        display: ['"Playfair Display"', '"Times New Roman"', 'Times', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'low': 'var(--shadow-low)',
        'medium': 'var(--shadow-medium)',
        'high': 'var(--shadow-high)',
        'floating': 'var(--shadow-floating)',
        'blue': 'var(--shadow-blue)',
        'inset': 'var(--shadow-inset)',
        // legacy aliases
        'card': 'var(--shadow-card)',
        'float': 'var(--shadow-float)',
        'lime': 'var(--shadow-blue)',
      },
      transitionTimingFunction: {
        'cinematic': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
}
