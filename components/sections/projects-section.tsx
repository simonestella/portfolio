"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ProjectCard } from "@/components/shared/project-card";
import { SectionReveal } from "@/components/shared/section-reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getProjectGroups, getProjectsByGroup } from "@/data/projects";
import { experienceTimeline } from "@/data/experience";
import { studyTimeline } from "@/data/education";
import { certificates } from "@/data/certificates";
import { useLocale } from "@/i18n";

type MainTab = "projects" | "work" | "study";

const fadeSlide = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.2 } }
};

/* ─── Main exported component ─── */
export function ProjectsSection() {
  const [mainTab, setMainTab] = useState<MainTab>("projects");
  const { t } = useLocale();

  const mainTabs: { id: MainTab; label: string }[] = [
    { id: "projects", label: t.projects.tabProjects },
    { id: "work", label: t.projects.tabWork },
    { id: "study", label: t.projects.tabStudy }
  ];

  return (
    <SectionReveal id="projects" className="space-y-8">
      {/* Header with main tabs */}
      <header className="glass-card p-6 sm:p-7">
        <h2 className="text-2xl font-semibold tracking-tight text-[var(--ink)] sm:text-3xl">
          {t.projects.title}
        </h2>
        <p className="mt-1.5 text-sm text-[var(--muted)] sm:text-base">{t.projects.subtitle}</p>

        {/* Animated pill tab switcher */}
        <div className="mt-5 flex w-fit rounded-full border border-[var(--surface-border)] bg-[var(--card-bg)] p-1 gap-0.5">
          {mainTabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setMainTab(tab.id)}
              className={`relative rounded-full px-5 py-2 text-sm font-medium transition-all ${
                mainTab !== tab.id ? "hover:bg-[var(--surface)] hover:text-[var(--ink)]" : ""
              }`}
            >
              {mainTab === tab.id && (
                <motion.span
                  layoutId="main-tab-indicator"
                  className="absolute inset-0 rounded-full bg-[var(--apple-blue)]"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
              <span
                className={`relative z-10 transition-colors ${
                  mainTab === tab.id ? "text-white" : "text-[var(--muted)]"
                }`}
              >
                {tab.label}
              </span>
            </button>
          ))}
        </div>
      </header>

      {/* Tab content with AnimatePresence */}
      <AnimatePresence mode="wait">
        {mainTab === "projects" && (
          <motion.div key="projects" {...fadeSlide}>
            <ProjectsTab />
          </motion.div>
        )}
        {mainTab === "work" && (
          <motion.div key="work" {...fadeSlide}>
            <WorkTab />
          </motion.div>
        )}
        {mainTab === "study" && (
          <motion.div key="study" {...fadeSlide}>
            <StudyTab />
          </motion.div>
        )}
      </AnimatePresence>
    </SectionReveal>
  );
}

/* ─── Projects tab (dynamic groups) ─── */
function ProjectsTab() {
  const groups = useMemo(() => getProjectGroups(), []);
  const [activeGroup, setActiveGroup] = useState(groups[0] ?? "");
  const { t } = useLocale();
  const projects = useMemo(() => getProjectsByGroup(activeGroup), [activeGroup]);

  return (
    <div className="space-y-6">
      {/* Dynamic group sub-tabs */}
      <div className="flex flex-wrap gap-2">
        {groups.map((group) => (
          <button
            key={group}
            type="button"
            onClick={() => setActiveGroup(group)}
            className={`relative rounded-full px-4 py-1.5 text-sm font-medium transition-all ${
              activeGroup !== group ? "hover:bg-[var(--card-bg)] hover:text-[var(--ink)] hover:shadow-sm" : ""
            }`}
          >
            {activeGroup === group && (
              <motion.span
                layoutId="group-tab-indicator"
                className="absolute inset-0 rounded-full bg-[var(--ink)]"
                transition={{ type: "spring", stiffness: 380, damping: 32 }}
              />
            )}
            <span
              className={`relative z-10 transition-colors ${
                activeGroup === group ? "text-[var(--bg)]" : "text-[var(--muted)]"
              }`}
            >
              {group}
            </span>
          </button>
        ))}
      </div>

      {/* Divider */}
      <div className="flex items-center gap-3">
        <span className="h-px flex-1 bg-gradient-to-r from-[var(--card-border-solid)] to-transparent" />
        <Badge variant="outline" className="uppercase tracking-[0.2em]">
          {activeGroup}
        </Badge>
      </div>

      {/* Project grid with staggered animation */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeGroup}
          initial="hidden"
          animate="visible"
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.07 } } }}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.length > 0 ? (
            projects.map((project) => (
              <motion.div
                key={project.id}
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } }
                }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))
          ) : (
            <InProgressPlaceholder group={activeGroup} />
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

function InProgressPlaceholder({ group }: { group: string }) {
  const { t } = useLocale();
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-card col-span-full rounded-2xl border border-dashed border-[var(--card-border-solid)] p-8"
    >
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--apple-blue)]/10 text-[var(--apple-blue)]">
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none">
            <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>
        <div>
          <p className="text-sm uppercase tracking-[0.16em] text-[var(--muted)]">{group}</p>
          <p className="text-xl font-semibold text-[var(--ink)]">{t.projects.inProgress}</p>
        </div>
      </div>
      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[var(--ink-3)] sm:text-base">
        {t.projects.inProgressText}
      </p>
    </motion.article>
  );
}

