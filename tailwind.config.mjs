/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "**/*.html",
    "src/js/**/*.mjs"
  ],
  theme: {
    extend: {
      container: {
        padding: "0.75rem",
        center: true
      },
      colors: {
        "cn-white": "#FFFFFF",
        "cn-light-grey": "#F1F1F1",
        "cn-green": "#BDC9C5",
        "cn-orange": "#E1914F",
        "cn-dark-grey": "#929292",
        "cn-black": "#161616"
      },
    },
  },
  plugins: [],
}

