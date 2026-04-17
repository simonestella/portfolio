"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import { it } from "./translations/it";
import { en } from "./translations/en";
import type { Translations } from "./translations/it";
import type { Locale } from "@/lib/types";

const translations: Record<Locale, Translations> = { it, en };

type LocaleContextType = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Translations;
};

const LocaleContext = createContext<LocaleContextType>({
  locale: "it",
  setLocale: () => {},
  t: it
});

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("it");

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t: translations[locale] }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  return useContext(LocaleContext);
}
