/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Nunito', 'sans-serif'],
        logo: ['Questrial', 'regular 400']
      },
      colors: {
        beige : '#FFFBF4',
        green : '#CFE7C4',
        blue : '#C4DDE7',
        cream : '#E3C799',

        camel: '#D4A373',
        deepgreen : '#3BBA00',
        red : '#C30000',
        yellow : '#C3BF00',

        shadow : 'rgba(227, 199, 153, 0.5)',
      },
    },
  },
  plugins: [],
}

