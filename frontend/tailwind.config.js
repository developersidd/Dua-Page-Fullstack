/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1FA45B",
        secondary: "#EBEEF2",
      },
      width: {
        13: "3.2rem",
      },
      height: {
        13: "3.2rem",
      },
      size: {
        13: "3.2rem",
      },
    },
  },
  plugins: [],
};
