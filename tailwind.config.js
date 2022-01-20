const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    {
      pattern: /(border|text)-(blue|sky|emerald)-500/,
    },
    {
      pattern: /bg-(blue|sky|emerald)-(50|100|200|300)/,
    },
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
