/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens : {
      sm : '576px',
      md : '768px',
      lg : '992px',
      xl : '1200px',
      

    },
    container : {
      center : true,
      padding : '1rem' // 16px
    },
    extend: {
      colors : {
        primary : '#FD3D57'
      }
    },
  },
  plugins: [],
}

