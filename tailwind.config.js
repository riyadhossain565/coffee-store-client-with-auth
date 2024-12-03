/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        navbar: "url('./src/assets/more/15.jpg')",
        // banner: "url('./src/assets/more/3.png)",
      },
    },
  },
  plugins: [require("daisyui")],
};
