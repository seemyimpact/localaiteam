const { heroui } = require('@heroui/react');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/react/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary colors
        primary: {
          '50': '#f0f7ff',
          '100': '#e0f1fa',
          '200': '#bde2f5',
          '300': '#9cd3ee',
          '400': '#71b1d1', // Our main accent color
          '500': '#5c9cbd',
          '600': '#4884a7',
          '700': '#3a6e8c',
          '800': '#2f586f',
          '900': '#274759',
          '950': '#0f2634',
        },
        secondary: {
          '50': '#f1fcf9',
          '100': '#d1f6ed',
          '200': '#a4e9d9',
          '300': '#6dd6c0',
          '400': '#44baa3',
          '500': '#2ca088',
          '600': '#1e7f6b',
          '700': '#1a6657',
          '800': '#175046',
          '900': '#15433c',
          '950': '#0a2924',
        },
        accent: {
          '50': '#f0f7ff',
          '100': '#e0f1fa',
          '200': '#bde2f5',
          '300': '#9cd3ee',
          '400': '#71b1d1', // Same as primary-400
          '500': '#5c9cbd',
          '600': '#4884a7',
          '700': '#3a6e8c',
          '800': '#2f586f',
          '900': '#274759',
          '950': '#0f2634',
        },
        // Neutral colors for text and UI elements
        neutral: {
          50: '#ffffff',  // Pure white background
          100: '#fafafa', // Very light gray/white
          200: '#f5f5f5', // Light gray/white
          300: '#e5e5e5', // Light gray
          400: '#d4d4d4', // Medium gray
          500: '#737373', // Gray for text
          600: '#525252', // Darker gray for text
          700: '#404040', // Dark gray for text
          800: '#262626', // Very dark gray for text
          900: '#171717', // Near black
          950: '#0a0a0a', // Almost black
        }
      },
      fontFamily: {
        sans: ['Roboto', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        heading: ['Roboto', 'ui-sans-serif', 'system-ui'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      fontSize: {
        'display-1': ['4.5rem', { lineHeight: '1.1', fontWeight: '700' }],
        'display-2': ['3.75rem', { lineHeight: '1.1', fontWeight: '700' }],
        'heading-1': ['3rem', { lineHeight: '1.2', fontWeight: '700' }],
        'heading-2': ['2.5rem', { lineHeight: '1.2', fontWeight: '700' }],
        'heading-3': ['2rem', { lineHeight: '1.2', fontWeight: '600' }],
        'heading-4': ['1.5rem', { lineHeight: '1.2', fontWeight: '600' }],
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0, 0, 0, 0.08)',
        'soft-lg': '0 10px 30px rgba(0, 0, 0, 0.12)',
        'glow': '0 0 20px rgba(0, 102, 255, 0.25)',
        'glow-accent': '0 0 20px rgba(0, 255, 198, 0.25)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'float': 'float 4s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'meteor': 'meteor 5s linear infinite',
        'meteor-effect': 'meteor 5s linear infinite',
        'fadeIn': 'fadeIn 0.3s ease-in-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        meteor: {
          '0%': { transform: 'rotate(215deg) translateX(0)', opacity: 1 },
          '70%': { opacity: 1 },
          '100%': {
            transform: 'rotate(215deg) translateX(-500px)',
            opacity: 0,
          },
        },
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(-10px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
    },
  },
  plugins: [heroui()],
};
