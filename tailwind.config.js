/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        // Royal Blue
        primary: {
          lightest: '#4d6594',
          lighter: '#334f85',
          light: '#1a3975',
          DEFAULT: '#002366',
          dark: '#00205c',
          darker: '#001c52',
          darkest: '#001947'
        },
        // Charcoal gray
        secondary: {
          lightest: '#afb5b9',
          lighter: '#868f95',
          light: '#5e6a72',
          DEFAULT: '#36454f',
          dark: '#2b373f',
          darker: '#20292f',
          darkest: '#161c20'
        }
      }
    },
    plugins: []
  }
};
