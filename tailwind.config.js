/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      backgroundColor : {
        "edb099" : '#EDB099',
        "E5DDDD" : '#E5DDDD',
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

