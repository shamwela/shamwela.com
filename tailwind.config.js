module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './ui/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      primary: '#000',
      'light-primary': '#202020',
      secondary: 'hsl(0, 0%, 90%)',
      accent: '#38aecc',
    },
    fontFamily: {
      heading: '"Pilat Wide", Roboto, Helvetica, sans-serif',
      sans: 'Roboto, Helvetica, sans-serif',
      mono: '"Roboto Mono", Consolas, monospace',
    },
  },
}
