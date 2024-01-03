/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      backgroundColor : {
        "EDB099" : '#EDB099',
        "FDFAFA" : '#FDFAFA',
        "ED5555": '#ED5555',
        "E9E9E9" : '#E9E9E9'
      },
            
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      colors : {'edb099' : '#EDB099'},

      textShadow: {
        'xs': '0 1px 3px rgba(0, 0, 0, 0.3)',
        'sm': '0 1px 2px rgba(0, 0, 0, 0.3)',
        'md': '0 4px 6px rgba(0, 0, 0, 0.3)',
        'lg': '0 4px 12px rgba(0, 0, 0, 0.3)'
        // ... otras sombras que desees agregar
      },

      textColor:{
        "EDB099" : '#EDB099',
        "FDFAFA" : '#FDFAFA',
        "ED5555": '#ED5555',
        "E9E9E9" : '#E9E9E9'
      }
      
    },
  },
  plugins: [],
}

