
import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#081019",
        panel: "#0d1624",
        line: "#1c2c46",
        glow: "#59e1ff",
        glow2: "#8a7dff",
        mint: "#4be1bc",
        danger: "#ff6c8e"
      },
      boxShadow: {
        glass: "0 20px 60px rgba(0, 0, 0, 0.35)",
        glow: "0 0 40px rgba(89, 225, 255, 0.2)"
      },
      backgroundImage: {
        grid: "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" }
        },
        pulseSoft: {
          "0%,100%": { opacity: "0.6", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.05)" }
        },
        drift: {
          "0%": { transform: "translateX(0px) translateY(0px)" },
          "50%": { transform: "translateX(12px) translateY(-8px)" },
          "100%": { transform: "translateX(0px) translateY(0px)" }
        },
        scan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(200%)" }
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        }
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        pulseSoft: "pulseSoft 5s ease-in-out infinite",
        drift: "drift 10s ease-in-out infinite",
        scan: "scan 7s linear infinite",
        fadeUp: "fadeUp 0.7s ease-out both"
      }
    }
  },
  plugins: []
} satisfies Config;
