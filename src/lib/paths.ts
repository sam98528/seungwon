// GitHub Pages basePath
export const basePath = "/seungwon";

// 정적 리소스 경로에 basePath를 추가하는 헬퍼 함수
export function getAssetPath(path: string): string {
  // 이미 절대 경로나 외부 URL인 경우 그대로 반환
  if (path.startsWith("http://") || path.startsWith("https://") || path.startsWith("//")) {
    return path;
  }
  // basePath가 이미 포함되어 있는지 확인
  if (path.startsWith(basePath)) {
    return path;
  }
  // basePath 추가
  return `${basePath}${path.startsWith("/") ? path : `/${path}`}`;
}

// 이미지 경로용 별칭 (하위 호환성)
export const getImagePath = getAssetPath;
