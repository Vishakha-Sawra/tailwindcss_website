/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["**/*.html", "**/*.js"],
  theme: {
    extend: {
      colors: {
        darkblue: "#030a25",
        lightblue: "#160446",
        dark: "#0b134e",
        green: "#54a892",
        purple: "#3e10a9",
        blue: "#66d9f0",
      },
      animation: {
        text: "text 8s ease infinite",
        "waving-hand": "wave 2s linear infinite",
      },
      keyframes: {
        text: {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
        wave: {
          "0%": { transform: "rotate(0.0deg)" },
          "10%": { transform: "rotate(14deg)" },
          "20%": { transform: "rotate(-8deg)" },
          "30%": { transform: "rotate(14deg)" },
          "40%": { transform: "rotate(-4deg)" },
          "50%": { transform: "rotate(10.0deg)" },
          "60%": { transform: "rotate(0.0deg)" },
          "100%": { transform: "rotate(0.0deg)" },
        },
      },
    },
  },
  plugins: [],
};
