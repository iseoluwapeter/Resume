/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "3rem",
          lg: "3rem",
          xl: "4rem",
          "2xl": "5rem",
        },
      },
    },
  },
  plugins: [],
};
