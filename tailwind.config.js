/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['FactBlack'],
      serif: ['FactBold'],
    },
    colors: {
      primary: '#E1F310',
      dark: '#000000',
      light: '#ffffff',
      lightColor: '#e2e8f0',
      darkColor: '#9ca3af',
      gray100: '#f3f4f6',
    },
  },
  plugins: [],
};
