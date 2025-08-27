import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Providers from "@/app/provider";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://seungwon.site"), // 실제 도메인으로 바꾸는 게 좋아
  title: "이승원 — 개발자 포트폴리오",
  description:
    "Flutter & Web 기반 모바일/웹 애플리케이션 개발 경험. 성능 최적화, 실시간 시스템, 클린 아키텍처에 집중합니다.",
  openGraph: {
    title: "이승원 — 개발자 포트폴리오",
    description:
      "Flutter & Web 기반 모바일/웹 애플리케이션 개발 경험. 성능 최적화, 실시간 시스템, 클린 아키텍처에 집중합니다.",
    url: "https://seungwon.site",
    siteName: "이승원 — 포트폴리오",
    images: [
      {
        url: "/page_logo.png", // 배포 환경에서는 절대경로나 full URL 권장
        width: 1200,
        height: 630,
        alt: "이승원 포트폴리오 미리보기",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
  icons: {
    icon: "/page_logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className} data-theme="dark">
        <Providers>
          <a href="#main" className="skip-link">
            {"Skip to content"}
          </a>
          {children}
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}
