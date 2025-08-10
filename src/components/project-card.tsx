"use client";

import Image from "next/image";
import styled from "styled-components";
import { ExternalLink, Github } from "lucide-react";

export type Project = {
  readonly title: string;
  readonly description: string;
  readonly tags: ReadonlyArray<string>;
  readonly cover: string;
  readonly links: { live?: string; github?: string };
};

export function ProjectGrid({ items }: { items: ReadonlyArray<Project> }) {
  return (
    <Grid role="list">
      {items.map((p) => (
        <Card key={p.title} role="listitem">
          <Media>
            <Image
              src={
                p.cover ||
                "/placeholder.svg?height=640&width=1024&query=project%20cover"
              }
              alt={`${p.title} cover`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
              style={{ objectFit: "cover" }}
              priority={false}
            />
          </Media>
          <Body>
            <Title>{p.title}</Title>
            <Desc>{p.description}</Desc>
            <Tags aria-label="Tags">
              {p.tags.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </Tags>
            <Links>
              {p.links.github ? (
                <LinkBtn
                  as="a"
                  href={p.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View source on GitHub"
                  title="GitHub"
                >
                  <Github aria-hidden="true" size={16} />
                  <span className="sr-only">{"GitHub"}</span>
                </LinkBtn>
              ) : null}
              {p.links.live ? (
                <LinkBtn
                  as="a"
                  href={p.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open live project"
                  title="Live"
                >
                  <ExternalLink aria-hidden="true" size={16} />
                  <span className="sr-only">{"Live"}</span>
                </LinkBtn>
              ) : null}
            </Links>
          </Body>
        </Card>
      ))}
    </Grid>
  );
}

const Grid = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

const Card = styled.li`
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 16px;
  overflow: hidden;
  transition: box-shadow 180ms ease, transform 180ms ease;
  will-change: transform;

  &:hover {
    box-shadow: ${({ theme }) => theme.shadow.hover};
    transform: translateY(-2px);
  }
`;

const Media = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  overflow: hidden;

  img {
    transition: transform 220ms ease;
    will-change: transform;
  }
  ${Card}:hover & img {
    transform: scale(1.03);
  }
`;

const Body = styled.div`
  padding: 16px;
`;

const Title = styled.h3`
  font-size: 16px;
  font-weight: 800;
  letter-spacing: -0.01em;
`;

const Desc = styled.p`
  color: var(--muted);
  font-size: 14px;
  margin-top: 6px;
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 10px;
`;

const Tag = styled.span`
  font-size: 11px;
  padding: 4px 8px;
  border-radius: 999px;
  border: 1px solid var(--border);
  color: var(--muted);
  background: var(--surface);
`;

const Links = styled.div`
  margin-top: 12px;
  display: inline-flex;
  gap: 8px;
`;

const LinkBtn = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 32px;
  border-radius: 10px;
  border: 1px solid var(--border);
  background: transparent;
  color: var(--text);
  transition: background-color 160ms ease, transform 160ms ease,
    box-shadow 160ms ease;

  &:hover {
    background: var(--surface);
    transform: translateY(-1px);
    box-shadow: ${({ theme }) => theme.shadow.soft};
  }
  &:active {
    transform: translateY(0);
    box-shadow: none;
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;
    white-space: nowrap;
    clip-path: inset(100%);
    clip: rect(0 0 0 0);
    overflow: hidden;
  }
`;
