/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      width: {
        '130': '130%',
      },
      margin: {
        '30': '30px',
        '12': '-12px'
      }
    },
  },
  plugins: [],
}