/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        code: ["Source Code Pro", "monospace"],
      },
      colors: {
        prime: "#FFFFFF",
        sub: "#7843E9",
        dark: "#070F2B",
      },
    },
  },
  plugins: [],
};
