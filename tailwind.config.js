/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        surface: {
          DEFAULT: '#F8F9F7',
          soft: '#EDF1F3',
          raised: '#FDFDFC',
        },
        brand: {
          text: '#25323D',
          muted: '#56636C',
          line: '#D5DDE0',
          border: '#7A8790',
        },
        accent: {
          DEFAULT: '#284E68',
          hover: '#1E3E54',
          light: '#E7EFF4',
          subtle: 'rgba(40, 78, 104, 0.08)',
        },
      },
      fontFamily: {
        sans: ['"Manrope"', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['"Manrope"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'boutique-card': '0 4px 20px -2px rgba(37, 50, 61, 0.05), 0 2px 6px -1px rgba(37, 50, 61, 0.03)',
        'boutique-raised': '0 16px 40px -4px rgba(37, 50, 61, 0.10), 0 6px 16px -2px rgba(37, 50, 61, 0.05)',
        'glow-accent': '0 0 35px -5px rgba(40, 78, 104, 0.40)',
      },
      animation: {
        'marquee': 'marquee 35s linear infinite',
        'marquee-reverse': 'marquee-reverse 35s linear infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 7s ease-in-out 2s infinite',
        'pulse-subtle': 'pulseGlow 3s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.9', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.02)' },
        },
      },
    },
  },
  plugins: [],
}
