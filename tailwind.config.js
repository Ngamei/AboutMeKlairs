/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ivory:  '#F7F3EE',
        black:  '#1C2030',
        navy:   '#1C3254',
        accent: '#4A6FA5',
        mist:   '#C8D4E3',
        surface: {
          1: '#EBF0F7',
          2: '#DDE5F0',
          3: '#E3EAF6',
          4: '#EDF1F8',
        },
      },
      fontFamily: {
        serif: ['Georgia', 'Times New Roman', 'serif'],
        sans:  ['Helvetica Neue', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 1px 3px rgba(28,32,48,0.04), 0 8px 24px rgba(28,32,48,0.06)',
      },
    },
  },
  plugins: [],
};
