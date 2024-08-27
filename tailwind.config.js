/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        'neautralSilver': '#F5F7FA',
        'neautralDGrey': '#4D4D4D',
        'brandPrimary': '#4CAF4F',
        'brandSecondary': '#FF914D',
        'neautralGrey': '#F5F7FA',
      },
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}

