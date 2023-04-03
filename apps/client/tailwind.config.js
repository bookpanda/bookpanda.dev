/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "../../packages/design/src/**/*.{js,ts,jsx,tsx,css,scss}",
  ],
  theme: {
    extend: {
      colors: {
        "gray-bg": "#edf1f5",
        "gray-light": "#efefef",
        "gray-medium": "#647380",
        "gray-dark": "#333333",
        "primary.light": "var(--primary-light)",
        "primary.main": "var(--primary-main)",
        "primary.dark": "var(--primary-dark)",
        "secondary.light": "var(--secondary-light)",
        "secondary.main": "var(--secondary-main)",
        "secondary.dark": "var(--secondary-dark)",
      },
      gridTemplateRows: {
        7: "repeat(7, minmax(0, 1fr))",
      },
    },
  },
  plugins: [],
};
