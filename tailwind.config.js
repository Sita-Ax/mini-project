/** @type {import('tailwindcss').Config} */
module.exports = {
  enabled: false, //have it on false when working on it
  content: ['./dist/**/*.html'], //look for files inside of dist folder
  darkMode: 'class', //media depend on your device mode or smartphone or class
  theme: {
    debugScreens: {
      position: ['top', 'left']
    },
    extend: {
      fontFamily: {
        headline: ['Oswald']
      },
      colors: {
        mainColor: '#212f49'
      }
    }
  },
  plugins: [require('tailwindcss-debug-screens')]
}
