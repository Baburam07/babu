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
      height: {
        priceheight: "450px",
      },
      width: {
        wid: "556px",
        widt: "461px",
        inputwidth: "500px",
        testwidth: "769px",
      },
      colors: {
        teal: colors.teal,
        bcolor: "#FF6100",
        tcolor: "#AEA299",
      },
    },
  },
  plugins: [],
};
