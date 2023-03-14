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
        'dark-purple': '#657FFF',
        'light-purple': '#a3b2ff',
        'extra-light-purple': '#d8dfff',
        'adomate-purple': '#637EFE',
      },
    },
    fontFamily: {
      'noto': ['Noto Sans', 'sans-serif'],
    }
  },
  plugins: [],
}
