import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        GothamBold: ['GothamBold', 'sans-serif'],
        GothamLight: ['GothamLight', 'sans-serif'],
        GothamMedium: ['GothamMedium', 'sans-serif'],
        GothamBook: ['GothamBook', 'sans-serif'],
      },
      colors: {
        darkBlue: "#14222D",
        lightBlue: "#1D313F",
        newGray: {
          DEFAULT: "#46525E",
          light: "#CBD6DA",
        },
        blue: "#6D859F",
      }
    },
  },
  plugins: [],
};
export default config;
