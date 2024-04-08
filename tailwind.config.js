/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
      },
      backgroundColor:{
        "panelBg":"#232323",
        "panelButtons":"#2B2B2B",
        "miniButtons":"#404040",
        "tableColumn":"#383838",
        "modalBg":"#1B1A1A",
        "modalInputBg":"#151515",
        "modalButton":"#292929"
      },
      "borderColor":{
        "modalBorder":"#373737"
      }
    },
  },
  plugins: [],
};
