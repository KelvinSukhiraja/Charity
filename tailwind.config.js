/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        body: "#38DC93",
        theme: "#299CFF",
        secondary: "#11FF95",
      },
      fontFamily: {
        urbanist: ["'Urbanist'", "sans-serif"],
      },
      borderRadius: {
        large: "85px",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(-70%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
      animation: {
        "marquee-infinite": "marquee 25s linear infinite",
        "marquee-infinite-rev": "marquee2 25s linear infinite",
      },
      dropShadow: {
        "3xl": "14px 21px 14px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
};
