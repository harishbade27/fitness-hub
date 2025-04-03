/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Enable class-based dark mode
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#4f46e5',
          dark: '#6366f1'
        },
        secondary: {
          light: '#f59e0b',
          dark: '#fbbf24'
        },
        scale: {
          '102': '1.02',
        }
      },
      transitionProperty: {
        'size': 'transform',
        'colors': 'background-color, border-color, color, fill, stroke',
        'bg': 'background-color',
        'transform': 'transform',
        'shadow': 'box-shadow',
      },
      animation: {
        'fade-in': 'fadeIn 300ms ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'), // Optional: for better form styling
    require('@tailwindcss/typography'), // Optional: for prose styling
  ],
}