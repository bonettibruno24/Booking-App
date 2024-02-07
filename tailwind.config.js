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
      'rose-clear': '#D988B94D',
      'rose': '#EEC7DE',
      'pink': '#D988B9',
      'purple': '#AC87C566',
      'dark' : '#000000',
      'gray': '#555555', 
      'white' : '#FFFFFF',
      'dark-border': '(rgba(0, 0, 0, 0.60)',
      Pink:{
        59:'#EEC7DE',
        100: '#EEC7DE00',
      }
    },
    extend: {
      fontFamily: {
        'Montserrat':['Montserrat']
      },
    },
  },
  plugins: [],
}

