import type { Config } from "tailwindcss";
import type { PluginAPI } from "tailwindcss/types/config";

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
        amberLight: "#FBBF24",
        amberMedium: "#B45309",
        amberDarker: "#78350F",
      },
      textShadow: {
        sm: "1px 1px 2px rgba(0, 0, 0, 0.5)",
        md: "2px 2px 4px rgba(0, 0, 0, 0.5)",
        lg: "4px 4px 6px rgba(0, 0, 0, 0.5)",
        none: "none",
      },
    },
  },
  plugins: [
    function ({ addUtilities, theme }: PluginAPI) {
      const textShadowConfig = theme("textShadow") as Record<string, string>;

      const textShadowUtilities = Object.entries(textShadowConfig).reduce(
        (acc, [key, value]) => {
          acc[`.text-shadow-${key}`] = { textShadow: value };
          return acc;
        },
        {} as Record<string, { textShadow: string }>
      );

      addUtilities(textShadowUtilities);
    },
  ],
} satisfies Config;
