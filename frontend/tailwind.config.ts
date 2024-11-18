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
        'rcc-deep-blue': "var(--rcc-deep-blue)",
        'rcc-light-blue': 'var(--rcc-light-blue)',
        'rcc-light-green': 'var(--rcc-light-green)',
        'rcc-dark-red': 'var(--rcc-dark-red)',
        'rcc-light-gray': 'var(--rcc-light-gray)',
        'rcc-turquoise-blue': 'var(--rcc-turquoise-blue)',
        'rcc-vibrant-orange': 'var(--rcc-vibrant-orange)',
        'rcc-dark-green': 'var(--rcc-dark-green)'
      },
    },
  },
  plugins: [],
} satisfies Config;
