"use client";

import { useEffect } from "react";
import { ThemeProvider, useTheme } from "next-themes";
import { LocaleProvider } from "@/i18n";
import type { ReactNode } from "react";

function getThemeByTime(): "light" | "dark" {
  const h = new Date().getHours();
  return h >= 6 && h < 20 ? "light" : "dark";
}

function TimeBasedTheme() {
  const { setTheme } = useTheme();

  useEffect(() => {
    setTheme(getThemeByTime());

    const now = new Date();
    const h = now.getHours();
    const m = now.getMinutes();

    let minsUntilNext: number;
    if (h < 6) {
      minsUntilNext = (6 - h) * 60 - m;
    } else if (h < 20) {
      minsUntilNext = (20 - h) * 60 - m;
    } else {
      minsUntilNext = (30 - h) * 60 - m; // 30 = 24 + 6 → next 06:00
    }

    const id = setTimeout(() => setTheme(getThemeByTime()), minsUntilNext * 60_000);
    return () => clearTimeout(id);
  }, [setTheme]);

  return null;
}

export function AppProviders({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" disableTransitionOnChange>
      <TimeBasedTheme />
      <LocaleProvider>{children}</LocaleProvider>
    </ThemeProvider>
  );
}
