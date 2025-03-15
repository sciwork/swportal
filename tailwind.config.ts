import typography from "@tailwindcss/typography";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./contents/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  important: false,
  separator: ":",
  theme: {
    extend: {
      fontFamily: {
        yk: ["var(--font-yanone-kaffeesatz)"],
      },
      backgroundColor: {
        "sciwork-footer": "#2D3748",
      },
    },
  },
  plugins: [typography],
} satisfies Config;
