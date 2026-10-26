import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb', // HCMUTE primary blue
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
          950: '#172554',
        },
        law: {
          gold: '#f59e0b',
          parchment: '#fefce8',
          citation: '#0284c7',
        },
      },
      keyframes: {
        pulseHighlight: {
          '0%': { 
            backgroundColor: 'rgba(254, 240, 138, 0.9)',
            boxShadow: '0 0 0 3px rgba(245, 158, 11, 0.4)'
          },
          '50%': { 
            backgroundColor: 'rgba(254, 240, 138, 0.5)',
            boxShadow: '0 0 0 1px rgba(245, 158, 11, 0.2)'
          },
          '100%': { 
            backgroundColor: 'transparent',
            boxShadow: 'none'
          },
        },
      },
      animation: {
        'pulse-highlight': 'pulseHighlight 2.5s ease-out forwards',
      },
    },
  },
  plugins: [
    typography,
  ],
};
