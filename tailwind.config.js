module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        tblack: "#111618",
        tdgray: "#4B4E4F",
        tgray: "#858585",
        twhite: "#EBEBEB",
        torange: "#CE733B",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
