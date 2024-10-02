/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens:{
        xs: "400px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1220px",
        "2xl": "1440px",
        "3xl": "1700px",
      },


      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
      },


      colors: {
        white:
          {
            DEFAULT:"#fff",    /* bg-black */
            blueish: "#D0DFFF" /*white-blueish*/
          },
        black:{
          DEFAULT:"#000",
          100: "#0D1117",
          200: "#161B22",
          300: "#1F2428",
          400: "#242C38",
        }
      },


      backgroundImage: {
        banner: "url('/jsm_resources_banner.svg')",
      },


    },
  },
  plugins: [],
};
