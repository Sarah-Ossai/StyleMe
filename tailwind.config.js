/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('https://i.ibb.co/h7VdJGW/hero.gif')",
      },
      screens: {
        'md' : "1101px",
        "tab" : {'min': '700px', 'max': '1100px'},
        'sp': {'min': '1101px', 'max': '1300px'},

      }
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
}