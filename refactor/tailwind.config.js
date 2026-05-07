const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/**/*.{rs,html}"],
  theme: {
    screens: {
      'xs': '475px',
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        sans: [
          "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto",
          "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
          "Helvetica Neue", "sans-serif",
        ],
      },
      fontWeight: { regular: 400, bold: 700 },
      fontStyle: { normal: "normal", italic: "italic", bold: "bold" },
    },
  },
  corePlugins: { aspectRatio: false },
  plugins: [require('@tailwindcss/aspect-ratio')],
};
