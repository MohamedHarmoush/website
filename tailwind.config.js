/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        yellow: {
          primary: '#f59e0b',
          light: '#fbbf24',
          dark: '#d97706',
          glow: 'rgba(245, 158, 11, 0.3)',
        },
        glass: {
          bg: 'rgba(255, 255, 255, 0.4)',
          border: 'rgba(255, 255, 255, 0.6)',
        },
        text: {
          primary: '#1f2937',
          secondary: 'rgba(31, 41, 55, 0.7)',
        },
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'sans-serif'],
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}

