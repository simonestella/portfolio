import type { LocalizedText } from "@/lib/types";

export type ExperienceItem = {
  id: string;
  period: LocalizedText;
  role: LocalizedText;
  company: string;
  summary: LocalizedText;
  technologies: string[];
  highlights: LocalizedText[];
  englishDriven?: boolean;
};

export const experienceTimeline: ExperienceItem[] = [
  {
    id: "cap4lab-integration",
    period: { it: "Nov 2025 – Presente", en: "Nov 2025 – Present" },
    role: { it: "Integration Engineer", en: "Integration Engineer" },
    company: "Cap4Lab",
    summary: {
      it: "Progettazione e sviluppo di integrazioni enterprise su piattaforma MuleSoft/Anypoint, con focus su API-led connectivity, orchestrazione di flussi dati e integrazione tra sistemi eterogenei in contesti internazionali.",
      en: "Design and development of enterprise integrations on MuleSoft/Anypoint platform, focusing on API-led connectivity, data flow orchestration and integration between heterogeneous systems in international contexts."
    },
    englishDriven: true,
    technologies: ["MuleSoft", "Anypoint Platform", "DataWeave", "RAML", "REST API", "Java", "API Gateway"],
    highlights: [
      {
        it: "Sviluppo di integration flows su Anypoint Platform con pattern API-led connectivity",
        en: "Development of integration flows on Anypoint Platform using API-led connectivity patterns"
      },
      {
        it: "Design e implementazione di API in RAML con trasformazioni DataWeave",
        en: "API design and implementation in RAML with DataWeave transformations"
      },
      {
        it: "Integrazione tra sistemi enterprise eterogenei in ambiente multi-tenant",
        en: "Integration between heterogeneous enterprise systems in a multi-tenant environment"
      },
      {
        it: "Collaborazione con team internazionali in ambiente Agile, comunicazione principalmente in inglese",
        en: "Collaboration with international teams in an Agile environment, primarily English communication"
      }
    ]
  },
  {
    id: "internet-idee-fullstack",
    period: { it: "Ott 2023 – Ott 2025", en: "Oct 2023 – Oct 2025" },
    role: { it: "Full Stack Developer", en: "Full Stack Developer" },
    company: "Internet & Idee S.r.l.",
    summary: {
      it: "Sviluppo e manutenzione del software proprietario per la gestione del recupero crediti online, con rilascio di API, portali dedicati e prototipo SSO.",
      en: "Development and maintenance of proprietary software for online debt collection management, including API releases, dedicated portals and an SSO prototype."
    },
    technologies: ["Java", "Spring Boot", "Hibernate", "PostgreSQL", "Selenium", "Swagger", "Git"],
    highlights: [
      {
        it: "Sviluppo e mantenimento continuo del software proprietario per recupero crediti",
        en: "Continuous development and maintenance of proprietary debt recovery software"
      },
      {
        it: "Rilascio portale per gestione pagamenti e flussi operativi dei debitori",
        en: "Released payment management portal and debtor operational flows"
      },
      {
        it: "Implementazione nodo BCE per calcolo interessi nell'API del tirocinio curricolare",
        en: "Implemented ECB node for interest calculation in the curricular internship API"
      },
      {
        it: "Prototipo sistema SSO per unificare autenticazione di più software aziendali",
        en: "Prototype SSO system to unify authentication across multiple company applications"
      }
    ]
  },
  {
    id: "internet-idee-extracurricular",
    period: { it: "Apr 2023 – Set 2023", en: "Apr 2023 – Sep 2023" },
    role: { it: "Tirocinante Extracurricolare", en: "Extracurricular Intern" },
    company: "Internet & Idee S.r.l.",
    summary: {
      it: "Supporto allo sviluppo del software proprietario e creazione di API ausiliarie per la generazione di grafici e la gestione centralizzata delle email.",
      en: "Support for proprietary software development and creation of auxiliary APIs for chart generation and centralized email management."
    },
    technologies: ["Java", "REST", "Email Services", "Charts API", "Swagger"],
    highlights: [
      {
        it: "Centralizzazione invio email tramite API dedicate integrate nel sistema",
        en: "Centralized email sending through dedicated APIs integrated into the system"
      },
      {
        it: "Sviluppo API per reportistica e visualizzazione dati tramite grafici",
        en: "Developed APIs for reporting and data visualization through charts"
      }
    ]
  },
  {
    id: "internet-idee-curricular",
    period: { it: "Gen 2023 – Mar 2023", en: "Jan 2023 – Mar 2023" },
    role: { it: "Tirocinante Curricolare", en: "Curricular Intern" },
    company: "Internet & Idee S.r.l.",
    summary: {
      it: "Sviluppo di API per l'automazione dei processi di calcolo degli interessi legali e moratori, poi portato come lavoro di tesi triennale.",
      en: "Development of APIs for automating legal and default interest calculation processes, later presented as a bachelor's thesis."
    },
    technologies: ["Java", "API Design", "Automation", "REST"],
    highlights: [
      {
        it: "Automazione calcolo interessi legali e moratori tramite API REST",
        en: "Automated legal and default interest calculation via REST API"
      },
      {
        it: "Contributo tecnico confluito nel progetto di tesi triennale in Informatica",
        en: "Technical contribution incorporated into the Computer Science bachelor's thesis"
      }
    ]
  },
  {
    id: "chr-systems",
    period: { it: "Mar 2019 – Giu 2019", en: "Mar 2019 – Jun 2019" },
    role: { it: "Tirocinante (Alternanza Scuola-Lavoro)", en: "School-Work Intern" },
    company: "CHR Systems SNC",
    summary: {
      it: "Tirocinio nell'ambito dell'alternanza scuola-lavoro: riparazione e assistenza tecnica di computer, smartphone e stampanti, con esperienza pratica nel montaggio PC.",
      en: "School-work alternation internship: technical repair and assistance for computers, smartphones and printers, with hands-on PC assembly experience."
    },
    technologies: ["Hardware", "PC Assembly", "Technical Support"],
    highlights: [
      {
        it: "Riparazione e assistenza tecnica di computer, smartphone e stampanti",
        en: "Technical repair and assistance for computers, smartphones and printers"
      },
      {
        it: "Montaggio di computer, incluse configurazioni gaming",
        en: "PC assembly including gaming configurations"
      }
    ]
  }
];
