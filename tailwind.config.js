/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "system-ui", "sans-serif"],
      },
      colors: {
        iosBlue: "#007AFF",
        iosGray: "#F3F4F6",
      },
      borderRadius: {
        '3xl': '28px',
      },
    },
  },
  plugins: [],
};
