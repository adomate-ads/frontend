/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'extra-dark-purple': '#002af9',
        'dark-purple': '#637EFE',
        'light-purple': '#a3b2ff',
        'extra-light-purple': '#d8dfff',
        'adomate-navy': '#31394D',
        'adomate-off-black': '#343434',
        'adomate-off-white': '#FAF9F6',
        'adomate-cream': '#D9C4B1',
      },
    },
    fontFamily: {
      'noto': ['Noto Sans', 'sans-serif'],
    }
  },
  plugins: [],
}
