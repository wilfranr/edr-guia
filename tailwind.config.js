/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'elden-gold': '#CFA152',
        'arcane-blue': '#3B82F6',
        'arcane-purple': '#8B5CF6',
      },
      backgroundColor: {
        'glass': 'rgba(40, 40, 60, 0.5)',
      },
      borderColor: {
        'glass': 'rgba(255, 255, 255, 0.1)',
      },
      backdropFilter: {
        'none': 'none',
        'blur': 'blur(10px)',
      },
    },
  },
  plugins: [],
}
