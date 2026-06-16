/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: '#14171A',
        muted: '#5A6470',
        accent: {
          DEFAULT: '#0F766E',
          hover: '#0C5C57',
          tint: '#E6F2F1',
        },
        hairline: '#E4E6E3',
        surface: '#FAFAF8',
        card: '#FFFFFF',
      },
      fontFamily: {
        heading: ['var(--font-heading)', 'Georgia', 'serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        sm: '8px',
        md: '14px',
      },
      boxShadow: {
        rest: '0 1px 3px 0 rgba(20,23,26,0.06), 0 1px 2px -1px rgba(20,23,26,0.04)',
        hover: '0 4px 12px 0 rgba(20,23,26,0.10), 0 2px 4px -1px rgba(20,23,26,0.06)',
      },
      spacing: {
        section: '7rem',
        'section-sm': '4rem',
      },
    },
  },
  plugins: [],
}
