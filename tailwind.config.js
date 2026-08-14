/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#111111',
          muted: '#71717A',
          card: '#F5F5F7',
          border: '#E4E4E7',
          accent: '#D4A373',
          'accent-light': '#F4EAE1',
          'accent-dark': '#B58352',
          earth: '#C29B7F',
          surface: '#FAFAFA',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
      },
      fontSize: {
        '2xs': ['0.6875rem', { lineHeight: '0.9rem' }],
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['0.875rem', { lineHeight: '1.4rem' }],
        'lg': ['1.125rem', { lineHeight: '1.6rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.625rem', { lineHeight: '2rem' }],
        '3xl': ['2.125rem', { lineHeight: '2.5rem' }],
        '4xl': ['2.75rem', { lineHeight: '3.125rem' }],
        '5xl': ['3.5rem', { lineHeight: '3.875rem' }],
      },
      animation: {
        'spin-slow': 'spin 18s linear infinite',
        'float-subtle': 'float 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        }
      }
    },
  },
  plugins: [],
}
