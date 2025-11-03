/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      // ADD THE FONT FAMILY
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      // ADD THE NEW COLORS
      colors: {
        'brand-pink': '#F897FE',
        'brand-purple': '#935AF0',
        'brand-blue': '#483ACC',
        'space-dark': '#03042C',
        'space-mid': '#0A1051',
        'space-light': '#172090',
      },
    },
  },
  plugins: [],
};
