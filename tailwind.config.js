/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#12304A",
          50: "#F0F4F8",
          100: "#D9E2EC",
          200: "#BCCCDC",
          300: "#9FB3C8",
          400: "#829AB1",
          500: "#627D98",
          600: "#486581",
          700: "#334E68",
          800: "#243B53",
          900: "#12304A",
          950: "#0B1D2D",
        },
        teal: {
          DEFAULT: "#0E9F9A",
          50: "#E6F7F7",
          100: "#C1EFEB",
          200: "#96E5DE",
          300: "#60D7CD",
          400: "#2EC4B6",
          500: "#0E9F9A",
          600: "#0B7F7B",
          700: "#09625F",
          800: "#064644",
          900: "#042D2C",
        },
        success: {
          DEFAULT: "#22A06B",
          light: "#E3F7EE",
          dark: "#17724C",
        },
        warning: {
          DEFAULT: "#D99000",
          light: "#FFF8E6",
          dark: "#A36C00",
        },
        error: {
          DEFAULT: "#D64545",
          light: "#FDEAEA",
          dark: "#A32B2B",
        },
        surface: {
          bg: "#F7F9FB",
          card: "#FFFFFF",
          border: "#E2E8EF",
          muted: "#F0F4F8",
        },
        content: {
          primary: "#172B3A",
          secondary: "#607080",
          tertiary: "#94A3B8",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
      },
      boxShadow: {
        subtle: "0 1px 3px 0 rgba(18, 48, 74, 0.05), 0 1px 2px -1px rgba(18, 48, 74, 0.05)",
        card: "0 4px 6px -1px rgba(18, 48, 74, 0.07), 0 2px 4px -2px rgba(18, 48, 74, 0.05)",
        elevated: "0 10px 15px -3px rgba(18, 48, 74, 0.08), 0 4px 6px -4px rgba(18, 48, 74, 0.04)",
      },
    },
  },
  plugins: [],
};
