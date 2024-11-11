/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      sans: ["Poppins", "Padauk", "Montserrat", "sans-serif"],
      info: ["Playfair"],
    },
    extend: {
      boxShadow: {
        custom: "10px 0 100px #facc15",
      },
      animation: {
        "bounce-animation": "bounce-animation 4s infinite",
        "bigger-bounce-animation": "bounce-animation 6s infinite",
        "up-animation": "4s infinite slide-up",
        "longer-up-animation": "6s infinite slide-up",
      },
      keyframes: {
        "bounce-animation": {
          "0%": {
            transform: "translateY(0px)",
          },
          "50%": {
            transform: "translateY(-25px)",
          },
          "100%": {
            transform: "translateY(0px)",
          },
        },
        "slide-up": {
          "0%": {
            transform: "translateX(0px)",
          },
          "50%": {
            transform: "translateX(25px)",
          },
          "100%": {
            transform: "translateX(0px)",
          },
        },
      },
    },
  },
  plugins: [],
};
