/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*html"],
  theme: {
    extend: {
      container: {
        center: true,
      },
      colors: {
        primary: "#9A2320",
        secondary: "#B8B8B8",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
