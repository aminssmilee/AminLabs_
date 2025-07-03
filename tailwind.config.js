/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    // "./node_modules/fullpage.js/dist/fullpage.css" // Ini file CSS, tidak perlu di sini
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00D3D5",
        accent: "#EF4FC4",
        dark: "#000000",
        light: "#FFFFFF",
        muted: "#F4F4F4",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        display: ["Playfair Display", "serif"],
        logo: ["Bebas Neue", "sans-serif"],
        robotoSlab: ['"Roboto Slab"', 'serif'],
        amsi: ['"Oswald"', 'sans-serif'],
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: true,
  },
};
