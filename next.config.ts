import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compiler: {
    styledComponents: true,
  },
  output: "export",
  images: {
    unoptimized: true,
  },
  // GitHub Pages에서 서브디렉토리로 배포하는 경우 아래 주석 해제하고 리포지토리 이름으로 변경
  // basePath: '/리포지토리이름',
  // assetPrefix: '/리포지토리이름',
};

export default nextConfig;
