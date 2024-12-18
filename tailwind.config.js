/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    container:{
      center:true,
      padding:'16px', 
    },
    extend: {
      colors:{
        primary:"#0ea5e9",
        dark:"#1e293b",
      },
      screens:{
        '2xl':'1320px',
      }
    },
  },
  plugins: [],
}

