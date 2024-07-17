/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        'inter': ['Inter', 'sans-serif'],
      },
      colors:{
        oren:'#E17538',
        abu: '#3A3A3A',
        abu2: '#425466',
        dongker: '#0A2540',
      }
    },
  },
  plugins: [],
}

