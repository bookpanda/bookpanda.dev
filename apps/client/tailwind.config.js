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
      },
    },
  },
  plugins: [],
};
