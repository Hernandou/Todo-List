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

      colors : {'edb099' : '#EDB099'},

      textShadow:{'sm': '1px 1px 2px rgba(0, 0, 0, 0.1)',
                  'default': '2px 2px 4px rgba(0, 0, 0, 0.2)',
                  'lg': '4px 4px 6px rgba(0, 0, 0, 0.3)',
                  'xl': '6px 6px 8px rgba(0, 0, 0, 0.4)'},
    },
  },
  plugins: [],
}

