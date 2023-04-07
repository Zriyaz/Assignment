const colors = require("tailwindcss/colors");
/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "custome-bg-whiteColor": "#F9FAFB",
        "custome-Darkbg-Color": "#111827",
        "custome-Darkbg-ContentColor": "#1F2937",
        "custome-Darkbg-color1": "#1E3A8A",

        "custome-bg-darkColor": "#111827",
        "custome-blue-color": "#2563EB",
        "custome-blue-text-1": "#1D4ED8",
        "custome-blue-text-2": "#EFF6FF",
        "custome-bg-color": "#F3F4F6",
        "custome-bg-Cardcolor": "#3B82F6",
        "custome-text-Professioncolor": "#6B7280",
        "custome-text-blackColor": "#1F2937",
        "custome-text-darkcard": "#D1D5DB",
      },
    },
    borderRadius: {
      none: "0",
      sm: "0.125rem",
      DEFAULT: "0.25rem",
      DEFAULT: "4px",
      md: "0.375rem",
      lg: "0.5rem",
      full: "9999px",
      large: "12px",
      "custome-border-radius": "0px 8px 8px 0px",
    },
    backgroundImage: {
      "hero-pattern": "url('/src/assets/Pattern.png')",
    },
    boxShadow: {
      card: "0px 1px 16px 1px rgba(17, 24, 39, 0.05)",
    },
    fontSize: {
      sm: "0.8rem",
      base: "1rem",
      xl: "1.25rem",
      "2xl": "1.563rem",
      "custome-2xl": "1.8rem",
      "custome-text-2xl": "1.1rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
    },
  },
  plugins: [],
  darkMode: "class",
};
