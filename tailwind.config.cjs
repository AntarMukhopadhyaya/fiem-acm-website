/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3674B5',
        secondary: '#578FCA',
        accent: '#A1E3F9',
        background: '#D1F8EF',
      },
    },
  },
  plugins: [],
};
