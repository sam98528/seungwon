"use client";

import styled from "styled-components";

export type ExperienceItem = {
  readonly company: string;
  readonly role: string;
  readonly period: string;
  readonly bullets: ReadonlyArray<string>;
};

export function Timeline({
  items,
}: {
  readonly items: ReadonlyArray<ExperienceItem>;
}) {
  return (
    <Wrap>
      <Line aria-hidden="true" />
      <List role="list">
        {items.map((it, idx) => (
          <Item key={`${it.company}-${idx}`} role="listitem">
            <Dot aria-hidden="true" />
            <Content>
              <Header>
                <Company>{it.company}</Company>
                <Period>{it.period}</Period>
              </Header>
              <Role>{it.role}</Role>
              <Bullets>
                {it.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </Bullets>
            </Content>
          </Item>
        ))}
      </List>
    </Wrap>
  );
}

const Wrap = styled.div`
  position: relative;
  padding-left: 20px;
`;

const Line = styled.div`
  position: absolute;
  left: 6px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: var(--border);
`;

const List = styled.ul`
  list-style: none;
  display: grid;
  gap: 18px;
`;

const Item = styled.li`
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
`;

const Dot = styled.span`
  position: absolute;
  left: -20px;
  top: 4px;
  width: 14px;
  height: 14px;
  border-radius: 999px;
  background: var(--surface);
  border: 2px solid var(--primary);
  box-shadow: 0 0 0 2px var(--surface);
`;

const Content = styled.div`
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 14px;
  padding: 14px;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: ${({ theme }) => theme.shadow.soft};
    transform: translateY(-2px);
    border-color: var(--primary);
  }
`;

const Header = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 10px;
`;

const Company = styled.h3`
  font-weight: 800;
  font-size: 15px;
`;

const Period = styled.span`
  color: var(--muted);
  font-size: 12px;
`;

const Role = styled.p`
  color: var(--muted);
  margin-top: 2px;
  font-size: 13px;
`;

const Bullets = styled.ul`
  margin-top: 8px;
  list-style: disc;
  padding-left: 18px;
  color: var(--text);
  li {
    margin-top: 6px;
    font-size: 14px;
  }
`;
