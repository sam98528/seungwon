export type Project = {
  title: string;
  description: string;
  tags: string[];
  cover: string;
  links: {
    homePage?: string;
    github?: string;
    youtube?: string;
    appStore?: string;
    playStore?: string;
    detail?: string;
  };
  challenges: string[];
  team: string;
  timeline: string;
  type: "app" | "web";
};

export const about = {
  name: "이승원",
  role: "Flutter & React Developer",
  bio: "Flutter와 React를 중심으로 빠른 UX와 견고한 구조를 설계하는 프론트엔드 개발자입니다.\n항상 열정적으로 임하며, 어떤 도전에도 긍정적인 태도로 임합니다.",
  email: "sam98528@naver.com",
  links: {
    github: "https://github.com/sam98528",
    resume: "/SeungwonLee_Resume.pdf",
  },
  avatar: "/seungwon_image.png",
};

export const skills = [
  { name: "Flutter", level: "Advanced" },
  { name: "Dart", level: "Advanced" },
  { name: "React", level: "Advanced" },
  { name: "Next.js", level: "Intermediate" },
  { name: "TypeScript", level: "Intermediate" },
  { name: "JavaScript", level: "Intermediate" },
  { name: "Swift", level: "Intermediate" },
  { name: "Python", level: "Beginner" },
] as const;

export const background = [
  {
    type: "scholarship",
    title: "성균관대학교 졸업",
    organization: "성균관대학교 소프트웨어학과",
    period: "2016.09 — 2024.02",
    description: "Software Engineering 전공",
    details: [
      "자료구조,알고리즘, 데이터베이스, 네트워크 등 CS 전반 학습",
      "컴퓨터시스템 연구실 학부연구생 역할 수행",
    ],
  },
  {
    type: "experience",
    title: "중국 광저우 유학",
    organization: "Guangzhou",
    period: "2004.03 — 2016.09",
    description: "중국에서 14년간 유학 및 거주",
    details: [
      "중국 로컬학교 및 국제학교 재학 경험으로 중국어와 영어를 꾸준히 활용하며 학습",
      "중국어 및 다문화 환경에서의 적응력 강화",
    ],
  },
] as const;

export const experience = [
  {
    company: "주식회사 파프리카",
    role: "Flutter & Web Frontend Developer",
    period: "2025.03 ~ 현재",
    bullets: [
      "Flutter 기반 모바일 앱 개발 및 유지보수 (Hyundai Live Mod App, Sface)",
      "웹 프론트엔드(React/Next.js) 개발 담당 (BunnyConnect, Stillxxx.live/Stillbonggo.store)",
      "Flutter Riverpod & AutoRoute 아키텍처를 적용하여 안정적이고 확장성 있는 상태 관리 및 라우팅 구현",
      "Socket.IO 기반 실시간 통신 및 데이터 동기화 기능 개발",
      "Stripe, 네이버페이, 카카오페이 등 다중 결제 연동 경험",
      "AWS S3 + CDN을 통한 이미지 업로드 및 최적화 처리",
      "프로젝트 전반의 UI/UX 개선 및 반응형 UI 구축",
    ],
  },
  {
    company: "빅팀아이엔씨",
    role: "Flutter 개발자 (인턴)",
    period: "2024.09 ~ 2025.01",
    bullets: [
      "iOS/Android 앱의 전체 개발 및 배포 사이클을 책임지며 사용자 중심의 모바일 앱 개발 주도",
      "기존 네이티브 앱을 Flutter로 리팩토링하여 유지보수 비용 절감 및 개발 생산성 향상",
      "GetX를 활용한 상태 관리 구조 설계로 안정적이고 일관된 앱 동작 보장",
      "SQFLite 기반의 로컬 데이터베이스 구축으로 오프라인 환경에서도 안정적인 데이터 사용 가능",
      "Workmanager와 Background Fetch를 적용해 주기적 동기화 및 안정적인 백그라운드 작업 환경 구현",
      "Dio와 Retrofit을 활용하여 고성능 API 통신 및 오류 처리 체계 강화",
      "Figma 디자인을 기반으로 직관적이고 사용자 친화적인 UI/UX 컴포넌트 개발",
    ],
  },
  {
    company: "주식회사 구름",
    role: "교육 기획/운영 매니저 (인턴)",
    period: "2022.02 ~ 2022.07",
    bullets: [
      "쿠버네티스 및 AI 자연어 처리 분야의 K-Digital Training 교육 과정 기획 및 운영",
      "동시 최대 200명의 수강생을 대상으로 교육 과정 성공적으로 진행",
      "Notion, GitHub, Clickup 등 협업 도구를 활용하여 교육 자료 관리 및 프로젝트 운영 효율화",
    ],
  },
] as const;

