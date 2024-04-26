/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      display: ["Syne", "sans-serif"],
    },
    textColor: {
      main: ["#fbf2d5"],
    },
  },
  plugins: [],
};
