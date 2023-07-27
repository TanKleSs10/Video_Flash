/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'timberWolf': '#D7D6D6',
        'platinum': '#E7E5DF',
        'kepple': '#44BBA4',
        'onix': '#393E41',
        'nigth': '#0F0F0F'
      },
      fontFamily: {
        Josefin: ['Josefin Sans', 'sans-serif']
      }
    },
  },
  plugins: [],
}

