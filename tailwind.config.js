const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      primary: 'black',
      'light-primary': '#202020',
      secondary: 'hsl(0, 0%, 90%)',
      accent: '#38aecc',
    },
    fontFamily: {
      sans: ['var(--gt-america)', ...fontFamily.sans],
    },
  },
}
