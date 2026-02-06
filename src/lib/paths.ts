// Vercel 배포: 루트 경로 사용 (basePath 없음)
export const basePath = "";

// 정적 리소스 경로 헬퍼 (절대 경로/URL은 그대로, 나머지는 앞에 / 붙여 반환)
export function getAssetPath(path: string): string {
  if (path.startsWith("http://") || path.startsWith("https://") || path.startsWith("//")) {
    return path;
  }
  return path.startsWith("/") ? path : `/${path}`;
}

// 이미지 경로용 별칭 (하위 호환성)
export const getImagePath = getAssetPath;
