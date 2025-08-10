import styled from "styled-components";

export const Section = styled.section<{ id?: string }>`
  padding-block: 40px;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    padding-block: 56px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    padding-block: 80px;
  }
`;

export const SectionTitle = styled.h2`
  font-size: clamp(22px, 3vw, 28px);
  letter-spacing: -0.01em;
  font-weight: 700;
  margin-bottom: 8px;
  color: var(--text);
`;

export const SectionSubtitle = styled.p`
  color: var(--muted);
  font-size: 14px;
  margin-bottom: 24px;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    margin-bottom: 32px;
  }
`;
