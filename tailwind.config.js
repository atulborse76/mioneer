/** @type {import('tailwindcss').Config} */
import flowbite from "flowbite-react/tailwind";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'darkBg': '#0a0e27',
        'darkSurface': '#1a1f3a',
        'darkCard': '#2a2f4a',
        'neautralSilver': '#1a1f3a',
        'neautralDGrey': '#e4e4e7',
        'brandPrimary': '#d4af37',
        'brandSecondary': '#4a7c8f',
        'neautralGrey': '#6b7280',
        'accent': '#f4d03f',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      }
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}