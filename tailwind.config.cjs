const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("./colors.cjs");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        display: [
          "Optimistic Display",
          "-apple-system",
          ...defaultTheme.fontFamily.sans,
        ],
        text: [
          "Optimistic Text",
          "-apple-system",
          ...defaultTheme.fontFamily.sans,
        ],
        mono: ['"Source Code Pro"', ...defaultTheme.fontFamily.mono],
      },
      fontSize: {
        "6xl": "52px",
        "5xl": "40px",
        "4xl": "32px",
        "3xl": "28px",
        "2xl": "24px",
        xl: "20px",
        lg: "17px",
        base: "15px",
        sm: "13px",
        xs: "11px",
        code: "calc(1em - 20%)",
      },
      lineHeight: {
        base: "30px",
        large: "38px",
        xl: "1.15",
      },
      aria: {
        page: "current=page",
      },
      colors,
      boxShadow: {
        "secondary-button-stroke": "inset 0 0 0 1px #D9DBE3",
        "secondary-button-stroke-dark": "inset 0 0 0 1px #404756",
        nav: "0 16px 32px -16px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(0,0,0,.10)",
        "nav-dark":
          "0 16px 32px -16px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(255,255,255,.05)",
      },
      backgroundImage: {
        "gradient-left-dark":
          "conic-gradient(from 90deg at -10% 100%, #2B303B 0deg, #2B303B 90deg, #16181D 360deg)",
        "gradient-right-dark":
          "conic-gradient(from -90deg at 110% 100%, #2B303B 0deg, #16181D 90deg, #16181D 360deg)",
        "gradient-left":
          "conic-gradient(from 90deg at -10% 100%, #BCC1CD 0deg, #BCC1CD 90deg, #FFFFFF 360deg)",
        "gradient-right":
          "conic-gradient(from -90deg at 110% 100%, #FFFFFF 0deg, #EBECF0 90deg, #EBECF0 360deg)",
      },
    },
  },
  plugins: [],
};
