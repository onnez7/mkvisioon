/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sora: ["Sora", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        tiro: ["Tiro Bangla", "serif"],
      },
      colors: {
        ink: "#212121",
        sand: "#fff3e3",
        mist: "#f3f3f3",
        aqua: "#3adde6",
        aquaDark: "#39dce5",
        ocean: "#1c3d46",
      },
      boxShadow: {
        glow: "0 20px 60px rgba(57, 220, 229, 0.25)",
      },
    },
  },
  plugins: [],
}
