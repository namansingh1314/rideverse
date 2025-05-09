/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {  colors: {
      green: {
        50: '#30AF5B',
        90: '#292C27',
      },
      gray: {
        10: '#EEEEEE',
        20: '#A2A2A2',
        30: '#7B7B7B',
        50: '#585858',
        90: '#141414',
      },
      orange: {
        50: '#FF814C',
      },
      blue: {
        70: '#021639',
      },
      yellow: {
        50: '#FEC601',
      },
    },
    backgroundImage: {
      'bg-img-1': "url('/img-1.png')",
      'bg-img-2': "url('/img-2.png')",
      'feature-bg': "url('/feature-bg.png')",
      pattern: "url('/pattern.png')",
      'pattern-2': "url('/pattern-bg.png')",
    },
    screens: {
      xs: '400px',
      '3xl': '1680px',
      '4xl': '2200px',
    },
    maxWidth: {
      '10xl': '1512px',
    },
    borderRadius: {
      '5xl': '40px',
    },
      animation: {
        'car-bounce': 'carMove 10s linear infinite, bounce 1s ease-in-out infinite',
        'road-line': 'roadMove 1s linear infinite',
        'clouds': 'cloudMove 30s linear infinite',
        'customer-move-1': 'fadeAfterCar1 10s linear infinite',
        'customer-move-2': 'fadeAfterCar2 10s linear infinite',
        'customer-move-3': 'fadeAfterCar3 10s linear infinite',
      },
      keyframes: {
        carMove: {
          '0%': { left: '0%' },
          '100%': { left: '100%' },
        },
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        roadMove: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        cloudMove: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        // Customer disappears just AFTER car passes:
        fadeAfterCar1: {
          '0%, 20%': { opacity: 1 },
          '21%, 100%': { opacity: 0 },
        },
        fadeAfterCar2: {
          '0%, 50%': { opacity: 1 },
          '51%, 100%': { opacity: 0 },
        },
        fadeAfterCar3: {
          '0%, 75%': { opacity: 1 },
          '76%, 100%': { opacity: 0 },
        },
      },
    },
  },
  plugins: [],
};
