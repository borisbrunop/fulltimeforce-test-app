/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#4fa94d',
        'secondary': '#357233',
        'darkSecondary': '#1d5b1b',
        'soft':'#E5E7EB'
      },
    },
  },
  plugins: [],
}
