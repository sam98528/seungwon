"use client"

import type React from "react"

import { useEffect, useState } from "react"
import styled from "styled-components"

export function FadeIn({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    const t = requestAnimationFrame(() => setMounted(true))
    return () => cancelAnimationFrame(t)
  }, [])
  return <Wrap data-mounted={mounted ? "true" : "false"}>{children}</Wrap>
}

const Wrap = styled.div`
  opacity: 0;
  transform: translateY(6px);
  transition: opacity 300ms ease, transform 300ms ease;

  &[data-mounted="true"] {
    opacity: 1;
    transform: translateY(0);
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
    transform: none;
    opacity: 1;
  }
`
