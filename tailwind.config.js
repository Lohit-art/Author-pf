/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fbeeee',
          100: '#f7dad7',
          200: '#f2bdb7',
          300: '#eda197',
          400: '#e9afa3',
          500: '#e09a8d',
          600: '#d47d6e',
          700: '#b76e79',
          800: '#a05c5c',
          900: '#7c4343',
          950: '#5a2e2e',
        },
        secondary: {
          50: '#fff7f6',
          100: '#ffeaea',
          200: '#ffdede',
          300: '#ffd1d1',
          400: '#f7cac9',
          500: '#f3b6b3',
          600: '#e89e9a',
          700: '#d97d7a',
          800: '#b76e79',
          900: '#a05c5c',
          950: '#7c4343',
        },
        accent: {
          50: '#fff5e1',
          100: '#ffe8cc',
          200: '#ffd1a3',
          300: '#ffb366',
          400: '#e9afa3',
          500: '#b76e79',
          600: '#a67b5b',
          700: '#355c4a',
          800: '#7c4343',
          900: '#5a2e2e',
          950: '#3a1c1c',
        },
        neutral: {
          50: '#fff5e1',
          100: '#f7e9d7',
          200: '#f2d9b6',
          300: '#e9cfa3',
          400: '#e9afa3',
          500: '#b76e79',
          600: '#a67b5b',
          700: '#355c4a',
          800: '#7c4343',
          900: '#5a2e2e',
          950: '#3a1c1c',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Open Sans"', 'Helvetica', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0, 0, 0, 0.05)',
        'medium': '0 8px 30px rgba(0, 0, 0, 0.1)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};