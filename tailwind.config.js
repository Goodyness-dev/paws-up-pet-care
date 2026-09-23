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
        ivory: {
          DEFAULT: '#F5F0E7',
          light: '#FBF9F5',
          soft: '#E9E0D1',
        },
        forest: {
          DEFAULT: '#243A31',
          dark: '#1B2D26',
          light: '#2E4B40',
          subtle: 'rgba(36, 58, 49, 0.08)',
        },
        sage: {
          DEFAULT: '#A9B5A0',
          light: '#C5CFC0',
        },
        terracotta: {
          DEFAULT: '#C87552',
          hover: '#B36544',
          subtle: 'rgba(200, 117, 82, 0.12)',
        },
        brown: {
          text: '#24211D',
          muted: '#5C554E',
        },
      },
      fontFamily: {
        serif: ['"Fraunces"', 'Georgia', 'serif'],
        sans: ['"Manrope"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'warm-card': '0 4px 20px -2px rgba(36, 33, 29, 0.06), 0 2px 6px -1px rgba(36, 33, 29, 0.03)',
        'warm-raised': '0 20px 45px -8px rgba(36, 33, 29, 0.12), 0 6px 16px -2px rgba(36, 33, 29, 0.06)',
        'forest-glow': '0 0 35px -5px rgba(36, 58, 49, 0.40)',
      },
      animation: {
        'marquee': 'marquee 35s linear infinite',
        'marquee-reverse': 'marquee-reverse 35s linear infinite',
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
      },
    },
  },
  plugins: [],
}
