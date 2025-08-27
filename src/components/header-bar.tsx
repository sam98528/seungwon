"use client";

import Image from "next/image";
import styled from "styled-components";
import { Mail } from "lucide-react";

type About = {
  name: string;
  role: string;
  email: string;
  links: {
    github?: string;
    linkedin?: string;
    email?: string;
    resume?: string;
  };
};

export function HeaderBar({ about }: { about: About }) {
  return (
    <HeaderWrap role="banner" aria-label="Header">
      <HeaderInner>
        <LeftWrap>
          <Image
            src={"/seungwon_image.png"}
            alt={`${about.name} avatar`}
            width={32}
            height={32}
            priority
            style={{ borderRadius: 999 }}
          />
          <Left>
            <Name>{about.name}</Name>
            <Role>{about.role}</Role>
          </Left>
        </LeftWrap>
        <Right>
          <Nav aria-label="Section navigation">
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("about")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              {"소개"}
            </a>
            <a
              href="#skills"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("skills")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              {"기술 스택"}
            </a>
            <a
              href="#experience"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("experience")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              {"경력"}
            </a>
            <a
              href="#background"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("background")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              {"학력 및 경력"}
            </a>
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              {"프로젝트"}
            </a>
          </Nav>
          <IconButton
            as="a"
            href={about.links.github || "#"}
            aria-label="GitHub profile"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
          >
            <Image src="/github.svg" alt="Github" width={18} height={18} />
          </IconButton>

          <IconButton
            as="a"
            href={`mailto:${about.email}`}
            aria-label="Send email"
            title="Email"
          >
            <Mail aria-hidden="true" size={18} />
          </IconButton>
        </Right>
      </HeaderInner>
    </HeaderWrap>
  );
}

const HeaderWrap = styled.header`
  position: sticky;
  top: 0;
  z-index: 50;
  width: 100%;
  border-bottom: 1px solid var(--border);
  background: color-mix(in oklab, var(--surface) 70%, transparent);
  backdrop-filter: blur(8px);
`;

const HeaderInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 12px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    padding: 12px 28px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    padding: 14px 32px;
  }
`;

const LeftWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Left = styled.div`
  display: grid;
  grid-template-columns: auto;
  gap: 2px;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    gap: 4px;
  }
`;

const Nav = styled.nav`
  display: none;
  gap: 14px;
  margin-top: 6px;
  a {
    font-size: 13px;
    color: var(--muted);
  }
  a:hover,
  a:focus-visible {
    color: var(--text);
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    display: inline-flex;
  }
`;

const Name = styled.span`
  font-weight: 700;
  font-size: 14px;
  letter-spacing: 0.02em;
`;

const Role = styled.span`
  font-size: 12px;
  color: var(--muted);
`;

const Right = styled.div`
  display: inline-flex;
  gap: 8px;
`;

const IconButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 32px;
  border-radius: 8px;
  background: transparent;
  border: 1px solid var(--border);
  color: var(--text);
  transition: background-color 160ms ease, transform 160ms ease,
    box-shadow 160ms ease;
  will-change: transform;

  &:hover {
    background: var(--card);
    transform: translateY(-1px);
    box-shadow: ${({ theme }) => theme.shadow.soft};
  }
  &:active {
    transform: translateY(0);
    box-shadow: none;
  }
`;
