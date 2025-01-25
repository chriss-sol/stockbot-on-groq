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
        background: {
          DEFAULT: '#0F172A',
          light: '#1E293B',
        },
        primary: {
          DEFAULT: '#4F46E5',
          light: '#818CF8',
        },
        secondary: {
          DEFAULT: '#2563EB',
          light: '#60A5FA',
        },
      },
    },
  },
  plugins: [],
}