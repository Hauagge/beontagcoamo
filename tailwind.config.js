/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    './src/pages/**/*.tsx',  
    './src/components/**/*.tsx',  
    ],
theme: {
  screens: {
    'xxsm': '320px',
    'xsm': '480px',
    ...defaultTheme.screens,
  },
  extend: {
  },
},
plugins: [],
}

