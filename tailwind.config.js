  /** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        brightColor:"#AB6B3E",
        backgroundColor:"#FDE9CC",
      }
    },
  },
  plugins: [],
}

