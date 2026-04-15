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
        primary: "#FF656F",
        secondary: "#3B83F7",
        background: {
          DEFAULT: "#F8FBFD",
          dark: "#212121",
        },
        secondaryBackground: {
          DEFAULT: "#FFFEFE",
          dark: "#1B1B1D",
        },
        headerColor: {
          DEFAULT: "#0F162B",
          dark: "",
        },
        subheaderColor: {
          DEFAULT: "#474747",
          dark: "",
        },
        textColor: {
          DEFAULT: "#2D2D2D",
          dark: "",
        },
        secondaryTextColor: {
          DEFAULT: "#64748B",
          dark: "",
        },
        placeholder: "#94A3B8",
        borderColor: {
          DEFAULT: "#66757F",
          dark: "",
        },
        secondaryBorderColor: {
          DEFAULT: "#E5EBF2",
          dark: "",
        },
        success: "#45AC4C",
        danger: "#DC3545",
      },
    },
  },
  plugins: [],
};
