/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        "fade-up": "fade-up 1s ease-in-out",
        "fade-up-delay-1": "fade-up 1s ease-in-out 1s",
      },
      keyframes: {
        "fade-up": {
          "0%": {
            opacity: 0,
            transform: "translateY(100%)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
        "fade-up-delay-1": {
          "0%": {
            opacity: 0,
            transform: "translateY(100%)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
      },
      boxShadow: {
        custom: "10px 10px 10px rgba(0, 0, 0, 0.5)",
      },
      colors: {

        secondary: {
          '50': '#faf7ec',
          '100': '#f4edcd',
          '200': '#ead99e',
          '300': '#debe66',
          '400': '#d3a53c',
          '500': '#cd9631',
          '600': '#a87026',
          '700': '#875221',
          '800': '#714322',
          '900': '#613922',
          '950': '#381d10',
      },
      primary: {
          '50': '#f1f5fc',
          '100': '#e5eefa',
          '200': '#d0def5',
          '300': '#b2c8ef',
          '400': '#93aae6',
          '500': '#798ddb',
          '600': '#5f6dcc',
          '700': '#4f5ab3',
          '800': '#1a1d31',
      },
      
      },
      screens: {
        smm: "400px",
        "2smm": "520px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
  },
  plugins: [],
};
