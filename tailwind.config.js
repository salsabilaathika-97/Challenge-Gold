/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
            "./node_modules/flowbite/**/*.js"
          ],
  theme: {
    extend: {
      colors: {
        'binar-color': '#F1F3FF',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
