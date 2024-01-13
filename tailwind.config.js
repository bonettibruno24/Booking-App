/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    fontWeight:{
      medium: '500',
      bold: '900',
    },
    colors: {
      'dark-blue': '#1C1D26',
      'cinza' : '#87888C',
      'roxo': {
        400: '#4338ca',
      }
    },
    extend: {
      fontFamily: {
        'Montserrat':['Montserrat', ]
      },
    },
  },
  plugins: [],
}

