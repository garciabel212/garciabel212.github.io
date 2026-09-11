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
          blue: '#3B82F6',
          'blue-light': '#60A5FA',
          lime: '#D4F435',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
        display: ['Oswald', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'low': 'var(--shadow-low)',
        'medium': 'var(--shadow-medium)',
        'high': 'var(--shadow-high)',
        'floating': 'var(--shadow-floating)',
        'lime': 'var(--shadow-lime)',
        'inset': 'var(--shadow-inset)',
        // legacy aliases
        'card': 'var(--shadow-card)',
        'float': 'var(--shadow-float)',
      },
      transitionTimingFunction: {
        'cinematic': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
}
