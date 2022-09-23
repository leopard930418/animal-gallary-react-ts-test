/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  important: true,
  theme: {
    extend: {
      colors: {
        primary: "#FF5C01",
        secondary: "#FFD25F",
        "light-black": "#1B1B1B",
        "medium-black": "#181818",
        "dark-black": "#121212",
      },
      screens: {
        "xl-max": { min: "1440px" },
      },
    },
  },
  plugins: [],
};
