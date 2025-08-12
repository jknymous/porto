/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
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


