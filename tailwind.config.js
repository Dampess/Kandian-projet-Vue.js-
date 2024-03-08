// tailwind.config.js

module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'], 
        pacifico: [ 'Pacifico', 'cursive'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
