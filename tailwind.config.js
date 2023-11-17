/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,tsx,css,mdx}",
    "./src/app/**/*.{js,ts,tsx,css,mdx}",
    "./src/app/[locale]/**/*.{js,ts,tsx,css,mdx}",
    "./src/app/[locale]/pages/**/*.{js,ts,tsx,css,mdx}",
  ],

  theme: {
    colors: {
      primaryCol: "#4248f5",
      white: "#ffffff",
    },
  },
  plugins: [],
};
