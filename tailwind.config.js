/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./dist*/index.html'],
  theme: {
    debugScreens: {
      position: ['top', 'left']
    },
    extend: {}
  },
  plugins: [require('tailwindcss-debug-screens')]
}
