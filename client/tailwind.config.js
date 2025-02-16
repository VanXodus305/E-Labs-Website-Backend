const { heroui } = require("@heroui/react");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgColor: "#0B1215",
        textColor1: "#F7941D",
        textColor2: "#F1FAEE",
        darkBG:
          "radial-gradient(circle at 10% 20%, rgba(216, 241, 230, 0.46) 0.1%, rgba(233, 226, 226, 0.28) 90.1%);",
      },
      fontFamily: {
        horizon: ["Horizon", "sans-serif"],
        varela: ["Varela Round", "sans-serif"],
      },
      backgroundImage: {
        lightBG:
          "linear-gradient(30deg, rgba(219,234,254,1) 0%, rgba(247,148,29,0.2) 50%, rgba(219,234,254,1) 100%);",
      },
    },
  },
  plugins: [heroui()],
};
