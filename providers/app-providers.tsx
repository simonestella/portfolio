"use client";

import { ThemeProvider } from "next-themes";
import { LocaleProvider } from "@/i18n";
import type { ReactNode } from "react";

export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" disableTransitionOnChange>
      <LocaleProvider>{children}</LocaleProvider>
    </ThemeProvider>
  );
}
