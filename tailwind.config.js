/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html"],
  theme: {
    screens: {
      sm: "320px",
      md: "375px",
      lg: "425px",
      tablet: "768px",
      laptop: "1024px",
      desktop: "1280px",
      "desktop-lg": "1440px",
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        glass: "rgba(255, 237, 237, 0.01)",
        glassGray: "rgba(255, 252, 237, 0.37)",
      },
    },
  },
  plugins: [],
};
