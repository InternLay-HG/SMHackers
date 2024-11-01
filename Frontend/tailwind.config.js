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
        'medic-green':'#099E6C'
      },
      backgroundImage: {
        'search':"url('./assets/search.png')",
      },
      fontFamily: {
        jaldi: ["Jaldi", 'sans-serif'],
    },
    },
  },
  plugins: [],
}
