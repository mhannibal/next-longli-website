/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'mblue': {
          50: '#A7D1EA',
          100: '#31A2DA',
          200: '#2E80AF'
        },
        'mpink':{
          50: '#F38E92',
          100: '#EE3B62'
        },
        'mgreen':{
          50: '#89CB8E',
          100 : '#40B75B'
        },
        'mpurple':{
          50: '#D893C0',
          100: '#C6509E'
        },
        'morange':{
          50: '#F9A11B',
          100: '#AF5C4A'
        },
        'mbrown':{
          50:'#DB5937',
          100:'#B12C25'
        },
        'myellow':{
          100:'#ffcd36'
        },
        'mfooter': {
          100: '#4F262F'
        }
      },
      fontFamily:{
        'titan': ['var(--font-titan-one)'],
        'noto': ['var(--font-noto-sans-arabic)']
      },
      fontWeight: {
        normal: 300,
        semibold: 600,
      },
    
    },
  },
  plugins: [require("daisyui")],
}