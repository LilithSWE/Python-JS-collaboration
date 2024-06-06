/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bgExcersise: 'lightgray',
        lightblueColor: 'rgb(191 219 254)',
      },
    },
  },
  plugins: [],
};
