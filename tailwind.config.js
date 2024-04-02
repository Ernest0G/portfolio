/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fdf8f8",
        black: "#2D3142",
        primary: "#ce4849",
        secondary: "#bdc5b0",
        accent: "#488cf0",
      },
    },
  },
  plugins: ["@tailwindcss/forms", require("daisyui")],
};
