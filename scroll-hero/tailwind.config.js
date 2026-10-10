/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#07080b",
        panel: "#10131a",
        accent: "#ff5a1f",
        mist: "#9aa3b2",
      },
      fontFamily: {
        display: ['"Arial Black"', "Impact", "Helvetica Neue", "Arial", "sans-serif"],
        sans: ["ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
