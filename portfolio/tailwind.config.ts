import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        amberWhite: "#FEF3C7",
        amberLight:"#FBBF24",
        amberMedium:"#B45309",
        amberDarker:"#78350F",
      },
    },
  },
  plugins: [],
} satisfies Config;
