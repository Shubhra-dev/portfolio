/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        code: ["Fira Code", "monospace"],
      },
      colors: {
        prime: "#FFFFFF",
        sub: "#7843E9",
        dark: "#070F2B",
      },
      screens: {
        laptop: "1300px",
      },
    },
  },
  plugins: [],
};
