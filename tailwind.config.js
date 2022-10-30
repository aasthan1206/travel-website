/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'darkblue': '#2B3699',
        'lightblue': '#5168C4',
        'lightpink': '#F7DCED',
        'darkpink': '#FF78B2',
        'palewhite': '#FBFFF2',
        'lightyellow': '#FFEEC4',
      },
      fontFamily: {
        main: ["Nunito-Regular"],
        special: ["Ubuntu-BoldItalic"],
      },
    },
  },
  plugins: [],
}
