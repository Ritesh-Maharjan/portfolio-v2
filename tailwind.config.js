/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        darkBackground: "#0F172A",
        darkText: "#38BDF8",
        lightBackground: "#E4F6FE",
        accentColor: "#EE583D",
      },
    },
  },
  plugins: [],
};
