/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#1A1A2E',
        surface: '#1F1F3D',
        primary: '#D4AF37',
        'text-primary': '#F5F5F5',
        'text-secondary': '#A9A9A9',
      },
      fontFamily: {
        sans: ['Lato', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
