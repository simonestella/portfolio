import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        base: "#fafafa",
        ink: "#1d1d1f",
        appleBlue: "#0071e3",
        metallic: "#8f8f93"
      },
      boxShadow: {
        soft: "0 10px 40px rgba(29,29,31,0.08)"
      }
    }
  },
  plugins: []
};

export default config;
