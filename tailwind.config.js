/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    screens: {
      xs: "400px",   // extra small devices
      sm: "480px",   // small devices
      sd: "650px",
      md: "800px",   // medium devices
      lg: "1024px",  // laptop
      xl: "1200px",
    },
    extend: {
      fontFamily: {
        mono: ['"Fira Code"', 'monospace'],
      },
      colors: {
        'bright-blue': '#4fc3f7',
        'gray-text': '#9ca3af',
      }
    },
  },
  plugins: [],
}


