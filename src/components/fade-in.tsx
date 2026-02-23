"use client";

import type React from "react";

import { useEffect, useState } from "react";
import styled from "styled-components";

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  yOffset?: number;
}

export function FadeIn({
  children,
  delay = 0,
  duration = 400,
  yOffset = 24,
}: FadeInProps) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const t = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(t);
  }, []);

  return (
    <Wrap
      $mounted={mounted}
      $delay={delay}
      $duration={duration}
      $yOffset={yOffset}
    >
      {children}
    </Wrap>
  );
}

const Wrap = styled.div<{
  $mounted: boolean;
  $delay: number;
  $duration: number;
  $yOffset: number;
}>`
  opacity: 0;
  transform: translateY(${(p) => p.$yOffset}px);
  transition: opacity ${(p) => p.$duration}ms ease-out,
    transform ${(p) => p.$duration}ms ease-out;
  transition-delay: ${(p) => p.$delay}ms;

  ${(p) =>
    p.$mounted &&
    `
    opacity: 1;
    transform: translateY(0);
  `}

  @media (prefers-reduced-motion: reduce) {
    transition: none;
    transform: none;
    opacity: 1;
  }
`;
