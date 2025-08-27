"use client";

import { useMemo } from "react";
import { HeaderBar } from "@/components/header-bar";
import { Container } from "@/components/container";
import { Section, SectionSubtitle, SectionTitle } from "@/components/section";
import { Hero } from "@/components/hero";
import { TechStack } from "@/components/tech-stack";
import { Timeline } from "@/components/timeline";
import { ProjectGrid } from "@/components/project-card";
import { Footer } from "@/components/footer";
import { FadeIn } from "@/components/fade-in";
import { about, experience, skills } from "@/data/site";
import styled from "styled-components";
import { BackgroundSection } from "@/components/background-section";

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 100vh;
  overflow-y: auto;
`;

export default function Page() {
  const techItems = useMemo(() => skills, []);
  return (
    <MainWrapper>
      <HeaderBar about={about} />
      <main id="main">
        <FadeIn>
          <Section id="about">
            <Container>
              <Hero about={about} />
            </Container>
          </Section>

          <Section id="skills">
            <Container>
              <SectionTitle>{"기술 스택"}</SectionTitle>
              <SectionSubtitle>
                {"프로젝트에서 활용한 주요 기술 스택입니다."}
              </SectionSubtitle>
              <TechStack items={techItems} />
            </Container>
          </Section>

          <Section id="experience">
            <Container>
              <SectionTitle>{"경력"}</SectionTitle>
              <SectionSubtitle>
                {"최근 경력에서 만들어낸 의미 있는 임팩트와 주요 기여들입니다."}
              </SectionSubtitle>
              <Timeline items={experience} />
            </Container>
          </Section>

          <Section id="background">
            <Container>
              <SectionTitle>{"학력 및 경력"}</SectionTitle>
              <SectionSubtitle>
                {"학력 및 경력을 요약한 내용입니다."}
              </SectionSubtitle>
              <BackgroundSection />
            </Container>
          </Section>

          <Section id="projects">
            <Container>
              <SectionTitle>{"프로젝트"}</SectionTitle>
              <SectionSubtitle>
                {
                  "모바일부터 미디어 파이프라인, 웹까지 이어지는 다양한 작업들입니다."
                }
              </SectionSubtitle>
              <ProjectGrid />
            </Container>
          </Section>

          <Footer />
        </FadeIn>
      </main>
    </MainWrapper>
  );
}
