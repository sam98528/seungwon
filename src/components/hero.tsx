"use client";

import Image from "next/image";
import styled from "styled-components";
import { Download, MessageCircle } from "lucide-react";
import { getImagePath, getAssetPath } from "@/lib/paths";

export type About = {
  name: string;
  role: string;
  bio: string;
  email: string;
  links: { github: string; resume: string };
  avatar: string;
};

export function Hero({ about }: { about: About }) {
  return (
    <HeroWrap>
      <AvatarWrap>
        <Image
          src={getImagePath(about.avatar)}
          alt={`${about.name} avatar`}
          width={96}
          height={96}
          priority
          style={{ borderRadius: 999 }}
        />
      </AvatarWrap>
      <Title>{about.name}</Title>
      <Subtitle>{about.role}</Subtitle>
      <BioWrap>
        <Bio>{about.bio}</Bio>
      </BioWrap>
      <Ctas>
        <PrimaryButton
          as="a"
          download
          href={about.links.resume ? getAssetPath(about.links.resume) : "#"}
          aria-label="Download CV"
        >
          <Download aria-hidden="true" size={18} />
          <span style={{ fontWeight: 700, letterSpacing: "-0.02em" }}>
            {"이력서 다운로드"}
          </span>
        </PrimaryButton>
        <GhostButton
          as="a"
          href={`mailto:${about.email}`}
          aria-label="Contact via email"
        >
          <MessageCircle aria-hidden="true" size={18} />
          <span style={{ fontWeight: 700, letterSpacing: "-0.02em" }}>
            {"연락하기"}
          </span>
        </GhostButton>
      </Ctas>
    </HeroWrap>
  );
}

const HeroWrap = styled.div`
  display: grid;
  justify-items: center;
  text-align: center;
  gap: 12px;
`;

const AvatarWrap = styled.div`
  position: relative;
  width: 96px;
  height: 96px;
`;

// const Badge = styled.span`
//   position: absolute;
//   bottom: -8px;
//   right: -8px;
//   background: var(--primary);
//   color: var(--primary-ink);
//   border-radius: 999px;
//   font-weight: 700;
//   font-size: 10px;
//   padding: 4px 8px;
//   border: 1px solid var(--border);
// `;

const Title = styled.h1`
  font-size: clamp(24px, 5vw, 36px);
  letter-spacing: -0.02em;
  margin-top: 8px;
  font-weight: 800;
`;

const Subtitle = styled.p`
  color: var(--muted);
  font-size: 14px;
`;

const BioWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 8px;
  gap: 2px;
`;

const Bio = styled.p`
  max-width: 800px;
  color: var(--text);
  font-size: 15px;
  line-height: 1.5;
  white-space: pre-wrap;
  word-break: keep-all;
  overflow-wrap: break-word;
  word-wrap: break-word;
`;

const Ctas = styled.div`
  display: inline-flex;
  gap: 10px;
  margin-top: 12px;
  flex-wrap: wrap;
  justify-content: center;
`;

const BaseButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 14px;
  border-radius: 12px;
  border: 1px solid var(--border);
  font-weight: 600;
  transition: transform 160ms ease, box-shadow 160ms ease,
    background-color 160ms ease, color 160ms ease;
  will-change: transform;

  &:hover {
    transform: translateY(-1px);
    box-shadow: ${({ theme }) => theme.shadow.soft};
  }
  &:active {
    transform: translateY(0);
    box-shadow: none;
  }
`;

const PrimaryButton = styled(BaseButton)`
  background: var(--primary);
  color: var(--primary-ink);
`;

const GhostButton = styled(BaseButton)`
  background: transparent;
  color: var(--text);
  &:hover {
    background: var(--card);
  }
`;

// const Meta = styled.div`
//   color: var(--muted);
//   margin-top: 6px;
//   font-size: 13px;
// `;
