/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
     
        'ipad-pro': {'min':'1366px','max':'1366px'},
        'ipad-prov': {'min':'1024px','max':'1024px'},
        'ipad-v': {'min':'810px','max':'810px'},
        'ipad-h': {'min':'1080px','max':'1080px'},
        'xs': {'min':'360px','max':'360px'},
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 50s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        }
      }
    },
  },
  plugins: [],
}

