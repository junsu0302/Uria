import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
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
      xs: [
        "12px",
        {
          lineHeight: "16px",
          letterSpacing: "0",
          fontWeight: "400",
        },
      ],
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
      colors: {
        black: {
          50: "rgb(80, 80, 80)",
          100: "rgb(72, 72, 72)",
          200: "rgb(64, 64, 64)",
          300: "rgb(56, 56, 56)",
          400: "rgb(48, 48, 48)",
          500: "rgb(40, 40, 40)",
          600: "rgb(32, 32, 32)",
          700: "rgb(24, 24, 24)",
          800: "rgb(16, 16, 16)",
          900: "rgb(8, 8, 8)",
          950: "rgb(0, 0, 0)",
        },
        gray: {
          50: "rgb(248, 244, 255)",
          100: "rgb(216, 212, 224)",
          200: "rgb(184, 180, 192)",
          300: "rgb(152, 148, 160)",
          400: "rgb(120, 116, 128)",
          500: "rgb(88, 84, 96)",
          600: "rgb(72, 68, 80)",
          700: "rgb(56, 52, 64)",
          800: "rgb(40, 36, 48)",
          900: "rgb(24, 20, 32)",
          950: "rgb(8, 4, 16)",
          dark: {
            50: "rgb(104, 100, 112)",
            100: "rgb(96, 92, 104)",
            200: "rgb(88, 84, 96)",
            300: "rgb(80, 76, 88)",
            400: "rgb(72, 68, 80)",
            500: "rgb(64, 60, 72)",
            600: "rgb(56, 52, 64)",
            700: "rgb(48, 44, 56)",
            800: "rgb(40, 36, 48)",
            900: "rgb(32, 28, 40)",
            950: "rgb(24, 20, 32)",
          },
          light: {
            50: "rgb(168, 164, 176)",
            100: "rgb(176, 172,184)",
            200: "rgb(184, 180, 192)",
            300: "rgb(192, 188, 200)",
            400: "rgb(200, 196, 208)",
            500: "rgb(208, 204, 216)",
            600: "rgb(216, 212, 224)",
            700: "rgb(224, 220, 232)",
            800: "rgb(232, 228, 240)",
            900: "rgb(240, 236, 248)",
            950: "rgb(248, 244, 255)",
          },
        },
        white: {
          50: "rgb(175, 175, 175)",
          100: "rgb(183, 183, 183)",
          200: "rgb(191, 191, 191)",
          300: "rgb(199, 199, 199)",
          400: "rgb(207, 207, 207)",
          500: "rgb(215, 215, 215)",
          600: "rgb(223, 223, 233)",
          700: "rgb(231, 231, 231)",
          800: "rgb(239, 239, 239)",
          900: "rgb(247, 247, 247)",
          950: "rgb(255, 255, 255)",
        },
        deepPurple: {
          50: "rgb(249, 246, 254)", // HSL(260, 80, 98)
          100: "rgb(216, 200, 249)", // HSL(260, 80, 88)
          200: "rgb(184, 154, 244)", // HSL(260, 80, 78)
          300: "rgb(152, 108, 239)", // HSL(260, 80, 68)
          400: "rgb(119, 62, 234)", // HSL(260, 80, 58)
          500: "rgb(90, 24, 220)", // HSL(260, 80, 48)
          600: "rgb(71, 19, 174)", // HSL(260, 80, 38)
          700: "rgb(52, 14, 129)", // HSL(260, 80, 28)
          800: "rgb(4, 9, 83)", // HSL(260, 80, 18)
          900: "rgb(15, 4, 37)", // HSL(260, 80, 8)
          950: "rgb(6, 2, 14)", // HSL(260, 80, 3)
        },
        deepViolet: {
          50: "rgb(253, 246, 254)", // HSL(290, 80, 98)
          100: "rgb(241, 200, 249)", // HSL(290, 80, 88)
          200: "rgb(229, 154, 244)", // HSL(290, 80, 78)
          300: "rgb(217, 108, 239)", // HSL(290, 80, 68)
          400: "rgb(205, 62, 234)", // HSL(290, 80, 58)
          500: "rgb(188, 24, 220)", // HSL(290, 80, 48)
          600: "rgb(149, 19, 174)", // HSL(290, 80, 38)
          700: "rgb(109, 14, 129)", // HSL(290, 80, 28)
          800: "rgb(70, 9, 83)", // HSL(290, 80, 18)
          900: "rgb(31, 4, 37)", // HSL(290, 80, 8)
          950: "rgb(12, 2, 14)", // HSL(290, 80, 3)
        },
        deepBlue: {
          50: "rgb(246, 249, 254)", // HSL(220, 80, 98)
          100: "rgb(200, 216, 249)", // HSL(220, 80, 88)
          200: "rgb(154, 184, 244)", // HSL(220, 80, 78)
          300: "rgb(108, 152, 239)", // HSL(220, 80, 68)
          400: "rgb(62, 119, 234)", // HSL(220, 80, 58)
          500: "rgb(24, 90, 220)", // HSL(220, 80, 48)
          600: "rgb(19, 71, 174)", // HSL(220, 80, 38)
          700: "rgb(14, 52, 129)", // HSL(220, 80, 28)
          800: "rgb(9, 34, 83)", // HSL(220, 80, 18)
          900: "rgb(4, 15, 37)", // HSL(220, 80, 8)
          950: "rgb(2, 6, 14)", // HSL(220, 80, 3)
        },
        deepRed: {
          50: "rgb(254, 246, 249)", // HSL(340, 80, 98)
          100: "rgb(249, 200, 216)", // HSL(340, 80, 88)
          200: "rgb(244, 154, 184)", // HSL(340, 80, 78)
          300: "rgb(239, 108, 152)", // HSL(340, 80, 68)
          400: "rgb(234, 62, 119)", // HSL(340, 80, 58)
          500: "rgb(220, 24, 90)", // HSL(340, 80, 48)
          600: "rgb(174, 19, 71)", // HSL(340, 80, 38)
          700: "rgb(129, 14, 52)", // HSL(340, 80, 28)
          800: "rgb(83, 9, 34)", // HSL(340, 80, 18)
          900: "rgb(37, 4, 15)", // HSL(340, 80, 8)
          950: "rgb(14, 2, 6)", // HSL(340, 80, 3)
        },
        deepGreen: {
          50: "rgb(246, 254, 253)", // HSL(170, 80, 98)
          100: "rgb(200, 249, 241)", // HSL(170, 80, 88)
          200: "rgb(154, 244, 229)", // HSL(170, 80, 78)
          300: "rgb(108, 239, 217)", // HSL(170, 80, 68)
          400: "rgb(62, 234, 205)", // HSL(170, 80, 58)
          500: "rgb(24, 220, 188)", // HSL(170, 80, 48)
          600: "rgb(19, 174, 149)", // HSL(170, 80, 38)
          700: "rgb(14, 129, 109)", // HSL(170, 80, 28)
          800: "rgb(9, 83, 70)", // HSL(170, 80, 18)
          900: "rgb(4, 37, 31)", // HSL(170, 80, 8)
          950: "rgb(2,14,12)", // HSL(170, 80, 3)
        },
        softPurple: {
          50: "rgb(249, 247, 252)", // HSL(260, 50, 98)
          100: "rgb(219, 209, 240)", // HSL(260, 50, 88)
          200: "rgb(190, 171, 227)", // HSL(260, 50, 78)
          300: "rgb(160, 133, 214)", // HSL(260, 50, 68)
          400: "rgb(130, 94, 201)", // HSL(260, 50, 58)
          500: "rgb(102, 61, 184)", // HSL(260, 50, 48)
          600: "rgb(81, 48, 145)", // HSL(260, 50, 38)
          700: "rgb(59, 36, 107)", // HSL(260, 50, 28)
          800: "rgb(38, 23, 69)", // HSL(260, 50, 18)
          900: "rgb(17, 10, 31)", // HSL(260, 50, 8)
          950: "rgb(6, 4, 11)", // HSL(260, 50, 3)
        },
        softViolet: {
          50: "rgb(252, 247, 252)", // HSL(290, 50, 98)
          100: "rgb(235, 209, 240)", // HSL(290, 50, 88)
          200: "rgb(218, 171, 227)", // HSL(290, 50, 78)
          300: "rgb(201, 133, 214)", // HSL(290, 50, 68)
          400: "rgb(184, 94, 201)", // HSL(290, 50, 58)
          500: "rgb(163, 61, 184)", // HSL(290, 50, 48)
          600: "rgb(129, 48, 145)", // HSL(290, 50, 38)
          700: "rgb(95, 36, 107)", // HSL(290, 50, 28)
          800: "rgb(61, 23, 69)", // HSL(290, 50, 18)
          900: "rgb(27, 10, 31)", // HSL(290, 50, 8)
          950: "rgb(10, 4, 11)", // HSL(290, 50, 3)
        },
        softBlue: {
          50: "rgb(247, 249, 252)", // HSL(220, 50, 98)
          100: "rgb(209, 219, 240)", // HSL(220, 50, 88)
          200: "rgb(171, 190, 227)", // HSL(220, 50, 78)
          300: "rgb(133, 160, 214)", // HSL(220, 50, 68)
          400: "rgb(94, 130, 201)", // HSL(220, 50, 58)
          500: "rgb(61, 102, 184)", // HSL(220, 50, 48)
          600: "rgb(48, 81, 145)", // HSL(220, 50, 38)
          700: "rgb(36, 60, 107)", // HSL(220, 50, 28)
          800: "rgb(23, 38, 69)", // HSL(220, 50, 18)
          900: "rgb(10, 17, 31)", // HSL(220, 50, 8)
          950: "rgb(4, 6, 11)", // HSL(220, 50, 3)
        },
        softRed: {
          50: "rgb(252, 247, 249)", // HSL(340, 50, 98)
          100: "rgb(240, 209, 219)", // HSL(340, 50, 88)
          200: "rgb(227, 171, 190)", // HSL(340, 50, 78)
          300: "rgb(214, 133, 160)", // HSL(340, 50, 68)
          400: "rgb(201, 94, 130)", // HSL(340, 50, 58)
          500: "rgb(184, 61, 102)", // HSL(340, 50, 48)
          600: "rgb(145, 48, 81)", // HSL(340, 50, 38)
          700: "rgb(107, 36, 59)", // HSL(340, 50, 28)
          800: "rgb(69, 23, 38)", // HSL(340, 50, 18)
          900: "rgb(31, 10, 17)", // HSL(340, 50, 8)
          950: "rgb(11, 4, 6)", // HSL(340, 50, 3)
        },
        softGreen: {
          50: "rgb(247, 252, 252)", // HSL(170, 50, 98)
          100: "rgb(209, 240, 235)", // HSL(170, 50, 88)
          200: "rgb(171, 227, 218)", // HSL(170, 50, 78)
          300: "rgb(133, 214, 201)", // HSL(170, 50, 68)
          400: "rgb(94, 201, 184)", // HSL(170, 50, 58)
          500: "rgb(61, 184, 163)", // HSL(170, 50, 48)
          600: "rgb(48, 145, 129)", // HSL(170, 50, 38)
          700: "rgb(36, 107, 95)", // HSL(170, 50, 28)
          800: "rgb(23, 69, 61)", // HSL(170, 50, 18)
          900: "rgb(10, 31, 27)", // HSL(170, 50, 8)
          950: "rgb(4, 11, 10)", // HSL(170, 50, 3)
        },
        lightPurple: {
          50: "rgb(249, 248, 251)", // HSL(260, 30, 98)
          100: "rgb(221, 215, 234)", // HSL(260, 30, 88)
          200: "rgb(193, 182, 216)", // HSL(260, 30, 78)
          300: "rgb(165, 149, 198)", // HSL(260, 30, 68)
          400: "rgb(137, 116, 180)", // HSL(260, 30, 58)
          500: "rgb(110, 86, 159)", // HSL(260, 30, 48)
          600: "rgb(87, 68, 126)", // HSL(260, 30, 38)
          700: "rgb(64, 50, 93)", // HSL(260, 30, 28)
          800: "rgb(41, 32, 60)", // HSL(260, 30, 18)
          900: "rgb(18, 14, 27)", // HSL(260, 30, 8)
          950: "rgb(7, 5, 10)", // HSL(260, 30, 3)
        },
        lightViolet: {
          50: "rgb(251, 248, 251)", // HSL(290, 30, 98)
          100: "rgb(231, 215, 234)", // HSL(290, 30, 88)
          200: "rgb(210, 182, 216)", // HSL(290, 30, 78)
          300: "rgb(190, 149, 198)", // HSL(290, 30, 68)
          400: "rgb(169, 116, 180)", // HSL(290, 30, 58)
          500: "rgb(147, 86, 159)", // HSL(290, 30, 48)
          600: "rgb(116, 68, 126)", // HSL(290, 30, 38)
          700: "rgb(86, 50, 93)", // HSL(290, 30, 28)
          800: "rgb(55, 32, 60)", // HSL(290, 30, 18)
          900: "rgb(24, 14, 27)", // HSL(290, 30, 8)
          950: "rgb(9, 5, 10)", // HSL(290, 30, 3)
        },
        lightBlue: {
          50: "rgb(248, 249, 251)", // HSL(220, 30, 98)
          100: "rgb(215, 221, 234)", // HSL(220, 30, 88)
          200: "rgb(182, 193, 216)", // HSL(220, 30, 78)
          300: "rgb(149, 165, 198)", // HSL(220, 30, 68)
          400: "rgb(116, 137, 180)", // HSL(220, 30, 58)
          500: "rgb(86, 110, 159)", // HSL(220, 30, 48)
          600: "rgb(68, 87, 126)", // HSL(220, 30, 38)
          700: "rgb(50, 64, 93)", // HSL(220, 30, 28)
          800: "rgb(32, 41, 60)", // HSL(220, 30, 18)
          900: "rgb(14, 18, 27)", // HSL(220, 30, 8)
          950: "rgb(5, 7, 10)", // HSL(220, 30, 3)
        },
        lightRed: {
          50: "rgb(251, 248, 249)", // HSL(340, 30, 98)
          100: "rgb(234, 215, 221)", // HSL(340, 30, 88)
          200: "rgb(216, 182, 193)", // HSL(340, 30, 78)
          300: "rgb(198, 149, 165)", // HSL(340, 30, 68)
          400: "rgb(180, 116, 137)", // HSL(340, 30, 58)
          500: "rgb(159, 86, 110)", // HSL(340, 30, 48)
          600: "rgb(126, 68, 87)", // HSL(340, 30, 38)
          700: "rgb(93, 50, 64)", // HSL(340, 30, 28)
          800: "rgb(60, 32, 41)", // HSL(340, 30, 18)
          900: "rgb(27, 14, 18)", // HSL(340, 30, 8)
          950: "rgb(10, 5, 7)", // HSL(340, 30, 3)
        },
        lightGreen: {
          50: "rgb(248, 251, 251)", // HSL(170, 30, 98)
          100: "rgb(215, 234, 231)", // HSL(170, 30, 88)
          200: "rgb(182, 216, 210)", // HSL(170, 30, 78)
          300: "rgb(149, 198, 190)", // HSL(170, 30, 68)
          400: "rgb(116, 180, 169)", // HSL(170, 30, 58)
          500: "rgb(86, 159, 147)", // HSL(170, 30, 48)
          600: "rgb(68, 126, 116)", // HSL(170, 30, 38)
          700: "rgb(50, 93, 86)", // HSL(170, 30, 28)
          800: "rgb(32, 60, 55)", // HSL(170, 30, 18)
          900: "rgb(14, 27, 24)", // HSL(170, 30, 8)
          950: "rgb(5, 10, 9)", // HSL(170, 30, 3)
        },
      },
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
