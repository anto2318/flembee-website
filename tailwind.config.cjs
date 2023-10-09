/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-100": "#262626",
        "light-100": "#FFFCF0",
        "primary-one": "#5765C2",
        "primary-two": "#eb6262",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
    // screens: {
    //   xs: "480px",
    //   sm: "768px",
    //   md: "1060px",
    // },
  },
  plugins: [],
};
