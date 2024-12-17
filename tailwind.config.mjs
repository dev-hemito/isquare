/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        squareMove: {
          '0%': { transform: 'translate(0, 0) rotate(0deg)', opacity: '0.5' },
          '25%': { transform: 'translate(50px, 50px) rotate(90deg)', opacity: '0.7' },
          '50%': { transform: 'translate(-50px, 100px) rotate(180deg)', opacity: '0.6' },
          '75%': { transform: 'translate(50px, -50px) rotate(270deg)', opacity: '0.8' },
          '100%': { transform: 'translate(0, 0) rotate(360deg)', opacity: '0.5' }
        }
      },
      animation: {
        'square-move': 'squareMove infinite alternate ease-in-out'
      }
    }
  },
  plugins: [],
};
