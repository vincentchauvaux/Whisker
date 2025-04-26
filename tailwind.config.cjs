/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#CFD4DA", // gris clair
          DEFAULT: "#1B3B44", // bleu-vert foncé
          dark: "#162E35", // version plus foncée du bleu-vert
        },
        secondary: {
          light: "#F7A39B", // version plus claire
          DEFAULT: "#E67E22", // couleur principale
          dark: "#D94535", // version plus foncée
        },
        tertiary: {
          light: "#E8ECEF", // version plus claire
          DEFAULT: "#BFCFD3", // couleur principale
          dark: "#A8B9BE", // version plus foncée
        },
      },
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
        serif: ['"Old Standard TT"', "serif"],
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        26: "6.5rem",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
      },
      boxShadow: {
        soft: "0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)",
      },
      typography: {
        DEFAULT: {
          css: {
            color: "#1B3B44",
            h1: {
              color: "#1B3B44",
              fontFamily: '"Old Standard TT", serif',
            },
            h2: {
              color: "#1B3B44",
              fontFamily: '"Old Standard TT", serif',
            },
            h3: {
              color: "#1B3B44",
              fontFamily: '"Old Standard TT", serif',
            },
            a: {
              color: "#E67E22",
              "&:hover": {
                color: "#D94535",
              },
            },
          },
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar"), require("@tailwindcss/typography")],
};
