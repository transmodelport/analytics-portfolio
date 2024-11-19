/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#4CAF50', // Custom green color
        secondary: '#FFC107', // Custom amber color
      },
      fontFamily: {
        sans: ['"Roboto"', 'sans-serif'], // Custom font family
        serif: ['"Merriweather"', 'serif'], // Custom serif font
      },
      spacing: {
        '128': '32rem', // Custom spacing
      },
    },
  },
};
