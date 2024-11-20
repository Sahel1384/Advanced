/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main1: "#024550",
        main2: "#26d16d",
        main3: "#f4fafa",
      },
      backgroundImage: {
        bg: "url('./assets/images/671218a312747ac394420996_BG.png')",
        svg: "url('./assets/images/38.svg')",
      },
    },
  },
  plugins: [],
};
