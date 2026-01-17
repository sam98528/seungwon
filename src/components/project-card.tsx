"use client";

import { useState } from "react";
import Image from "next/image";
import styled from "styled-components";
import { Calendar, Users, Home, Monitor, Smartphone, Link } from "lucide-react";
import { Project, projects } from "@/data/site";
import { getImagePath } from "@/lib/paths";

export function ProjectGrid() {
  const items = projects;
  const [expandedProjects, setExpandedProjects] = useState<Set<string>>(
    new Set()
  );

  const toggleExpanded = (title: string) => {
    setExpandedProjects((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(title)) {
        newSet.delete(title);
      } else {
        newSet.add(title);
      }
      return newSet;
    });
  };

  return (
    <Grid role="list">
      {items.map((p) => (
        <ProjectCard
          key={p.title}
          project={p}
          isExpanded={expandedProjects.has(p.title)}
          onToggle={() => toggleExpanded(p.title)}
        />
      ))}
    </Grid>
  );
}

function ProjectCard({
  project,
  isExpanded,
  onToggle,
}: {
  project: Project;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  return (
    <Card role="listitem" data-expanded={isExpanded}>
      <CardHeader
        onClick={onToggle}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onToggle();
          }
        }}
      >
        <Media>
          <Image
            src={
              project.cover
                ? getImagePath(project.cover)
                : getImagePath("/placeholder.svg?height=640&width=1024&query=project%20cover")
            }
            alt={`${project.title} cover`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            style={{ objectFit: "cover" }}
            priority={false}
          />
          {/* <ExpandButton
            aria-label={isExpanded ? "Collapse details" : "Expand details"}
          >
            {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </ExpandButton> */}
          <TypeIcon>
            {project.type === "app" ? <Smartphone /> : <Monitor />}
          </TypeIcon>
        </Media>
        <BasicInfo>
          <Title>{project.title}</Title>
          <Desc>{project.description}</Desc>
          <Tags aria-label="Tags">
            {project.tags.map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </Tags>
        </BasicInfo>
      </CardHeader>

      <ExpandedContent data-expanded={isExpanded}>
        <DetailSection>
          <DetailTitle>{"프로젝트 상세"}</DetailTitle>
          <DetailGrid>
            <DetailItem>
              <DetailLabel>
                <Calendar size={16} />
                {"기간"}
              </DetailLabel>
              <DetailValue>{project.timeline}</DetailValue>
            </DetailItem>
            <DetailItem>
              <DetailLabel>
                <Users size={16} />
                {"개발팀"}
              </DetailLabel>
              <DetailValue>{project.team}</DetailValue>
            </DetailItem>
          </DetailGrid>
        </DetailSection>

        <ChallengesSection>
          <DetailTitle>{"성과 및 도전 과제"}</DetailTitle>
          <ChallengesList>
            {project.challenges.map((challenge, idx) => (
              <ChallengeItem key={idx}>
                <ChallengeBullet />
                <ChallengeText>{challenge}</ChallengeText>
              </ChallengeItem>
            ))}
          </ChallengesList>
        </ChallengesSection>

        <ActionSection>
          <ActionButtons>
            {project.links.homePage && (
              <ActionButton
                as="a"
                href={project.links.homePage}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View live project"
                title="Live Demo"
              >
                <Home size={18} />
              </ActionButton>
            )}
            {project.links.youtube && (
              <ActionButton
                as="a"
                href={project.links.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View live project"
                title="Live Demo"
              >
                <Image
                  src={getImagePath("/project/youtube.svg")}
                  alt="Youtube"
                  width={18}
                  height={18}
                />
              </ActionButton>
            )}
            {project.links.github && (
              <ActionButton
                as="a"
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View source code"
                title="GitHub"
              >
                <Image src={getImagePath("/github.svg")} alt="Github" width={18} height={18} />
                <span>{"View Source"}</span>
              </ActionButton>
            )}
            {project.links.appStore && (
              <ActionButton
                as="a"
                href={project.links.appStore}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View source code"
                title="App Store"
              >
                <Image
                  src={getImagePath("/project/app_store.svg")}
                  alt="App Store"
                  width={18}
                  height={18}
                />
              </ActionButton>
            )}
            {project.links.playStore && (
              <ActionButton
                as="a"
                href={project.links.playStore}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View source code"
                title="Play Store"
              >
                <Image
                  src={getImagePath("/project/play_store.svg")}
                  alt="App Store"
                  width={18}
                  height={18}
                />
              </ActionButton>
            )}
            {project.links.detail && (
              <ActionButton
                as="a"
                href={project.links.detail}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View source code"
                title="App Store"
              >
                <Link size={18} />
              </ActionButton>
            )}
          </ActionButtons>
        </ActionSection>
      </ExpandedContent>
    </Card>
  );
}

const Grid = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    display: grid;
    grid-template-columns: repeat(2, minmax(100px, 1fr));
    align-items: start;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

const Card = styled.li`
  background: var(--card);
  width: 100%;
  border: 1px solid var(--border);
  border-radius: 16px;
  overflow: hidden;
  transition: box-shadow 180ms ease, transform 180ms ease;
  will-change: transform;
  align-self: start;

  &[data-expanded="true"] {
    box-shadow: ${({ theme }) => theme.shadow.hover};
    transform: translateY(-2px);
  }

  &:not([data-expanded="true"]):hover {
    box-shadow: ${({ theme }) => theme.shadow.soft};
    transform: translateY(-1px);
  }
`;

const CardHeader = styled.div`
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-tap-highlight-color: transparent;

  &:focus-visible {
    outline: 2px solid var(--primary);
    outline-offset: -2px;
  }
`;

const Media = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  background-color: #000;
  overflow: hidden;

  img {
    transition: transform 220ms ease;
    will-change: transform;
  }

  ${Card}[data-expanded="true"] & img,
  ${Card}:hover & img {
    transform: scale(1.03);
  }
`;

// const ExpandButton = styled.div`
//   position: absolute;
//   top: 12px;
//   right: 12px;
//   width: 36px;
//   height: 36px;
//   border-radius: 12px;
//   background: rgba(0, 0, 0, 0.3);
//   backdrop-filter: blur(8px);
//   color: var(--text);
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   transition: background-color 160ms ease, transform 160ms ease;

//   &:hover {
//     background: rgba(0, 0, 0, 0.8);
//     transform: scale(1.05);
//   }
// `;

const TypeIcon = styled.div`
  position: absolute;
  bottom: 12px;
  right: 12px;
  width: 36px;
  height: 36px;
  border-radius: 999px;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(8px);
  color: var(--text);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 160ms ease, transform 160ms ease;

  &:hover {
    background: rgba(0, 0, 0, 0.8);
    transform: scale(1.05);
  }
`;

const BasicInfo = styled.div`
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

const ExpandedContent = styled.div`
  max-height: 0;
  overflow: hidden;
  transition: max-height 300ms ease, padding 300ms ease;
  padding: 0 16px;

  &[data-expanded="true"] {
    max-height: 800px;
    padding: 0 16px 20px;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;

    &[data-expanded="false"] {
      display: none;
    }
    &[data-expanded="true"] {
      display: block;
      max-height: none;
      padding: 0 16px 20px;
    }
  }
`;

const DetailSection = styled.div`
  margin-bottom: 20px;
`;

const DetailTitle = styled.h4`
  font-size: 14px;
  font-weight: 700;
  color: var(--text);
  margin-bottom: 12px;
`;

const DetailGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
`;

const DetailItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const DetailLabel = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  color: var(--muted);
  font-size: 12px;
  font-weight: 600;
`;

const DetailValue = styled.div`
  color: var(--text);
  font-size: 13px;
  white-space: pre-line;
`;

const ChallengesSection = styled.div`
  margin-bottom: 20px;
`;

const ChallengesList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ChallengeItem = styled.li`
  display: flex;
  gap: 10px;
  align-items: flex-start;
`;

const ChallengeBullet = styled.div`
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: var(--primary);
  margin-top: 6px;
  flex-shrink: 0;
`;

const ChallengeText = styled.p`
  color: var(--text);
  font-size: 13px;
  line-height: 1.4;
`;

const ActionSection = styled.div`
  border-top: 1px solid var(--border);
  padding-top: 16px;
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

const ActionButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 12px;
  border-radius: 10px;
  border: 1px solid var(--border);
  background: var(--surface);
  color: var(--text);
  font-size: 12px;
  font-weight: 600;
  transition: background-color 160ms ease, transform 160ms ease;

  &:hover {
    background: var(--bg);
    transform: translateY(-1px);
  }
`;
