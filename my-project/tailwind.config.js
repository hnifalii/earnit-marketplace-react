const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    fontFamily: {
      sans: ['Inter', ...defaultTheme.fontFamily.sans]
    },
    container: {
      center: true,
      // padding: '25px'
    },
    extend: {
      colors: {
        'primary': '#43bde4'
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

