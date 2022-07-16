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
    },
  },
  plugins: [],
};
