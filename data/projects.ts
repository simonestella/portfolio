export type ProjectCategory = "IA" | "Java" | "Web";

export type ProjectItem = {
  id: string;
  title: string;
  description: string;
  icon: "spark" | "code" | "globe";
  category: ProjectCategory;
};

export const projects: ProjectItem[] = [
  {
    id: "ia-recommender",
    title: "Smart Recommender",
    description: "Motore IA per suggerire contenuti personalizzati in tempo reale.",
    icon: "spark",
    category: "IA"
  },
  {
    id: "ia-chat-assistant",
    title: "Assistant NLP",
    description: "Assistente conversazionale con analisi semantica contestuale.",
    icon: "spark",
    category: "IA"
  },
  {
    id: "java-finance-core",
    title: "Finance Core API",
    description: "Backend Java robusto per processi finanziari ad alta affidabilita.",
    icon: "code",
    category: "Java"
  },
  {
    id: "java-booking-engine",
    title: "Booking Engine",
    description: "Sistema Java scalabile per prenotazioni e gestione disponibilita.",
    icon: "code",
    category: "Java"
  },
  {
    id: "web-landing-suite",
    title: "Landing Suite",
    description: "Set di pagine web orientate alla conversione con UX curata.",
    icon: "globe",
    category: "Web"
  },
  {
    id: "web-dashboard",
    title: "Analytics Dashboard",
    description: "Interfaccia web responsive per monitoraggio KPI e reportistica.",
    icon: "globe",
    category: "Web"
  }
];

export const categories: ProjectCategory[] = ["IA", "Java", "Web"];

export function getProjectsByCategory(category: ProjectCategory): ProjectItem[] {
  return projects.filter((project) => project.category === category);
}
