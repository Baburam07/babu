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
        testcolor: "#273150",
        bgtestcolor: "#FDFFF1",
      },
      lineHeight: {
        loose: "30px",
      },
      fontWeight: {
        fourFifty: "450",
      },
      boxShadow: {
        priceShadow: " 0px 12px 30px rgba(8, 10, 10, 0.08)",
      },
    },
  },
  plugins: [],
};
