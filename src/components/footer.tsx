"use client"

import styled from "styled-components"
import { Container } from "./container"

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <FooterWrap as="footer" role="contentinfo" aria-label="Footer">
      <Container>
        <Inner>
          <SmallLinks>
            <a href="#about">{"About"}</a>
            <a href="#skills">{"Skills"}</a>
            <a href="#experience">{"Experience"}</a>
            <a href="#projects">{"Projects"}</a>
          </SmallLinks>
          <SmallPrint>
            {"© "}
            {year} {" Seungwon Lee. All rights reserved."}
          </SmallPrint>
        </Inner>
      </Container>
    </FooterWrap>
  )
}

const FooterWrap = styled.div`
  border-top: 1px solid var(--border);
  background: var(--surface);
`

const Inner = styled.div`
  padding-block: 20px;
  display: grid;
  gap: 10px;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    padding-block: 24px;
    grid-auto-flow: column;
    justify-content: space-between;
    align-items: center;
  }
`

const SmallLinks = styled.nav`
  display: inline-flex;
  gap: 12px;
  a {
    color: var(--muted);
    font-size: 13px;
  }
  a:hover,
  a:focus-visible {
    color: var(--text);
  }
`

const SmallPrint = styled.small`
  color: var(--muted);
`
