const plugin = require("tailwindcss/plugin");
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
      textShadow: {
        sm: "0 1px 2px rgba(0,0,0,0.3)",
        DEFAULT: "0 2px 4px rgba(0,0,0,0.3)",
        lg: "0 8px 16px rgba(0,0,0,0.3)",
      },
      width: {
        "max-content": "max-content",
      },
      colors: {
        brownDark: {
          DEFAULT: "#4C1D1E",
        },
        brownMedium: {
          DEFAULT: "#B35512",
        },
        brownLight: {
          DEFAULT: "#f5ece7",
        },
        blueMedium: {
          DEFAULT: "#A9D3D5",
        },
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "text-shadow": (value) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") }
      );
    }),
  ],
};
