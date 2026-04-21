import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roobert: ["Roobert", "Inter", "system-ui", "sans-serif"],
      },
      colors: {
        main: {
          0:  "#f6faf9",
          80: "#296757",
          90: "#245c4c",
          100: "#0f2b22",
        },
        primary: {
          20:  "#f5f5f5",
          80:  "#7b7b7b",
          90:  "#555555",
          100: "#000000",
        },
      },
      borderRadius: {
        card: "16px",
        feature: "8px",
        btn: "6px",
        icon: "133.333px",
      },
      letterSpacing: {
        tight03: "0.3px",
        tight05: "0.5px",
        wide08: "0.8px",
      },
    },
  },
  plugins: [],
};

export default config;
