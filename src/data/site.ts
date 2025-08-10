export const about = {
  name: "이승원",
  role: "Flutter & React Developer",
  bio: "Flutter와 React를 중심으로 빠른 UX와 견고한 구조를 설계하는 프론트엔드 개발자입니다.\n항상 열정적으로 임하며, 어떤 도전에도 긍정적인 태도로 임합니다.",
  email: "sam98528@naver.com",
  links: {
    github: "https://github.com/your-id",
    linkedin: "https://linkedin.com/in/your-id",
    resume: "/resume.pdf",
  },
  avatar: "/seungwon_image.png",
};

export const skills = [
  { name: "Flutter", level: "Advanced" },
  { name: "Dart", level: "Advanced" },
  { name: "React", level: "Advanced" },
  { name: "Next.js", level: "Intermediate" },
  { name: "TypeScript", level: "Intermediate" },
  { name: "JavaScript", level: "Beginner" },
] as const;

export const experience = [
  {
    company: "Sface",
    role: "Flutter Developer",
    period: "2024.10 — 2025.08",
    bullets: [
      "Built Reels feed with LRU controller & jank-free scrolling",
      "Implemented media upload pipeline with native encoding",
      "Reduced initial play latency from 1.2s to 0.5s",
    ],
  },
  {
    company: "Freelance",
    role: "Fullstack Dev (Next.js + Nest.js)",
    period: "2023.06 — 2024.09",
    bullets: [
      "Designed REST APIs and admin dashboard",
      "Optimized image & page load with caching and ISR",
    ],
  },
] as const;

export const projects = [
  {
    title: "Sface",
    description:
      "Fandom short-form app with anonymous community, realtime metrics, and media pipeline.",
    tags: ["Flutter", "Riverpod", "Media", "FFmpeg"],
    cover: "/p-sface.png",
    links: { live: "https://sface.app", github: "" },
  },
  {
    title: "Admin CMS",
    description:
      "Sanity + Next.js headless CMS with preview and custom blocks.",
    tags: ["Next.js", "Sanity", "Styled-Components"],
    cover: "/p-cms.png",
    links: { live: "#", github: "https://github.com/..." },
  },
  {
    title: "Reels Infra PoC",
    description:
      "Video controller manager with LRU cache and lifecycle-safe disposal.",
    tags: ["Flutter", "Performance"],
    cover: "/p-reels.png",
    links: { live: "#", github: "https://github.com/..." },
  },
] as const;
