/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      animation: {
        'slide-bottom-left': 'slide-bottom 2s linear infinite',
        'slide-bottom-middle': 'slide-bottom 2s linear infinite',
        'slide-bottom-right': 'slide-bottom 1.8s linear infinite',
        'slide-bottom-delay': 'slide-bottom-delay 1.5s ease-out',
        'hidden-item': 'hidden-item .3s ease-out'
      },
      keyframes: {
        'slide-bottom': {
          from: {
            opacity: '1',
            transform: 'translateY(-6000px)'
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        'slide-bottom-delay': {
          from: {
            opacity: '1',
            transform: 'translateY(-900px)'
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        'hidden-item': {
          from: {
            opacity: '1'
          },
          to: {
            opacity: '0',
            display: 'none'
          }
        }
      }
    }
  },
  plugins: []
}
