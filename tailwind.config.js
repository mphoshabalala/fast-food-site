/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        invitingYellow: "#FFB82E",
        smoothBlue: "#0080ff",
        sleekBlack: "#1c1c1c",
        grey: "#555555",
      },
      fontFamily: {
        arimo: "Arimo, sans-serif",
      },
      backgroundImage: {
        heroBG: "url('images/board.jpg')",
      },
    },
  },
  plugins: [],
};
