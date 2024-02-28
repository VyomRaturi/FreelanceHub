/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        '0b5f62': '#0b5f62',
      },
      fontFamily: {
        'lora-bold': ['Lora', 'serif'],
      },
    },
  },
  plugins: [],
};
