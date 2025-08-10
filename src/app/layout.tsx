import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Providers from "@/app/providrs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: "Seungwon Lee — Developer Portfolio",
  description:
    "Flutter & Web Developer focused on performant mobile, realtime systems, and clean architecture.",
  openGraph: {
    title: "Seungwon Lee — Developer Portfolio",
    description:
      "Flutter & Web Developer focused on performant mobile, realtime systems, and clean architecture.",
    url: "https://example.com",
    siteName: "Seungwon Lee — Portfolio",
    images: [
      {
        url: "/p-sface.png",
        width: 1200,
        height: 630,
        alt: "Portfolio preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Seungwon Lee — Developer Portfolio",
    description:
      "Flutter & Web Developer focused on performant mobile, realtime systems, and clean architecture.",
    images: ["/p-sface.png"],
  },
  icons: {
    icon: "/generic-app-icon.png",
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
        </Providers>
      </body>
    </html>
  );
}
