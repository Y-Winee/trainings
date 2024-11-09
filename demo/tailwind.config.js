/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      sans: ["Poppins", "Padauk", "Montserrat", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
