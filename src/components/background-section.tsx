"use client";

import styled from "styled-components";
import { Award, Calendar, Building, Plane } from "lucide-react";
import { background } from "@/data/site";

export type BackgroundItem = {
  type: "scholarship" | "military" | "experience";
  title: string;
  organization: string;
  period: string;
  description: string;
  details: string[];
};

export function BackgroundSection() {
  const items = background;
  return (
    <BackgroundGrid role="list">
      {items.map((item, idx) => (
        <BackgroundCard
          key={`${item.type}-${idx}`}
          role="listitem"
          $type={item.type}
        >
          <CardHeader>
            <IconWrapper $type={item.type}>
              {item.type === "scholarship" ? (
                <Award size={24} aria-hidden="true" />
              ) : (
                <Plane size={24} aria-hidden="true" />
              )}
            </IconWrapper>
            <HeaderContent>
              <Title>{item.title}</Title>
              <Organization>
                <Building size={14} aria-hidden="true" />
                {item.organization}
              </Organization>
              <Period>
                <Calendar size={14} aria-hidden="true" />
                {item.period}
              </Period>
            </HeaderContent>
          </CardHeader>

          <Description>{item.description}</Description>

          <DetailsList>
            {item.details.map((detail, i) => (
              <DetailItem key={i}>
                <DetailBullet $type={item.type} />
                <DetailText>{detail}</DetailText>
              </DetailItem>
            ))}
          </DetailsList>
        </BackgroundCard>
      ))}
    </BackgroundGrid>
  );
}

const BackgroundGrid = styled.ul`
  list-style: none;
  display: grid;
  gap: 20px;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const BackgroundCard = styled.li<{
  $type: "scholarship" | "military" | "experience";
}>`
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 20px;
  transition: box-shadow 180ms ease, transform 180ms ease,
    border-color 180ms ease;
  will-change: transform;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background: ${({ $type }) =>
      $type === "scholarship" ? "var(--primary)" : "#10B981"};
    opacity: 0.8;
  }

  &:hover {
    box-shadow: ${({ theme }) => theme.shadow.soft};
    transform: translateY(-2px);
    border-color: ${({ $type }) =>
      $type === "scholarship" ? "var(--primary)" : "#10B981"};
  }
`;

const CardHeader = styled.div`
  display: flex;
  gap: 16px;
  align-items: flex-start;
  margin-bottom: 16px;
`;

const IconWrapper = styled.div<{
  $type: "scholarship" | "military" | "experience";
}>`
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: ${({ $type }) =>
    $type === "scholarship"
      ? "color-mix(in oklab, var(--primary) 15%, transparent)"
      : "color-mix(in oklab, #10B981 15%, transparent)"};
  border: 1px solid
    ${({ $type }) => ($type === "scholarship" ? "var(--primary)" : "#10B981")};
  color: ${({ $type }) =>
    $type === "scholarship" ? "var(--primary)" : "#10B981"};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

const HeaderContent = styled.div`
  flex: 1;
  min-width: 0;
`;

const Title = styled.h3`
  font-size: 16px;
  font-weight: 700;
  color: var(--text);
  margin-bottom: 6px;
  line-height: 1.3;
`;

const Organization = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  color: var(--muted);
  font-size: 13px;
  font-weight: 600;
  margin-bottom: 4px;
`;

const Period = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  color: var(--muted);
  font-size: 12px;
`;

const Description = styled.p`
  color: var(--text);
  font-size: 14px;
  line-height: 1.5;
  margin-bottom: 16px;
`;

const DetailsList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const DetailItem = styled.li`
  display: flex;
  gap: 12px;
  align-items: flex-start;
`;

const DetailBullet = styled.div<{
  $type: "scholarship" | "military" | "experience";
}>`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${({ $type }) =>
    $type === "scholarship" ? "var(--primary)" : "#10B981"};
  margin-top: 6px;
  flex-shrink: 0;
`;

const DetailText = styled.p`
  color: var(--text);
  font-size: 13px;
  line-height: 1.4;
`;
