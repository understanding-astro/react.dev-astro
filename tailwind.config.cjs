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
        ...defaultTheme.boxShadow,
        "secondary-button-stroke": "inset 0 0 0 1px #D9DBE3",
        "secondary-button-stroke-dark": "inset 0 0 0 1px #404756",
      },
    },
  },
  plugins: [],
};
