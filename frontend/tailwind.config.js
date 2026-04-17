/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}", // For App.js in the root directory
    "./src/**/*.{js,jsx,ts,tsx}", // Catches all files inside the src directory
    "./src/app/**/*.{js,jsx,ts,tsx}", // Explicitly includes files within src/app
    "./src/app/features/**/*.{js,jsx,ts,tsx}", // Explicitly includes files within src/app
  ],
  darkMode: "class", // Provisional hasta que pongamos una buena paleta de colores para el modo oscuro xd
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#013D9A",
        secondary: "#3B83F7",
        background: {
          DEFAULT: "#F0F3FE",
          dark: "#212121",
        },
        secondaryBackground: {
          DEFAULT: "#E0E8FF",
          dark: "#1B1B1D",
        },
        headerColor: {
          DEFAULT: "#041A3D",
          dark: "",
        },
        textColor: {
          DEFAULT: "#424655",
          dark: "",
        },
        secondaryTextColor: {
          DEFAULT: "#737784",
          dark: "",
        },
        green: "#82F8BF",
        red: "#FEDAD3",
        blue: "#D6E3FF",
      },
    },
  },
  plugins: [],
};
