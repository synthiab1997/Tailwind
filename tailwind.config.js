/** @type {import('tailwindcss').Config} */
module.exports = {
  // Paths to all template files in the project
  content: [
    "./index.html",                // Main HTML file
    "./src/**/*.{js,jsx,ts,tsx}",  // All JS, JSX, TS, TSX files in the src directory
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  darkMode: 'selector',
};
