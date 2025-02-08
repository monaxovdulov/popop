/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        background: "hsl(var(--background))",
        primary: "hsl(var(--primary))",
      },
      keyframes: {
        fadeout: {
          '0%': { opacity: '1', transform: 'translateY(0)' },
          '100%': { opacity: '0', transform: 'translateY(-20px)' }
        }
      },
      animation: {
        fadeout: 'fadeout 1s ease-out forwards'
      }
    }
  },
  plugins: [],
} 