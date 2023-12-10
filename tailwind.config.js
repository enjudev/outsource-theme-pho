/** @type {import('tailwindcss').Config} */
const spacingValues = {};

for (let i = 1; i <= 100; i++) {
  spacingValues[`${i}px`] = `${i}px`;
}
module.exports = {
  prefix: 'tw-',
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'blue1': '#3393E9 ',
        'blue2': '#20ACDF',
        'black1': '#1D1E19'
      },
      spacing: spacingValues,
      fontSize: spacingValues,
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

