import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  /* CSS Reset (modernized) */
  *, *::before, *::after { box-sizing: border-box; }
  * { margin: 0; }
  html, body { height: 100%; }
  img, picture, video, canvas, svg { display: block; max-width: 100%; }
  input, button, textarea, select { font: inherit; }
  p, h1, h2, h3, h4, h5, h6 { overflow-wrap: anywhere; }

  :root {
    --bg: ${({ theme }) => theme.colors.bg};
    --surface: ${({ theme }) => theme.colors.surface};
    --muted: ${({ theme }) => theme.colors.muted};
    --text: ${({ theme }) => theme.colors.text};
    --primary: ${({ theme }) => theme.colors.primary};
    --primary-ink: ${({ theme }) => theme.colors.primaryInk};
    --card: ${({ theme }) => theme.colors.card};
    --border: ${({ theme }) => theme.colors.border};
    --advanced: ${({ theme }) => theme.colors.advanced};
    --intermediate: ${({ theme }) => theme.colors.intermediate};
    --beginner: ${({ theme }) => theme.colors.beginner};
  }

  html {
    scroll-behavior: smooth;
    background: var(--bg);
    color-scheme: dark;
  }

  body {
    background: var(--bg);
    color: var(--text);
    line-height: 1.6;
  }

  main {
    min-height: 100vh;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  /* Focus styles */
  :focus-visible {
    outline: 2px solid var(--primary);
    outline-offset: 2px;
    border-radius: 4px;
  }

  /* Skip link */
  .skip-link {
    position: absolute;
    left: -9999px;
    top: -9999px;
  }
  .skip-link:focus {
    left: 16px;
    top: 16px;
    background: var(--surface);
    color: var(--text);
    padding: 8px 12px;
    border: 1px solid var(--border);
    border-radius: 8px;
    z-index: 9999;
  }

  /* Reduced motion handling */
  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.001ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.001ms !important;
      scroll-behavior: auto !important;
    }
  }
`;
