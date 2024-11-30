/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dome: {
          50: '#EEF2F9',
          100: '#D4E0F1',
          200: '#A9C1E3',
          300: '#7EA2D5',
          400: '#5383C7',
          500: '#3666AA',
          600: '#0A3B8D', // Primary brand color
          700: '#082E6E',
          800: '#05204F',
          900: '#031230',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};