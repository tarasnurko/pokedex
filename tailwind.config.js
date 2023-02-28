/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        robotos: ['"Roboto Slab"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
