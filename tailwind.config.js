/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f4ff',
          100: '#e0e9ff',
          200: '#c7d7fe',
          300: '#a4bcfc',
          400: '#8099f8',
          500: '#6373f1',
          600: '#4f53e4',
          700: '#4341c3',
          800: '#38389e',
          900: '#33357d',
          950: '#1f1e4b',
        },
        secondary: {
          50: '#f3f1ff',
          100: '#ebe5ff',
          200: '#d9ceff',
          300: '#bea9ff',
          400: '#a17dff',
          500: '#8a4eff',
          600: '#7e2eff',
          700: '#6d1ef7',
          800: '#5a1ad0',
          900: '#4a18a9',
          950: '#2d0e7a',
        },
        accent: {
          50: '#fff1f0',
          100: '#ffe0dd',
          200: '#ffc7c0',
          300: '#ffa093',
          400: '#ff6a59',
          500: '#ff3a25',
          600: '#f1270f',
          700: '#cb1909',
          800: '#a91b0e',
          900: '#8a1d12',
          950: '#4b0903',
        },
        neutral: {
          50: '#f9f9fa',
          100: '#f3f3f5',
          200: '#e7e7ec',
          300: '#d1d2db',
          400: '#b4b5c4',
          500: '#9394a9',
          600: '#7a7b93',
          700: '#636479',
          800: '#515263',
          900: '#3c3d49',
          950: '#25252d',
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