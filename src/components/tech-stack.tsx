"use client";

import styled from "styled-components";

enum TechLevel {
  Beginner = "Beginner",
  Intermediate = "Intermediate",
  Advanced = "Advanced",
}
export type Tech = {
  name: string;
  level: TechLevel;
};

export function TechStack({ items }: { items: Tech[] }) {
  return (
    <TechGrid role="list">
      {items.map((t) => (
        <TechItem
          key={t.name}
          role="listitem"
          aria-label={`${t.name} ${t.level}`}
        >
          <IconCircle aria-hidden="true">{t.name.slice(0, 2)}</IconCircle>
          <div>
            <TechName>{t.name}</TechName>
            <Level aria-label={`Level: ${t.level}`} data-level={t.level}>
              {t.level}
            </Level>
          </div>
        </TechItem>
      ))}
    </TechGrid>
  );
}

export const TechGrid = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;

  @media (min-width: ${({ theme }) => theme.breakpoints.xs}px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
`;

const TechItem = styled.li`
  display: grid;
  grid-template-columns: 40px 1fr;
  align-items: center;
  gap: 10px;
  padding: 12px;
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 14px;
  transition: box-shadow 160ms ease, transform 160ms ease;
  will-change: transform;

  &:hover {
    box-shadow: ${({ theme }) => theme.shadow.soft};
    transform: translateY(-1px);
  }
`;

const IconCircle = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 999px;
  background: var(--surface);
  border: 1px solid var(--border);
  color: var(--muted);
  display: grid;
  place-items: center;
  font-size: 12px;
  font-weight: 700;
`;

const TechName = styled.div`
  font-weight: 700;
  font-size: 14px;
`;

const Level = styled.span`
  display: inline-block;
  margin-top: 2px;
  font-size: 11px;
  padding: 2px 8px;
  border-radius: 999px;
  color: var(--muted);
  border: 1px solid var(--border);
  background: var(--surface);

  &[data-level="${TechLevel.Advanced}"] {
    color: var(--primary-ink);
    background: var(--advanced);
    border-color: var(--advanced);
    font-weight: 700;
  }
  &[data-level="${TechLevel.Intermediate}"] {
    color: var(--primary-ink);
    background: var(--intermediate);
    border-color: var(--intermediate);
    font-weight: 700;
  }
  &[data-level="${TechLevel.Beginner}"] {
    color: var(--primary-ink);
    background: var(--beginner);
    border-color: var(--beginner);
    font-weight: 700;
  }
`;
