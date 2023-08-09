/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        timberWolf: "#D7D6D6",
        platinum: "#E7E5DF",
        kepple: "#44BBA4",
        onix: "#393E41",
        nigth: "#0F0F0F",
      },
      fontFamily: {
        Josefin: ["Josefin Sans", "sans-serif"],
      },
      maxWidth: {
        160: "160px",
      },
      gridTemplateColumns: {
        autoFit: "repeat(auto-fit, minmax(min(160px, 100%), 1fr))",
      },
      boxShadow: {
        content: "0 15px 25px -4px rgba(0,0,0,0.5), inset 0 -3px 4px -1px rgba(0,0,0,0.2), 0 -10px 15px -1px rgba(255,255,255,0.6), inset 0 3px 4px -1px rgba(255,255,255,0.2), inset 0 0 5px 1px rgba(255,255,255,0.8), inset 0 20px 30px 0 rgba(255,255,255,0.2)",
        contentInv: "0 15px 25px -4px rgba(255, 255, 255, 0.1), inset 0 -3px 4px -1px rgba(255, 255, 255, 0.05), 0 -10px 15px -1px rgba(0, 0, 0, 0.2), inset 0 3px 4px -1px rgba(0, 0, 0, 0.1), inset 0 0 5px 1px rgba(0, 0, 0, 0.2), inset 0 20px 30px 0 rgba(0, 0, 0, 0.1)",
        in: "inset 0 0 5px rgba(0, 0, 0, 0.5)",
      },
      blur: {
        x: "1px",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
