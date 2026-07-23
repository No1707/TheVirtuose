"use client";

import { createContext, useContext } from "react";
import type { Dictionary, Locale } from "./dictionaries";

interface I18nValue {
  dict: Dictionary;
  locale: Locale;
}

const I18nContext = createContext<I18nValue | null>(null);

export function I18nProvider({
  dict,
  locale,
  children,
}: I18nValue & { children: React.ReactNode }) {
  return (
    <I18nContext.Provider value={{ dict, locale }}>
      {children}
    </I18nContext.Provider>
  );
}

/** Copy + current locale for client components. */
export function useI18n(): I18nValue {
  const value = useContext(I18nContext);
  if (!value) {
    throw new Error("useI18n must be used inside <I18nProvider>");
  }
  return value;
}

/** Builds a locale-aware href: link("/work") → "/fr/work". */
export function useHref() {
  const { locale } = useI18n();
  return (path: string) => `/${locale}${path === "/" ? "" : path}`;
}
