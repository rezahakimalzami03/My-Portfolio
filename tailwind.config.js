module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    fontFamily: {
      display: ['"Bricolage Grotesque"', 'system-ui', 'sans-serif'],
      sans: ['"Public Sans"', 'system-ui', 'sans-serif'],
    },
    extend: {
      colors: {
        paper: '#F2F6F5',
        ink: '#0D2829',
        muted: '#4A6564',
        line: '#C9D8D5',
        teal: { DEFAULT: '#0B6E66', dark: '#08524C' },
        signal: '#C8283A',
      },
    },
  },
  plugins: [],
};
