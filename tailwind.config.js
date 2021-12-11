module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#181818',
        secondary: '#fff',
        accent: '#38aecc',
      },
      fontFamily: {
        sans: 'Roboto, Helvetica, sans-serif',
        // "!important" is used here to override Prism.js default font family
        mono: '"Roboto Mono", Consolas, monospace !important',
      },
    },
  },
}
