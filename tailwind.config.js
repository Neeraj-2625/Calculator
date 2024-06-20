/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'btn-color':'#00246B',
        'bg-main':' #CADCFC'
      },
      boxShadow: {
        '3xl': '0 35px 60px -15px #00246B',
        'cust':'0 10px 15px #00246B, 0 -10px 15px #CADCFC, 10px 0 15px #CADCFC, -10px 0 15px #CADCFC'
      }
    },
  },
  plugins: [],
}

