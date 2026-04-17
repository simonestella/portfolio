import type { LocalizedText } from "@/lib/types";

export type CertificateItem = {
  id: string;
  title: LocalizedText;
  issuer: string;
  date: string;
  category: "language" | "networking" | "security" | "business" | "other";
};

export const certificates: CertificateItem[] = [
  {
    id: "trinity-b2",
    title: {
      it: "English Certification — Grade B2",
      en: "English Certification — Grade B2"
    },
    issuer: "Trinity College London",
    date: "Giu 2019",
    category: "language"
  },
  {
    id: "cisco-cybersecurity",
    title: {
      it: "Introduction to Cybersecurity",
      en: "Introduction to Cybersecurity"
    },
    issuer: "Cisco NetAcad",
    date: "2024",
    category: "security"
  },
  {
    id: "cisco-iot",
    title: {
      it: "Introduction to the Internet of Things",
      en: "Introduction to the Internet of Things"
    },
    issuer: "Cisco NetAcad",
    date: "2024",
    category: "networking"
  },
  {
    id: "cisco-get-connected",
    title: {
      it: "Get Connected",
      en: "Get Connected"
    },
    issuer: "Cisco NetAcad",
    date: "2024",
    category: "networking"
  },
  {
    id: "cisco-entrepreneurship",
    title: {
      it: "Entrepreneurship",
      en: "Entrepreneurship"
    },
    issuer: "Cisco NetAcad",
    date: "2024",
    category: "business"
  },
  {
    id: "safety",
    title: {
      it: "Corso di Sicurezza sul Lavoro",
      en: "Workplace Safety Course"
    },
    issuer: "—",
    date: "2023",
    category: "other"
  }
];
