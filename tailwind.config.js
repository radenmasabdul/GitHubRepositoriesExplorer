/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      "font-quick": ["'Quicksand', sans-serif;"],
    },
    extend: {},
  },
  plugins: [require("daisyui")],
}
