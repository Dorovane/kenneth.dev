export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4edea3",
        "primary-dark": "#10b981",
        secondary: "#c0c1ff",
        background: "#0e1511",
        surface: "#1a211d",
        "surface-high": "#242c27",
        "on-surface": "#dde4dd",
        "on-surface-muted": "#bbcabf",
        outline: "#3c4a42",
      },
      fontFamily: {
        display: ["Syne", "sans-serif"],
        body: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
    },
  },
  plugins: [],
}