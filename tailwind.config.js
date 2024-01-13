/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.antlers.html",    
    "./resources/**/*.js",
    "./resources/**/*.vue",
  ],
  theme: {
    screens: {
      'mobile': '0px',
      // => @media (min-width: 640px) { ... }

      'tablet': '768px',
      // => @media (min-width: 1024px) { ... }

      'pc': '1024px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {},
  },
  plugins: [],
}

