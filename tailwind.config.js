/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {

    extend: {
      fontSize: {
        xxs: '0.65rem',
      },
      colors: {
        'primary-lighter': '#67e8f9',
        primary: '#0f766e',
        'primary-bold': '#115e59',
      },
    },
  },
  plugins: [],
};
