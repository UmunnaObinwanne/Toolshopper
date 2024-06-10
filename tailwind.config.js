/** @type {import('tailwindcss').Config} */
export default {
  content: [
       "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
     './node_modules/@rewind-ui/core/dist/theme/styles/*.js',
  ],
  theme: {
    extend: {
      colors: {
        customBlue: '#94bbe9',
      },
    },
  },
  plugins: [
        require('@tailwindcss/typography'),
    require('tailwind-scrollbar')({ nocompatible: true }),
    require('@tailwindcss/forms')({
      strategy: 'class' // only generate classes
    })
  ],
}

