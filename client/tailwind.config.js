/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'meo': 'url(./src/assets/meo.jpg)'
      }
    },
  },
  plugins: [],
}
