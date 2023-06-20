
const { fontFamily } = require('tailwindcss/defaultTheme');


module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        archidaught: ['var(--archidaught-font)', ...fontFamily.sans],
        bouwlbyOneSC: ['var(--bouwlbyOneSC-font)', ...fontFamily.sans],
        inter: ['var(--interSans-font)', ...fontFamily.sans],
        satoshi: ['var(--satoshi-font)', 'ui-serif', 'Georgia'],
      },
  
      colors: {
        'primary-orange': '#FF5722',
      }
    },
  },
  plugins: [require("@tailwindcss/forms")],
}

