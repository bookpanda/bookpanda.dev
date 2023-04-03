/** @type {import('tailwindcss').Config} */
import { createThemes } from "tw-colors";

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
      },
      gridTemplateRows: {
        7: "repeat(7, minmax(0, 1fr))",
      },
    },
  },
  plugins: [
    createThemes({
      light: {
        "a":"#333333"  
      },
    })
  ]
};
