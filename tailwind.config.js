/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        PrimaryBlue: "#16ABF8",
        PrimaryRed: "#D22828",
        dark: "#1E293B",
        textC:'#0D2C40',
        bgGray: '#EBF0F3'

      },
      fontFamily:
      {
        'nunito': ['Nunito', 'sans-serif'],
      }
    },
  },
  plugins: [
    
  ],
}
