module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        primary: '#181818',
        secondary: '#fff',
        accent: '#38aecc',
      },
      fontFamily: {
        sans: 'Helvetica, Arial, sans-serif',
        // "!important" is used here to override Prism.js default font family
        mono: '"Roboto Mono", monospace !important',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
