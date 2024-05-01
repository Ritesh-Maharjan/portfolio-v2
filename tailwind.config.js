/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        darkBackground: "#0F172A",
        darkHeadingColor: "#96E6B3",
        darkText: "#DAEDD5",
        lightBackground: "#38BDF8",
        accentColor: "#EE583D",
      },
    },
  },
  plugins: [],
};
