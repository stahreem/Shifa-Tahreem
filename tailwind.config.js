/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors: {
          'dark-blue': '#24243e',
          'blue': '#302b63',
          'dark-purple': '#0f0c29'
    },
    animation:{
      'loop-scroll':"loop-scroll 50s linear infinite"
    },
    keyframes:{
      "loop-scroll":{
        from: {transform: "translateX(0)"},
        to: {transform: "translateX(-100%)"}
      }
    }
  },
  plugins: [],
}
}
