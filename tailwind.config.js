module.exports = {
  content: [
    './index.html', // Add your HTML file here
    './**/*.html',  // Add any other HTML files in your project
    './**/*.js',    // If you're using Tailwind CSS classes in JS files
  ],
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
  plugins: [],
};
