/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/mui/Components/**/*.{js,ts,jsx,tsx}",
    "./src/components/dashboard/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/mui/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary-color)",
        secondary: "var(--secondary-color)",
        tertiary: "var(--tertiary-color)",
        bgprimary: "var(--bgprimary-color)",
        bgsecondary: "var(--bgsecondary-color)",
        body: "var(--body)",
        'black-rgba': 'rgba(0, 0, 0, 0.54)',
        primaryhover: "var(--primaryhover-color)",
        heading: "var(--primaryhover-color)",
        texting: "var(--texting-color)",
        afterLoginBody: "var(--primaryhover-color)",
        sidebar: "var(--primaryhover-color)",
        menuColors: "var(--primaryhover-color)",
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
};
