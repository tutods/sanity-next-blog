import type { Config } from 'tailwindcss';

// eslint-disable-next-line @typescript-eslint/no-restricted-imports
import { colors, fonts, shadows, spacing } from './theme';

export default {
  content: ['./src/**/*.{tsx,jsx}', './public/*.html'],
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
