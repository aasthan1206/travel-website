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
      backgroundImage: {
        'hero': "url('/src/assets/images/mountain.jpg')",
        'login': "url('/src/assets/images/desert.jpg')",
        'booking' : "url('/src/assets/images/booking.jpg')",
        'about' : "url('/src/assets/images/about.jpg')",
        'contact' : "url('/src/assets/images/book.jpg')",
        'payment' : "url('/src/assets/images/payment.jpg')",
      },
      fontFamily: {
        main: ["Lato-Regular"],
        special: ["ErnestandEmily-Regular"],
        logo: ["Caveat-Regular"],
      },
    },
  },
  plugins: [],
}
