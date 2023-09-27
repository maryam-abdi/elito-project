/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        "w-color" : "#FFFFFF",
        "g-color" : "#59c378",
        "y-color" : "#F9E600",
        "r-color" : "#DD5846",
        "hover-color" : "#57B665"
      },
      screens:{
        res_meno:{max:"990px"},
        max_meno:{min:"990px"}
      }
    },
  },
  plugins: [],
}
