/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Nunito', 'sans-serif'],
        logo: ['Roboto', 'sans-serif']
      },
      colors: {
        beige : '#FFFBF4',
        green : '#CFE7C4',
        blue : '#C4DDE7',
        cream : '#E3C799',
        camel :  'rgba(212, 163, 115, 0.83)',
        shadow : 'rgba(227, 199, 153, 0.2)', 
      },
    },
  },
  plugins: [],
}