/* ─── Work timeline tab ─── */
function WorkTab() {
  const { locale, t } = useLocale();
  const [activeId, setActiveId] = useState(experienceTimeline[0]?.id ?? "");
  const selected = experienceTimeline.find((e) => e.id === activeId) ?? experienceTimeline[0];

  if (!selected) return null;

  return (
    <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
      {/* Timeline sidebar */}
      <div className="glass-card p-4 sm:p-5">
        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[var(--muted)]">
          {t.experience.sectionTitle}
        </p>
        <div className="relative mt-5 space-y-0">
          {/* Vertical line */}
          <div className="absolute left-[9px] top-2 bottom-2 w-px bg-gradient-to-b from-[var(--apple-blue)] via-[var(--apple-blue)]/40 to-transparent" />
          {experienceTimeline.map((item, index) => (
            <motion.button
              key={item.id}
              type="button"
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className="relative flex w-full cursor-pointer gap-4 pb-5 text-left"
              onClick={() => setActiveId(item.id)}
            >
              {/* Timeline node */}
              <div
                className={`relative z-10 mt-1.5 h-[18px] w-[18px] shrink-0 rounded-full border-2 transition-all ${
                  activeId === item.id
                    ? "border-[var(--apple-blue)] bg-[var(--apple-blue)] shadow-[0_0_0_4px_var(--apple-blue)]/20"
                    : "border-[var(--card-border-solid)] bg-[var(--bg)]"
                }`}
              />
              <div
                className={`min-w-0 rounded-xl border px-3 py-2.5 transition-all ${
                  activeId === item.id
                    ? "border-[var(--apple-blue)]/30 bg-[var(--apple-blue)]/8"
                    : "border-[var(--surface-border)] bg-[var(--card-bg)] hover:border-[var(--apple-blue)]/30 hover:bg-[var(--surface)] hover:shadow-sm"
                }`}
              >
                <p className="text-[11px] uppercase tracking-[0.14em] text-[var(--muted)]">
                  {item.period[locale]}
                </p>
                <p className="mt-0.5 text-sm font-semibold text-[var(--ink)]">{item.role[locale]}</p>
                <p className="text-xs text-[var(--ink-3)]">{item.company}</p>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Detail panel */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeId}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -10 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          className="glass-card p-6 sm:p-7"
        >
          <div className="flex flex-wrap items-center gap-2">
            <Badge className="bg-[var(--apple-blue)] text-white">{selected.period[locale]}</Badge>
            {selected.englishDriven && (
              <Badge variant="outline">{t.experience.englishBadge}</Badge>
            )}
          </div>
          <h3 className="mt-4 text-2xl font-semibold text-[var(--ink)]">{selected.role[locale]}</h3>
          <p className="font-medium text-[var(--apple-blue)]">{selected.company}</p>
          <p className="mt-4 text-sm leading-relaxed text-[var(--ink-3)] sm:text-base">
            {selected.summary[locale]}
          </p>

          <div className="mt-5">
            <p className="text-xs uppercase tracking-[0.14em] text-[var(--muted)]">
              {t.experience.technologies}
            </p>
            <div className="mt-2 flex flex-wrap gap-2">
              {selected.technologies.map((tech) => (
                <Badge key={tech} variant="outline">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          <div className="mt-5">
            <p className="text-xs uppercase tracking-[0.14em] text-[var(--muted)]">
              {t.experience.highlights}
            </p>
            <ul className="mt-2 space-y-2">
              {selected.highlights.map((item) => (
                <li key={item[locale]} className="flex items-start gap-2.5 text-sm leading-relaxed text-[var(--ink-4)] sm:text-[15px]">
                  <span className="mt-[5px] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--apple-blue)]" />
                  {item[locale]}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

/* ─── Study + Certificates tab ─── */
function StudyTab() {
  const { locale, t } = useLocale();

  return (
    <div className="space-y-10">
      {/* Academic timeline */}
      <section>
        <div className="glass-card p-6 sm:p-7">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[var(--muted)]">
            {t.education.sectionTitle}
          </p>

          <div className="relative mt-6 space-y-0">
            {/* Vertical line */}
            <div className="absolute left-[9px] top-2 bottom-0 w-px bg-gradient-to-b from-[var(--apple-blue)] via-[var(--apple-blue)]/30 to-transparent" />

            {studyTimeline.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: index * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                className="relative flex gap-5 pb-8 last:pb-0"
              >
                {/* Node */}
                <div className="relative z-10 mt-1.5 h-[18px] w-[18px] shrink-0 rounded-full border-2 border-[var(--apple-blue)] bg-[var(--bg)] shadow-[0_0_0_4px_var(--apple-blue)]/15" />

                {/* Content */}
                <div className="min-w-0 flex-1">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--apple-blue)]">
                    {item.period[locale]}
                  </p>
                  <p className="mt-1 text-base font-semibold leading-snug text-[var(--ink)]">
                    {item.degree[locale]}
                  </p>
                  <p className="text-sm font-medium text-[var(--ink-2)]">{item.institution}</p>
                  <p className="text-xs text-[var(--muted)]">{item.location}</p>
                  {item.description && (
                    <p className="mt-2 text-sm leading-relaxed text-[var(--ink-3)]">
                      {item.description[locale]}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates */}
      <section>
        <div className="mb-5 flex items-center gap-3">
          <span className="h-px flex-1 bg-gradient-to-r from-[var(--card-border-solid)] to-transparent" />
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
            {t.certificates.sectionTitle}
          </p>
          <span className="h-px flex-1 bg-gradient-to-l from-[var(--card-border-solid)] to-transparent" />
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.06, duration: 0.4, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="glass-card p-5"
            >
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[var(--surface-border)] bg-[var(--card-bg)]">
                  <CertIcon category={cert.category} />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-semibold leading-snug text-[var(--ink)]">
                    {cert.title[locale]}
                  </p>
                  <p className="mt-0.5 text-xs text-[var(--muted)]">{cert.issuer}</p>
                  <Badge variant="outline" className="mt-2 text-[10px]">
                    {cert.date}
                  </Badge>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

/* ─── Certificate icon ─── */
function CertIcon({ category }: { category: string }) {
  const cls = "h-5 w-5 text-[var(--apple-blue)]";
  if (category === "language") {
    return (
      <svg className={cls} viewBox="0 0 24 24" fill="none">
        <path d="M3 5h12M9 3v2m4.5 12L9 8l-4.5 9M6 14h6M22 22l-5-10-5 10M19 19H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  if (category === "security") {
    return (
      <svg className={cls} viewBox="0 0 24 24" fill="none">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  if (category === "networking") {
    return (
      <svg className={cls} viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
        <path d="M3 12h18M12 3C14.5 5.5 16 8.6 16 12s-1.5 6.5-4 9C9.5 18.5 8 15.4 8 12s1.5-6.5 4-9z" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    );
  }
  if (category === "business") {
    return (
      <svg className={cls} viewBox="0 0 24 24" fill="none">
        <path d="M9 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-4M9 7V5a2 2 0 012-2h2a2 2 0 012 2v2M9 7h6M12 12v4M10 14h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  return (
    <svg className={cls} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="8" r="3" stroke="currentColor" strokeWidth="1.5" />
      <path d="M3 21v-2a7 7 0 0114 0v2M16 3.13a4 4 0 010 7.75M21 21v-2a4 4 0 00-3-3.85" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

