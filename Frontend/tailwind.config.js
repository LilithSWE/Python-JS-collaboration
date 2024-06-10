/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bgExcersise: 'lightgray',
        lightblueColor: 'rgb(191 219 254)',
        orangeColor: 'orange',
        purpleColor: '#8c188c',
        purpleHover: '#bd37bd',
        inputColor: '#f6f2f2',
      },
    },
  },
  plugins: [],
};
