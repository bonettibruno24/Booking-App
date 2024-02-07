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
      
      'purple': '#AC87C566',
      'dark' : '#000000',
      'gray': '#555555', 
      'white' : '#FFFFFF',
      'dark-border': '(rgba(0, 0, 0, 0.60)',
      pink:{
        50:'#D988B94D',
        150:'#EEC7DE',
       1000:'#D988B9',
      },
      Pink:{
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

