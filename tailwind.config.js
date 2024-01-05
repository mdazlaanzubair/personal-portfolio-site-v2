/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/react-tailwindcss-select/dist/index.esm.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        // "satoshi-black": ["Satoshi Black", "sans-serif"],
        // "satoshi-bold": ["Satoshi Bold", "sans-serif"],
        // "satoshi-medium": ["Satoshi Medium", "sans-serif"],
        // "satoshi-regular": ["Satoshi Regular", "sans-serif"],
        // "satoshi-light": ["Satoshi Light", "sans-serif"],
        // "satoshi-black-italic": ["Satoshi Black Italic", "sans-serif"],
        // "satoshi-bold-italic": ["Satoshi Bold Italic", "sans-serif"],
        // "satoshi-medium-italic": ["Satoshi Medium Italic", "sans-serif"],
        // "satoshi-regular-italic": ["Satoshi Regular Italic", "sans-serif"],
        // "satoshi-light-italic": ["Satoshi Light Italic", "sans-serif"],
      },
    },
  },

  // add daisyUI plugin
  plugins: [require("daisyui"), require("tailwindcss-animation-delay")],

  // daisyUI config (optional - here are the default values)
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["winter"],
          // CUSTOM COLOR THEME
          primary: "#000000",
          secondary: "#555555",
          accent: "#6919FF",
          // neutral: "#919BBA",
          // "base-100": "#f2f7ff",
          // info: "#0284c7",
          // success: "#22c55e",
          // warning: "#ca8a04",
          // error: "#b91c1c",
        },
        dark: {
          ...require("daisyui/src/theming/themes")["night"],
          // CUSTOM COLOR THEME
          primary: "#ffffff", // F6F7FA
          secondary: "#999999", // 919BBA
          accent: "#6919FF",
          // neutral: "#03050c",
          "base-100": "#050715",
          // info: "#0284c7",
          // success: "#22c55e",
          // warning: "#ca8a04",
          // error: "#b91c1c",
        },
      },
    ], // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "dark", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },
};
