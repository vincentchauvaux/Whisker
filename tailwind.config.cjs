/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#E9EDF2", // gris clair
          DEFAULT: "#1B3B44", // bleu-vert foncé
          dark: "#162E35", // version plus foncée du bleu-vert
        },
        secondary: {
          light: "#F5EFE7", // beige clair
          DEFAULT: "#E8E0D5", // version plus foncée du beige
          dark: "#D6CBB8", // version encore plus foncée du beige
        },
      },
    },
  },
  plugins: [],
};
