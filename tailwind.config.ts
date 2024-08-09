/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'custom-serif': ['Georgia', 'serif'],
        'custom-mono': ['Courier New', 'monospace'],
      },
      colors: {
        primary: '#6c757d', 
        secondary: '#adb5bd',
        accent: '#e9ecef', 
        'custom-background': '#f3f6f4',
      },
      boxShadow: {
        'custom-light': '0 4px 8px rgba(0, 0, 0, 0.1)',
        'custom-heavy': '0 8px 16px rgba(0, 0, 0, 0.2)',
        'custom-xl': 'rgba(0, 0, 0, 0.4) 0px 30px 90px',
      },
      keyframes: {
        bounce: {
          '0%, 20%, 50%, 80%, 100%': { transform: 'translateY(0)' },
          '40%': { transform: 'translateY(-30px)' },
          '60%': { transform: 'translateY(-15px)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        gradient: {
          '0%': { color: '#ff8c00' },
          '50%': { color: '#ff69b4' },
          '100%': { color: '#ff8c00' },
        },
      },
      animation: {
        bounce: 'bounce 2s ease infinite',
        fadeIn: 'fadeIn 1s ease-out',
        gradient: 'gradient 3s linear infinite',
      },
    },
  },
  plugins: [],
}
