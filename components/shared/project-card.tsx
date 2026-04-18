"use client";

import { motion } from "framer-motion";
import { type MouseEvent, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { ProjectItem } from "@/data/projects";
import { isProjectInProgress } from "@/data/projects";
import { useLocale } from "@/i18n";

type ProjectCardProps = {
  project: ProjectItem;
};

function Icon({ type }: Readonly<{ type: ProjectItem["icon"] }>) {
  const baseClasses = "h-6 w-6 text-[var(--apple-blue)]";

  if (type === "spark") {
    return (
      <svg className={baseClasses} viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M12 2L14.8 9.2L22 12L14.8 14.8L12 22L9.2 14.8L2 12L9.2 9.2L12 2Z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
    );
  }

  if (type === "code") {
    return (
      <svg className={baseClasses} viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M8 8L4 12L8 16M16 8L20 12L16 16M14 6L10 18"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg className={baseClasses} viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M3 12H21M12 3C14.5 5.5 16 8.7 16 12C16 15.3 14.5 18.5 12 21C9.5 18.5 8 15.3 8 12C8 8.7 9.5 5.5 12 3Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}

export function ProjectCard({ project }: Readonly<ProjectCardProps>) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const { locale, t } = useLocale();
  const inProgress = isProjectInProgress(project);
  const rafRef = useRef<number | null>(null);

  const onMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    if (rafRef.current !== null) return;
    const el = event.currentTarget;
    const clientX = event.clientX;
    const clientY = event.clientY;
    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = null;
      const bounds = el.getBoundingClientRect();
      el.style.setProperty("--mouse-x", `${clientX - bounds.left}px`);
      el.style.setProperty("--mouse-y", `${clientY - bounds.top}px`);
    });
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <>
      <motion.article
        className="glass-card group"
        onMouseMove={onMouseMove}
        whileHover={{ y: -6, scale: 1.01 }}
        transition={{ type: "spring", stiffness: 220, damping: 18 }}
      >
        <Card className="border-0 bg-transparent shadow-none backdrop-blur-0">
          <CardHeader>
            <div className="mb-1 flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--surface-border)] bg-[var(--card-bg)] text-[var(--apple-blue)] shadow-sm">
              <Icon type={project.icon} />
            </div>
            {inProgress ? (
              <Badge className="w-fit border-0 bg-gradient-to-r from-amber-500 to-orange-500 text-white">
                {t.projects.inProgress}
              </Badge>
            ) : null}
            <CardTitle className="text-lg text-[var(--ink)]">{project.title[locale]}</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col">
            <p className="text-sm leading-relaxed text-[var(--ink-3)]">
              {project.description[locale]}
            </p>

            {/* Date + tech tags */}
            <div className="mt-4 space-y-2.5">
              {(project.startDate || project.endDate) && (
                <p className="flex items-center gap-1.5 text-[11px] font-medium text-[var(--muted)]">
                  <svg className="h-3 w-3 shrink-0" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <rect x="3" y="4" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.8" />
                    <path d="M16 2v4M8 2v4M3 10h18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  </svg>
                  {project.startDate?.[locale]}
                  {project.endDate ? ` – ${project.endDate[locale]}` : ""}
                </p>
              )}

              {project.technologies && project.technologies.length > 0 && (() => {
                const MAX = 3;
                const visible = project.technologies.slice(0, MAX);
                const extra = project.technologies.length - MAX;
                return (
                  <div className="flex flex-wrap items-center gap-1.5">
                    {visible.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-[var(--surface-border)] bg-[var(--card-bg)] px-2 py-0.5 text-[10px] font-medium text-[var(--ink-3)]"
                      >
                        {tech}
                      </span>
                    ))}
                    {extra > 0 && (
                      <span className="rounded-md border border-[var(--apple-blue)]/25 bg-[var(--apple-blue)]/8 px-2 py-0.5 text-[10px] font-semibold text-[var(--apple-blue)]">
                        +{extra}
                      </span>
                    )}
                  </div>
                );
              })()}
            </div>

            <div className="mt-4 h-px bg-gradient-to-r from-transparent via-[var(--surface-border)] to-transparent" />
            <button
              type="button"
              className="group/cta mt-4 flex w-full items-center justify-between rounded-xl bg-[var(--apple-blue)] px-4 py-3 text-sm font-semibold text-white shadow-[0_4px_16px_rgba(0,113,227,0.22)] transition-all duration-200 group-hover:shadow-[0_6px_22px_rgba(0,113,227,0.42)] hover:brightness-[1.08] active:scale-[0.97]"
              onClick={() => setIsOpen(true)}
            >
              <span>{t.projects.discoverMore}</span>
              <svg
                className="h-4 w-4 transition-transform duration-200 group-hover/cta:translate-x-1"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden
              >
                <path
                  d="M5 12H19M13 6l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </CardContent>
        </Card>
      </motion.article>

      {isMounted && isOpen
        ? createPortal(
            <div data-modal-open className="fixed inset-0 z-[90] flex items-center justify-center px-4 py-8 sm:px-6">
              <button
                type="button"
                aria-label={t.projects.closeLabel}
                className="absolute inset-0 cursor-pointer bg-[#0b1020]/72"
                onClick={() => setIsOpen(false)}
              />

              <motion.div
                initial={{ opacity: 0, y: 18, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="relative z-10 w-full max-w-2xl cursor-default overflow-hidden rounded-3xl border border-[var(--modal-border)] bg-[var(--modal-bg)] p-6 shadow-[0_30px_70px_rgba(0,10,35,0.35)] sm:p-8"
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-2xl font-semibold tracking-tight text-[var(--ink)]">
                    {project.title[locale]}
                  </h3>
                  <button
                    type="button"
                    aria-label={t.projects.closeLabel}
                    onClick={() => setIsOpen(false)}
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[var(--card-border-solid)] bg-[var(--card-bg)] text-[var(--muted)] shadow-sm transition-all hover:border-[var(--apple-blue)]/40 hover:bg-[var(--surface)] hover:text-[var(--ink)] hover:shadow-[0_0_0_3px_rgba(0,113,227,0.09)]"
                  >
                    <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" aria-hidden>
                      <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </button>
                </div>

                <div className="mt-5 max-h-[70vh] space-y-5 overflow-y-auto pr-1 text-sm text-[var(--ink-4)] sm:text-[15px]">
                  {inProgress ? (
                    <div className="rounded-2xl border border-[var(--amber-banner-border)] bg-[var(--amber-banner-bg)] px-4 py-3 text-amber-600 dark:text-amber-400">
                      {t.projects.inProgressNote}
                    </div>
                  ) : null}

                  <p className="leading-relaxed">
                    {project.longDescription?.[locale] ?? t.projects.descriptionUpdating}
                  </p>

                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="rounded-xl border border-[var(--card-border-solid)] bg-[var(--card-bg)] px-4 py-3">
                      <p className="text-xs uppercase tracking-[0.15em] text-[var(--muted)]">
                        {t.projects.startDate}
                      </p>
                      <p className="mt-1 font-medium text-[var(--ink)]">
                        {project.startDate?.[locale] ?? t.projects.tbd}
                      </p>
                    </div>
                    <div className="rounded-xl border border-[var(--card-border-solid)] bg-[var(--card-bg)] px-4 py-3">
                      <p className="text-xs uppercase tracking-[0.15em] text-[var(--muted)]">
                        {t.projects.endDate}
                      </p>
                      <p className="mt-1 font-medium text-[var(--ink)]">
                        {project.endDate?.[locale] ?? t.projects.ongoing}
                      </p>
                    </div>
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-[0.15em] text-[var(--muted)]">
                      {t.projects.technologies}
                    </p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {(project.technologies?.length
                        ? project.technologies
                        : [t.projects.toBeSpecified]
                      ).map((tech) => (
                        <Badge key={tech} variant="outline">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-[0.15em] text-[var(--muted)]">
                      {t.projects.whatIDid}
                    </p>
                    <ul className="mt-2 list-inside list-disc space-y-1.5 leading-relaxed text-[var(--ink-4)]">
                      {(project.contributions?.length
                        ? project.contributions.map((c) => c[locale])
                        : [t.projects.toBeUpdated]
                      ).map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>,
            document.body
          )
        : null}
    </>
  );
}
