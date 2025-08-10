import type { DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
  colors: {
    bg: "#0B0C10",
    surface: "#111218",
    muted: "#8A8F98",
    text: "#E6E7EB",
    primary: "#7C5CFF",
    primaryInk: "#17151F",
    card: "#14151D",
    border: "#232531",
    advanced: "#4ADE80", // 밝은 청록~연두 계열 (고급 → 안정감 + 전문성)
    intermediate: "#FACC15", // 선명한 황금색 (중급 → 주목성 + 성취감)
    beginner: "#F87171", // 부드러운 레드/코랄 (초급 → 경고 아님, 친근함)
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 12,
    lg: 16,
    xl: 24,
    "2xl": 32,
    "3xl": 40,
  },
  radius: {
    sm: 8,
    md: 12,
    lg: 16,
    full: 999,
  },
  shadow: {
    soft: "0 1px 1px rgba(0,0,0,0.25), 0 2px 8px rgba(0,0,0,0.25), 0 8px 24px rgba(0,0,0,0.2)",
    hover:
      "0 2px 2px rgba(0,0,0,0.25), 0 6px 18px rgba(0,0,0,0.28), 0 12px 32px rgba(0,0,0,0.22)",
  },
  breakpoints: {
    xs: 480,
    sm: 768,
    md: 1024,
    lg: 1280,
  },
};

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      bg: string;
      surface: string;
      muted: string;
      text: string;
      primary: string;
      primaryInk: string;
      card: string;
      border: string;
      advanced: string;
      intermediate: string;
      beginner: string;
    };
    spacing: {
      xs: number;
      sm: number;
      md: number;
      lg: number;
      xl: number;
      "2xl": number;
      "3xl": number;
    };
    radius: {
      sm: number;
      md: number;
      lg: number;
      full: number;
    };
    shadow: {
      soft: string;
      hover: string;
    };
    breakpoints: {
      xs: number;
      sm: number;
      md: number;
      lg: number;
    };
  }
}
