const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
    "./node_modules/flowbite/**/*.{js,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  safelist: [
    {
      pattern: /bg-.+/,
    },
    "mocha",
    "macchiato",
    "frappe",
    "latte",
  ],
  plugins: [
    require("flowbite/plugin"),
    require("@catppuccin/tailwindcss")({
      defaultFlavour: "mocha",
    }),
  ],
};
