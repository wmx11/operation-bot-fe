/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './views/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primaryGray: '#4F4F4F',
        primaryRed: '#F42424',
        secondaryOrange: '#FF9B01',
        secondaryGray: '#4F4F4F',
        secondaryGreen: '#5E9E5E',
      },
    },
  },
  plugins: [],
  important: '#__next',
};
