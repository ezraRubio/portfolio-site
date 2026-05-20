const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/**/*.{rs,html}"],
  theme: {
    screens: {
      'xs': '475px',
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        everforest: {
          bg_dim: '#232a2e',
          bg0: '#2d353b',
          bg1: '#343f44',
          bg2: '#3d484d',
          bg3: '#475258',
          bg4: '#4f585e',
          bg5: '#56635f',
          fg: '#d3c6aa',
          red: '#e67e80',
          orange: '#e69875',
          yellow: '#dbbc7f',
          green: '#a7c080',
          aqua: '#83c092',
          blue: '#7fbbb3',
          purple: '#d699b6',
          grey0: '#7a8478',
          grey1: '#859289',
          grey2: '#9da9a0',
        }
      },
      fontFamily: {
        sans: [
          "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto",
          "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
          "Helvetica Neue", "sans-serif",
        ],
      },
      fontWeight: { regular: 400, bold: 700 },
      fontStyle: { normal: "normal", italic: "italic", bold: "bold" },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  corePlugins: { aspectRatio: false },
  plugins: [require('@tailwindcss/aspect-ratio')],
};
