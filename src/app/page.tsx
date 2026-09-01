"use client";

import HeroSection from "../components/Hero";
import ProjectSection from "../components/Projects";
import SkillsSection from "../components/Skills";
import GithubActivity from "../components/GithubActivity";
import ContactSection from "../components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F7EDE2] relative overflow-hidden">
      <HeroSection />
      <SkillsSection/>
      <ProjectSection />
      <GithubActivity />
      <ContactSection />
    </main>
  );
}