/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      DMSans: ["DMSans"],
    },
    colors: {
      Lgrey: "#D9D9D9",
      LLgrey: "#E7E7E7",
      Pgrey: "#CDC8CC",
      Lbrown: "#A69488",
      Lgold: "#D4B170",
      Lgold2: "#D5CCA1",
      Dgrey: "#A4A4A3",
      white: "white",
      black: "black",
    },
    backgroundImage: {
      bgwelcome: 'url("./public/homebackground.jpeg")',
    },
    extend: {},
  },
  plugins: [],
};
