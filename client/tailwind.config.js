module.exports = {
   purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
   mode: "jit",
   darkMode: false, // or 'media' or 'class'
   theme: {
      fontFamily: {
         display: ["Open Sans", "sans-serif"],
         body: ["Open Sans", "sans-serif"],
      },
      colors: {
         primary: '#2952e3',
         secondary: '#2546bd',
         white: '#FFF',
         bcg: 'rgb(39, 51, 89, 0.4)',
         send: '#3d4f7c',
         red: '#800000'
      },
      extend: {
         screens: {
            mf: "990px",
         },
         keyframes: {
            "slide-in": {
               "0%": {
                  "-webkit-transform": "translateX(120%)",
                  transform: "translateX(120%)",
               },
               "100%": {
                  "-webkit-transform": "translateX(0%)",
                  transform: "translateX(0%)",
               },
            },
         },
         animation: {
            "slide-in": "slide-in 0.5s ease-out",
         },
      },
   },
   variants: {
      extend: {}
   },
   plugins: [require("@tailwindcss/forms")],
};