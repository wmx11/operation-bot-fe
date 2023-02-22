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
        obGray: '#4F4F4F',
        obGreen: '#5E9E5E',
      },
    },
  },
  plugins: [],
  important: '#__next',
};
