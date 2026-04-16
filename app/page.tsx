import { HeroSection } from "@/components/hero-section";
import { ProjectsSection } from "@/components/projects-section";

export default function HomePage() {
  return (
    <main className="container-shell">
      <HeroSection />
      <ProjectsSection />
    </main>
  );
}
