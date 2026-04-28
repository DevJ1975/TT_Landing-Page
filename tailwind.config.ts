import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          900: '#070B19',
          800: '#0A0F1E',
          700: '#0F1730',
          600: '#16213F',
          500: '#1E2D54',
        },
        accent: {
          DEFAULT: '#38BDF8',
          deep: '#2563EB',
          glow: '#60A5FA',
        },
        gold: {
          DEFAULT: '#F5B544',
          deep: '#C68B19',
          light: '#FCD995',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        sans: ['var(--font-body)', 'system-ui', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      backgroundImage: {
        'grid-fade':
          'linear-gradient(to bottom, rgba(10,15,30,0) 0%, rgba(10,15,30,1) 100%)',
        'radial-glow':
          'radial-gradient(ellipse at center, rgba(56,189,248,0.15) 0%, rgba(10,15,30,0) 70%)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        float: 'float 6s ease-in-out infinite',
        shimmer: 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
