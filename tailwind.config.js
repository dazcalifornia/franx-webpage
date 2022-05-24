module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    keyframes: {
      wiggle: {
        '0%, 100%': { transform: 'rotate(-3deg)' },
        '50%': { transform: 'rotate(3deg)' },
      }
    },
    screen:{
      'tablet':'640px',
      'labtop': '1021px',
      'desktop':'1280px',
    },
    extend: {
      colors:{
        'main': '#EDE9D7',
        'darkMain':'#202023',
        
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
