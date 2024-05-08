import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: { max: "575px" }, // 모바일 세로
      md: { min: "576px", max: "1024px" }, // 모바일 가로, 태블릿 세로
      lg: { min: "1025px" }, // 태블릿 가로, 데스크탑
    },
    fontSize: {
      sm: [
        "14px",
        {
          lineHeight: "20px",
          letterSpacing: "0",
          fontWeight: "400",
        },
      ],
      md: [
        "16px",
        {
          lineHeight: "24px",
          letterSpacing: "0",
          fontWeight: "400",
        },
      ],
      lg: [
        "18px",
        {
          lineHeight: "28px",
          letterSpacing: "0",
          fontWeight: "400",
        },
      ],
      h1: [
        "48px",
        {
          lineHeight: "72px",
          letterSpacing: "0",
          fontWeight: "700",
        },
      ],
      h2: [
        "40px",
        {
          lineHeight: "60px",
          letterSpacing: "0",
          fontWeight: "700",
        },
      ],
      h3: [
        "32px",
        {
          lineHeight: "48px",
          letterSpacing: "0",
          fontWeight: "700",
        },
      ],
      h4: [
        "28px",
        {
          lineHeight: "42px",
          letterSpacing: "0",
          fontWeight: "700",
        },
      ],
      h5: [
        "24px",
        {
          lineHeight: "36px",
          letterSpacing: "0",
          fontWeight: "700",
        },
      ],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
