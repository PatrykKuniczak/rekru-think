/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{jsx,tsx}'],
  theme: {
    extend: {
      outlineColor: {
        DEFAULT: '#CBB6E5',
        active: '#761BE4',
        error: '#ED4545',
      },
      accentColor: {
        DEFAULT: '#761BE4',
      },
      outlineWidth: {
        DEFAULT: '1px',
      },
      fontSize: {
        sm: '14px',
        DEFAULT: '16px',
        l: '24px',
      },
      colors: {
        DEFAULT: '#000853',
        secondary: '#898DA9',
        active: '#761BE4',
      },
      backgroundColor: {
        DEFAULT: '#761BE4',
        inactive: '#CBB6E5',
        hover: '#6A19CD',
        iconHover: '#ED4545',
      },
      content: {
        numberBubble: 'url("./src/assets/number-bubble.svg")',
      },
      borderRadius: {
        DEFAULT: '8px',
      },
    },
  },
  safelist: [{ pattern: /col-span-([12345])/ }],
  plugins: [],
};
