/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bgExcersise: 'lightgray',
        orange: 'orange',
        purple: '#8c188c',
        purpleHover: '#bd37bd',
      },
    },
  },
  plugins: [],
};
