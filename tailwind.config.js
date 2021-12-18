module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,jsx,ts,tsx,mdx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
    require('@tailwindcss/typography'),
  ],
}
