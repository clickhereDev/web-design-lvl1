/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        base: 'var(--color-bg-base)',
        surface: {
          DEFAULT: 'var(--color-bg-surface)',
        },
        card: 'var(--color-bg-surface)',
        primary: 'var(--color-text-primary)',
        secondary: 'var(--color-text-secondary)',
        border: {
          DEFAULT: 'var(--color-border-color)',
        },
        muted: {
          DEFAULT: '#f1f5f9',
          dark: '#1e293b',
        },
        brand: {
          50: '#eef2ff',
          100: '#dbe4ff',
          200: '#bac8ff',
          300: '#91a7ff',
          400: '#3B82F6',
          500: 'var(--color-brand-primary)',
          600: '#1e3a8a',
          700: '#172554',
          800: '#0f172a',
          900: '#0a0f1a',
        },
        accent: {
          50: '#fff8f0',
          100: '#ffedd5',
          200: '#ffd4a8',
          300: '#FFA559',
          400: '#ff8c4d',
          500: 'var(--color-brand-accent)',
          600: '#cc5c00',
          700: '#994500',
          800: '#662e00',
          900: '#331700',
        },
        cta: {
          50: '#fff8f0',
          100: '#ffedd5',
          200: '#ffd4a8',
          300: '#FFA559',
          400: '#ff8c4d',
          500: 'var(--color-brand-accent)',
          600: '#cc5c00',
          700: '#994500',
          800: '#662e00',
          900: '#331700',
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
      animation: {
        'fade-up': 'fade-up 0.6s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'shimmer': 'shimmer 8s linear infinite',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        'shimmer': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
    },
  },
  plugins: [],
};
