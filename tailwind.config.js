/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#0A0A0A',
          surface: '#141414',
          hover: '#1E1E1E',
        },
        border: {
          DEFAULT: '#252525',
          light: '#2E2E2E',
        },
        text: {
          primary: '#EBEBEB',
          secondary: '#888888',
          muted: '#444444',
        },
        accent: {
          DEFAULT: '#C8FF57',
          dim: '#8FBF2A',
        },
      },
      fontFamily: {
        display: ['Space Grotesk', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      maxWidth: {
        content: '1280px',
      },
    },
  },
  plugins: [],
}
