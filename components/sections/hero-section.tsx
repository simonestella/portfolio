"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ContactModal } from "@/components/ui/contact-modal";
import { useLocale } from "@/i18n";
import type { Locale } from "@/lib/types";
import Image from "next/image";
import { projects } from "@/data/projects";

function SunIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"
        stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"
      />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
        stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"
      />
    </svg>
  );
}

const socials = [
  { id: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/in/work-simone-stella/" },
] as const;

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } }
};

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function HeroSection() {
  const { t, locale, setLocale } = useLocale();
  const { theme, setTheme } = useTheme();
  const [contactOpen, setContactOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
useEffect(() => setMounted(true), []);

  const handleViewProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const getSocialIcon = () => (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M6.94 8.5H3.56V20H6.94V8.5ZM5.25 3C4.17 3 3.31 3.88 3.31 4.97C3.31 6.05 4.17 6.94 5.25 6.94C6.33 6.94 7.19 6.05 7.19 4.97C7.19 3.88 6.33 3 5.25 3ZM20 13.38C20 10.18 18.29 8.25 15.46 8.25C14.1 8.25 13.2 9 12.84 9.53V8.5H9.59V20H12.97V14.31C12.97 12.81 13.25 11.36 15.11 11.36C16.95 11.36 16.98 13.08 16.98 14.4V20H20V13.38Z" />
    </svg>
  );

  const words = t.hero.headline.split(" ");

  const isDark = theme === "dark";

  return (
    <section className="relative mb-12 pt-2 sm:mb-16 sm:pt-4">
      {/* ── Top bar: name + controls ── */}
      <div className="mb-4 flex items-center justify-between sm:mb-6">
        <span className="text-sm font-semibold tracking-tight text-[var(--ink)]">
          {t.nav.name}
        </span>
        <div className="flex items-center gap-2">
          <div className="flex items-center rounded-full border border-[var(--surface-border)] bg-[var(--card-bg)] p-0.5">
            {(["it", "en"] as Locale[]).map((lang) => (
              <button
                key={lang}
                type="button"
                onClick={() => setLocale(lang)}
                className={`rounded-full px-3 py-1.5 text-[11px] font-bold uppercase tracking-widest transition-all ${
                  locale === lang
                    ? "bg-[var(--apple-blue)] text-white shadow-sm"
                    : "text-[var(--muted)] hover:text-[var(--ink)]"
                }`}
              >
                {lang}
              </button>
            ))}
          </div>
          {mounted && (
            <button
              type="button"
              onClick={() => setTheme(isDark ? "light" : "dark")}
              aria-label={isDark ? t.nav.toggleLight : t.nav.toggleDark}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--surface-border)] bg-[var(--card-bg)] text-[var(--ink)] transition-colors hover:bg-[var(--surface)]"
            >
              {isDark ? <SunIcon /> : <MoonIcon />}
            </button>
          )}
        </div>
      </div>

      {/* Outer wrapper — border + shadow only, no backdrop-filter here */}
      <div className="overflow-hidden rounded-[1.4rem] border border-[var(--surface-border)] shadow-[0_18px_40px_rgba(17,17,21,0.08),0_2px_12px_rgba(17,17,21,0.03)]">
        <div className="flex flex-col lg:flex-row lg:items-stretch">

          {/* ── LEFT: glass text panel ── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-1 flex-col gap-6 bg-gradient-to-br from-[var(--surface)] to-[var(--surface-end)] p-6 sm:gap-8 sm:p-10 lg:p-12"
          >
            <motion.div variants={itemVariants}>
              <Badge
                variant="secondary"
                className="px-4 py-1.5 text-[13px] font-medium tracking-wide shadow-sm"
              >
                <span className="mr-2 inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--apple-blue)]" />
                {t.hero.badge}
              </Badge>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="max-w-[22ch] text-balance text-3xl font-semibold leading-[1.08] tracking-[-0.035em] text-[var(--ink)] sm:text-5xl lg:text-[3.25rem] lg:leading-[1.06]"
            >
              {words.map((word, i) => (
                <motion.span
                  key={`${word}-${i}`}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.045, duration: 0.45, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                  className="inline-block"
                >
                  {word}
                  {i < words.length - 1 ? "\u00A0" : ""}
                </motion.span>
              ))}
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="max-w-xl text-[15px] leading-relaxed text-[var(--ink-2)] sm:text-lg sm:leading-[1.55]"
            >
              {t.hero.description}
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4"
            >
              <motion.div whileHover={{ y: -2, scale: 1.02 }} whileTap={{ scale: 0.97 }}>
                <Button
                  type="button"
                  size="lg"
                  className="w-full shadow-[0_10px_28px_rgba(0,113,227,0.3)] sm:w-auto"
                  onClick={() => setContactOpen(true)}
                >
                  {t.hero.ctaContact}
                </Button>
              </motion.div>
              <motion.div whileHover={{ y: -2, scale: 1.02 }} whileTap={{ scale: 0.97 }}>
                <Button
                  type="button"
                  variant="secondary"
                  size="lg"
                  className="w-full sm:w-auto"
                  onClick={handleViewProjects}
                >
                  {t.hero.ctaProjects}
                </Button>
              </motion.div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-2">
              {socials.map((social) => (
                <motion.a
                  key={social.id}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--surface-border)] bg-[var(--card-bg)] px-3 py-1.5 text-xs font-medium text-[var(--ink)] transition hover:bg-[var(--surface)]"
                  whileHover={{ y: -2, scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                >
                  {getSocialIcon()}
                  {social.label}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* ── RIGHT: profile panel ── */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            className="relative overflow-hidden border-t border-[var(--surface-border)] bg-gradient-to-b from-[var(--surface)] to-[var(--surface-end)] lg:w-[380px] lg:shrink-0 lg:border-l lg:border-t-0"
          >
            <div className="flex h-full flex-col justify-center gap-4 p-6 lg:p-8">

              {/* Profile card — avatar centered, vertical layout */}
              <div className="relative overflow-hidden rounded-2xl border border-[var(--apple-blue)]/20 bg-gradient-to-br from-[var(--apple-blue)]/12 via-white/92 to-white/72 p-5 shadow-[0_8px_28px_rgba(0,113,227,0.13)] dark:from-[#1a3a6e]/40 dark:via-black/60 dark:to-black/45">
                <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-[var(--apple-blue)]/12 blur-3xl" />
                <div className="relative flex flex-col items-center gap-3 text-center">
                  <div className="h-28 w-28 overflow-hidden rounded-2xl shadow-[0_8px_24px_rgba(0,113,227,0.22)] ring-2 ring-[var(--apple-blue)]/30">
                    <Image
                      src={`${BASE}/images/avatar.png`}
                      alt="Simone Stella"
                      width={224}
                      height={224}
                      className="h-full w-full object-cover"
                      priority
                    />
                  </div>
                  <div className="space-y-0.5">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--apple-blue)]">
                      {t.hero.profileLabel}
                    </p>
                    <p className="text-[15px] font-semibold leading-snug text-[var(--ink)]">
                      {t.hero.profileRole}
                    </p>
                    <p className="text-xs leading-relaxed text-[var(--ink-3)]">{t.hero.profileMotto}</p>
                  </div>
                </div>
              </div>

              {/* Stat cards */}
              <div className="grid grid-cols-2 gap-3">
                <div className="flex flex-col gap-1.5 rounded-xl border border-[var(--surface-border)] bg-[var(--card-bg)] px-4 py-4 shadow-sm">
                  <p className="text-[11px] font-medium uppercase tracking-wide text-[var(--muted)]">{t.hero.statsProjects}</p>
                  <p className="text-3xl font-bold tabular-nums tracking-tight text-[var(--ink)]">{projects.length}</p>
                </div>
                <div className="flex flex-col gap-1.5 rounded-xl border border-[var(--surface-border)] bg-[var(--card-bg)] px-4 py-4 shadow-sm">
                  <p className="text-[11px] font-medium uppercase tracking-wide text-[var(--muted)]">{t.hero.statsStack}</p>
                  <p className="text-sm font-semibold leading-snug text-[var(--ink)]">{t.hero.stackValue}</p>
                </div>
              </div>

              {/* Focus card */}
              <div className="rounded-xl border border-[var(--apple-blue)]/22 bg-gradient-to-br from-[var(--apple-blue)]/10 via-white/88 to-white/68 px-5 py-4 dark:from-[#1a3a6e]/30 dark:via-black/50 dark:to-black/40">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--apple-blue)]">
                  {t.hero.focusLabel}
                </p>
                <p className="mt-1.5 text-[13px] leading-relaxed text-[var(--ink)]">{t.hero.focusText}</p>
              </div>

            </div>
          </motion.div>

        </div>
      </div>

      <ContactModal
        open={contactOpen}
        onClose={() => setContactOpen(false)}
        labels={t.contact}
      />
    </section>
  );
}
