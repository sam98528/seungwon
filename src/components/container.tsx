import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin-inline: auto;
  padding-inline: 20px;
  max-width: 1200px;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    padding-inline: 28px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    padding-inline: 32px;
  }
`;
