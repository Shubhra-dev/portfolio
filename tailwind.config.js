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
        sub2: "#64BAA9",
        sub3: "#408DA7",
        dark: "#021526",
      },
      screens: {
        laptop: "1300px",
      },
      keyframes: {
        gradient: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "100% 50%" },
        },
      },
      animation: {
        grad: "gradient 4s linear infinite",
      },
    },
  },
  plugins: [],
};
