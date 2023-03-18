/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors"); 

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
      },
      keyframes: {
        wiggle: {
          '0% 100%': { transform: '(-10deg)' },
          '50%': { transform: 'rotate(5deg)' }
        },
      },
    },
  },
  plugins: [],
}
