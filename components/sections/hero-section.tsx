"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useLocale } from "@/i18n";
import Image from "next/image";
import { projects } from "@/data/projects";

const socials = [
  { id: "github", label: "GitHub", href: "" },
  { id: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/in/work-simone-stella/" },
  { id: "instagram", label: "Instagram", href: "" }
] as const;

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } }
};

export function HeroSection() {
  const { t } = useLocale();
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 600], [0, 80]);

  const handleViewProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const getSocialIcon = (id: (typeof socials)[number]["id"]) => {
    if (id === "github") {
      return (
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M12 2C6.48 2 2 6.59 2 12.26C2 16.8 4.87 20.65 8.84 22.01C9.34 22.11 9.52 21.79 9.52 21.51C9.52 21.26 9.51 20.58 9.51 19.68C6.73 20.3 6.14 18.31 6.14 18.31C5.68 17.1 5.03 16.78 5.03 16.78C4.12 16.14 5.1 16.15 5.1 16.15C6.11 16.22 6.64 17.21 6.64 17.21C7.54 18.79 9 18.34 9.57 18.08C9.67 17.4 9.92 16.94 10.2 16.68C7.98 16.42 5.65 15.53 5.65 11.55C5.65 10.42 6.04 9.49 6.68 8.76C6.58 8.5 6.23 7.45 6.78 6.04C6.78 6.04 7.62 5.76 9.5 7.09C10.3 6.86 11.15 6.75 12 6.74C12.85 6.75 13.7 6.86 14.5 7.09C16.38 5.76 17.22 6.04 17.22 6.04C17.77 7.45 17.42 8.5 17.32 8.76C17.96 9.49 18.35 10.42 18.35 11.55C18.35 15.54 16.01 16.42 13.79 16.67C14.14 16.97 14.45 17.56 14.45 18.46C14.45 19.75 14.44 20.98 14.44 21.51C14.44 21.79 14.62 22.12 15.12 22.01C19.09 20.65 22 16.79 22 12.26C22 6.59 17.52 2 12 2Z" />
        </svg>
      );
    }
    if (id === "linkedin") {
      return (
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M6.94 8.5H3.56V20H6.94V8.5ZM5.25 3C4.17 3 3.31 3.88 3.31 4.97C3.31 6.05 4.17 6.94 5.25 6.94C6.33 6.94 7.19 6.05 7.19 4.97C7.19 3.88 6.33 3 5.25 3ZM20 13.38C20 10.18 18.29 8.25 15.46 8.25C14.1 8.25 13.2 9 12.84 9.53V8.5H9.59V20H12.97V14.31C12.97 12.81 13.25 11.36 15.11 11.36C16.95 11.36 16.98 13.08 16.98 14.4V20H20V13.38Z" />
        </svg>
      );
    }
    return (
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden>
        <rect x="4" y="4" width="16" height="16" rx="5" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="17.4" cy="6.6" r="1.2" fill="currentColor" />
      </svg>
    );
  };

  const words = t.hero.headline.split(" ");

  return (
    <section className="relative mb-20 pt-6 sm:mb-28 sm:pt-10">
      {/* Outer wrapper — border + shadow only, no backdrop-filter here */}
      <div className="overflow-hidden rounded-[1.4rem] border border-[var(--surface-border)] shadow-[0_18px_40px_rgba(17,17,21,0.08),0_2px_12px_rgba(17,17,21,0.03)]">
        <div className="flex flex-col lg:flex-row lg:items-stretch">

          {/* ── LEFT: glass text panel ── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-1 flex-col gap-6 bg-gradient-to-br from-[var(--surface)] to-[var(--surface-end)] p-6 backdrop-blur-[16px] sm:gap-8 sm:p-10 lg:p-12"
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
                  onClick={() => window.open("mailto:CONTACT_REDACTED", "_self")}
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
                  {getSocialIcon(social.id)}
                  {social.label}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* ── RIGHT: photo on desktop, glass panel on mobile ── */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            className="relative overflow-hidden border-t border-[var(--surface-border)] lg:w-[340px] lg:shrink-0 lg:border-t-0"
          >
            {/* Mobile: same glass background as left panel */}
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--surface)] to-[var(--surface-end)] backdrop-blur-[16px] lg:hidden" />

            {/* Desktop only: full-body parallax photo */}
            <motion.div
              style={{ y: bgY }}
              className="absolute -top-[8%] left-0 right-0 hidden h-[116%] lg:block"
            >
              <Image
                src="/images/intera-full.jpg"
                alt="Simone Stella"
                fill
                className="object-cover object-top saturate-[0.88]"
                priority
              />
              <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[var(--surface)] to-transparent" />
              <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-[var(--surface)]/80 to-transparent" />
              <div className="absolute inset-0 bg-[var(--apple-blue)]/6" />
            </motion.div>

            {/* Cards — stacked on mobile, floated at bottom on desktop */}
            <div className="relative z-10 flex flex-col gap-3 p-5 lg:h-full lg:justify-end">
              {/* Profile card — blue gradient accent */}
              <div className="relative overflow-hidden rounded-2xl border border-[var(--apple-blue)]/25 bg-gradient-to-br from-[var(--apple-blue)]/20 via-white/88 to-white/75 p-3 shadow-[0_8px_24px_rgba(0,113,227,0.18)] backdrop-blur-md dark:from-[#1a3a6e]/35 dark:via-black/55 dark:to-black/45">
                <div className="absolute -left-4 -top-4 h-16 w-16 rounded-full bg-[var(--apple-blue)]/20 blur-2xl" />
                <div className="relative flex items-center gap-3">
                  <div className="h-12 w-12 shrink-0 overflow-hidden rounded-xl ring-2 ring-[var(--apple-blue)]/30">
                    <Image
                      src="/images/profile.jpg"
                      alt="Foto profilo Simone Stella"
                      width={96}
                      height={96}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--apple-blue)]">
                      {t.hero.profileLabel}
                    </p>
                    <p className="text-sm font-semibold leading-snug text-[var(--ink)]">
                      {t.hero.profileRole}
                    </p>
                    <p className="mt-0.5 text-xs text-[var(--ink-3)]">{t.hero.profileMotto}</p>
                  </div>
                </div>
              </div>

              {/* Stat cards */}
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-white/50 bg-white/88 px-3 py-3 shadow-[0_4px_16px_rgba(0,0,0,0.10)] backdrop-blur-md dark:border-white/14 dark:bg-black/52">
                  <p className="text-[11px] font-medium text-[var(--muted)]">{t.hero.statsProjects}</p>
                  <p className="mt-1 text-2xl font-semibold tabular-nums tracking-tight text-[var(--ink)]">{projects.length}</p>
                </div>
                <div className="rounded-xl border border-white/50 bg-white/88 px-3 py-3 shadow-[0_4px_16px_rgba(0,0,0,0.10)] backdrop-blur-md dark:border-white/14 dark:bg-black/52">
                  <p className="text-[11px] font-medium text-[var(--muted)]">{t.hero.statsStack}</p>
                  <p className="mt-1 text-sm font-semibold leading-snug text-[var(--ink)]">{t.hero.stackValue}</p>
                </div>
              </div>

              {/* Focus card — blue gradient accent */}
              <div className="rounded-xl border border-[var(--apple-blue)]/30 bg-gradient-to-br from-[var(--apple-blue)]/18 via-white/85 to-white/72 px-4 py-3 shadow-[0_4px_16px_rgba(0,113,227,0.14)] backdrop-blur-md dark:from-[#1a3a6e]/35 dark:via-black/52 dark:to-black/42">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--apple-blue)]">
                  {t.hero.focusLabel}
                </p>
                <p className="mt-1 text-[13px] leading-relaxed text-[var(--ink)]">{t.hero.focusText}</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
