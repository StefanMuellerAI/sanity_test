import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./sanity/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        weiss: "#ffffff",
        "weltraum-blau": "#040026",
        "cyber-pink": "#e62e74",
        "cyber-gelb": "#f4c20c",
        "cyber-tuerkis": "#2ee6d0",
        "cyber-violett": "#4a2ee6",
        "cyber-orange": "#f35c31",
        "holo-tuerkis": "#a1e6de",
        "holo-violett": "#8893e6",
        "holo-pink": "#e6a1bb",
        "holo-gelb": "#ffe6b3",
        "holo-orange": "#f3baaa",
      },
      fontFamily: {
        heading: ["var(--font-bree-serif)", "Georgia", "serif"],
        body: ["var(--font-montserrat)", "system-ui", "sans-serif"],
        ki: ["var(--font-oxanium)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "cyber-sunrise":
          "linear-gradient(135deg, #e62e74 0%, #f35c31 50%, #f4c20c 100%)",
        "holo-dream":
          "linear-gradient(135deg, #4a2ee6 0%, #8893e6 18%, #e6a1bb 36%, #f3baaa 54%, #ffe6b3 72%, #a1e6de 86%, #2ee6d0 100%)",
      },
      borderRadius: {
        soft: "1rem",
      },
    },
  },
  plugins: [],
};

export default config;
