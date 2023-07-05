/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Poppins', 'sans-serif'],
      'title': ['Belanosima', 'sans-serif']
    },
    extend: {
      colors: {
        'title': '#00B2FF'
      },
      fontSize: {
        '10xl': '10rem',
        '11xl': '12rem',
      }
    },
  },
  plugins: [],
}