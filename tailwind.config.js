/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{jsx,tsx}'],
  theme: {
    extend: {
      borderColor: {
        default: '#CBB6E5',
        active: '#761BE4',
        error: '#ED4545',
      },
      colors: {
        primary: '#000853',
        secondary: '#898DA9',
      },
      backgroundColor: {
        inactive: '#CBB6E5',
        default: '#761BE4',
        hover: '#6A19CD',
        iconHover: '#ED4545',
      },
    },
  },
  plugins: [],
};
