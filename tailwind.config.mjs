/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        Chewy: ["Chewy", "system-ui", "sans-serif"],
      },
      colors: {
        headerColor: "#f8bbd0",
        kokorumis: "#fff59d",
        fontColor: "rgb(126, 69, 109)",
      },
    },
  },
  plugins: [],
};