export const projects: Project[] = [
  {
    title: "Hyundai Live Mod App",
    description: "시뮬레이션 장비 제어 및 데이터 시각화",
    tags: ["Flutter", "Socket.IO", "Web"],
    cover: "/project/hyundai.svg",
    links: {
      youtube: "https://www.youtube.com/shorts/gArlgM58TJg",
      detail:
        "https://splashy-earthquake-ec1.notion.site/Hyundai-Live-Mod-App-23ea8a0d7a0d808e9b8dc5b2aad34f10?source=copy_link",
    },
    challenges: [
      "지속적인 기능 추가 요구에 대응하기 위해 모든 화면 요소를 컴포넌트화하여 재사용성과 유지보수성을 확보",
      "시뮬레이션 장비에서 초당 100건 이상의 데이터 스트림을 서버 대신 클라이언트 상태 관리(One Source of Truth)로 처리",
      "Socket.IO 기반 실시간 데이터 송수신 및 UI 최적화로 끊김 없는 장비·시뮬레이션 제어 환경 제공",
    ],
    team: "서버 1명, 앱 개발 1명,\n웹 개발 2명, 언리얼 엔진 3명",
    timeline: "2025.03 ~ 현재",
    type: "app",
  },
  {
    title: "Sface",
    description: "팬덤 전용 이미지 & 숏폼 플랫폼",
    tags: ["Flutter", "Nest.js", "AWS", "FCM"],
    cover: "/project/sface.svg",
    links: {
      homePage: "https://sface.app/",
      appStore:
        "https://apps.apple.com/us/app/%EC%8A%A4%ED%8E%98%EC%9D%B4%EC%8A%A4-sface-%EC%95%84%ED%8B%B0%EC%8A%A4%ED%8A%B8-%EB%B9%84%EA%B3%B5%EC%8B%9D-%EC%A7%81%EC%BA%A0-sns/id6739119853",
      playStore:
        "https://play.google.com/store/apps/details?id=xyz.kiorobo.sface&hl=ko&pli=1",
      detail:
        "https://splashy-earthquake-ec1.notion.site/Sface-23ea8a0d7a0d80abbcace496c5d84a93?source=copy_link",
    },
    challenges: [
      "Flutter Riverpod 기반 상태 관리로 대규모 데이터 처리와 UI 성능 최적화",
      "AutoRoute를 활용해 유연하고 안정적인 라우팅 구조 구현",
      "비디오 플레이어 및 이미지 편집 기능을 포함한 미디어 파이프라인 구축",
      "FCM 연동으로 실시간 알림 및 이벤트 기반 사용자 피드백 제공",
      "반응형 UI와 애니메이션을 통해 팬덤 특화 UX 구현",
    ],
    team: " 앱 개발 1명, 서버 개발 1명,\n웹 개발 1명",
    timeline: "2025.03 ~ 현재",
    type: "app",
  },
  {
    title: "버니커넥트",
    description: "QR 코드와 NFC 태그를 활용한 무인 주문 및 결제 시스템",
    tags: ["React", "NestJS", "Stripe", "Zustand", "TypeScript"],
    cover: "/project/bunny.svg",
    links: {
      homePage: "https://bunnyconn.com/",
      detail:
        "https://splashy-earthquake-ec1.notion.site/BunnyConnect-24ea8a0d7a0d80e3b7add69fa5fe1d51?source=copy_link",
    },
    challenges: [
      "QR/NFC 기반 주문 시스템 구축으로 키오스크 없는 간편 주문 경험 제공",
      "Socket.io를 활용한 실시간 주문 알림 및 데이터 동기화 구현",
      "Stripe와 네이버페이/카카오페이 연동을 통한 다중 결제 수단 지원",
      "AWS S3 + CDN 기반 이미지 업로드 및 최적화된 파일 제공",
      "관리자 대시보드에서 실시간 매출 현황/주문/상품 관리 기능 제공",
    ],
    team: "웹 개발 1명, 풀스택 2명",
    timeline: "2025.07 ~ 현재",
    type: "web",
  },
  {
    title: "Stillxxx.live / Stillbonggo.store",
    description: "칸예 웨스트 공연 티켓팅 및 독점 굿즈 쇼핑몰 플랫폼",
    tags: ["Next.js", "Supabase", "Stripe", "Zustand", "TypeScript"],
    cover: "/project/stillive.svg",
    links: {
      homePage: "https://www.stillbonggo.store/",
      detail:
        "https://splashy-earthquake-ec1.notion.site/stillbonggo-stilllive-23ea8a0d7a0d804498dacbb0dc27a999?source=copy_link",
    },
    challenges: [
      "Next.js App Router와 Styled Components를 활용해 공연 티켓팅과 굿즈 판매 UI를 통합 구현",
      "Supabase 기반으로 DB 관리 및 권한 관리 구축",
      "Stripe와 네이버페이/카카오페이 연동을 통해 결제 플로우 설계",
      "웹훅 기반으로 결제 상태를 자동 업데이트하여 안정적인 주문 처리 지원",
      "QR 코드 생성 기능을 통해 모바일 접근성과 사용자 편의성 강화",
    ],
    team: "웹 개발 1명, 풀스택 2명",
    timeline: "2개월 (2025)",
    type: "web",
  },
];
