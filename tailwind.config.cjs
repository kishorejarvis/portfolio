module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      boxShadow: {
        soft: '0 24px 80px rgba(99, 102, 241, 0.16)',
      },
      backgroundImage: {
        'hero-glow': 'radial-gradient(circle at top left, rgba(96,165,250,0.22), transparent 35%), radial-gradient(circle at bottom right, rgba(168,85,247,0.18), transparent 28%)',
      },
    },
  },
  plugins: [],
};
