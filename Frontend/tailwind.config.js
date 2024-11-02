/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'basic-green':'#F6FFFBC7',
        'medic-green':'#099E6C',
        'back-green':'#4C937E',
        'searchbar-background-green':'#F6FFFBC7'
      },
      backgroundImage: {
        'search':"url('./images/search.png')",
      },
      fontFamily: {
        jaldi: ["Jaldi", 'sans-serif'],
    },
    },
  },
  plugins: [],
}
