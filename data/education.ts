import type { LocalizedText } from "@/lib/types";

export type StudyItem = {
  id: string;
  period: LocalizedText;
  degree: LocalizedText;
  institution: string;
  location: string;
  description?: LocalizedText;
};

export const studyTimeline: StudyItem[] = [
  {
    id: "ecampus-lm",
    period: { it: "Ago 2024 – Presente", en: "Aug 2024 – Present" },
    degree: {
      it: "Laurea Magistrale in Ingegneria Informatica — Artificial Intelligence",
      en: "MSc in Computer Engineering — Artificial Intelligence"
    },
    institution: "Università degli Studi eCampus",
    location: "Novedrate (CO)"
  },
  {
    id: "unical-lt",
    period: { it: "Ott 2019 – Lug 2024", en: "Oct 2019 – Jul 2024" },
    degree: {
      it: "Laurea Triennale in Informatica",
      en: "BSc in Computer Science"
    },
    institution: "Università della Calabria",
    location: "Rende (CS)",
    description: {
      it: "Tesi triennale: sviluppo di API REST per l'automazione del calcolo degli interessi legali e moratori, successivamente evoluta in sistema produttivo.",
      en: "Bachelor's thesis: REST API development for automated legal and default interest calculation, later evolved into a production system."
    }
  },
  {
    id: "diploma",
    period: { it: "Set 2014 – Lug 2019", en: "Sep 2014 – Jul 2019" },
    degree: {
      it: "Diploma in Informatica e Telecomunicazioni",
      en: "High School Diploma — Computer Science & Telecommunications"
    },
    institution: "IIS Polo Tecnologico Ind. ed Artig. Avanz.",
    location: "Lamezia Terme (CZ)"
  }
];
