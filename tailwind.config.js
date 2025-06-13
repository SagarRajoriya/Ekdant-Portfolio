module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#00ADB5",
        secondary: "#111111", // Changed from #393E46 (dark grey) to a darker near-black
        dark: "#000000", // Changed from #222831 (very dark grey) to pure black
        light: "#EEEEEE",
      },
      boxShadow: {
        glow: "0 0 15px rgba(0, 173, 181, 0.5)",
      },
      backgroundImage: {
        "blue-gradient": "linear-gradient(135deg, #0693e3 0%, #00ADB5 100%)",
        "blue-gradient-hover":
          "linear-gradient(135deg, #00ADB5 0%, #0693e3 100%)",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
