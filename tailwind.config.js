/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        surface: {
          DEFAULT: '#f8fafc',
          dark: '#0b0f19',
        },
        card: {
          DEFAULT: '#ffffff',
          dark: '#0f1322',
        },
        muted: {
          DEFAULT: '#f1f5f9',
          dark: '#1a1f2e',
        },
        border: {
          DEFAULT: '#e2e8f0',
          dark: '#1e293b',
        },
        brand: {
          50: '#eef6ff',
          100: '#d9ecff',
          200: '#b3d9ff',
          300: '#8dc6ff',
          400: '#4da3ff',
          500: '#0066FF',
          600: '#0052cc',
          700: '#003d99',
          800: '#002966',
          900: '#001433',
        },
        cta: {
          50: '#fff5ed',
          100: '#ffe8d4',
          200: '#ffcda8',
          300: '#ffb27d',
          400: '#ff8c4d',
          500: '#FF6600',
          600: '#cc5200',
          700: '#993d00',
          800: '#662900',
          900: '#331400',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        arabic: ['Noto Sans Arabic', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
          },
        },
      },
    },
  },
  plugins: [],
};
