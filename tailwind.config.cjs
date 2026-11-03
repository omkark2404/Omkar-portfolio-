/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        paper: "#f6f1e3",
        paperline: "#9db8e8",
        ink: "#161513",
        noteyellow: "#ffd23f",
        notepink: "#ffb3d1",
        noteblue: "#7cc4ff",
        notegreen: "#8be28b",
        notepurple: "#c9a7ff",
        blockblue: "#6fb7ff",
        blockred: "#ff6b5e",
        blockyellow: "#ffd23f",
        blockgreen: "#7ed491",
        blockpurple: "#c9a7ff",
      },
      fontFamily: {
        pixel: ["VT323", "'Courier New'", "monospace"],
        hand: ["Caveat", "cursive"],
        display: ["Archivo", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: [
          "ui-monospace",
          "'SF Mono'",
          "'Cascadia Code'",
          "Menlo",
          "Consolas",
          "monospace",
        ],
      },
      boxShadow: {
        hard: "6px 6px 0 #161513",
        "hard-sm": "4px 4px 0 #161513",
        "hard-lg": "10px 10px 0 #161513",
        tape: "0 1px 3px rgba(0,0,0,0.25)",
      },
      screens: {
        xs: "450px",
      },
    },
  },
  plugins: [],
};
