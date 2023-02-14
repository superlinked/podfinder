/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          50: '#EFF6FF'
        },
        gray: {
          uno: '#111827',
          dos: '#374151',
          tres: '#6B7280',
          cuatro: '#D1D5DB'
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
