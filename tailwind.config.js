/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Monserrat: "Monserrat",
      }
    },
  },
  daisyui:{
    themes:[
      {
        // defaultTheme:{
        //   primary: '#f8f9fa',
        //   neutral:'#2b3440'
        // }
      }
    ]
  },
  plugins: [require("daisyui")],
}

