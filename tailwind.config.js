const { default: daisyui } = require('daisyui');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js" // configure the Flowbite JS source template paths
  ],
  theme: {
    extend: {
      padding: {
        '33rem': '33rem'
      },
      colors: {
        'custom-green': '#0b112b',
      },
      Animation: {
        'slide': 'slide  linear infinite',
      }
    },
  },
  plugins: [
    require("daisyui")
  ],
  darkMode: "class"
}