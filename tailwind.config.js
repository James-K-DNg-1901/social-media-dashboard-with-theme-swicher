/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'Lime-Green': 'hsl(163, 72%, 41%)',
        'Bright-Red': 'hsl(356, 69%, 56%)',
        'Facebook': 'hsl(208, 92%, 53%)',
        'Twitter': 'hsl(203, 89%, 53%)',
        'Instagram-1': 'hsl(37, 97%, 70%)',
        'Instagram-2': 'hsl(329, 70%, 58%)',
        'YouTube': 'hsl(348, 97%, 39%)',
        'buttom-1': 'hsl(210, 78%, 56%)',
        'buttom-2': 'hsl(146, 68%, 55%)',
      },
      screens: {
        'mobile': '375px' 
      },
    },
  },
  plugins: [],
}

