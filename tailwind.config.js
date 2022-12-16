/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        robo: ["Roboto Condensed", "sans-serif"],
      },
      maxWidth: {
        container: "1200px",
      },
      textColor: {
        primary: "#151515",
        hoverPrimary: "#e62429",
        secondary: "#767676",
        hoverSecondary: "#bbbbbb",
      },
      borderColor: {
        primary: "#151515",
        hoverPrimary: "#e62429",
        secondary: "#767676",
        hoverSecondary: "#bbbbbb",
      },
      backgroundColor: {
        primary: "#151515",
        hoverPrimary: "#e62429",
        secondary: "#767676",
        hoverSecondary: "#bbbbbb",
      },
      keyframes: {
        popUp: {
          "0%": { opacity: "0", transform: "scale(10%)" },
          "70%": { opacity: ".9", transform: "scale(110%)" },
          "100%": { opacity: "1", transform: "scale(100%)" },
        },
        popDown: {
          "0%": { opacity: "0", transform: "scale(120%)" },
          "100%": { opacity: "1", transform: "scale(100%)" },
        },
        smooth: {
          "0%": { opacity: "0", display: "hidden" },
          "100%": { opacity: "1", display: "block" },
        },
      },
      borderRadius: {
        lg: "20px",
      },
    },
  },
  plugins: [],
};
