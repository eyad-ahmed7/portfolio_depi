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
        background: "#0c0e12",
        surface: {
          50: "#181c24",
          100: "#14171e",
          200: "#101319",
          300: "#0c0e12",
        },
        mineral: {
          light: "#5eead4",
          DEFAULT: "#14b8a6",
          dark: "#0f766e",
          glow: "rgba(20, 184, 166, 0.15)",
        },
        sand: {
          100: "#fdf8ef",
          200: "#faedd7",
          300: "#e9d5b0",
          400: "#d4b584",
          500: "#b9935a",
          dark: "#3d2e1b",
        },
        chalk: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          400: "#94a3b8",
          600: "#475569",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "-apple-system", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      boxShadow: {
        card: "0 4px 20px -2px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.05)",
        "card-hover": "0 10px 30px -5px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(20, 184, 166, 0.25)",
        "image-frame": "0 20px 40px -15px rgba(0, 0, 0, 0.7)",
      },
    },
  },
  plugins: [],
};
export default config;
