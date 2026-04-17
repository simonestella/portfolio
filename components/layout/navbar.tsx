"use client";

import { useTheme } from "next-themes";
import { useLocale } from "@/i18n";
import { useEffect, useState } from "react";
import type { Locale } from "@/lib/types";

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const { locale, setLocale, t } = useLocale();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = theme === "dark";

  return (
    <nav className="sticky top-0 z-50 border-b border-[var(--surface-border)] bg-[var(--bg)]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-14 max-w-[72rem] items-center justify-between px-6">
        <span className="text-sm font-semibold tracking-tight text-[var(--ink)]">
          {t.nav.name}
        </span>

        <div className="flex items-center gap-2">
          {/* Language toggle — pill with IT | EN */}
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

          {/* Theme toggle */}
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
    </nav>
  );
}

function SunIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
