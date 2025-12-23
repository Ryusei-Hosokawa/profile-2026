import type { Config } from 'tailwindcss';

export default {
  content: ['./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'base-white': '#f7f2f4',
        'base-black': '#333333',
        'footer-text': '#d8d8d8',
        'nav-text': '#000',
        'value-color': '#c7c7c7cc',
        'glass-color': 'rgba(227, 244, 255, 0.2)',
        'big-text-color': 'hsla(0, 78%, 38%, 0.3)',
        'text-color': '#4c4c4c',
        'footer-color': '#111',
        'glass-card-text': '#e6e6e6',
        'hover-color-red': '#b8414f',
        'value-color-red': '#a2404b',
      },
      fontFamily: {
        'noto-sans': ['"Noto Sans JP"', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
