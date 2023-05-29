const plugin = require("tailwindcss/plugin");

const themes = {
  light: {
    "--scrim": "0 0 0",
    "--secondary": "98 91 113",
    "--primary": "103 80 164",
    "--primary-container": "234 221 255",
    "--secondary-container": "232 222 248",
    "--tertiary": "125 82 96",
    "--tertiary-container": "255 216 228",
    "--surface": "255 251 254",
    "--surface-variant": "231 224 236",
    "--background": "255 251 254",
    "--error": "179 38 30",
    "--error-container": "249 222 220",
    "--on-primary": "255 255 255",
    "--on-primary-container": "33 00 94",
    "--on-secondary": "255 255 255",
    "--on-secondary-container": "30 25 43",
    "--on-tertiary": "255 255 255",
    "--on-tertiary-container": "55 11 30",
    "--on-surface": "28 27 31",
    "--on-surface-variant": "73 69 78",
    "--on-error": "255 255 255",
    "--on-error-container": "55 11 30",
    "--on-background": "28 27 31",
    "--outline": "121 116 126",
    "--shadow": "0 0 0",
    "--outline-variant": "196 199 197",
    "--surface-tint": "103 80 164",
    "--inverse-surface": "49 48 51",
    "--inverse-on-surface": "244 239 244",
    "--inverse-primary": "208 188 255",
  },
  dark: {
    "--primary": "208 188 255",
    "--primary-container": "79 55 139",
    "--secondary": "204 194 220",
    "--secondary-container": "74 68 88",
    "--tertiary": "239 184 200",
    "--tertiary-container": "99 59 72",
    "--surface": "28 27 31",
    "--surface-variant": "73 69 79",
    "--background": "28 27 31",
    "--error": "242 184 181",
    "--error-container": "140 29 24",
    "--on-primary": "55 30 115",
    "--on-primary-container": "234 221 255",
    "--on-secondary": "51 45 65",
    "--on-secondary-container": "232 222 248",
    "--on-tertiary": "73 37 50",
    "--on-tertiary-container": "255 216 228",
    "--on-surface": "230 225 229",
    "--on-surface-variant": "202 196 208",
    "--on-error": "96 20 16",
    "--on-error-container": "249 222 220",
    "--on-background": "230 225 229",
    "--outline": "147 143 153",
    "--outline-variant": "68 71 70",
    "--shadow": "0 0 0",
    "--surface-tint": "208 188 255",
    "--inverse-surface": "230 225 229",
    "--inverse-on-surface": "49 48 51",
    "--inverse-primary": "103 80 164",
  },
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ...Object.fromEntries(
          Object.keys(themes.light).map((color) => [
            color.substring(2),
            `rgb(var(${color}) / <alpha-value>)`,
          ])
        ),
      },
    },
  },
  plugins: [
    plugin(({ addBase }) => {
      addBase({
        ":root": themes.light,
        // "@media (prefers-color-scheme: dark)": {
        //   ":root": themes.dark,
        // },
        ".dark": themes.dark,
      });
    }),
  ],
};
