/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      backgroundColor : {
        "edb099" : '#EDB099',
        "FDFAFA" : '#FDFAFA',
        "ED5555": '#ED5555',
        "E9E9E9" : '#E9E9E9'
      },      
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },

      colors : {'edb099' : '#EDB099'}
    },
  },
  plugins: [],
}

