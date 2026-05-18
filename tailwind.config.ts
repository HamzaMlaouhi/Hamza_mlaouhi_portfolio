import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "var(--color-primary)",
          light: "var(--color-primary-light)",
          dark: "var(--color-primary-dark)",
        },
        accent: "var(--color-accent)",
        "bg-dark": "var(--color-bg-dark)",
        "bg-surface": "var(--color-bg-surface)",
        "bg-light": "var(--color-bg-light)",
        "bg-light-card": "var(--color-bg-light-card)",
        "text-on-dark": "var(--color-text-on-dark)",
        "text-muted": "var(--color-text-muted)",
      },
      fontFamily: {
        sora: ["var(--font-sora)", "system-ui", "sans-serif"],
        mono: ["var(--font-dm-mono)", "ui-monospace", "monospace"],
      },
      backgroundImage: {
        "gradient-hero-cta": "linear-gradient(135deg, #004F90, #00C9FF)",
        "gradient-hero-dark": "linear-gradient(135deg, #0D1B2B, #004F90)",
        "gradient-section": "linear-gradient(135deg, #003D70, #1A73C5)",
        "gradient-accent": "linear-gradient(135deg, #3B82F6, #06B6D4)",
      },
      boxShadow: {
        "phone-glow": "0 0 60px rgba(0, 201, 255, 0.35), 0 0 120px rgba(0, 79, 144, 0.2)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-16px)" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
