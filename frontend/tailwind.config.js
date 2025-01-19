/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        'xs': '0.75rem', // Default Tailwind size (optional to keep)
        'sm': '0.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.9rem',
        '4xl': '2.25rem',
        '5xl': '3.1rem',
        '6xl': '4.5rem',
        'custom-size': '2.7rem', // Add your custom size here
      },
      fontFamily: {
        sans: ['Nunito', 'sans-serif'],
        logo: ['Questrial', 'regular 400']
      },
      colors: {
        beige : '#FFFBF4',
        green : '#CFE7C4',
        blue : '#C4DDE7',
        cream : '#E3C799',
        camel :  'rgba(212, 163, 115, 0.83)',
        deepgreen : '#3A5A40',
        deepgt : 'rgba(	58, 90, 64, 0.1)',
        red : '#C30000',
        yellow : '#C3BF00',
        shadow : 'rgba(227, 199, 153, 0.2)',
      },
    },
  },
  plugins: [],
}

