const colors = require("tailwindcss/colors");
module.exports = {
  purge: ["./index.html", "./src/**/*.js"],
  darkMode: false,
  content: [],
  theme: {
    extend: {
      fontFamily: {
        poppins: "Poppins",
      },
      colors: {
        bcolor: "#FF6100",
        tcolor: "#AEA299",
        client: "#6B6B6B",
        fcolor: "#F5C9B04D",
        pricecolor: "#F5894E",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
  },
  plugins: [],
};
