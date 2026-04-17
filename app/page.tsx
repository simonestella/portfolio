import { HeroSection } from "@/components/sections/hero-section";
import { ProjectsSection } from "@/components/sections/projects-section";

export default function HomePage() {
  return (
    <main className="container-shell">
      <HeroSection />
      <ProjectsSection />
    </main>
  );
}
