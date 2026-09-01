/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0F1720",
          50: "#F2F5F7",
          100: "#DCE3E8",
          800: "#141F29",
          900: "#0F1720",
          950: "#0A1017",
        },
        gold: {
          DEFAULT: "#C9973F",
          light: "#E4C07A",
          dark: "#A67A2E",
        },
        ivory: "#F7F3EA",
        slateteal: "#1E2E36",
      },
      fontFamily: {
        display: ["Fraunces", "serif"],
        body: ["Manrope", "sans-serif"],
      },
      backgroundImage: {
        sunrise:
          "radial-gradient(120% 100% at 50% 100%, rgba(201,151,63,0.35) 0%, rgba(15,23,32,0) 60%)",
      },
    },
  },
  plugins: [],
};
