/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 10s linear infinite",
      },
      colors: {
        bigStone:'#18263F',
        mischka:'#D0D5DC',
        blueYonder:'#6D8BAF',
        spurce:'#3C464A',
        dawn:'#A09B93',
        ebonyClay:'#202634',
        sanguineBrown:'#7F3130',
        trendyGreen:'#85841D',
        greenish:'#84a98c',
      }
    },
  },
  plugins: [],
}
