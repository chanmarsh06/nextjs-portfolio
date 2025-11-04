/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: ['Poppins', 'system-ui', 'sans-serif'],
      serif: ['Poppins', 'serif'],
    },
    extend: {
      spacing: {
        'section': '5rem',
        'section-lg': '8rem',
      },
      fontSize: {
        'display': ['3.5rem', { lineHeight: '1.1', fontWeight: '700' }],
        'heading-xl': ['2.5rem', { lineHeight: '1.2', fontWeight: '700' }],
        'heading-lg': ['2rem', { lineHeight: '1.3', fontWeight: '700' }],
        'heading-md': ['1.5rem', { lineHeight: '1.4', fontWeight: '600' }],
        'body-lg': ['1.125rem', { lineHeight: '1.75' }],
        'body-base': ['1rem', { lineHeight: '1.5' }],
        'body-sm': ['0.875rem', { lineHeight: '1.5' }],
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float-slow 8s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
        'gradient': 'gradient 15s ease infinite',
        'bounce-slow': 'bounce 3s infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'slide-up': 'slide-up 0.6s ease-out',
        'slide-down': 'slide-down 0.6s ease-out',
        'fade-in': 'fade-in 0.6s ease-out',
        'scale-in': 'scale-in 0.5s ease-out',
        'shimmer': 'shimmer 2s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-30px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(99, 102, 241, 0.5)' },
          '100%': { boxShadow: '0 0 40px rgba(99, 102, 241, 0.8)' },
        },
        'glow-pulse': {
          '0%, 100%': { opacity: '0.8', boxShadow: '0 0 20px rgba(99, 102, 241, 0.3)' },
          '50%': { opacity: '1', boxShadow: '0 0 40px rgba(99, 102, 241, 0.6)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'slide-up': {
          from: { transform: 'translateY(20px)', opacity: '0' },
          to: { transform: 'translateY(0)', opacity: '1' },
        },
        'slide-down': {
          from: { transform: 'translateY(-20px)', opacity: '0' },
          to: { transform: 'translateY(0)', opacity: '1' },
        },
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        'scale-in': {
          from: { transform: 'scale(0.95)', opacity: '0' },
          to: { transform: 'scale(1)', opacity: '1' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
      },

      /* ✅ COLORS MERGED HERE */
      colors: {
        primary: {
          DEFAULT: '#667eea',
          50: '#f0f4ff',
          100: '#e6ebff',
          200: '#c7d2fe',
          300: '#a8bafd',
          400: '#8b9efc',
          500: '#667eea',
          600: '#5568d3',
          700: '#4452bc',
          800: '#333ca5',
          900: '#2a2d8e',
        },
        secondary: {
          DEFAULT: '#764ba2',
          50: '#faf7ff',
          100: '#f3ebff',
          200: '#e8d4ff',
          300: '#d4b3ff',
          400: '#b892ff',
          500: '#764ba2',
          600: '#6a4397',
          700: '#5e3b8c',
          800: '#523381',
          900: '#462b76',
        },
        /* ✅ Accent (newly merged - fixes build error) */
        accent: {
          DEFAULT: '#06b6d4',
          50: '#ecfeff',
          100: '#cffafe',
          200: '#a5f3fc',
          300: '#67e8f9',
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
          700: '#0e7490',
          800: '#155e75',
          900: '#164e63',
        },
        light: {
          DEFAULT: '#ffffff',
          secondary: '#f8fafb',
          tertiary: '#f8fafb',
          text: '#334155',
          'text-secondary': '#64748b',
          'text-tertiary': '#94a3b8',
          border: '#e2e8f0',
        },
        dark: {
          DEFAULT: '#0f172a',
          secondary: '#1e293b',
          tertiary: '#334155',
          text: '#f1f5f9',
          'text-secondary': '#94a3b8',
          'text-tertiary': '#64748b',
          border: '#334155',
        },
      },

      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-light': 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
        'gradient-dark': 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
        'gradient-primary': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'gradient-primary-dark': 'linear-gradient(135deg, #8b5cf6 0%, #a855f7 100%)',
        'gradient-secondary': 'linear-gradient(135deg, #764ba2 0%, #667eea 100%)',
        'gradient-secondary-dark': 'linear-gradient(135deg, #a855f7 0%, #8b5cf6 100%)',
        'gradient-mixed': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'gradient-mesh': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      },

      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'soft': '0 2px 8px rgba(0, 0, 0, 0.04)',
        'medium': '0 4px 16px rgba(0, 0, 0, 0.08)',
        'elevated': '0 8px 32px rgba(0, 0, 0, 0.12)',
        'card': '0 4px 20px rgba(0, 0, 0, 0.08)',
        'glow-primary': '0 0 20px rgba(99, 102, 241, 0.3)',
        'glow-secondary': '0 0 20px rgba(236, 72, 153, 0.3)',
        'glow-accent': '0 0 20px rgba(6, 182, 212, 0.3)',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0.0, 0.2, 1)',
        'bounce-in': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      },
      willChange: {
        'transform-opacity': 'transform, opacity',
      },
    },
  },
  plugins: [],
};
