/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      animation: {
        spin: "spin 3s linear infinite",
        bell: "bell 1s infinite",
        "fade-in": "fade-in 0.5s ease-in-out",
        "spin-custom": "spin 1s linear infinite",
      },
      keyframes: {
        bell: {
          "0%, 100%": { transform: "rotate(0deg)" },
          "50%": { transform: "rotate(20deg)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
