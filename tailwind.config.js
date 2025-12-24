/** @type {import('tailwindcss').Config} */

// Helper function to convert hex to RGB
function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result
    ? `${parseInt(result[1], 16)} ${parseInt(result[2], 16)} ${parseInt(result[3], 16)}`
    : null
}

// Brand colors from Heart @ Home logo
const colors = {
  background: '#FDFDFC',
  primary: '#59A5AE',
  'primary-dark': '#4A8B93',
  accent: '#DB6435',
  'accent-light': '#E8825A',
  secondary: '#D7AF6E',
  'secondary-light': '#E5C48F',
  text: '#322918',
  muted: '#8F8A6F',
  deep: '#38524B',
}

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand colors with opacity support
        background: colors.background,
        primary: {
          DEFAULT: colors.primary,
          dark: colors['primary-dark'],
        },
        accent: {
          DEFAULT: colors.accent,
          light: colors['accent-light'],
        },
        secondary: {
          DEFAULT: colors.secondary,
          light: colors['secondary-light'],
        },
        text: {
          DEFAULT: colors.text,
          muted: colors.muted,
        },
        deep: colors.deep,
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      fontSize: {
        base: ['1.125rem', { lineHeight: '1.75' }], // 18px base
        lg: ['1.25rem', { lineHeight: '1.75' }],
        xl: ['1.5rem', { lineHeight: '1.4' }],
        '2xl': ['1.875rem', { lineHeight: '1.3' }],
        '3xl': ['2.25rem', { lineHeight: '1.25' }],
        '4xl': ['3rem', { lineHeight: '1.15' }],
        '5xl': ['3.75rem', { lineHeight: '1.1' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(50, 41, 24, 0.08), 0 4px 6px -4px rgba(50, 41, 24, 0.05)',
        'card': '0 4px 20px -5px rgba(50, 41, 24, 0.1), 0 8px 16px -8px rgba(50, 41, 24, 0.06)',
        'elevated': '0 10px 40px -10px rgba(50, 41, 24, 0.15), 0 4px 16px -4px rgba(50, 41, 24, 0.08)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'scale-in': 'scaleIn 0.3s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
}
