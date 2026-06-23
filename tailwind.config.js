/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        slate: {
          50: '#f8f9fb',
          100: '#f0f2f5',
          200: '#e2e6ec',
          300: '#cdd3dc',
          400: '#a8b0bd',
          500: '#8490a0',
          600: '#5c6778',
          700: '#3d4756',
          800: '#242b36',
          900: '#121820',
          950: '#0a0d12',
        },
        accent: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        navy: {
          DEFAULT: '#1e3a8a',
          50: '#eff6ff',
          100: '#dbeafe',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#172554',
        },
      },
      boxShadow: {
        soft: '0 1px 3px rgba(18, 24, 32, 0.04), 0 8px 24px rgba(18, 24, 32, 0.06)',
        card: '0 1px 2px rgba(18, 24, 32, 0.05), 0 4px 16px rgba(61, 71, 86, 0.08)',
        navy: '0 4px 14px rgba(37, 99, 235, 0.22)',
      },
      backgroundImage: {
        'metal-sheen':
          'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(240,242,245,0.9) 40%, rgba(226,230,236,0.85) 100%)',
        'metal-panel': 'linear-gradient(180deg, #ffffff 0%, #f4f6f8 100%)',
        'hero-glow': 'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(37, 99, 235, 0.12), transparent 65%)',
      },
    },
  },
  plugins: [],
};
