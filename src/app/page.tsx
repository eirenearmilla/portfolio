"use client";

import HeroSection from "../components/Hero";
import ProjectSection from "../components/Projects";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F7EDE2] relative overflow-hidden">
      <HeroSection />
      <ProjectSection />
    </main>
  );
}