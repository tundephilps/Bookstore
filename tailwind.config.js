/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Times New Roman", "serif"],
        helvetica: ["Helvetica Neue", "Helvetica", "Arial", "sans-serif"],
        ibarra: ['"Ibarra Real Nova"', "serif"],
        piazzolla: ["Piazzolla", "serif"],
        alegreya: ["Alegreya", "serif"],
        inter: ["Inter", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        public: ["Public Sans", "sans-serif"],
        caslon: ['"Libre Caslon Display"', "serif"],
      },
    },
  },
  plugins: [],
};
