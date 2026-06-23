/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        slate: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
        accent: {
          50: '#f0f9f9',
          100: '#e0f2f2',
          200: '#b3e0e0',
          300: '#80cccf',
          400: '#4db8bb',
          500: '#26a4a8',
          600: '#1a8a8e',
          700: '#147073',
          800: '#0d5659',
          900: '#073c3e',
        },
      },
    },
  },
  plugins: [],
};
