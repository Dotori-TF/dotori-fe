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
      colors: {
        "color-background-button-primary-bold-hover": "#1e293b",
        "color-background-button-primary-bold-enabled": "#334155",
        "color-white": "#FFF",
        "color-slate-200": "#e2e8f0",
        "color-slate-300": "#cbd5e1",
        "color-slate-500": "#64748b",
        "color-slate-600": "#475569",
        "color-slate-700": "#334155",
        "color-slate-900": "#0f172a",
        "color-text-error": "#b91c1c",
        "color-text-subtle": "#94a3b8",
      },
    },
  },
  plugins: [],
};
export default config;
