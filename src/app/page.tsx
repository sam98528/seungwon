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
import { about, experience, projects, skills } from "@/data/site";

export default function Page() {
  const techItems = useMemo(() => skills, []);
  return (
    <>
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
                {
                  "신뢰성과 높은 성능의 제품을 만들기 위해 사용하는 기술들입니다."
                }
              </SectionSubtitle>
              <TechStack items={techItems} />
            </Container>
          </Section>

          <Section id="experience">
            <Container>
              <SectionTitle>{"경력"}</SectionTitle>
              <SectionSubtitle>
                {"최근 작업에서 임팩트를 만든 핵심 하이라이트입니다."}
              </SectionSubtitle>
              <Timeline items={experience} />
            </Container>
          </Section>

          <Section id="projects">
            <Container>
              <SectionTitle>{"프로젝트"}</SectionTitle>
              <SectionSubtitle>
                {
                  "모바일, 미디어 파이프라인, 웹 애플리케이션을 아우르는 선별 작업들입니다."
                }
              </SectionSubtitle>
              <ProjectGrid items={projects} />
            </Container>
          </Section>

          <Footer />
        </FadeIn>
      </main>
    </>
  );
}
