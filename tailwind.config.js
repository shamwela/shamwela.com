/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      primary: '#121212',
      'light-primary': '#202020',
      secondary: 'white',
      accent: '#38aecc',
    },
  },
}
