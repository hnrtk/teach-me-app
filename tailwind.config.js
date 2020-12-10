/* eslint-disable @typescript-eslint/no-var-requires */
const defaultTheme = require("tailwindcss/defaultTheme");

const color = {
  ...defaultTheme.colors,
  primary: {
    DEFAULT: "#7E18EC",
    dark: "#5A10AC",
    light: "#8E22FC",
  },
  secondary: "#F5EE08",
};

module.exports = {
  purge: ["./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    color: color,
    textColor: (theme) => theme("color"),
    backgroundColor: (theme) => theme("color"),
    borderColor: (theme) => theme("color"),
    ringColor: (theme) => theme("color"),
    extend: {
      fontFamily: {
        sans: "Lato, sans-serif",
      },
    },
    screen: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
