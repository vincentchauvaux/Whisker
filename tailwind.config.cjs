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
          DEFAULT: "#F26052", // couleur principale
          dark: "#D94535", // version plus foncée
        },
      },
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
        serif: ['"Old Standard TT"', "serif"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
