/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./dist*/index.html'],
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
