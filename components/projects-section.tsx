import { ProjectCard } from "@/components/project-card";
import { SectionReveal } from "@/components/section-reveal";
import { Badge } from "@/components/ui/badge";
import { categories, getProjectsByCategory } from "@/data/projects";

export function ProjectsSection() {
  return (
    <SectionReveal className="space-y-12">
      <header className="glass-card p-6 sm:p-7">
        <h2 className="text-2xl font-semibold tracking-tight text-[#1d1d1f] sm:text-3xl">
          Progetti
        </h2>
        <p className="mt-2 text-sm text-[#6e6e73] sm:text-base">
          Lavori recenti organizzati per categoria tecnologica.
        </p>
      </header>

      <div className="space-y-12">
        {categories.map((category) => (
          <section key={category} className="space-y-5">
            <div className="flex items-center gap-3">
              <span className="h-px flex-1 bg-gradient-to-r from-[#b8b8bc] to-transparent" />
              <Badge variant="outline" className="uppercase tracking-[0.2em]">
                {category}
              </Badge>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {getProjectsByCategory(category).map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </SectionReveal>
  );
}
