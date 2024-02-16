/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    letterSpacing: {
      wider: '0.20em',
    },
    fontWeight: {
      medium: '500',
      bold: '900',
    },
    fontSize: {
      sm: '1.00rem',
      xs: '1.20rem',
      xl: '1.30rem',

    },
    colors: {
      'rose-clear': '#D988B94D',
      'rose': '#EEC7DE',
      'rose-gray': '#D988B929',

      'purple': '#AC87C566',
      'dark': '#000000',
      'gray': '#555555',
      'white': '#FFFFFF',
      'dark-border': '(rgba(0, 0, 0, 0.60)',
      'dark-gray': '#333333',
      'rose-barbie': '',

      pink: {
        50: '#D988B94D',
        150: '#EEC7DE',
        1000: '#D988B9',
      },
      Pink: {
        100: '#EEC7DE00',
      },
    },
    extend: {
      fontFamily: {
        'Montserrat': ['Montserrat'],
        'Tenor-Sans': ['Tenor-Sans'],
      },
      boxShadow: {
        '3x1': '3px -4px 1px 0px rgba(0, 0, 0, 0.26)',
      },
      dropShadow: {
        '4x1': '9px 15px 3px rgba(0, 0, 0, 0.15)',
      },
      spacing: {
        '3.5': '3.5rem',
      },
      margin: {
        '21.5': '21.5rem',
      },
    },

  },
  plugins: [],
}

