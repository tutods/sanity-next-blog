import type { Config } from "tailwindcss";
import { colors, spacing, shadows, fonts } from "./theme";

export default {
  content: ["./src/**/*.{tsx,jsx}", "./public/*.html"],
  theme: {
    extend: {
      colors,
      spacing,
      ...fonts,
      ...shadows,
    },
  },
  plugins: [],
} satisfies Config;
