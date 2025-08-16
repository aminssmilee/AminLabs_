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
        dark: "#292929",
        beig: "#FEFEF4",
      },
      fontFamily: {
        // sans: ["Poppins", "sans-serif"],
        // display: ["Playfair Display", "serif"],
        // logo: ["Bebas Neue", "sans-serif"],
        // robotoSlab: ['"Roboto Slab"', 'serif'],
        // amsi: ['"Oswald"', 'sans-serif'],
        // neuemont: ['"Neue Montreal"', 'sans-serif'],
        // poiret: ['"Poiret One"', 'cursive'],
        // inter: ['Inter', 'sans-serif'],
        utah: ['"Utah Condensed"', 'sans-serif'],
        helvetica: ['"Helvetica Neue Cyr"', 'sans-serif'],
      },
      translate: {
        '101': '101%',
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0%)' },
          to: { transform: 'translateX(-50%)' }
        }
      },
      animation: {
        marquee: 'marquee 15s linear infinite'
      }
    },
  },
  plugins: [],
  corePlugins: {
    preflight: true,
  },
};
