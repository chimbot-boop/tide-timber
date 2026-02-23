import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ember: "#C45A2A",
        "ember-dark": "#A34820",
        driftwood: "#6B4E37",
        sand: "#F5EFE0",
        tide: "#1A3A4A",
        "tide-deep": "#0F2533",
        stone: "#4A4A52",
        "sea-mist": "#E8F2F5",
        seafoam: "#5BA8A0",
        cream: "#FDFAF4",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
