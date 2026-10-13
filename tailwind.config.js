/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        void: "#0A0A14",
        surface: "#121224",
        surfaceLight: "#18182E",
        surfaceBorder: "#2A2A4A",
        accent: {
          DEFAULT: "#7B61FF",
          hover: "#6A4EF5",
          glow: "#9B86FF",
          light: "#A78BFA",
          dark: "#5842C3",
        },
        cyanAccent: "#00F5FF",
        emeraldAccent: "#10B981",
        ghost: "#F0EFF4",
        graphite: "#18181B",
        muted: "#94A3B8",
      },
      fontFamily: {
        sans: ['"Sora"', 'sans-serif'],
        serif: ['"Instrument Serif"', 'serif'],
        mono: ['"Fira Code"', 'monospace'],
      },
      boxShadow: {
        'glow-sm': '0 0 20px rgba(123, 97, 255, 0.25)',
        'glow': '0 0 35px rgba(123, 97, 255, 0.35)',
        'glow-lg': '0 0 60px rgba(123, 97, 255, 0.45)',
        'glow-cyan': '0 0 30px rgba(0, 245, 255, 0.3)',
      },
      borderRadius: {
        '2rem': '2rem',
        '2.5rem': '2.5rem',
        '3rem': '3rem',
        '4rem': '4rem',
      },
      animation: {
        'pulse-subtle': 'pulseSubtle 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        pulseSubtle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.85', transform: 'scale(1.02)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
