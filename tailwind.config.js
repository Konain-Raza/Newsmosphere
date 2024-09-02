/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}','./Screens/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      primary: '#000000',
      fontFamily: {
        gilroy: ['Gilroy-Regular', 'sans-serif'],
        gilroyBold: ['Gilroy-Bold', 'sans-serif'],
        // Add more custom fonts if needed
      },
    },
  },
  plugins: [],
};
